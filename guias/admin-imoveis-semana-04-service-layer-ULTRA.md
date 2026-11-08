# 🏢 Admin Imóveis — Semana 4: Service Layer

**Tempo:** 30 minutos | **Dificuldade:** Fácil | **Pré-requisito:** Semana 3 ✅

---

## ⏱️ 5 min: CONCEITO

### Por que Service Layer?

**Antes (ruim):**
```
Controller faz TUDO:
✅ Recebe requisição
✅ Valida dados
✅ Calcula lógica
✅ Salva no banco
❌ Muito complexo
❌ Difícil de testar
```

**Depois (bom):**
```
Controller recebe → Service faz lógica → Repository salva

Controller: "Quero criar propriedade"
Service: "OK, vou validar, calcular e salvar"
Repository: "Feito! Propriedade salva"

✅ Mais limpo
✅ Fácil de testar
✅ Profissional
```

---

## 🔨 15 min: PASSO A PASSO

### **PASSO 1: Criar PropriedadeService**

**1.1** Clique DIREITO em `com/example`

**1.2** Selecione: **New → Class**

**1.3** Digite: **PropriedadeService**

**1.4** Copie este código:

```java
package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PropriedadeService {
    
    @Autowired
    private PropriedadeRepository repo;
    
    // Listar todas
    public List<Propriedade> listarTodas() {
        return repo.findAll();
    }
    
    // Buscar por ID
    public Optional<Propriedade> buscarPorId(Long id) {
        return repo.findById(id);
    }
    
    // Criar (com validação)
    public Propriedade criar(Propriedade prop) {
        // Validar
        if (prop.getEndereco() == null || prop.getEndereco().isEmpty()) {
            throw new IllegalArgumentException("Endereço é obrigatório!");
        }
        if (prop.getTipo() == null || prop.getTipo().isEmpty()) {
            throw new IllegalArgumentException("Tipo é obrigatório!");
        }
        if (prop.getPreco() == null || prop.getPreco() <= 0) {
            throw new IllegalArgumentException("Preço deve ser maior que zero!");
        }
        
        // Salvar
        return repo.save(prop);
    }
    
    // Atualizar (com validação)
    public Propriedade atualizar(Long id, Propriedade propAtualizada) {
        Optional<Propriedade> prop = repo.findById(id);
        
        if (prop.isEmpty()) {
            throw new RuntimeException("Propriedade não encontrada!");
        }
        
        Propriedade p = prop.get();
        
        // Atualizar apenas campos preenchidos
        if (propAtualizada.getEndereco() != null) {
            p.setEndereco(propAtualizada.getEndereco());
        }
        if (propAtualizada.getTipo() != null) {
            p.setTipo(propAtualizada.getTipo());
        }
        if (propAtualizada.getPreco() != null && propAtualizada.getPreco() > 0) {
            p.setPreco(propAtualizada.getPreco());
        }
        if (propAtualizada.getDescricao() != null) {
            p.setDescricao(propAtualizada.getDescricao());
        }
        
        return repo.save(p);
    }
    
    // Deletar
    public void deletar(Long id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException("Propriedade não encontrada!");
        }
        repo.deleteById(id);
    }
    
    // Validar preço (exemplo de lógica de negócio)
    public boolean validarPreco(Double preco) {
        return preco != null && preco > 50000;
    }
}
```

**1.5** Cole (Ctrl + V)

**1.6** Salve (Ctrl + S)

```
Pronto! Service tem:
✅ Validação de dados
✅ Lógica de negócio
✅ Tratamento de erros
```

---

### **PASSO 2: Atualizar Controller**

**2.1** Abra **ImoveisController.java**

**2.2** Selecione TODO (Ctrl + A)

