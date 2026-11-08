# 🧹 House Cleaners — Semana 2: Banco de Dados SQLite

**Tempo:** 30 minutos | **Dificuldade:** Super Fácil | **Pré-requisito:** Semana 1 ✅

---

## ⏱️ 5 min: CONCEITO

### O que é um Banco de Dados?

**Imagine:**
- Você tem um caderninho onde escreve nomes de clientes
- Cada página = 1 cliente diferente
- Banco de dados = caderninho DIGITAL

```
Mundo Real:                Banco de Dados:
┌──────────────────┐      ┌──────────────────┐
│ Caderninho:      │      │ Arquivo: clientes│
│ João Silva       │  →   │.db (digital)     │
│ (11) 99999-9999  │      │                  │
│ joao@email.com   │      │ Tabela: usuarios │
│                  │      │ - id: 1          │
│ Maria Santos     │      │ - nome: João     │
│ (11) 88888-8888  │      │ - email: joao@.. │
│ maria@email.com  │      │ - telefone: ...  │
└──────────────────┘      │ - id: 2          │
                          │ - nome: Maria    │
                          └──────────────────┘
```

### O que você vai criar

```
Um arquivo: clientes.db
Com 2 tabelas:
├── usuarios (armazena clientes)
└── agendamentos (armazena agendamentos)
```

---

## 🔨 15 min: PASSO A PASSO

### **PASSO 1: Abrir PyCharm**

**1.1** Abra PyCharm (já deve estar instalado da semana anterior)
- Aperte **Windows**
- Digite: **pycharm**
- Clique em **PyCharm Community Edition**

**1.2** Clique em **Open**

**1.3** Selecione a pasta: **house-cleaners**

**1.4** Clique em **Open**

```
Você vai ver:
┌──────────────────────┐
│ 📁 house-cleaners    │
│    📄 app.py         │
│    📁 templates      │
│                      │
│ (vazio aqui = pronto)│
└──────────────────────┘
```

**1.5** ✅ PyCharm aberto!

---

### **PASSO 2: Criar Arquivo database.py**

**2.1** Clique DIREITO em **house-cleaners** (à esquerda)

**2.2** Selecione: **New → Python File**

```
Menu:
┌──────────────────────┐
│ New                  │
│ ├─ Python File ← AQUI│
│ ├─ Folder            │
│ Cut                  │
│ Paste                │
│ Delete               │
└──────────────────────┘
```

**2.3** Digite: **database.py**

**2.4** Pressione **ENTER**

```
Você vai ver:
┌──────────────────────┐
│ 📁 house-cleaners    │
│    📄 app.py         │
│    📄 database.py ← NOVO!
│    📁 templates      │
└──────────────────────┘
```

**2.5** ✅ Arquivo criado!

---

### **PASSO 3: Copiar o Código**

**3.1** Clique no arquivo **database.py** para abrir

**3.2** Copie TODO este código:

