# 🧹 House Cleaners — Semana 4: Formulário para Adicionar Clientes

**Tempo:** 30 minutos | **Dificuldade:** Fácil | **Pré-requisito:** Semanas 1-3 ✅

---

## ⏱️ 5 min: CONCEITO

### Criando um Formulário Web

**Antes (Semana 3):**
```
Você vê os dados na página
Mas não pode adicionar nada

Página:
"João Silva"
"Maria Santos"
(Só para ler)
```

**Agora (Semana 4):**
```
Você CRIA dados no formulário

Formulário:
Nome: [_______________]
Email: [_______________]
Telefone: [_______________]
[Adicionar Cliente]

Clica "Adicionar" → Aparece na lista!
```

### O que você vai criar

```
Um formulário que:
1. Pega dados do usuário
2. Salva no banco
3. Mostra na página
4. Tudo automático!
```

---

## 🔨 15 min: PASSO A PASSO

### **PASSO 1: Criar Template do Formulário**

**1.1** No PyCharm, clique DIREITO em **templates**

**1.2** Selecione: **New → HTML File**

**1.3** Digite: **formulario.html**

**1.4** Pressione ENTER

```
Pasta templates agora tem:
├── clientes.html
├── adicionar.html
├── index.html
├── formulario.html ← NOVO!
```

**1.5** Copie este código:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Adicionar Cliente</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            padding: 20px;
        }
        .container {
            max-width: 500px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
        }
        .form-group {
            margin: 20px 0;
        }
        label {
            display: block;
            margin-bottom: 5px;
            color: #333;
            font-weight: bold;
        }
        input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
            box-sizing: border-box;
        }
        input:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0,123,255,0.3);
        }
        button {
            width: 100%;
            padding: 12px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
        }
        button:hover {
            background-color: #0056b3;
        }
        .link {
            text-align: center;
            margin-top: 20px;
        }
        .link a {
            color: #007bff;
            text-decoration: none;
        }
        .link a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🧹 Adicionar Cliente</h1>
        
        <form method="POST" action="/adicionar">
            <div class="form-group">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required placeholder="Digite o nome do cliente">
            </div>
            
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required placeholder="Digite o email">
            </div>
            
            <div class="form-group">
                <label for="telefone">Telefone:</label>
                <input type="text" id="telefone" name="telefone" placeholder="(11) 99999-9999">
            </div>
            
            <button type="submit">✅ Adicionar Cliente</button>
        </form>
        
        <div class="link">
            <a href="/">← Voltar para clientes</a>
        </div>
    </div>
</body>
</html>
```

**1.6** Cole no arquivo (Ctrl + V)

**1.7** Salve (Ctrl + S)

---

### **PASSO 2: Atualizar app.py com as Rotas**

**2.1** Abra o arquivo **app.py**

**2.2** Selecione TODO (Ctrl + A)

**2.3** Apague e cole este código NOVO:

```python
# 🧹 House Cleaners — Flask Completo com Formulário
from flask import Flask, render_template, request, redirect, url_for
from database import listar_clientes, listar_agendamentos, adicionar_cliente, criar_banco

app = Flask(__name__)
criar_banco()  # Garante que o banco existe

@app.route('/')
def home():
    clientes = listar_clientes()
    agendamentos = listar_agendamentos()
    return render_template('index.html', 
                          clientes=clientes,
                          agendamentos=agendamentos)

@app.route('/formulario')
def formulario():
    return render_template('formulario.html')

@app.route('/adicionar', methods=['POST'])
def adicionar():
    nome = request.form.get('nome')
    email = request.form.get('email')
    telefone = request.form.get('telefone')
    
    if nome and email:
        adicionar_cliente(nome, email, telefone)
        return redirect(url_for('home'))
    
    return redirect(url_for('formulario'))

if __name__ == '__main__':
    print("🚀 House Cleaners iniciando...")
    print("🌐 Acesse: http://localhost:5000")
    print("📝 Formulário: http://localhost:5000/formulario")
    app.run(debug=True, port=5000)
```

**2.4** Cole (Ctrl + V)

**2.5** Salve (Ctrl + S)

---

### **PASSO 3: Atualizar index.html com Link do Formulário**

**3.1** Abra o arquivo **index.html**

**3.2** Procure por esta linha (perto do `<h1>`):
```html
<h1>🧹 House Cleaners</h1>
```

**3.3** Logo DEPOIS dessa linha, adicione:
```html
<div style="text-align: center; margin: 20px 0;">
    <a href="/formulario" style="display: inline-block; background-color: #28a745; color: white; padding: 10px 20px; border-radius: 4px; text-decoration: none; font-weight: bold;">➕ Adicionar Cliente</a>
