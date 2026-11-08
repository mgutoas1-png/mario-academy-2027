# 🏢 Admin Imóveis — Semana 2: Banco de Dados com JPA

**Tempo Total:** 30 minutos | **IDE:** IntelliJ | **Pré-requisito:** Semana 1 ✅

---

## ⏱️ 5 min: Conceito

**Até agora:** API Spring Boot que retorna texto

**Agora:** Vamos conectar um **banco de dados H2** (grátis, embutido)

```
Você: http://localhost:8080/propriedades
   ↓
Spring Boot busca no banco
   ↓
Retorna JSON com dados reais
```

---

## 🔨 15 min: Passo a Passo

### Passo 1: Criar Entity (Tabela)

Em `src/main/java/com/imoveis`, novo arquivo:

**New → Java Class → `Property`**

```java
// 🏢 Tabela de Propriedades
package com.imoveis;

import jakarta.persistence.*;

@Entity
@Table(name = "properties")
public class Property {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String address;
    private Double price;
    private String status; // "disponível" ou "alugada"
    
    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
```

**Salve: Ctrl + S**

### Passo 2: Criar Repository (Interface)

**New → Java Class → `PropertyRepository`**

```java
package com.imoveis;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
}
```

### Passo 3: Atualizar App.java

**Substitua `App.java` por:**

```java
package com.imoveis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@SpringBootApplication
@RestController
@RequestMapping("/api")
public class App {
    
    @Autowired
    private PropertyRepository repository;
    
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
    
    @PostConstruct
    public void init() {
        // Adicionar dados de teste
        Property p1 = new Property();
        p1.setName("Apartamento 101");
        p1.setAddress("Rua A, 123");
        p1.setPrice(1200.0);
        p1.setStatus("disponível");
        repository.save(p1);
        
        Property p2 = new Property();
        p2.setName("Apartamento 102");
        p2.setAddress("Rua A, 125");
        p2.setPrice(1300.0);
        p2.setStatus("alugada");
        repository.save(p2);
    }
    
    @GetMapping("/propriedades")
    public List<Property> getAll() {
        return repository.findAll();
    }
    
    @GetMapping("/propriedades/{id}")
    public Property getById(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }
    
    @PostMapping("/propriedades")
    public Property create(@RequestBody Property property) {
        return repository.save(property);
    }
}
```

Adicione import:
```java
import jakarta.annotation.PostConstruct;
```

---

## ✅ 10 min: Testar

### Rodar

**Shift + F10**

### Testar

1. **http://localhost:8080/api/propriedades**

Você verá JSON:

```json
[
  {
    "id": 1,
    "name": "Apartamento 101",
    "address": "Rua A, 123",
    "price": 1200,
    "status": "disponível"
  },
  {
    "id": 2,
    "name": "Apartamento 102",
    "address": "Rua A, 125",
    "price": 1300,
    "status": "alugada"
  }
]
```

---

## 🚀 Próxima Semana

**Semana 3:** REST API Completa (GET, POST, DELETE)

---

**Parabéns! Semana 2 Completa! 🎉**
