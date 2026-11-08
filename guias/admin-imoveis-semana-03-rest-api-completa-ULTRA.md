# 🏢 Admin Imóveis — Semana 3: REST API Completa (CRUD)

**Tempo:** 30 minutos | **Dificuldade:** Fácil | **Pré-requisito:** Semana 2 ✅

---

## ⏱️ 5 min: CONCEITO

### CRUD Completo

**O que é CRUD?**
```
C - Create (POST) - Criar
R - Read (GET) - Ler
U - Update (PUT) - Atualizar
D - Delete (DELETE) - Deletar

Antes (Semana 2):
✅ Create (POST)
✅ Read (GET tudo)
❌ Read (GET por ID)
❌ Update (PUT)
❌ Delete (DELETE)

Agora (Semana 3):
✅ Create (POST)
✅ Read (GET tudo)
✅ Read (GET por ID)
✅ Update (PUT)
✅ Delete (DELETE)
```

---

## 🔨 15 min: PASSO A PASSO

### **PASSO 1: Atualizar Controller com Todos os Métodos**

**1.1** Abra **ImoveisController.java**

**1.2** Selecione TODO (Ctrl + A)

**1.3** Substitua por este código COMPLETO:

```java
package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ImoveisController {
    
    @Autowired
    private PropriedadeRepository repo;
    
    // READ - Listar todas
    @GetMapping("/propriedades")
    public List<Propriedade> listar() {
        return repo.findAll();
    }
    
    // READ - Buscar por ID
    @GetMapping("/propriedades/{id}")
    public ResponseEntity<Propriedade> buscarPorId(@PathVariable Long id) {
        Optional<Propriedade> prop = repo.findById(id);
        if (prop.isPresent()) {
            return ResponseEntity.ok(prop.get());
        }
        return ResponseEntity.notFound().build();
    }
    
    // CREATE - Criar nova
    @PostMapping("/propriedades")
    public ResponseEntity<Propriedade> criar(@RequestBody Propriedade prop) {
        Propriedade salva = repo.save(prop);
        return ResponseEntity.status(HttpStatus.CREATED).body(salva);
    }
    
    // UPDATE - Atualizar existente
    @PutMapping("/propriedades/{id}")
    public ResponseEntity<Propriedade> atualizar(
            @PathVariable Long id,
            @RequestBody Propriedade propAtualizada) {
        
        Optional<Propriedade> prop = repo.findById(id);
        if (prop.isPresent()) {
            Propriedade p = prop.get();
            if (propAtualizada.getEndereco() != null) 
                p.setEndereco(propAtualizada.getEndereco());
            if (propAtualizada.getTipo() != null) 
                p.setTipo(propAtualizada.getTipo());
            if (propAtualizada.getPreco() != null) 
                p.setPreco(propAtualizada.getPreco());
            if (propAtualizada.getDescricao() != null) 
                p.setDescricao(propAtualizada.getDescricao());
            
            Propriedade atualizada = repo.save(p);
            return ResponseEntity.ok(atualizada);
        }
        return ResponseEntity.notFound().build();
    }
    
    // DELETE - Deletar
    @DeleteMapping("/propriedades/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
```

**1.4** Salve (Ctrl + S)

```
Agora você tem:
✅ GET /api/propriedades (todas)
✅ GET /api/propriedades/:id (por ID)
✅ POST /api/propriedades (criar)
✅ PUT /api/propriedades/:id (atualizar)
✅ DELETE /api/propriedades/:id (deletar)
```

---

## ✅ 10 min: TESTAR

### **PASSO 1: Rodar Servidor**

**1.1** Clique DIREITO em **AdminImoveisApplication.java**

**1.2** Selecione: **Run AdminImoveisApplication**

---

### **PASSO 2: Criar 2 Propriedades**

**2.1** Terminal/Postman:

```bash
# Propriedade 1
curl -X POST http://localhost:8080/api/propriedades \
  -H "Content-Type: application/json" \
  -d '{
    "endereco": "Rua A, 100",
    "tipo": "Casa",
    "preco": 600000,
    "descricao": "Casa 3 quartos"
  }'

# Propriedade 2
curl -X POST http://localhost:8080/api/propriedades \
  -H "Content-Type: application/json" \
  -d '{
    "endereco": "Rua B, 200",
    "tipo": "Apartamento",
    "preco": 400000,
    "descricao": "Apto 2 quartos"
  }'
```

```
Respostas:
{ "id": 1, "endereco": "Rua A, 100", ... }
{ "id": 2, "endereco": "Rua B, 200", ... }
```

---

### **PASSO 3: Listar Todas**

**3.1** Navegador:
```
http://localhost:8080/api/propriedades
```

```
Você vê:
[
  { "id": 1, "endereco": "Rua A, 100", ... },
  { "id": 2, "endereco": "Rua B, 200", ... }
]
```

**3.2** ✅ Funciona!

---

### **PASSO 4: Buscar por ID**

**4.1** Navegador:
```
http://localhost:8080/api/propriedades/1
```

```
Você vê:
{ "id": 1, "endereco": "Rua A, 100", "tipo": "Casa", "preco": 600000, ... }
```

**4.2** ✅ Funciona!

---

### **PASSO 5: Atualizar Propriedade**

**5.1** Terminal/Postman:

```bash
curl -X PUT http://localhost:8080/api/propriedades/1 \
  -H "Content-Type: application/json" \
  -d '{
    "preco": 550000,
    "descricao": "Casa 3 quartos - PROMOÇÃO!"
  }'
```

```
Resposta:
{ "id": 1, "endereco": "Rua A, 100", "preco": 550000, 
  "descricao": "Casa 3 quartos - PROMOÇÃO!", ... }
```

**5.2** ✅ Atualizado!

---

### **PASSO 6: Deletar Propriedade**

**6.1** Terminal/Postman:

```bash
curl -X DELETE http://localhost:8080/api/propriedades/2
```

```
Resposta: 204 (sem conteúdo = sucesso)
```

**6.2** ✅ Deletado!

---

### **PASSO 7: Confirmar Deleção**

**7.1** Navegador:
```
http://localhost:8080/api/propriedades
```

```
Você vê (apenas 1 propriedade):
[
  { "id": 1, "endereco": "Rua A, 100", "preco": 550000, ... }
]
```

**7.2** ✅✅✅ TUDO FUNCIONA!

---

## 🚀 PRÓXIMA SEMANA

**Semana 4:** Vamos criar uma **Service Layer**!

Você terá:
- ✅ Lógica de negócio separada
- ✅ Código mais organizado
- ✅ Fácil de testar

---

## 🎁 O QUE APRENDEU

✅ CRUD completo (Create, Read, Update, Delete)  
✅ Rotas REST profissionais  
✅ Tratamento de erros (404, etc)  
✅ Status HTTP corretos  

---

## 📋 CHECKLIST

- [ ] ImoveisController atualizado com 5 métodos
- [ ] Servidor rodando
- [ ] POST - Criou 2 propriedades
- [ ] GET /api/propriedades - Listou todas
- [ ] GET /api/propriedades/1 - Buscou por ID
- [ ] PUT /api/propriedades/1 - Atualizou
- [ ] DELETE /api/propriedades/2 - Deletou
- [ ] Listagem mostra apenas 1 propriedade
- [ ] **SEMANA 3 COMPLETA! 🎉**

---

**PARABÉNS! SEMANA 3 COMPLETA! 🎉**

Você criou uma **REST API Completa!**

**Próxima semana: Service Layer! 🚀**