```python
# 🗄️ Banco de Dados House Cleaners
# NÃO MUDE NADA! CÓDIGO PRONTO!

import sqlite3
from datetime import datetime

# ╔═══════════════════════════════╗
# ║ CRIAR BANCO DE DADOS          ║
# ╚═══════════════════════════════╝

def criar_banco():
    """Cria o banco de dados se não existir"""
    conexao = sqlite3.connect('clientes.db')
    cursor = conexao.cursor()
    
    # Tabela 1: USUÁRIOS (Clientes)
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY,
            nome TEXT NOT NULL,
            email TEXT NOT NULL,
            telefone TEXT,
            criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Tabela 2: AGENDAMENTOS (Serviços marcados)
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS agendamentos (
            id INTEGER PRIMARY KEY,
            cliente_id INTEGER NOT NULL,
            data_agendamento DATE NOT NULL,
            tipo_servico TEXT,
            preco REAL,
            status TEXT DEFAULT 'pendente',
            criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (cliente_id) REFERENCES usuarios(id)
        )
    ''')
    
    conexao.commit()
    conexao.close()
    print("✅ Banco de dados criado!")

# ╔═══════════════════════════════╗
# ║ ADICIONAR CLIENTE             ║
# ╚═══════════════════════════════╝

def adicionar_cliente(nome, email, telefone):
    """Adiciona um novo cliente"""
    conexao = sqlite3.connect('clientes.db')
    cursor = conexao.cursor()
    
    cursor.execute('''
        INSERT INTO usuarios (nome, email, telefone)
        VALUES (?, ?, ?)
    ''', (nome, email, telefone))
    
    conexao.commit()
    cliente_id = cursor.lastrowid
    conexao.close()
    
    print(f"✅ Cliente {nome} adicionado! ID: {cliente_id}")
    return cliente_id

# ╔═══════════════════════════════╗
# ║ LISTAR CLIENTES               ║
# ╚═══════════════════════════════╝

def listar_clientes():
    """Lista todos os clientes"""
    conexao = sqlite3.connect('clientes.db')
    cursor = conexao.cursor()
    
    cursor.execute('SELECT * FROM usuarios')
    clientes = cursor.fetchall()
    conexao.close()
    
    print("\n📋 CLIENTES CADASTRADOS:")
    for cliente in clientes:
        print(f"ID: {cliente[0]} | Nome: {cliente[1]} | Email: {cliente[2]}")
    
    return clientes

# ╔═══════════════════════════════╗
# ║ AGENDAR LIMPEZA               ║
# ╚═══════════════════════════════╝

def agendar_limpeza(cliente_id, data, servico, preco):
    """Agenda uma limpeza para um cliente"""
    conexao = sqlite3.connect('clientes.db')
    cursor = conexao.cursor()
    
    cursor.execute('''
        INSERT INTO agendamentos 
        (cliente_id, data_agendamento, tipo_servico, preco)
        VALUES (?, ?, ?, ?)
    ''', (cliente_id, data, servico, preco))
    
    conexao.commit()
    agendamento_id = cursor.lastrowid
    conexao.close()
    
    print(f"✅ Limpeza agendada! ID: {agendamento_id}")
    return agendamento_id

# ╔═══════════════════════════════╗
# ║ LISTAR AGENDAMENTOS           ║
# ╚═══════════════════════════════╝

def listar_agendamentos():
    """Lista todos os agendamentos"""
    conexao = sqlite3.connect('clientes.db')
    cursor = conexao.cursor()
    
    cursor.execute('''
        SELECT a.id, u.nome, a.data_agendamento, a.tipo_servico, a.preco
        FROM agendamentos a
        JOIN usuarios u ON a.cliente_id = u.id
    ''')
    
    agendamentos = cursor.fetchall()
    conexao.close()
    
    print("\n📅 AGENDAMENTOS:")
    for agenda in agendamentos:
        print(f"ID: {agenda[0]} | Cliente: {agenda[1]} | Data: {agenda[2]} | Serviço: {agenda[3]} | Preço: R$ {agenda[4]}")
    
    return agendamentos

# ╔═══════════════════════════════╗
# ║ EXECUTAR QUANDO RODAR ARQUIVO ║
# ╚═══════════════════════════════╝

if __name__ == '__main__':
    print("🗄️ Banco de Dados House Cleaners\n")
    
    # 1. Criar banco
    criar_banco()
    
    # 2. Adicionar clientes
    print("\n➕ Adicionando clientes...")
    id1 = adicionar_cliente("João Silva", "joao@email.com", "(11) 99999-9999")
    id2 = adicionar_cliente("Maria Santos", "maria@email.com", "(11) 88888-8888")
    id3 = adicionar_cliente("Pedro Costa", "pedro@email.com", "(11) 77777-7777")
    
    # 3. Ver clientes
    listar_clientes()
    
    # 4. Agendar limpezas
    print("\n📅 Agendando limpezas...")
    agendar_limpeza(id1, "2027-02-15", "Limpeza Básica", 100.00)
    agendar_limpeza(id2, "2027-02-16", "Limpeza Profunda", 200.00)
    agendar_limpeza(id3, "2027-02-17", "Organização", 150.00)
    
    # 5. Ver agendamentos
    listar_agendamentos()
    
    print("\n✅ Tudo pronto! Você tem 3 clientes e 3 agendamentos!")
```

**3.3** Clique no PyCharm para abrir o arquivo **database.py**

**3.4** Pressione **Ctrl + A** (seleciona tudo)

**3.5** Pressione **Ctrl + V** (cola o código)

```
Código aparece no arquivo:
┌────────────────────────┐
│ database.py           │
├────────────────────────┤
│ # 🗄️ Banco de Dados   │
│ import sqlite3        │
│                       │
│ def criar_banco():    │
│ ... (todo o código)   │
└────────────────────────┘
```

**3.6** ✅ Código colado!

---

### **PASSO 4: Salvar**

**4.1** Pressione **Ctrl + S**

```
A aba muda de:
  database.py ●  (ponto = não salvo)
Para:
  database.py    (sem ponto = salvo!)
```

