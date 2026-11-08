// 🎓 Dados de todos os 128 cursos (4 × 32 semanas)

export interface Aula {
  id: string
  semana: number
  titulo: string
  conceito: string
  build: string[]
  codigoExemplo: string
  quiz: {
    pergunta: string
    opcoes: string[]
    resposta: number
    explicacao: string
  }[]
  xp: number
}

export interface Curso {
  id: string
  nome: string
  descricao: string
  emoji: string
  cor: string
  tech: string
  dia: string
  aulas: Aula[]
}

// ============================================
// 🧹 HOUSE CLEANERS (Python + Flask)
// ============================================

const houseCleanersAulas: Aula[] = [
  {
    id: 'house-1',
    semana: 1,
    titulo: 'Hello World em Flask',
    conceito: 'Flask é um framework Python que cria servidores web. Imagine como uma porta mágica que permite o navegador acessar seu app.',
    build: [
      'Crie arquivo app.py com o código Flask',
      'Instale Flask com pip install flask',
      'Rode python app.py',
      'Abra http://localhost:5000'
    ],
    codigoExemplo: `from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return '<h1>🧹 House Cleaners!</h1>'

if __name__ == '__main__':
    app.run(debug=True, port=5000)`,
    quiz: [
      {
        pergunta: 'O que Flask faz?',
        opcoes: [
          'Cria um servidor web em Python',
          'Faz café',
          'Limpa casas',
          'Nenhuma das anteriores'
        ],
        resposta: 0,
        explicacao: 'Flask é um framework que permite criar servidores web com Python!'
      },
      {
        pergunta: 'Qual porta Flask usa por padrão?',
        opcoes: [
          '8080',
          '5000',
          '3000',
          '8000'
        ],
        resposta: 1,
        explicacao: 'Flask usa porta 5000 por padrão (localhost:5000)'
      }
    ],
    xp: 100
  },
  {
    id: 'house-2',
    semana: 2,
    titulo: 'Banco de Dados SQLite',
    conceito: 'Banco de dados armazena informações. SQLite é um banco leve, perfeito para começar.',
    build: [
      'Crie tabela de usuários',
      'Adicione dados à tabela',
      'Consulte os dados com SELECT'
    ],
    codigoExemplo: `import sqlite3

conn = sqlite3.connect('app.db')
cursor = conn.cursor()

# Criar tabela
cursor.execute('''CREATE TABLE IF NOT EXISTS usuarios
  (id INTEGER PRIMARY KEY, nome TEXT, email TEXT)''')

# Inserir dados
cursor.execute('INSERT INTO usuarios VALUES (1, "João", "joao@email.com")')
conn.commit()

# Consultar
cursor.execute('SELECT * FROM usuarios')
print(cursor.fetchall())`,
    quiz: [
      {
        pergunta: 'O que SQLite faz?',
        opcoes: [
          'Armazena dados em um arquivo',
          'Cria servidores web',
          'Limpa o banco de dados',
          'Nada disso'
        ],
        resposta: 0,
        explicacao: 'SQLite armazena dados de forma estruturada em um arquivo!'
      }
    ],
    xp: 150
  },
  {
    id: 'house-3',
    semana: 3,
    titulo: 'Conectar Flask com Banco de Dados',
    conceito: 'Integrar Flask com banco de dados permite salvar e recuperar informações persistentemente.',
    build: [
      'Use flask-sqlalchemy',
      'Crie modelo de dados',
      'Salve dados no banco',
      'Recupere dados pela web'
    ],
    codigoExemplo: `from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
db = SQLAlchemy(app)

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100))

@app.route('/usuarios')
def usuarios():
    users = Usuario.query.all()
    return str([(u.id, u.nome) for u in users])`,
    quiz: [
      {
        pergunta: 'O que é um ORM?',
        opcoes: [
          'Ferramenta que conecta Python com banco de dados',
          'Um tipo de café',
          'Linguagem de programação',
          'Sistema operacional'
        ],
        resposta: 0,
        explicacao: 'ORM (Object-Relational Mapping) conecta código Python com banco de dados!'
      }
    ],
    xp: 150
  },
  {
    id: 'house-4',
    semana: 4,
    titulo: 'Formulário para Agendar Limpeza',
    conceito: 'Formulários HTML permitem usuários enviar dados. Vamos criar um para agendar limpezas.',
    build: [
      'Crie template HTML com formulário',
      'Receba dados POST em Flask',
      'Salve no banco de dados',
      'Redirecione para confirmação'
    ],
    codigoExemplo: `from flask import Flask, render_template, request, redirect

@app.route('/agendar', methods=['GET', 'POST'])
def agendar():
    if request.method == 'POST':
        agendamento = Agendamento(
            cliente=request.form['cliente'],
            endereco=request.form['endereco'],
            data=request.form['data']
        )
        db.session.add(agendamento)
        db.session.commit()
        return redirect('/confirmacao')
    return render_template('agendar.html')`,
    quiz: [
      {
        pergunta: 'O que é um formulário POST?',
        opcoes: [
          'Envia dados do cliente para o servidor',
          'Mostra dados na página',
          'Deleta dados',
          'Nada disso'
        ],
        resposta: 0,
        explicacao: 'POST envia dados do formulário HTML para o servidor processar!'
      }
    ],
    xp: 150
  }
]

