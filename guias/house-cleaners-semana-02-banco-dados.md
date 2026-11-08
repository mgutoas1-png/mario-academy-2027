# 🧹 House Cleaners — Semana 2: Banco de Dados SQLite

**Tempo Total:** 30 minutos  
**Dificuldade:** Super Fácil  
**Pré-requisito:** Semana 1 completa  

---

## ⏱️ 5 min: Conceito

### O que é um Banco de Dados?

**Imagine:**
- Sua loja tem cadernos para registrar clientes
- Banco de Dados = cadernos digitais
- SQLite = caderno simples, rápido e grátis

```
Clientes vêm agendar → Você registra em um caderno
Amanhã, você consulta: "Quem agendou?"
Banco de Dados faz isso automaticamente!
```

### O que vamos criar

```
database.db (arquivo)
    ├── Tabela: usuarios
    │   ├── id: 1
    │   ├── nome: João
    │   └── email: joao@email.com
    │
    └── Tabela: agendamentos
        ├── id: 1
        ├── cliente: João
        └── data: 2027-02-10
```

---

## 🔨 15 min: Passo a Passo

### Passo 1: Criar Arquivo

Na pasta `minha-primeira-api`, crie arquivo:
```
database.py
```

### Passo 2: Copiar Código

**Cole ISTO no arquivo `database.py`:**

```python
# 🗄️ Seu banco de dados para House Cleaners
# NÃO mude nada! É código pronto!

import sqlite3
from datetime import datetime

# Conexão com banco de dados
def criar_banco():
    """Cria o banco de dados se não existir"""
    conexao = sqlite3.connect('clientes.db')
    cursor = conexao.cursor()
    
    # Criar tabela de usuários
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY,
            nome TEXT NOT NULL,
            email TEXT NOT NULL,
            telefone TEXT,
            criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Criar tabela de agendamentos
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


# ADICIONAR CLIENTE
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


# VER TODOS OS CLIENTES
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


# AGENDAR LIMPEZA
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


# VER AGENDAMENTOS
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


# EXECUTAR QUANDO RODAR ESTE ARQUIVO
if __name__ == '__main__':
    print("🗄️ Banco de Dados House Cleaners\n")
    
    # 1. Criar banco
    criar_banco()
    
    # 2. Adicionar alguns clientes
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

**Salve:** Ctrl+S

---

## ✅ 10 min: Verificar

### Abra Terminal

1. **Clique na barra de endereço da pasta**
2. **Digite:** `cmd`
3. **ENTER**

### Execute o arquivo

```bash
python database.py
```

### Você deve ver:

```
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

### Também Vai Aparecer Um Arquivo:

```
clientes.db  ← Seu banco de dados!
```

---

## 🚀 Próxima Semana

**Semana 3:** Vamos conectar este banco com a API Flask!

Você terá um app que:
- ✅ Adiciona clientes
- ✅ Agenda limpezas
- ✅ Salva tudo no banco

---

## 🎁 O Que Você Aprendeu

✅ O que é um banco de dados  
✅ Como criar tabelas  
✅ Como adicionar dados  
✅ Como consultar dados  
✅ Tudo sem conhecimento técnico!  

---

## 📋 Checklist

- [ ] Arquivo `database.py` criado
- [ ] Código copiado e colado
- [ ] Arquivo salvo
- [ ] Abriu terminal em cmd
- [ ] Executou `python database.py`
- [ ] Viu o resultado na tela
- [ ] Arquivo `clientes.db` apareceu

---

**Parabéns! Você criou seu primeiro banco de dados! 🗄️**

🎉 **Semana 2 Completa!**
