# 🏢 Admin Imóveis — Semana 4: Service Layer (Camada de Negócio)

**Tempo Total:** 30 minutos | **Pré-requisito:** Semana 3 ✅

---

## ⏱️ 5 min: Conceito

**Arquitetura profissional:**
- **Controller** = Recebe requisições
- **Service** = Lógica de negócio ← NOVO!
- **Repository** = Banco de dados

---

## 🔨 15 min: Criar Service

**New → Java Class → `PropertyService`**

```java
package com.imoveis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PropertyService {
    
    @Autowired
    private PropertyRepository repository;
    
    // Listar todas disponíveis
    public List<Property> getAvailable() {
        return repository.findAll()
            .stream()
            .filter(p -> "disponível".equals(p.getStatus()))
            .collect(Collectors.toList());
    }
    
    // Calcular valor total de aluguel
    public Double getTotalRent() {
        return repository.findAll()
            .stream()
            .filter(p -> "alugada".equals(p.getStatus()))
            .mapToDouble(Property::getPrice)
            .sum();
    }
    
    // Criar com validação
    public Property create(Property property) {
        if (property.getName() == null || property.getName().isEmpty()) {
            throw new IllegalArgumentException("Nome obrigatório!");
        }
        if (property.getPrice() <= 0) {
            throw new IllegalArgumentException("Preço deve ser > 0!");
        }
        return repository.save(property);
    }
}
```

### Atualizar App.java

```java
@RestController
@RequestMapping("/api/propriedades")
public class App {
    
    @Autowired
    private PropertyService service;
    
    // ... código anterior ...
    
    @GetMapping("/disponiveis")
    public List<Property> getAvailable() {
        return service.getAvailable();
    }
    
    @GetMapping("/total-aluguel")
    public Double getTotalRent() {
        return service.getTotalRent();
    }
}
```

---

## ✅ 10 min: Testar

- **http://localhost:8080/api/propriedades/disponiveis** → Apenas disponíveis
- **http://localhost:8080/api/propriedades/total-aluguel** → Total de aluguel

---

**Parabéns! Semana 4 Completa! 🎉**

**Você tem uma API profissional!** ✅