// Adicionar mais 28 semanas...
const gerarAulasRestantes = (nomeBase: string, prefixo: string, semanaInicial: number): Aula[] => {
  const aulas: Aula[] = []
  for (let i = semanaInicial; i <= 32; i++) {
    aulas.push({
      id: `${prefixo}-${i}`,
      semana: i,
      titulo: `Semana ${i}: ${nomeBase}`,
      conceito: `Conceito da semana ${i} do projeto ${nomeBase}`,
      build: [
        `Passo 1 da semana ${i}`,
        `Passo 2 da semana ${i}`,
        `Passo 3 da semana ${i}`
      ],
      codigoExemplo: `// Código exemplo da semana ${i}`,
      quiz: [
        {
          pergunta: `Pergunta 1 da semana ${i}`,
          opcoes: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
          resposta: 0,
          explicacao: 'Explicação da resposta'
        }
      ],
      xp: 100 + (i * 10)
    })
  }
  return aulas
}

const houseCleanersCompleto = [
  ...houseCleanersAulas,
  ...gerarAulasRestantes('House Cleaners', 'house', 5)
]

// ============================================
// 🏢 ADMIN IMÓVEIS (Java + Spring Boot)
// ============================================

const adminImovelAulas: Aula[] = [
  {
    id: 'admin-1',
    semana: 1,
    titulo: 'Hello World em Spring Boot',
    conceito: 'Spring Boot torna Java fácil. É como uma casa pré-fabricada vs construir do zero.',
    build: [
      'Instale Java 17 e Maven',
      'Crie pom.xml com Spring Boot',
      'Compile: mvn clean install',
      'Execute: mvn spring-boot:run'
    ],
    codigoExemplo: `package com.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}`,
    quiz: [
      {
        pergunta: 'O que Spring Boot faz?',
        opcoes: [
          'Facilita criação de aplicações Java',
          'Limpa imóveis',
          'Administra condomínios',
          'Nada disso'
        ],
        resposta: 0,
        explicacao: 'Spring Boot é um framework que facilita desenvolvimento Java!'
      }
    ],
    xp: 100
  },
  ...gerarAulasRestantes('Admin Imóveis', 'admin', 2)
]

// ============================================
// 💈 SERVIÇOS-PRO (TypeScript + React)
// ============================================

const serviciosProAulas: Aula[] = [
  {
    id: 'servicos-1',
    semana: 1,
    titulo: 'Componente ServiceCard em React',
    conceito: 'React permite criar componentes reutilizáveis. Um ServiceCard mostra um serviço disponível.',
    build: [
      'Crie arquivo ServiceCard.tsx',
      'Defina interface TypeScript',
      'Retorne JSX estilizado',
      'Importe em App.tsx'
    ],
    codigoExemplo: `interface Service {
  id: number
  name: string
  price: number
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="card">
      <h3>{service.name}</h3>
      <p>R$ {service.price}</p>
      <button>Agendar</button>
    </div>
  )
}`,
    quiz: [
      {
        pergunta: 'O que é um componente React?',
        opcoes: [
          'Uma função que retorna JSX',
          'Um agendamento de serviço',
          'Uma página HTML',
          'Um banco de dados'
        ],
        resposta: 0,
        explicacao: 'Componentes React são funções que retornam JSX para renderizar UI!'
      }
    ],
    xp: 100
  },
  ...gerarAulasRestantes('ServiçosPro', 'servicos', 2)
]

// ============================================
// 🎓 ESCOLA-X (TypeScript + React)
// ============================================

const escolaXAulas: Aula[] = [
  {
    id: 'escola-1',
    semana: 1,
    titulo: 'Componente CourseCard',
    conceito: 'CourseCard mostra um curso disponível na plataforma. Componentes são blocos reutilizáveis.',
    build: [
      'Crie CourseCard.tsx',
      'Defina tipos TypeScript',
      'Retorne JSX com layout do card',
      'Use em lista de cursos'
    ],
    codigoExemplo: `interface Course {
  id: number
  title: string
  instructor: string
  price: number
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>Prof. {course.instructor}</p>
      <p>R$ {course.price}</p>
      <button>Inscrever</button>
    </div>
  )
}`,
    quiz: [
      {
        pergunta: 'TypeScript adiciona o quê ao JavaScript?',
        opcoes: [
          'Tipagem estática (tipos)',
          'Velocidade',
          'Segurança de acesso',
          'A e C'
        ],
        resposta: 3,
        explicacao: 'TypeScript adiciona tipos para evitar erros e melhorar IDE!'
      }
    ],
    xp: 100
  },
  ...gerarAulasRestantes('EscolaX', 'escola', 2)
]

// ============================================
// Exportar todos os cursos
// ============================================

export const cursos: Curso[] = [
  {
    id: 'house-cleaners',
    nome: '🧹 House Cleaners',
    descricao: 'App de agendamento de limpezas com Python + Flask',
    emoji: '🧹',
    cor: '#4CAF50',
    tech: 'Python + Flask',
    dia: 'Segunda 19:30',
    aulas: houseCleanersCompleto
  },
  {
    id: 'admin-imoveis',
    nome: '🏢 Admin Imóveis',
    descricao: 'Gestão de condomínios e imóveis em Java + Spring Boot',
    emoji: '🏢',
    cor: '#2196F3',
    tech: 'Java + Spring Boot',
    dia: 'Terça 19:30',
    aulas: adminImovelAulas
  },
  {
    id: 'servicos-pro',
    nome: '💈 ServiçosPro',
    descricao: 'Agenda para barbearia, estética, oficina em React',
    emoji: '💈',
    cor: '#FF9800',
    tech: 'TypeScript + React',
    dia: 'Quarta 19:30',
    aulas: serviciosProAulas
  },
  {
    id: 'escola-x',
    nome: '🎓 EscolaX',
    descricao: 'Plataforma de cursos online em React',
    emoji: '🎓',
    cor: '#9C27B0',
    tech: 'TypeScript + React',
    dia: 'Quinta 19:30',
    aulas: escolaXAulas
  }
]
