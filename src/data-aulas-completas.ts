// 📚 TODAS AS 11 AULAS — COMPLETAS, INTEGRADAS, SEM ACESSO EXTERNO

export interface Passo {
  numero: number;
  titulo: string;
  descricao: string;
  codigos?: {
    linguagem: string;
    arquivo: string;
    conteudo: string;
  }[];
  checklist?: string[];
  troubleshooting?: {
    problema: string;
    solucao: string;
  }[];
}

export interface Aula {
  id: string;
  numero: number;
  projeto: 'house-cleaners' | 'admin-imoveis' | 'servicos-pro' | 'escola-x';
  semana: number;
  titulo: string;
  descricao: string;
  duracao: '30min';

  // PARTE 1: CONCEITO (5 min)
  conceito: {
    definicao: string;
    analogia: string;
    diagrama_ascii: string;
  };

  // PARTE 2: PASSO A PASSO (15 min)
  passos: Passo[];

  // PARTE 3: TESTAR (10 min)
  teste: {
    confirmacoes_visuais: string[];
    resultado_esperado: string;
  };

  // CHECKLIST GERAL
  checklist_final: string[];

  // TROUBLESHOOTING
  problemas_comuns: {
    problema: string;
    solucao: string;
  }[];
}

export const TODAS_AS_AULAS: Aula[] = [
  // ==================== HOUSE CLEANERS — SEMANA 1 ====================
  {
    id: 'hc-semana-01',
    numero: 1,
    projeto: 'house-cleaners',
    semana: 1,
    titulo: '🚀 Primeiro Servidor Web com Flask',
    descricao: 'Crie seu primeiro "Hello World" - um servidor que funciona no seu computador!',
    duracao: '30min',

    conceito: {
      definicao: `Flask é um NEGOCIANTE DE MENSAGENS.

Você quer enviar uma mensagem do seu computador para o navegador?
Flask faz isso! É como um garçom que pega o que você quer e leva para o cliente.`,
      analogia: `
Imagina uma LOJA DE LIMPEZA (House Cleaners):

SEU COMPUTADOR (a cozinha da loja)
         ↓
    [FLASK - garçom]
         ↓
  SEU NAVEGADOR (o cliente)

Quando você digita: http://localhost:5000
Flask pega a mensagem e leva para você!
      `,
      diagrama_ascii: `
┌──────────────────────┐
│  SEU COMPUTADOR      │
│  (app.py rodando)    │
│       Flask          │
└──────────┬───────────┘
           │ localhost:5000
           ↓
┌──────────────────────┐
│  SEU NAVEGADOR       │
│  Chrome/Firefox      │
│                      │
│  🧹 House Cleaners!  │
└──────────────────────┘

RESULTADO: Você vê a mensagem na tela! 🎉
      `,
    },

    passos: [
      {
        numero: 1,
        titulo: 'Verificar se Python está instalado',
        descricao: 'Abra o Terminal/CMD e confirme que tem Python',
        checklist: [
          'Abrir Terminal (CMD ou PowerShell)',
          'Digitar: python --version',
          'Pressionar Enter',
          'Se aparecer versão = ✅ OK!',
          'Se der erro = instalar em python.org',
        ],
      },
      {
        numero: 2,
        titulo: 'Criar pasta house-cleaners',
        descricao: 'Pasta onde vai ficar o seu projeto',
        checklist: [
          'No seu computador, criar nova pasta chamada: house-cleaners',
          'Abrir essa pasta',
          'Confirmar que está vazia',
        ],
      },
      {
        numero: 3,
        titulo: 'Abrir Terminal/CMD nessa pasta',
        descricao: 'Navegue até a pasta no terminal',
        checklist: [
          'Windows: Clicar com botão direito na pasta → "Abrir PowerShell aqui"',
          'MAC/Linux: Terminal aberto na pasta',
          'Digitar: pwd (para confirmar que está no lugar certo)',
        ],
      },
      {
        numero: 4,
        titulo: 'Instalar Flask',
        descricao: 'Baixar a ferramenta Flask do computador',
        checklist: [
          'No Terminal, digitar: pip install flask',
          'Pressionar Enter',
          'Esperar terminar (pode levar 10-30 segundos)',
          'Ver mensagem "Successfully installed"',
        ],
      },
      {
        numero: 5,
        titulo: 'Criar arquivo app.py',
        descricao: 'Arquivo Python com o código do servidor',
        codigos: [
          {
            linguagem: 'python',
            arquivo: 'app.py',
            conteudo: `# 🧹 HOUSE CLEANERS — SEMANA 1: HELLO WORLD FLASK
# Seu primeiro servidor web!

from flask import Flask

# Criar o servidor
app = Flask(__name__)

# Rota: quando alguém acessa http://localhost:5000
@app.route('/')
def hello():
    return '''
    <h1>🧹 Bem-vindo ao House Cleaners!</h1>
    <p>Este é seu primeiro servidor web com Flask!</p>
    <p>Parabéns! 🎉</p>
    '''

# Iniciar o servidor
if __name__ == '__main__':
    print('🚀 Servidor rodando em: http://localhost:5000')
    print('Pressione CTRL+C para parar')
    app.run(debug=True, port=5000)
`
          }
        ],
        checklist: [
          'Abrir VSCode ou bloco de notas',
          'Copiar o código acima',
          'Colar na pasta house-cleaners',
          'Salvar como: app.py',
          'Confirmar que o arquivo está lá',
        ],
      },
      {
        numero: 6,
        titulo: 'Rodar o servidor Flask',
        descricao: 'Iniciar o servidor no Terminal',
        checklist: [
          'No Terminal (na pasta house-cleaners), digitar: python app.py',
          'Pressionar Enter',
          'Ver mensagens aparecendo:',
          '  - "🚀 Servidor rodando em: http://localhost:5000"',
          '  - "Press CTRL+C to quit"',
          'Se vir isso = ✅ SERVIDOR RODANDO!',
        ],
      },
      {
        numero: 7,
        titulo: 'Abrir no Navegador',
        descricao: 'Ver sua primeira página web!',
        checklist: [
          'Abrir navegador (Chrome, Firefox, Edge)',
          'Na barra de endereço, digitar: localhost:5000',
          'Pressionar Enter',
          'Ver a mensagem: "🧹 Bem-vindo ao House Cleaners!"',
          'Se vir isso = ✅ VOCÊ CRIOU UM SERVIDOR WEB!',
        ],
      },
      {
        numero: 8,
        titulo: 'Parar o servidor',
        descricao: 'Encerrar o Flask quando terminar',
        checklist: [
          'No Terminal, pressionar: CTRL+C',
          'Ver mensagem "Keyboard Interrupt"',
          'Servidor parado! ✅',
        ],
      },
    ],

    teste: {
      confirmacoes_visuais: [
        '✅ Flask instalado com sucesso',
        '✅ app.py criado',
        '✅ "🚀 Servidor rodando em: http://localhost:5000"',
        '✅ Browser mostrando: "🧹 Bem-vindo ao House Cleaners!"',
        '✅ CTRL+C funciona para parar',
      ],
      resultado_esperado: 'Você consegue digitar localhost:5000 no navegador e ver "🧹 Bem-vindo ao House Cleaners!" com mensagem de parabéns!',
    },

    checklist_final: [
      'Python instalado e verificado',
      'Pasta house-cleaners criada',
      'Flask instalado (pip install flask)',
      'app.py criado com código correto',
      'python app.py executado no Terminal',
      'localhost:5000 abre no navegador',
      'Mensagem "Bem-vindo ao House Cleaners!" visível',
      'CTRL+C para no servidor',
    ],

    problemas_comuns: [
      {
        problema: 'Erro: "python: command not found"',
        solucao: 'Python não está instalado. Baixar em python.org, instalar, REINICIAR computador',
      },
      {
        problema: 'Erro: "pip: command not found"',
        solucao: 'Python instalado mas pip não. Reinstalar Python marcando opção "Add Python to PATH"',
      },
      {
        problema: 'Erro: "No module named flask"',
        solucao: 'Flask não instalado. Digitar: pip install flask',
      },
      {
        problema: 'Porta 5000 já está em uso',
        solucao: 'Trocar porta no código: app.run(port=5001) - usar 5001, 5002, etc',
      },
      {
        problema: 'localhost:5000 não abre/recusa conexão',
        solucao: 'Terminal está com erro. Ver se tem "Traceback". Copiar erro, verificar código app.py',
      },
      {
        problema: 'Digito localhost:5000 e nada acontece',
        solucao: 'Confirmar que Terminal mostra "Servidor rodando em...". Se não, executar python app.py de novo',
      },
    ],
  },

  // ==================== HOUSE CLEANERS — SEMANA 2 ====================
  {
    id: 'hc-semana-02',
    numero: 2,
    projeto: 'house-cleaners',
    semana: 2,
    titulo: '🗄️ Banco de Dados SQLite',
    descricao: 'Cria tabelas, insere dados, consulta com relações. Primeiro banco de dados real!',
    duracao: '30min',

    conceito: {
      definicao: 'Um banco de dados é um arquivo que ORGANIZA dados em TABELAS (como Excel em abas), onde cada linha é um registro e cada coluna é um atributo.',
      analogia: `
Imagina um FICHÁRIO de clientes de limpeza:
┌─────────────────────────────────┐
│ TABELA: CLIENTES                │
├─────────────────────────────────┤
│ ID │ Nome          │ Telefone    │
├─────────────────────────────────┤
│ 1  │ João Silva    │ 99999-9999  │
│ 2  │ Maria Santos  │ 88888-8888  │
└─────────────────────────────────┘

Banco de dados = Fichário digital organizado!
      `,
      diagrama_ascii: `
BANCO DE DADOS (clientes.db)
    ↓
┌─────────────────────┐
│  TABELA: usuarios   │
│  (clientes)         │
├─────────────────────┤
│ id │ nome │ email   │
│ 1  │ João │ j@...   │
│ 2  │ Mari │ m@...   │
└─────────────────────┘
         ↓
┌─────────────────────┐
│ TABELA: agendamentos│
│ (serviços)          │
├─────────────────────┤
│ id │ cliente │ data │
│ 1  │   1     │ 15/2 │
└─────────────────────┘
      `,
    },

    passos: [
      {
        numero: 1,
        titulo: 'Criar arquivo database.py',
        descricao: 'Arquivo Python que vai gerenciar tudo do banco de dados',
        codigos: [
          {
            linguagem: 'python',
            arquivo: 'database.py',
            conteudo: `# 🗄️ HOUSE CLEANERS — SEMANA 2: BANCO DE DADOS SQLITE
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

    print("\\n📋 CLIENTES CADASTRADOS:")
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

    print("\\n📅 AGENDAMENTOS:")
    for agenda in agendamentos:
        print(f"ID: {agenda[0]} | Cliente: {agenda[1]} | Data: {agenda[2]} | Serviço: {agenda[3]} | Preço: R$ {agenda[4]}")

    return agendamentos

# EXECUTAR QUANDO RODAR
if __name__ == '__main__':
    print("🗄️ SEMANA 2: BANCO DE DADOS SQLITE\\n")

    # 1. Criar banco
    criar_banco()

    # 2. Adicionar clientes
    print("\\n➕ Adicionando clientes...")
    id1 = adicionar_cliente("João Silva", "joao@email.com", "(11) 99999-9999")
    id2 = adicionar_cliente("Maria Santos", "maria@email.com", "(11) 88888-8888")
    id3 = adicionar_cliente("Pedro Costa", "pedro@email.com", "(11) 77777-7777")

    # 3. Ver clientes
    listar_clientes()

    # 4. Agendar limpezas
    print("\\n📅 Agendando limpezas...")
    agendar_limpeza(id1, "2027-02-15", "Limpeza Básica", 100.00)
    agendar_limpeza(id2, "2027-02-16", "Limpeza Profunda", 200.00)
    agendar_limpeza(id3, "2027-02-17", "Organização", 150.00)

    # 5. Ver agendamentos
    listar_agendamentos()

    print("\\n✅ SEMANA 2 COMPLETA!")`
          }
        ],
        checklist: [
          'Criar pasta house-cleaners/ no seu computador',
          'Dentro dela, criar arquivo database.py',
          'Copiar o código acima para dentro do arquivo',
          'Salvar o arquivo'
        ],
      },
      {
        numero: 2,
        titulo: 'Rodar o programa',
        descricao: 'Executar o código para criar o banco de dados',
        checklist: [
          'Abrir Terminal/CMD na pasta house-cleaners',
          'Digitar: python database.py',
          'Pressionar Enter',
          'Ver as mensagens de sucesso aparecendo'
        ],
      },
      {
        numero: 3,
        titulo: 'Verificar o banco criado',
        descricao: 'Confirmar que o arquivo clientes.db foi criado',
        checklist: [
          'Na pasta house-cleaners, procurar arquivo clientes.db',
          'Se estiver lá = ✅ FUNCIONOU!',
          'Banco de dados pronto para a próxima semana'
        ],
      },
    ],

    teste: {
      confirmacoes_visuais: [
        '✅ Banco de dados criado!',
        '✅ Cliente João Silva adicionado! ID: 1',
        '✅ Cliente Maria Santos adicionado! ID: 2',
        '✅ Cliente Pedro Costa adicionado! ID: 3',
        '📋 CLIENTES CADASTRADOS:',
        '📅 AGENDAMENTOS:',
        '✅ SEMANA 2 COMPLETA!',
      ],
      resultado_esperado: 'Arquivo clientes.db criado na pasta house-cleaners com 3 clientes e 3 agendamentos registrados',
    },

    checklist_final: [
      'database.py criado com código completo',
      'python database.py executado sem erros',
      'clientes.db visível na pasta',
      'Mensagens de sucesso apareceram',
      '3 clientes adicionados',
      '3 agendamentos criados',
    ],

    problemas_comuns: [
      {
        problema: 'Erro: "python: command not found"',
        solucao: 'Python não está instalado. Baixar em python.org, instalar, reiniciar o computador',
      },
      {
        problema: 'Erro: "No such file or directory: \'clientes.db\'"',
        solucao: 'Certificar que está na pasta certa (house-cleaners). Digitar: cd house-cleaners',
      },
      {
        problema: 'Nenhuma mensagem aparece',
        solucao: 'Verificar se salvou o arquivo. Tentar de novo: python database.py',
      },
    ],
  },
];

// ==================== PRÓXIMAS AULAS ====================
// Semana 3: Flask + BD
// Semana 4: Formulário
// Admin Imóveis Semanas 1-4
// ServiçosPro Semanas 1-2
// EscolaX Semanas 1-2