**2.3** Substitua por:

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
    private PropriedadeService service;
    
    // Listar todas
    @GetMapping("/propriedades")
    public ResponseEntity<List<Propriedade>> listar() {
        List<Propriedade> propriedades = service.listarTodas();
        return ResponseEntity.ok(propriedades);
    }
    
    // Buscar por ID
    @GetMapping("/propriedades/{id}")
    public ResponseEntity<Propriedade> buscarPorId(@PathVariable Long id) {
        Optional<Propriedade> prop = service.buscarPorId(id);
        if (prop.isPresent()) {
            return ResponseEntity.ok(prop.get());
        }
        return ResponseEntity.notFound().build();
    }
    
    // Criar
    @PostMapping("/propriedades")
    public ResponseEntity<?> criar(@RequestBody Propriedade prop) {
        try {
            Propriedade criada = service.criar(prop);
            return ResponseEntity.status(HttpStatus.CREATED).body(criada);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    // Atualizar
    @PutMapping("/propriedades/{id}")
    public ResponseEntity<?> atualizar(
            @PathVariable Long id,
            @RequestBody Propriedade prop) {
        try {
            Propriedade atualizada = service.atualizar(id, prop);
            return ResponseEntity.ok(atualizada);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    // Deletar
    @DeleteMapping("/propriedades/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        try {
            service.deletar(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
```

**2.4** Salve (Ctrl + S)

```
Agora:
✅ Controller usa Service
✅ Service cuida da lógica
✅ Código mais limpo
```

---

## ✅ 10 min: TESTAR

### **PASSO 1: Rodar Servidor**

**1.1** Clique DIREITO em **AdminImoveisApplication.java**

**1.2** Selecione: **Run AdminImoveisApplication**

---

### **PASSO 2: Testar Validação - Criar SEM Preço**

**2.1** Terminal:

```bash
curl -X POST http://localhost:8080/api/propriedades \
  -H "Content-Type: application/json" \
  -d '{
    "endereco": "Rua C, 300",
    "tipo": "Casa"
  }'
```

```
Resposta (erro):
"Preço deve ser maior que zero!"
```

**2.2** ✅ Validação funciona!

---

### **PASSO 3: Criar COM Preço Válido**

**3.1** Terminal:

```bash
curl -X POST http://localhost:8080/api/propriedades \
  -H "Content-Type: application/json" \
  -d '{
    "endereco": "Rua C, 300",
    "tipo": "Casa",
    "preco": 700000,
    "descricao": "Casa nova"
  }'
```

```
Resposta (sucesso):
{ "id": 1, "endereco": "Rua C, 300", "preco": 700000, ... }
```

**3.2** ✅ Criou com sucesso!

---

### **PASSO 4: Buscar e Confirmar**

**4.1** Navegador:
```
http://localhost:8080/api/propriedades/1
```

```
Você vê:
{ "id": 1, "endereco": "Rua C, 300", "tipo": "Casa", 
  "preco": 700000, "descricao": "Casa nova" }
```

**4.2** ✅✅✅ TUDO FUNCIONA!

---

## 🚀 PRÓXIMO: ServiçosPro (React + TypeScript)

**Semana 5:** Frontend em React!

Você terá:
- ✅ Componentes React
- ✅ Estilização CSS
- ✅ Conectado com API

---

## 🎁 O QUE APRENDEU

✅ Service Layer  
✅ Separação de responsabilidades  
✅ Validação de dados  
✅ Tratamento de erros  
✅ Código profissional!

---

## 📋 CHECKLIST

- [ ] PropriedadeService criado
- [ ] Validações implementadas
- [ ] ImoveisController atualizado para usar Service
- [ ] Servidor rodando
- [ ] Testou validação (preço obrigatório)
- [ ] Criou propriedade com dados válidos
- [ ] Buscou por ID
- [ ] **SEMANA 4 COMPLETA! 🎉**

---

**PARABÉNS! SEMANA 4 COMPLETA! 🎉**

Admin Imóveis Backend PRONTO!

**Próximo: ServiçosPro com React! 🚀**
