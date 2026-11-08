# 🏢 Admin Imóveis — Semana 1: Spring Boot Hello World

**Tempo Total:** 30 minutos  
**Dificuldade:** Super Fácil  
**Pré-requisito:** Java 17 + Maven instalados  
**IDE:** IntelliJ IDEA (Community grátis)

---

## ⏱️ 5 min: Conceito

### O que é Spring Boot?

**Analogia simples:**
- Se Python + Flask = "Site básico"
- Então Java + Spring Boot = "Sistema profissional"

Spring Boot é um framework que facilita criar APIs em Java.

```
Você digita: localhost:8080
   ↓
Spring Boot recebe a requisição
   ↓
Você responde com dados
   ↓
Navegador mostra resultado
```

### O que vamos criar

```
admin-imoveis/
├── pom.xml (Maven - gerencia dependências)
├── src/main/java/com/imoveis/
│   └── App.java (Spring Boot - Hello World)
└── src/main/resources/
    └── application.properties
```

---

## 🔨 15 min: Passo a Passo

### Passo 1: Criar Arquivo App.java

No IntelliJ, clique direito em:
```
src → main → java → com → imoveis
```

**New → Java Class**

Digite: `App` → **OK**

### Passo 2: Copiar Código

**Cole ISTO em `App.java`:**

```java
// 🏢 Admin Imóveis — Spring Boot Hello World
// Semana 1: Primeiro servidor web

package com.imoveis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class App {
    
    // Método principal - inicia o aplicativo
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
        System.out.println("✅ Admin Imóveis iniciado!");
    }
    
    // Quando acessa http://localhost:8080
    @GetMapping("/")
    public String home() {
        return "🏢 Bem-vindo ao Admin Imóveis!\n" +
               "Sistema de gestão de condomínios\n\n" +
               "Rotas:\n" +
               "📋 /propriedades - Ver propriedades\n" +
               "👥 /inquilinos - Ver inquilinos\n" +
               "💰 /financeiro - Ver financeiro";
    }
    
    // Rota de exemplo
    @GetMapping("/propriedades")
    public String properties() {
        return "📋 Propriedades:\n" +
               "1. Apartamento 101 - R$ 1.200/mês\n" +
               "2. Apartamento 102 - R$ 1.300/mês\n" +
               "3. Apartamento 103 - R$ 1.100/mês";
    }
}
```

**Salve:** Ctrl + S

### Passo 3: Maven Detecta Dependências

IntelliJ vai pedir para baixar dependências Spring Boot (automático).

Clique: **"Load Maven Changes"**

Aguarde ~30 segundos para baixar.

---

## ✅ 10 min: Rodar e Testar

### Passo 1: Rodar o App

Na classe `App.java`:

1. Clique no botão ▶️ verde (canto superior direito)
2. Ou pressione: **Shift + F10**

### Passo 2: Veja a Saída

Na parte inferior (Run tab), você verá:

```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_|\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 
 :: Spring Boot 3.x ::
 
 ✅ Admin Imóveis iniciado!
 Started in 2.5 seconds (JVM running in 2.1s)
 
 [main] o.a.c.c.C.[Catalina].c.[localhost]
 Tomcat started on port(s): 8080
```

**Perfeito!** Spring Boot rodando na porta **8080**

### Passo 3: Abrir no Navegador

1. **Abra navegador** (Chrome, Edge, Firefox)
2. **Endereço:** http://localhost:8080
3. **ENTER**

Você deve ver:

```
🏢 Bem-vindo ao Admin Imóveis!
Sistema de gestão de condomínios

Rotas:
📋 /propriedades - Ver propriedades
👥 /inquilinos - Ver inquilinos
💰 /financeiro - Ver financeiro
```

### Passo 4: Testar Outras Rotas

No navegador, tente:

1. **http://localhost:8080/propriedades**

Você verá:

```
📋 Propriedades:
1. Apartamento 101 - R$ 1.200/mês
2. Apartamento 102 - R$ 1.300/mês
3. Apartamento 103 - R$ 1.100/mês
```

### ✅ Se tudo funcionou:

```
✅ Spring Boot rodando
✅ Rotas respondendo
✅ Servidor escutando na porta 8080
✅ Você criou um servidor web profissional!
```

---

## 🚀 Próxima Semana

**Semana 2:** Vamos criar um **Banco de Dados com JPA**!

Você terá um app que:
- ✅ Armazena propriedades no banco
- ✅ Retorna JSON em vez de texto
- ✅ Sistema mais realista

---

## 🎁 O Que Você Aprendeu

✅ O que é Spring Boot  
✅ Como criar um endpoint REST  
✅ Como @GetMapping funciona  
✅ Como rodar servidor Java  
✅ Como testar no navegador  
✅ Tudo sem conhecimento técnico!  

---

## 📋 Checklist

- [ ] Arquivo `App.java` criado
- [ ] Código copiado e colado
- [ ] Dependências Maven carregadas
- [ ] Clicou em Shift + F10 para rodar
- [ ] Viu mensagem "Started" no console
- [ ] Abriu http://localhost:8080
- [ ] Viu "Bem-vindo ao Admin Imóveis"
- [ ] Testou http://localhost:8080/propriedades

---

## 🆘 Se Não Funcionar

### Erro: "Cannot resolve symbol 'SpringApplication'"

**Solução:**
1. **File → Project Structure → SDKs**
2. Adicione Java 17 (se não tiver)
3. Reinicie IntelliJ

### Porta 8080 já em uso

**Solução:** Em `src/main/resources/application.properties`:

```properties
server.port=8081
```

### IntelliJ pedindo para baixar Spring

**Solução:**
1. Clique: "Load Maven Changes"
2. Aguarde ~1 minuto
3. Tente novamente

---

**Parabéns! Semana 1 Completa! 🎉**

Você criou um servidor web em Java!

---

**Próxima semana:** Banco de dados com JPA! 🚀