</div>
```

**3.4** Salve (Ctrl + S)

```
Pronto! Sua página agora tem:
├── Botão "Adicionar Cliente"
└── Link para o formulário
```

---

## ✅ 10 min: TESTAR

### **PASSO 1: Rodar o Servidor**

**1.1** Abra o terminal (Ctrl + `)

**1.2** Certifique-se que está na pasta correta

**1.3** Rode:
```bash
python app.py
```

---

### **PASSO 2: Acessar a Página Principal**

**2.1** Abra navegador

**2.2** Digite: **http://localhost:5000**

```
Você vai ver:

┌──────────────────────────────┐
│ 🧹 House Cleaners            │
│ [➕ Adicionar Cliente]        │
├──────────────────────────────┤
│ 📋 Clientes Cadastrados      │
│ (lista de clientes)          │
│ 📅 Agendamentos              │
│ (lista de agendamentos)      │
└──────────────────────────────┘
```

**2.3** ✅ Botão aparece!

---

### **PASSO 3: Clicar no Botão**

**3.1** Clique em **➕ Adicionar Cliente**

```
Página muda para:

┌──────────────────────────────┐
│ 🧹 Adicionar Cliente         │
├──────────────────────────────┤
│ Nome: [___________________]  │
│ Email: [___________________] │
│ Telefone: [_______________]  │
│ [✅ Adicionar Cliente]       │
│ [← Voltar para clientes]     │
└──────────────────────────────┘
```

**3.2** ✅ Formulário abre!

---

### **PASSO 4: Preencher e Enviar**

**4.1** No campo **Nome**, digite:
```
Ana Silva
```

**4.2** No campo **Email**, digite:
```
ana@email.com
```

**4.3** No campo **Telefone**, digite:
```
(11) 97777-7777
```

**4.4** Clique em **✅ Adicionar Cliente**

```
Você volta para a página principal
E vê:

📋 Clientes Cadastrados

ID: 1 | João Silva | joao@...
ID: 2 | Maria Santos | maria@...
ID: 3 | Pedro Costa | pedro@...
ID: 4 | Ana Silva | ana@email.com ← NOVO!
```

**4.5** ✅✅✅ FUNCIONOU TUDO!

---

## 🚀 PRÓXIMA ETAPA

**Semana 5+:** Vamos criar o **Admin Imóveis** (Java + Spring Boot)!

Você terá:
- ✅ Sistema completo com formulários
- ✅ Duas tecnologias diferentes
- ✅ Experiência em 2 stacks!

---

## 🎁 O QUE APRENDEU

✅ Criar formulários HTML  
✅ Processar dados com Flask  
✅ Salvar dados no banco  
✅ Redirecionar usuário  
✅ Sistema funcionando de verdade!

---

## 📋 CHECKLIST

- [ ] Template formulario.html criado
- [ ] app.py atualizado com 3 rotas
- [ ] index.html com botão de adicionar
- [ ] Servidor rodando (python app.py)
- [ ] Página inicial com botão "Adicionar"
- [ ] Clicou no botão e formulário abriu
- [ ] Preencheu formulário
- [ ] Clicou "Adicionar Cliente"
- [ ] Novo cliente apareceu na lista
- [ ] **SEMANA 4 COMPLETA! 🎉**

---

## 🆘 SE NÃO FUNCIONAR

### Formulário não aparece

**Significa:** Arquivo formulario.html não encontrado ou rota incorreta

**Solução:**
1. Verifique se `templates/formulario.html` existe
2. Reinicie o servidor
3. Limpe o cache: Ctrl + Shift + Delete no navegador

---

### Erro "404 Not Found" ao clicar no botão

**Significa:** Rota `/formulario` não está definida

**Solução:**
1. Abra app.py
2. Procure por `@app.route('/formulario')`
3. Se não tiver, copie e cole novamente o código

---

### Novo cliente não aparece após adicionar

**Significa:** Banco de dados não foi inicializado

**Solução:**
```bash
python database.py
python app.py
```

---

**PARABÉNS! SEMANA 4 COMPLETA! 🎉**

Você criou um **Sistema Completo com Formulários!**

**House Cleaners PRONTO!** 🚀

Próximo: **Admin Imóveis (Java + Spring Boot)**
