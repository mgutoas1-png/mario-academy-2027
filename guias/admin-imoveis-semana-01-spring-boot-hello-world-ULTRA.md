# 🏢 Admin Imóveis — Semana 1: Spring Boot Hello World

**Tempo:** 30 minutos | **Dificuldade:** SUPER Fácil | **Pré-requisito:** Java 17 instalado

---

## ⏱️ 5 min: CONCEITO

### O que é Spring Boot?

**Analogia simples:**
- Flask = Restaurante digital em Python
- Spring Boot = Restaurante digital em Java (mais ROBUSTO)

```
House Cleaners (Python):       Admin Imóveis (Java):
Flask simples                  Spring Boot profissional
Pequenos projetos             Sistemas maiores
Desenvolvimento rápido        Performance + segurança
```

### O que você vai criar hoje

```
Um servidor REST que diz:
GET http://localhost:8080
Resposta: "Bem-vindo ao Admin Imóveis!"
```

---

## 🔨 15 min: PASSO A PASSO

### **PASSO 1: Criar Pasta do Projeto**

**1.1** Abra File Explorer

**1.2** Navegue até:
```
Documents\mario\projetos
```

**1.3** Clique DIREITO

**1.4** Selecione: **New → Folder**

**1.5** Digite: **admin-imoveis**

```
Você vai ter:
📁 Documents
  📁 mario
    📁 projetos
      📁 house-cleaners
      📁 admin-imoveis ← NOVO!
```

**1.6** ✅ Pasta criada!

---

### **PASSO 2: Abrir IntelliJ IDEA**

**2.1** Aperte **Windows**

**2.2** Digite: **intellij**

**2.3** Clique em **IntelliJ IDEA Community**

```
Espere carregar (pode levar 30 segundos)
```

**2.4** Uma janela aparece perguntando se quer criar um projeto novo

**2.5** Clique em **Create New Project**

```
┌──────────────────────┐
│ Create New Project   │
├──────────────────────┤
│ [New Project]        │
│ [Open Project]       │
│ [Import Project]     │
└──────────────────────┘
```

---

### **PASSO 3: Configurar Spring Boot Project**

**3.1** No painel esquerdo, selecione: **Spring Boot**

**3.2** À direita, selecione **Project SDK**: Java 17

```
Se não tiver Java 17:
1. Clique em "Download JDK"
2. Selecione "Java 17 (LTS)"
3. Aguarde download
```

**3.3** Em **Add Sample Code**, marque a checkbox

**3.4** Clique **Create**

```
IntelliJ vai perguntar o nome e localização
Diretório: Documents\mario\projetos\admin-imoveis
Nome: admin-imoveis
```

**3.5** Aguarde a criação (1-2 minutos)

```
Pronto! Você terá uma estrutura:

admin-imoveis/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/
│   │   │       └── AdminImoveisApplication.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
├── pom.xml
├── .gitignore
└── .idea/
```

**3.6** ✅ Projeto Spring Boot criado!

---

### **PASSO 4: Criar Controller**

**4.1** Clique DIREITO em:
```
src > main > java > com > example
```

**4.2** Selecione: **New → Class**

**4.3** Digite: **ImoveisController**

**4.4** Pressione ENTER

**4.5** Copie este código:

```java
package com.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ImoveisController {
    
    @GetMapping("/")
    public String home() {
        return "Bem-vindo ao Admin Imóveis! 🏢";
    }
    
    @GetMapping("/api/status")
    public String status() {
        return "Servidor rodando! ✅";
    }
}
```

**4.6** Cole no arquivo (Ctrl + V)

**4.7** Salve (Ctrl + S)

```
Pronto! Você tem um controller REST com:
├── GET / → Bem-vindo
└── GET /api/status → Status
```

---

## ✅ 10 min: TESTAR

### **PASSO 1: Executar Aplicação**

**1.1** Procure pelo arquivo:
```
AdminImoveisApplication.java
```

**1.2** Clique DIREITO nele

**1.3** Selecione: **Run AdminImoveisApplication**

```
Na parte de baixo vai aparecer:
Downloading dependencies...
Building...
Starting...
Tomcat started on port(s): 8080
```

**1.2** ✅ Servidor rodando!

---

### **PASSO 2: Acessar no Navegador**

**2.1** Abra o navegador

**2.2** Digite: **http://localhost:8080**

```
Você vai ver:
"Bem-vindo ao Admin Imóveis! 🏢"
```

**2.3** ✅ Funcionou!

---

### **PASSO 3: Testar Rota de Status**

**3.1** Na barra de endereço, digite:
```
http://localhost:8080/api/status
```

**3.2** Pressione ENTER

```
Você vai ver:
"Servidor rodando! ✅"
```

**3.3** ✅✅✅ FUNCIONOU TUDO!

---

## 🚀 PRÓXIMA SEMANA

**Semana 2:** Vamos criar **Banco de Dados com JPA**!

Você terá:
- ✅ Entidades (Propriedades, Proprietários)
- ✅ Banco de dados integrado
- ✅ CRUD completo

---

## 🎁 O QUE APRENDEU

✅ O que é Spring Boot  
✅ Como criar um projeto Spring  
✅ Como criar um Controller REST  
✅ Como criar rotas HTTP  
✅ Tudo em Java profissional!

---

## 📋 CHECKLIST

- [ ] Pasta admin-imoveis criada
- [ ] IntelliJ IDEA aberto
- [ ] Projeto Spring Boot criado
- [ ] Controller ImoveisController criado
- [ ] Rota GET / implementada
- [ ] Rota GET /api/status implementada
- [ ] Servidor rodando (Spring Boot)
- [ ] Navegador acessando http://localhost:8080
- [ ] Página mostrando "Bem-vindo ao Admin Imóveis!"
- [ ] Teste de status funcionando
- [ ] **SEMANA 1 COMPLETA! 🎉**

---

## 🆘 SE NÃO FUNCIONAR

### Erro: "Java 17 not installed"

**Solução:**
1. Clique em "Download JDK" no IntelliJ
2. Selecione "Java 17 (LTS)"
3. Aguarde download
4. Configure e recrie o projeto

---

### Porta 8080 já está em uso

**Significa:** Outro programa usa a mesma porta

**Solução:**
1. No arquivo: `src/main/resources/application.properties`
2. Adicione:
```
server.port=8081
```
3. Acesse: `http://localhost:8081`

---

### Aplicação não inicia

**Significa:** Dependências não baixadas ou Java incorreto

**Solução:**
1. Em pom.xml, clique direito
2. Selecione: "Maven → Reload"
3. Aguarde download de dependências
4. Tente novamente

---

**PARABÉNS! SEMANA 1 COMPLETA! 🎉**

Você criou seu **PRIMEIRO servidor Spring Boot!**

**Próxima semana: Banco de Dados! 🚀**