**4.2** ✅ Salvo!

---

## ✅ 10 min: TESTAR

### **PASSO 1: Abrir Terminal**

**1.1** Pressione **Ctrl + `** (crase)

```
Terminal aparece embaixo:
┌─────────────────────────┐
│ Terminal        Python  │
├─────────────────────────┤
│ C:\Users\...\> ← Cursor │
└─────────────────────────┘
```

**1.2** ✅ Terminal aberto!

---

### **PASSO 2: Rodar o Banco**

**2.1** No terminal, digite:
```bash
python database.py
```

**2.2** Pressione **ENTER**

```
Você vai ver:
🗄️ Banco de Dados House Cleaners

✅ Banco de dados criado!

➕ Adicionando clientes...
✅ Cliente João Silva adicionado! ID: 1
✅ Cliente Maria Santos adicionado! ID: 2
✅ Cliente Pedro Costa adicionado! ID: 3

📋 CLIENTES CADASTRADOS:
ID: 1 | Nome: João Silva | Email: joao@email.com
ID: 2 | Nome: Maria Santos | Email: maria@email.com
ID: 3 | Nome: Pedro Costa | Email: pedro@email.com

📅 Agendando limpezas...
✅ Limpeza agendada! ID: 1
✅ Limpeza agendada! ID: 2
✅ Limpeza agendada! ID: 3

📅 AGENDAMENTOS:
ID: 1 | Cliente: João Silva | Data: 2027-02-15 | Serviço: Limpeza Básica | Preço: R$ 100.0
ID: 2 | Cliente: Maria Santos | Data: 2027-02-16 | Serviço: Limpeza Profunda | Preço: R$ 200.0
ID: 3 | Cliente: Pedro Costa | Data: 2027-02-17 | Serviço: Organização | Preço: R$ 150.0

✅ Tudo pronto! Você tem 3 clientes e 3 agendamentos!
```

**2.3** ✅✅✅ FUNCIONOU TUDO!

---

### **PASSO 3: Confirmar Arquivo do Banco**

**3.1** Abra a pasta do projeto
- **File Explorer → Documents → mario → projetos → house-cleaners**

**3.2** Procure por um arquivo chamado: **clientes.db**

```
Você vai ver:
├── app.py
├── database.py
├── clientes.db ← ESTE ARQUIVO!
├── templates/
│   ├── clientes.html
│   └── adicionar.html
```

**3.3** ✅ Se vê **clientes.db** = DÀ CERTO!

---

## 🚀 PRÓXIMA SEMANA

**Semana 3:** Vamos conectar Flask + Banco de Dados!

Você terá um app que:
- ✅ Mostra clientes na página web
- ✅ Armazena dados no banco
- ✅ Sistema funcionando de verdade

---

## 🎁 O QUE APRENDEU

✅ O que é um banco de dados  
✅ Como criar tabelas  
✅ Como adicionar dados  
✅ Como consultar dados  
✅ Como criar relações entre tabelas  
✅ Tudo sem conhecimento técnico!

---

## 📋 CHECKLIST

- [ ] PyCharm aberto
- [ ] Arquivo database.py criado
- [ ] Código copiado e colado
- [ ] Arquivo salvo (Ctrl + S)
- [ ] Terminal aberto (Ctrl + `)
- [ ] Executou: python database.py
- [ ] Viu mensagens ✅ (3 clientes adicionados)
- [ ] Viu agendamentos (3 agendamentos criados)
- [ ] Arquivo clientes.db apareceu na pasta
- [ ] **SEMANA 2 COMPLETA! 🎉**

---

## 🆘 SE NÃO FUNCIONAR

### Erro: "ModuleNotFoundError: No module named 'sqlite3'"

**Significa:** sqlite3 não instalado

**Solução:**
```bash
pip install pysqlite3
python database.py
```

---

### Erro: "database.py not found"

**Significa:** Arquivo está em local errado

**Solução:**
1. No PyCharm, verifique se o arquivo está listado à esquerda
2. Se não estiver, abra novamente a pasta correta
3. Crie o arquivo novamente

---

### Arquivo clientes.db não aparece

**Significa:** O script não executou completamente

**Solução:**
1. Verifique se viu "✅ Banco de dados criado!"
2. Se não viu, o script parou antes
3. Leia a mensagem de erro no terminal
4. Tente novamente

---

**PARABÉNS! SEMANA 2 COMPLETA! 🎉**

Você criou seu PRIMEIRO banco de dados!

**Próxima semana: Conectar com Flask! 🚀**
