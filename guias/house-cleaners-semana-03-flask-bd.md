# 🧹 House Cleaners — Semana 3: Conectar Flask + Banco de Dados

**Tempo Total:** 30 minutos  
**Dificuldade:** Super Fácil  
**Pré-requisito:** Semana 1 e Semana 2 completas  

---

## ⏱️ 5 min: Conceito

### O que vamos fazer?

**Até agora:**
- ✅ Semana 1: Criou um site Flask que responde "Olá!"
- ✅ Semana 2: Criou um banco de dados com clientes

**Agora:**
- 🆕 Vamos conectar os dois!
- O Flask vai **buscar dados do banco** e mostrar na tela

```
Cliente acessa: http://localhost:5000/clientes
   ↓
Flask busca no banco de dados
   ↓
Banco responde: "João, Maria, Pedro"
   ↓
Página mostra: Lista de clientes
```

### O que vamos criar

```
minha-primeira-api/
├── app.py (NOVO: código que conecta Flask + BD)
├── database.py (já tem)
├── clientes.db (já tem)
└── templates/ (pasta NOVA)
    └── clientes.html (NOVO: página com lista)
```

---

## 🔨 15 min: Passo a Passo

### Passo 1: Criar Pasta de Páginas

Na pasta `minha-primeira-api`:

1. **Clique com botão direito** na pasta
2. **Novo → Pasta**
3. Digite: `templates`
4. **ENTER**

### Passo 2: Criar Arquivo HTML

Na pasta `templates`:

1. **Clique com botão direito**
2. **Novo → Arquivo**
3. Digite: `clientes.html`
4. **ENTER**

### Passo 3: Copiar Código HTML

**Cole ISTO em `templates/clientes.html`:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>House Cleaners — Clientes</title>
    <style>
        body {
            font-family: Arial;
            margin: 20px;
            background-color: #f5f5f5;
        }
        h1 {
            color: #333;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            background: white;
            margin: 10px 0;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .cliente-id {
            color: #666;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <h1>🧹 House Cleaners — Clientes</h1>
    
    {% if clientes %}
        <p>📋 Total de clientes: <strong>{{ clientes|length }}</strong></p>
        <ul>
        {% for cliente in clientes %}
            <li>
                <strong>{{ cliente[1] }}</strong><br>
                📧 {{ cliente[2] }}<br>
                <span class="cliente-id">ID: {{ cliente[0] }}</span>
            </li>
        {% endfor %}
        </ul>
    {% else %}
        <p>❌ Nenhum cliente cadastrado ainda.</p>
    {% endif %}
    
    <br><br>
    <a href="/" style="color: blue;">← Voltar para Home</a>
</body>
</html>
```

**Salve:** Ctrl+S

### Passo 4: Atualizar app.py

**Abra o arquivo `app.py`**

**Substitua TODO O CONTEÚDO por ISTO:**

```python
# 🧹 House Cleaners — Flask + Banco de Dados
# Semana 3: Conectar tudo!

from flask import Flask, render_template
from database import criar_banco, adicionar_cliente, listar_clientes

app = Flask(__name__)

# 1. Criar banco na primeira vez
criar_banco()

# 2. Adicionar clientes de teste
try:
    adicionar_cliente("João Silva", "joao@email.com", "(11) 99999-9999")
    adicionar_cliente("Maria Santos", "maria@email.com", "(11) 88888-8888")
    adicionar_cliente("Pedro Costa", "pedro@email.com", "(11) 77777-7777")
except:
    pass  # Se já existem, ignora


# 3. Página Inicial
@app.route('/')
def home():
    return '''
    <h1>🧹 Bem-vindo ao House Cleaners!</h1>
    <p>Sistema de agendamento de limpeza</p>
    <a href="/clientes">📋 Ver Clientes</a>
    '''


# 4. Página de Clientes
@app.route('/clientes')
def ver_clientes():
    clientes = listar_clientes()  # Busca do banco
    return render_template('clientes.html', clientes=clientes)


# 5. Iniciar servidor
if __name__ == '__main__':
    print("🚀 House Cleaners iniciando...")
    print("🌐 Abra: http://localhost:5000")
    app.run(debug=True, port=5000)
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

Você deve ver:

```
🚀 House Cleaners iniciando...
🌐 Abra: http://localhost:5000
 * Running on http://localhost:5000
```

### Abra no Navegador

1. **Abra navegador** (Chrome, Edge, Firefox)
2. **Endereço:** http://localhost:5000
3. **ENTER**

### Você deve ver:

```
🧹 Bem-vindo ao House Cleaners!
Sistema de agendamento de limpeza
📋 Ver Clientes
```

### Clique em "📋 Ver Clientes"

Você deve ver:

```
🧹 House Cleaners — Clientes

📋 Total de clientes: 3

🧹 João Silva
📧 joao@email.com
ID: 1

🧹 Maria Santos
📧 maria@email.com
ID: 2

🧹 Pedro Costa
📧 pedro@email.com
ID: 3
```

### Se tudo funcionou:

✅ **Você conectou Flask + Banco de Dados!**

---

## 🚀 Próxima Semana

**Semana 4:** Vamos criar um **formulário para adicionar novos clientes**!

Você terá um app que:
- ✅ Mostra clientes do banco
- ✅ Permite adicionar novos clientes
- ✅ Tudo integrado!

---

## 🎁 O Que Você Aprendeu

✅ Como conectar Flask com banco de dados  
✅ Como buscar dados do banco em Python  
✅ Como mostrar dados em uma página HTML  
✅ Como usar `templates` (arquivos HTML reutilizáveis)  
✅ Tudo sem conhecimento técnico!  

---

## 📋 Checklist

- [ ] Pasta `templates` criada
- [ ] Arquivo `clientes.html` criado
- [ ] Código HTML copiado e colado
- [ ] Arquivo `app.py` substituído (TODO o conteúdo)
- [ ] Ambos salvos (Ctrl+S)
- [ ] Terminal aberto
- [ ] Executou `python app.py`
- [ ] Abriu http://localhost:5000
- [ ] Viu "Bem-vindo"
- [ ] Clicou em "Ver Clientes"
- [ ] Viu os 3 clientes

---

## 🆘 Se Não Funcionar

### Erro: "ModuleNotFoundError: No module named 'flask'"

**Solução:**
```bash
pip install flask
```

Depois execute novamente:
```bash
python app.py
```

### Erro: "Port 5000 já em uso"

Significa que há outro app rodando na porta 5000.

**Solução:**
```bash
python -m pip install --upgrade flask
python app.py
```

Se ainda der erro, mude a porta no código:
```python
app.run(debug=True, port=5001)  # Mude 5000 para 5001
```

### Página em branco ou erro 404

1. Verificar se a pasta `templates` existe
2. Verificar se `clientes.html` está DENTRO de `templates`
3. Reiniciar o app

---

**Parabéns! Semana 3 Completa! 🎉**

Você conectou um site com um banco de dados — isso é DESENVOLVIMENTO DE VERDADE!

---

## 📖 Próximos Passos

1. **Semana 4:** Formulário para adicionar clientes
2. **Semana 5:** Listar apenas clientes ativos
3. **Semana 6:** Agendar limpezas
4. **Semana 32:** Deploy na internet

**Você está no caminho certo! 🚀**
