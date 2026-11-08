# 🏢 Admin Imóveis — Semana 3: REST API Completa

**Tempo Total:** 30 minutos | **Pré-requisito:** Semana 2 ✅

---

## ⏱️ 5 min: Conceito

**REST API = 4 operações**
- **GET** = Buscar dados
- **POST** = Criar novo
- **PUT** = Atualizar
- **DELETE** = Deletar

---

## 🔨 15 min: Atualizar App.java

```java
package com.imoveis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import jakarta.annotation.PostConstruct;
import java.util.List;

@SpringBootApplication
@RestController
@RequestMapping("/api/propriedades")
public class App {
    
    @Autowired
    private PropertyRepository repository;
    
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
    
    @PostConstruct
    public void init() {
        Property p1 = new Property();
        p1.setName("Apartamento 101");
        p1.setAddress("Rua A, 123");
        p1.setPrice(1200.0);
        p1.setStatus("disponível");
        repository.save(p1);
    }
    
    // GET - Buscar todos
    @GetMapping
    public List<Property> getAll() {
        return repository.findAll();
    }
    
    // GET - Buscar um
    @GetMapping("/{id}")
    public Property getById(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }
    
    // POST - Criar
    @PostMapping
    public Property create(@RequestBody Property property) {
        return repository.save(property);
    }
    
    // PUT - Atualizar
    @PutMapping("/{id}")
    public Property update(@PathVariable Long id, @RequestBody Property property) {
        property.setId(id);
        return repository.save(property);
    }
    
    // DELETE - Deletar
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        repository.deleteById(id);
        return "Deletado!";
    }
}
```

---

## ✅ 10 min: Testar

### Rodar: Shift + F10

### Testar com REST Client (VSCode Plugin)

Crie arquivo `test.http`:

```http
### GET Todos
GET http://localhost:8080/api/propriedades

### GET Um
GET http://localhost:8080/api/propriedades/1

### POST Novo
POST http://localhost:8080/api/propriedades
Content-Type: application/json

{
  "name": "Apartamento 103",
  "address": "Rua B, 456",
  "price": 1400,
  "status": "disponível"
}

### DELETE
DELETE http://localhost:8080/api/propriedades/2
```

Clique em "Send" para testar cada rota!

---

**Parabéns! Semana 3 Completa! 🎉**
