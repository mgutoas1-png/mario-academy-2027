# 🏢 Admin Imóveis — Semana 2: JPA + Banco de Dados

**Tempo:** 30 minutos | **Dificuldade:** Fácil | **Pré-requisito:** Semana 1 ✅

---

## ⏱️ 5 min: CONCEITO

### O que é JPA?

**Analogia:**
- Python: Você escreve SQL manualmente
- Java + JPA: Java cuida do SQL pra você

```
Antes:
sql = "SELECT * FROM propriedades"
cursor.execute(sql)

Agora (JPA):
List<Propriedade> props = repo.findAll()
```

### O que você vai criar

```
Entidades Java que viram tabelas no BD:
├── Propriedade (endereço, tipo, preço)
├── Proprietario (nome, email, telefone)
└── Banco H2 (integrado, sem setup)
```

---

## 🔨 15 min: PASSO A PASSO

### **PASSO 1: Adicionar Dependências**

**1.1** Abra **pom.xml**

**1.2** Procure por:
```xml
<dependencies>
```

**1.3** Dentro de `<dependencies>`, adicione:

```xml
<!-- JPA + Hibernate -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<!-- Banco H2 (em memória, fácil) -->
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>
```

**1.4** Salve (Ctrl + S)

```
IntelliJ vai baixar automaticamente
(aguarde a barra de download terminar)
```

---

### **PASSO 2: Criar Entidade Propriedade**

**2.1** Clique DIREITO em `com/example`

**2.2** Selecione: **New → Class**

**2.3** Digite: **Propriedade**

**2.4** Copie este código:

```java
package com.example;

import jakarta.persistence.*;

@Entity
@Table(name = "propriedades")
public class Propriedade {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String endereco;
    
    @Column(nullable = false)
    private String tipo; // Casa, Apartamento, etc
    
    @Column(nullable = false)
    private Double preco;
    
    private String descricao;
    
    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getEndereco() { return endereco; }
    public void setEndereco(String endereco) { this.endereco = endereco; }
    
    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }
    
    public Double getPreco() { return preco; }
    public void setPreco(Double preco) { this.preco = preco; }
    
    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
}
```

**2.5** Cole no arquivo (Ctrl + V)

**2.6** Salve (Ctrl + S)

---

### **PASSO 3: Criar Repositório**

**3.1** Clique DIREITO em `com/example`

**3.2** Selecione: **New → Interface**

**3.3** Digite: **PropriedadeRepository**

**3.4** Copie este código:

```java
package com.example;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropriedadeRepository extends JpaRepository<Propriedade, Long> {
}
```

**3.5** Cole (Ctrl + V)

**3.6** Salve (Ctrl + S)

```
Pronto! Repository cuida de:
✅ Salvar propriedades
✅ Buscar propriedades
✅ Deletar propriedades
Tudo automático!
```

---

### **PASSO 4: Atualizar Controller**

**4.1** Abra **ImoveisController.java**

**4.2** Substitua TODO o código por:

```java
package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ImoveisController {
    
    @Autowired
    private PropriedadeRepository repo;
    
    @GetMapping("/")
    public String home() {
        return "Bem-vindo ao Admin Imóveis! 🏢";
    }
    
    @GetMapping("/propriedades")
    public List<Propriedade> listar() {
        return repo.findAll();
    }
    
    @PostMapping("/propriedades")
    public Propriedade criar(@RequestBody Propriedade prop) {
        return repo.save(prop);
    }
}
```

**4.3** Salve (Ctrl + S)

---

### **PASSO 5: Configurar Banco de Dados**

**5.1** Abra:
```
src/main/resources/application.properties
```

**5.2** Adicione estas linhas:

```properties
# Banco H2
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# Console H2
spring.h2.console.enabled=true

# JPA/Hibernate
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=create-drop
```

**5.3** Salve (Ctrl + S)

---

## ✅ 10 min: TESTAR

### **PASSO 1: Rodar Servidor**

**1.1** Clique DIREITO em **AdminImoveisApplication.java**

**1.2** Selecione: **Run AdminImoveisApplication**

```
Esperaré inicializar
(vai levar 10-15 segundos por ser primeira vez)
```

---

### **PASSO 2: Testar GET de Propriedades**

**2.1** Abra navegador

**2.2** Digite:
```
http://localhost:8080/api/propriedades
```

```
Você vai ver:
[]
(lista vazia - nenhuma propriedade ainda)
```

**2.3** ✅ Funciona!

---

### **PASSO 3: Adicionar Propriedade via POST**

**3.1** Abra **Postman** (ou curl no terminal)

Se não tiver Postman, use o terminal:

```bash
curl -X POST http://localhost:8080/api/propriedades \
  -H "Content-Type: application/json" \
  -d '{
    "endereco": "Rua das Flores, 123",
    "tipo": "Apartamento",
    "preco": 500000,
    "descricao": "Apto 3 quartos em Campinas"
  }'
```

```
Resposta:
{
  "id": 1,
  "endereco": "Rua das Flores, 123",
  "tipo": "Apartamento",
  "preco": 500000,
  "descricao": "Apto 3 quartos em Campinas"
}
```

**3.2** ✅ Propriedade criada!

---

### **PASSO 4: Listar Propriedades Novamente**

**4.1** No navegador, digite:
```
http://localhost:8080/api/propriedades
```

```
Você vai ver:
[
  {
    "id": 1,
    "endereco": "Rua das Flores, 123",
    "tipo": "Apartamento",
    "preco": 500000,
    "descricao": "Apto 3 quartos em Campinas"
  }
]
```

**4.2** ✅✅✅ FUNCIONOU!

---

## 🚀 PRÓXIMA SEMANA

**Semana 3:** Vamos criar uma **REST API Completa**!

Você terá:
- ✅ Atualizar (PUT)
- ✅ Deletar (DELETE)
- ✅ Buscar por ID (GET/:id)

---

## 🎁 O QUE APRENDEU

✅ O que é JPA  
✅ Como criar Entidades  
✅ Como criar Repositórios  
✅ Como salvar dados no BD  
✅ REST API básica funcionando!

---

## 📋 CHECKLIST

- [ ] Dependências adicionadas ao pom.xml
- [ ] Entidade Propriedade criada
- [ ] RepositórioPropriedadeRepository criado
- [ ] Controller atualizado
- [ ] application.properties configurado
- [ ] Servidor rodando
- [ ] GET /api/propriedades retorna lista vazia
- [ ] POST /api/propriedades cria propriedade
- [ ] GET /api/propriedades mostra propriedade criada
- [ ] **SEMANA 2 COMPLETA! 🎉**

---

## 🆘 SE NÃO FUNCIONAR

### Erro: "Can't find symbol Propriedade"

**Solução:**
1. Clique em **pom.xml**
2. Clique direito: "Maven → Reload"
3. Aguarde download

---

### Porta 8080 já está em uso

**Solução:** Adicione em `application.properties`:
```properties
server.port=8081
```

---

**PARABÉNS! SEMANA 2 COMPLETA! 🎉**

Você criou **Banco de Dados com JPA!**

**Próxima semana: REST API Completa! 🚀**
