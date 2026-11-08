# 🧹 House Cleaners — Semana 4: Formulário para Adicionar Clientes

**Tempo Total:** 30 minutos  
**Dificuldade:** Super Fácil  
**Pré-requisito:** Semana 3 completa  

---

## ⏱️ 5 min: Conceito

### O que vamos fazer?

**Até agora:**
- ✅ Semana 1-3: Tem um site que mostra clientes

**Agora:**
- 🆕 Vamos adicionar um **formulário** (caixa para digitar)
- Usuário digita: Nome, Email, Telefone
- Clica "Adicionar"
- Cliente é salvo no banco

```
Usuário digita "João" em um formulário
   ↓
Clica "Adicionar"
   ↓
Flask recebe os dados
   ↓
Salva no banco de dados
   ↓
Página atualiza e mostra "João" na lista
```

### O que vamos criar

```
templates/
├── clientes.html (já tem)
└── adicionar.html (NOVO: formulário)

app.py (MODIFICADO: 1 nova função)
```

---

## 🔨 15 min: Passo a Passo

### Passo 1: Criar Arquivo do Formulário

Na pasta `templates`:

1. **Clique com botão direito**
2. **Novo → Arquivo**
3. Digite: `adicionar.html`
4. **ENTER**

### Passo 2: Copiar Código do Formulário

**Cole ISTO em `templates/adicionar.html`:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>House Cleaners — Adicionar Cliente</title>
    <style>
        body {
            font-family: Arial;
            margin: 20px;
            background-color: #f5f5f5;
        }
        h1 {
            color: #333;
        }
        form {
            background: white;
            padding: 20px;
            border-radius: 5px;
            max-width: 400px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        label {
            display: block;
            margin-top: 15px;
            font-weight: bold;
            color: #333;
        }
        input {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ddd;
            border-radius: 3px;
            box-sizing: border-box;
            font-size: 14px;
        }
        button {
            width: 100%;
            padding: 12px;
            margin-top: 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 3px;
            font-size: 16px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
        a {
            color: blue;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1>🧹 Adicionar Novo Cliente</h1>
    
    <form method="POST" action="/adicionar">
        <label for="nome">👤 Nome:</label>
        <input type="text" id="nome" name="nome" required placeholder="ex: João Silva">
        
        <label for="email">📧 Email:</label>
        <input type="email" id="email" name="email" required placeholder="ex: joao@email.com">
        
        <label for="telefone">📱 Telefone:</label>
        <input type="tel" id="telefone" name="telefone" required placeholder="ex: (11) 99999-9999">
        
        <button type="submit">✅ Adicionar Cliente</button>
    </form>
    
    <br>
    <a href="/clientes">← Voltar para Lista de Clientes</a>
</body>
</html>
```

**Salve:** Ctrl+S

### Passo 3: Atualizar `clientes.html`

**Abra:** `templates/clientes.html`

**Procure por esta linha:**
```html
    <a href="/" style="color: blue;">← Voltar para Home</a>
```

**Substitua por ISTO:**
```html
    <br><a href="/adicionar" style="color: green; font-weight: bold;">➕ Adicionar Novo Cliente</a>
    <br><br>
    <a href="/" style="color: blue;">← Voltar para Home</a>
```

**Salve:** Ctrl+S

### Passo 4: Atualizar `app.py`

**Abra:** `app.py`

**Procure por:**
```python
@app.route('/clientes')
def ver_clientes():
    clientes = listar_clientes()
    return render_template('clientes.html', clientes=clientes)
```

**Adicione logo DEPOIS (antes do `if __name__`):**

```python
# 5. Formulário para adicionar cliente
@app.route('/adicionar', methods=['GET', 'POST'])
def adicionar():
    if request.method == 'POST':
        # Recebe dados do formulário
        nome = request.form.get('nome')
        email = request.form.get('email')
        telefone = request.form.get('telefone')
        
        # Adiciona no banco
        adicionar_cliente(nome, email, telefone)
        
        # Redireciona para lista
        from flask import redirect
        return redirect('/clientes')
    
    # Se for GET, mostra o formulário
    return render_template('adicionar.html')
```

**IMPORTANTE:** No início do arquivo, adicione `request` na importação:

**Procure por:**
```python
from flask import Flask, render_template
```

**Substitua por:**
```python
from flask import Flask, render_template, request
```

**Salve:** Ctrl+S

---

## ✅ 10 min: Verificar

### Abra Terminal

1. **Clique na barra de endereço da pasta**
2. **Digite:** `cmd`
3. **ENTER**

### Execute o app

```bash
python app.py
```

### Abra no Navegador

1. **http://localhost:5000**
2. **ENTER**

### Clique em "📋 Ver Clientes"

Você deve ver um botão verde:
```
➕ Adicionar Novo Cliente
```

### Clique em "➕ Adicionar Novo Cliente"

Você deve ver:

```
🧹 Adicionar Novo Cliente

[Formulário com 3 campos:]
👤 Nome: [caixa de texto]
📧 Email: [caixa de texto]
📱 Telefone: [caixa de texto]

[Botão verde: ✅ Adicionar Cliente]
```

### Teste o Formulário

1. **Digite:**
   - Nome: `Ana Silva`
   - Email: `ana@email.com`
   - Telefone: `(11) 66666-6666`

2. **Clique:** `✅ Adicionar Cliente`

3. **Você deve ver:**
   - Volta para a lista de clientes
   - **Ana Silva aparece na lista!**

### Se tudo funcionou:

✅ **Você criou um formulário funcionando!**

---

## 🚀 Próxima Semana

**Semana 5:** Vamos criar **agendamentos de limpeza**!

Você terá um app que:
- ✅ Adiciona clientes
- ✅ Agenda limpezas para cada cliente
- ✅ Mostra calendar de agendamentos

---

## 🎁 O Que Você Aprendeu

✅ Como criar um formulário em HTML  
✅ Como receber dados de um formulário em Flask  
✅ Como salvar dados no banco de dados  
✅ Como redirecionar após salvar  
✅ Como fazer um app realmente funcional!  

---

## 📋 Checklist

- [ ] Arquivo `adicionar.html` criado
- [ ] Código HTML do formulário copiado
- [ ] `clientes.html` atualizado com botão "Adicionar"
- [ ] `app.py` importa `request`
- [ ] Nova função `/adicionar` adicionada
- [ ] Tudo salvo
- [ ] Terminal aberto
- [ ] App rodando
- [ ] Formulário abre
- [ ] Adiciona novo cliente com sucesso
- [ ] Cliente aparece na lista

---

## 🆘 Se Não Funcionar

### Erro: "ModuleNotFoundError: werkzeug"

**Solução:**
```bash
pip install werkzeug
```

### Formulário abre mas não adiciona

1. Verificar se `request` foi importado no `app.py`
2. Verificar se o método é `POST` no formulário
3. Reiniciar o app

### Campo vazio após adicionar

1. Deixe o campo `required` (obrigatório) — o navegador não deixará vazio
2. Tente novamente

---

**Parabéns! Semana 4 Completa! 🎉**

Você tem um app de verdade: **adiciona, mostra, tudo integrado!**

---

## 🎯 Seu App Agora Tem:

✅ Página inicial  
✅ Lista de clientes do banco de dados  
✅ Formulário para adicionar clientes  
✅ Salva tudo no banco  

**Isso é um SISTEMA PROFISSIONAL! 🚀**

---

**Semana 5:** Vamos fazer agendamentos!

Você está construindo uma **empresa real de limpeza**! 💼
