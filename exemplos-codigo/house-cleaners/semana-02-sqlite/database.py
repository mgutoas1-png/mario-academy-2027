# 🗄️ HOUSE CLEANERS — SEMANA 2: BANCO DE DADOS SQLITE
# CÓDIGO PRONTO PARA COPIAR!

import sqlite3

def criar_banco():
    """Cria o banco de dados e tabelas"""
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

    # Tabela 2: AGENDAMENTOS (Serviços)
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

def agendar_limpeza(cliente_id, data, servico, preco):
    """Agenda uma limpeza"""
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

# EXECUTAR QUANDO RODAR
if __name__ == '__main__':
    print("🗄️ SEMANA 2: BANCO DE DADOS SQLITE\n")

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

    print("\n✅ SEMANA 2 COMPLETA!")
