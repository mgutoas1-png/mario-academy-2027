// 📚 TODAS AS AULAS — SEMANA 1 COMPLETA (4 Projetos)

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

  conceito: {
    definicao: string;
    analogia: string;
    diagrama_ascii: string;
  };

  passos: Passo[];

  teste: {
    confirmacoes_visuais: string[];
    resultado_esperado: string;
  };

  checklist_final: string[];

  problemas_comuns: {
    problema: string;
    solucao: string;
  }[];
}

export const TODAS_AS_AULAS: Aula[] = [
  {
    id: 'hc-semana-01',
    numero: 1,
    projeto: 'house-cleaners',
    semana: 1,
    titulo: '🚀 Primeiro Servidor Web com Flask',
    descricao: 'Crie seu primeiro "Hello World" - um servidor que funciona no seu computador!',
    duracao: '30min',

    conceito: {
      definicao: 'Flask é um NEGOCIANTE DE MENSAGENS. Você quer enviar uma mensagem do seu computador para o navegador? Flask faz isso! É como um garçom que pega o que você quer e leva para o cliente.',
      analogia: 'Imagina uma LOJA DE LIMPEZA (House Cleaners): SEU COMPUTADOR (a cozinha) → [FLASK - garçom] → SEU NAVEGADOR (o cliente). Quando você digita: http://localhost:5000, Flask pega a mensagem e leva para você!',
      diagrama_ascii: 'SEU COMPUTADOR (app.py) → Flask → localhost:5000 → NAVEGADOR → "🧹 House Cleaners!"',
    },

    passos: [
      {
        numero: 1,
        titulo: 'Verificar se Python está instalado',
        descricao: 'Abra o Terminal/CMD e confirme que tem Python',
        checklist: ['Terminal', 'python --version', 'Se aparece versão = OK'],
      },
      {
        numero: 2,
        titulo: 'Instalar Flask',
        descricao: 'Baixar a ferramenta Flask',
        checklist: ['Terminal: pip install flask', 'Esperar terminar', 'Ver "Successfully installed"'],
      },
      {
        numero: 3,
        titulo: 'Criar arquivo app.py',
        descricao: 'Arquivo Python com o servidor',
        codigos: [
          {
            linguagem: 'python',
            arquivo: 'app.py',
            conteudo: `from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return '<h1>🧹 Bem-vindo ao House Cleaners!</h1>'

if __name__ == '__main__':
    print('🚀 Servidor rodando em: http://localhost:5000')
    app.run(debug=True, port=5000)`
          }
        ],
        checklist: ['Criar arquivo app.py', 'Copiar código', 'Salvar'],
      },
      {
        numero: 4,
        titulo: 'Rodar: python app.py',
        descricao: 'Iniciar o servidor',
        checklist: ['Terminal: python app.py', 'Ver "Servidor rodando..."'],
      },
      {
        numero: 5,
        titulo: 'Abrir navegador',
        descricao: 'Acessar localhost:5000',
        checklist: ['Navegador: localhost:5000', 'Ver "🧹 Bem-vindo ao House Cleaners!"'],
      },
    ],

    teste: {
      confirmacoes_visuais: [
        '✅ "Servidor rodando em: http://localhost:5000"',
        '✅ Browser mostrando "🧹 Bem-vindo ao House Cleaners!"',
      ],
      resultado_esperado: 'Servidor Flask rodando e mostrando mensagem no navegador',
    },

    checklist_final: [
      'Python verificado',
      'Flask instalado',
      'app.py criado',
      'Servidor rodando',
      'localhost:5000 abre no navegador',
      'Mensagem visível',
    ],

    problemas_comuns: [
      { problema: 'python: command not found', solucao: 'Instalar Python de python.org' },
      { problema: 'No module named flask', solucao: 'pip install flask' },
    ],
  },

  {
    id: 'ai-semana-01',
    numero: 1,
    projeto: 'admin-imoveis',
    semana: 1,
    titulo: '🚀 Primeiro Servidor Spring Boot',
    descricao: 'Crie seu primeiro servidor em Java - Admin de Imóveis começando!',
    duracao: '30min',

    conceito: {
      definicao: 'Spring Boot é como Flask, mas em Java! Cria servidores web super rápidos.',
      analogia: 'Se Flask é um garçom simples, Spring Boot é um gerente experiente que já sabe tudo pronto!',
      diagrama_ascii: 'JAVA + Spring Boot → localhost:8080 → 🏢 Bem-vindo ao Admin Imóveis!',
    },

    passos: [
      {
        numero: 1,
        titulo: 'Instalar JDK Java',
        descricao: 'Java precisa estar instalado',
        checklist: ['Baixar JDK em oracle.com/java', 'Instalar', 'java -version no Terminal'],
      },
      {
        numero: 2,
        titulo: 'Ir para start.spring.io',
        descricao: 'Site que gera projetos Spring',
        checklist: ['Abrir start.spring.io', 'Selecionar Maven + Java 17+', 'Add Spring Web'],
      },
      {
        numero: 3,
        titulo: 'Baixar e extrair',
        descricao: 'Clicar Generate e extrair ZIP',
        checklist: ['Generate', 'Extrair arquivo'],
      },
      {
        numero: 4,
        titulo: 'Criar Controller',
        descricao: 'Arquivo que responde requisições',
        codigos: [
          {
            linguagem: 'java',
            arquivo: 'ImoveisController.java',
            conteudo: `package com.mario.admin_imoveis.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ImoveisController {
    @GetMapping("/")
    public String home() {
        return "🏢 Bem-vindo ao Admin Imóveis!";
    }
}`
          }
        ],
        checklist: ['Pasta: src/main/java/.../controller/', 'Arquivo ImoveisController.java'],
      },
      {
        numero: 5,
        titulo: 'Rodar: mvn spring-boot:run',
        descricao: 'Iniciar servidor',
        checklist: ['Terminal: mvn spring-boot:run', 'Ver "Tomcat started on port 8080"'],
      },
      {
        numero: 6,
        titulo: 'Testar localhost:8080',
        descricao: 'Ver no navegador',
        checklist: ['Navegador: localhost:8080', 'Ver mensagem'],
      },
    ],

    teste: {
      confirmacoes_visuais: [
        '✅ "Tomcat started on port(s): 8080"',
        '✅ localhost:8080 mostrando "🏢 Bem-vindo ao Admin Imóveis!"',
      ],
      resultado_esperado: 'Servidor Spring Boot rodando',
    },

    checklist_final: [
      'JDK instalado',
      'Maven instalado',
      'start.spring.io acessado',
      'Projeto extraído',
      'Controller criado',
      'mvn spring-boot:run executado',
      'localhost:8080 funcionando',
    ],

    problemas_comuns: [
      { problema: 'java: command not found', solucao: 'Instalar JDK em oracle.com/java' },
      { problema: 'Porta 8080 em uso', solucao: 'Mudar em application.properties' },
    ],
  },

  {
    id: 'sp-semana-01',
    numero: 1,
    projeto: 'servicos-pro',
    semana: 1,
    titulo: '🚀 Primeiro App React',
    descricao: 'Crie seu primeiro App React - Marketplace de Serviços começando!',
    duracao: '30min',

    conceito: {
      definicao: 'React é uma biblioteca que cria interfaces bonitas e rápidas no navegador. É como desenhar na tela com JavaScript!',
      analogia: 'Se Flask/Spring Boot são o servidor, React é o desenho bonito que o usuário vê!',
      diagrama_ascii: 'React (App.tsx) → Vite (build) → Navegador → 💈 ServiçosPro (bonito + rápido)',
    },

    passos: [
      {
        numero: 1,
        titulo: 'Instalar Node.js',
        descricao: 'Node.js é necessário para React',
        checklist: ['Baixar nodejs.org (LTS)', 'Instalar', 'node --version'],
      },
      {
        numero: 2,
        titulo: 'Criar projeto React',
        descricao: 'Usar Vite para criar',
        checklist: ['Terminal: npm create vite@latest servicos-pro -- --template react-ts'],
      },
      {
        numero: 3,
        titulo: 'Instalar dependências',
        descricao: 'npm install',
        checklist: ['cd servicos-pro', 'npm install'],
      },
      {
        numero: 4,
        titulo: 'Criar App.tsx',
        descricao: 'Componente principal',
        codigos: [
          {
            linguagem: 'typescript',
            arquivo: 'src/App.tsx',
            conteudo: `import './App.css'

function App() {
  return (
    <div>
      <h1>💈 ServiçosPro</h1>
      <p>Bem-vindo ao Marketplace!</p>
      <button onClick={() => alert('Parabéns! 🎉')}>
        Clique aqui!
      </button>
    </div>
  )
}

export default App`
          }
        ],
        checklist: ['Abrir src/App.tsx', 'Copiar código', 'Salvar'],
      },
      {
        numero: 5,
        titulo: 'Rodar: npm run dev',
        descricao: 'Iniciar servidor dev',
        checklist: ['Terminal: npm run dev', 'Ver localhost:5173'],
      },
      {
        numero: 6,
        titulo: 'Testar no navegador',
        descricao: 'Ver página React',
        checklist: ['localhost:5173', 'Ver "💈 ServiçosPro"', 'Botão funciona'],
      },
    ],

    teste: {
      confirmacoes_visuais: [
        '✅ "➜ Local: http://localhost:5173"',
        '✅ Página mostrando "💈 ServiçosPro"',
        '✅ Botão interativo',
      ],
      resultado_esperado: 'App React bonito abrindo em localhost:5173',
    },

    checklist_final: [
      'Node.js instalado',
      'Projeto React criado',
      'npm install completado',
      'App.tsx criado',
      'npm run dev executado',
      'localhost:5173 abrindo',
      'App funcionando',
    ],

    problemas_comuns: [
      { problema: 'npm: command not found', solucao: 'Instalar Node.js em nodejs.org' },
      { problema: 'Porta 5173 em uso', solucao: 'npm run dev -- --port 5174' },
    ],
  },

  {
    id: 'ex-semana-01',
    numero: 1,
    projeto: 'escola-x',
    semana: 1,
    titulo: '🚀 App React com Gamificação',
    descricao: 'Crie seu primeiro App com XP e levels - Plataforma de Cursos começando!',
    duracao: '30min',

    conceito: {
      definicao: 'React + Gamificação = App bonito com pontos, levels, badges! Como um videogame!',
      analogia: 'Se React é o desenho, Gamificação é a diversão - pontos, levels, conquistas!',
      diagrama_ascii: 'React (App.tsx) + useGamification (hook) → XP + Level + Badges → 🎮 EscolaX',
    },

    passos: [
      {
        numero: 1,
        titulo: 'Instalar Node.js',
        descricao: 'Node.js para React',
        checklist: ['Baixar nodejs.org', 'Instalar', 'Verificar'],
      },
      {
        numero: 2,
        titulo: 'Criar projeto React',
        descricao: 'npm create vite',
        checklist: ['npm create vite@latest escola-x -- --template react-ts'],
      },
      {
        numero: 3,
        titulo: 'npm install',
        descricao: 'Instalar libs',
        checklist: ['cd escola-x', 'npm install'],
      },
      {
        numero: 4,
        titulo: 'Criar useGamification.ts',
        descricao: 'Hook para XP, levels',
        codigos: [
          {
            linguagem: 'typescript',
            arquivo: 'src/hooks/useGamification.ts',
            conteudo: `import { useState } from 'react';

export const useGamification = () => {
  const [game, setGame] = useState({
    xp: 100,
    level: 1,
    badges: ['bronze']
  });

  const adicionarXP = (valor: number) => {
    const novoXP = game.xp + valor;
    const novoLevel = Math.floor(novoXP / 500) + 1;
    setGame({ ...game, xp: novoXP, level: novoLevel });
  };

  return { game, adicionarXP };
};`
          }
        ],
        checklist: ['src/hooks/', 'useGamification.ts', 'Copiar código'],
      },
      {
        numero: 5,
        titulo: 'Atualizar App.tsx',
        descricao: 'Usar hook no App',
        codigos: [
          {
            linguagem: 'typescript',
            arquivo: 'src/App.tsx',
            conteudo: `import './App.css'
import { useGamification } from './hooks/useGamification'

function App() {
  const { game, adicionarXP } = useGamification()
  return (
    <div>
      <h1>🎓 EscolaX</h1>
      <div>XP: {game.xp}</div>
      <div>Level: {game.level}</div>
      <button onClick={() => adicionarXP(50)}>
        Ganhar 50 XP! 🎯
      </button>
    </div>
  )
}

export default App`
          }
        ],
        checklist: ['App.tsx atualizado', 'Import do hook'],
      },
      {
        numero: 6,
        titulo: 'npm run dev',
        descricao: 'Rodar servidor',
        checklist: ['Terminal: npm run dev', 'localhost:5173'],
      },
      {
        numero: 7,
        titulo: 'Testar interatividade',
        descricao: 'Clicar no botão',
        checklist: ['Navegador: localhost:5173', 'Clicar "Ganhar 50 XP"', 'XP aumenta'],
      },
    ],

    teste: {
      confirmacoes_visuais: [
        '✅ localhost:5173 abrindo',
        '✅ "🎓 EscolaX" mostrando',
        '✅ XP e Level visíveis',
        '✅ Botão funciona e XP aumenta',
      ],
      resultado_esperado: 'App React com gamificação funcional - XP aumenta ao clicar',
    },

    checklist_final: [
      'Node.js instalado',
      'Projeto React criado',
      'npm install completado',
      'useGamification.ts criado',
      'App.tsx atualizado',
      'npm run dev executado',
      'localhost:5173 abrindo',
      'XP e level funcionando',
    ],

    problemas_comuns: [
      { problema: 'Hook não funciona', solucao: 'Verificar import correto' },
      { problema: 'Página não atualiza', solucao: 'Salvar arquivo e F5 no navegador' },
    ],
  },

  // ==================== HOUSE CLEANERS — SEMANA 2 ====================
  {
    id: 'hc-semana-02',
    numero: 2,
    projeto: 'house-cleaners',
    semana: 2,
    titulo: '💾 Banco de Dados SQLite',
    descricao: 'Cria tabelas, insere dados, consulta com relações. Seu primeiro banco funcional!',
    duracao: '30min',
    conceito: {
      definicao: 'Banco de dados é um "fichário inteligente" que guarda seus dados de forma organizada!',
      analogia: 'Imagina uma PLANILHA SUPER POTENTE que não perde dados e conecta informações!',
      diagrama_ascii: 'BANCO SQLite → Tabela: Clientes → Tabela: Agendamentos → Tudo conectado!'
    },
    passos: [
      { numero: 1, titulo: 'Criar arquivo database.py', descricao: 'Arquivo que cria o banco', checklist: ['Arquivo criado', 'Salvo'] },
      { numero: 2, titulo: 'Criar tabelas SQL', descricao: 'CREATE TABLE usuarios, agendamentos', checklist: ['Tabelas OK'] },
      { numero: 3, titulo: 'Inserir dados', descricao: 'INSERT clientes exemplo', checklist: ['3 clientes adicionados'] },
      { numero: 4, titulo: 'Rodar python database.py', descricao: 'Executar e ver resultado', checklist: ['Banco criado'] },
    ],
    teste: {
      confirmacoes_visuais: ['✅ clientes.db criado', '✅ 3 clientes adicionados', '✅ Agendamentos listados'],
      resultado_esperado: 'Arquivo clientes.db com dados e relacionamentos funcionando'
    },
    checklist_final: ['database.py criado', 'Tabelas criadas', 'Dados inseridos', 'python database.py executado'],
    problemas_comuns: [
      { problema: 'Erro de SQL', solucao: 'Verificar sintaxe SQL em sqlitebrowser.org' },
      { problema: 'Arquivo não criado', solucao: 'Verificar pasta e permissões' }
    ],
  },

  // ==================== HOUSE CLEANERS — SEMANA 3 ====================
  {
    id: 'hc-semana-03',
    numero: 3,
    projeto: 'house-cleaners',
    semana: 3,
    titulo: '🌐 Flask + Banco de Dados',
    descricao: 'Conecte Flask com SQLite! Servidor web mostrando dados reais!',
    duracao: '30min',
    conceito: {
      definicao: 'Flask lê dados do banco e mostra em HTML dinamicamente!',
      analogia: 'Flask = Chef que pega ingredientes (dados) e monta um prato (página HTML)!',
      diagrama_ascii: 'Navegador → Flask app.py → lê database.db → Retorna HTML com dados'
    },
    passos: [
      { numero: 1, titulo: 'pip install flask', descricao: 'Instalar Flask', checklist: ['Flask instalado'] },
      { numero: 2, titulo: 'Criar app.py conectado ao banco', descricao: 'Import sqlite3, conectar BD', checklist: ['Conexão OK'] },
      { numero: 3, titulo: 'Criar rota que busca dados', descricao: '@app.route("/") que faz SELECT', checklist: ['Rota funciona'] },
      { numero: 4, titulo: 'Criar template HTML', descricao: 'templates/index.html com dados', checklist: ['Template pronto'] },
    ],
    teste: {
      confirmacoes_visuais: ['✅ Flask rodando', '✅ Página mostra clientes', '✅ Dados estão VIVOS do banco'],
      resultado_esperado: 'localhost:5000 mostra lista de clientes vindo do banco SQLite em tempo real'
    },
    checklist_final: ['Flask instalado', 'app.py com BD', 'Rota criada', 'Template HTML', 'Dados aparecem'],
    problemas_comuns: [
      { problema: 'Dados não aparecem', solucao: 'Verificar se database.py foi executado' },
      { problema: 'Template não renderiza', solucao: 'Checkar folder templates/ existe' }
    ],
  },

  // ==================== HOUSE CLEANERS — SEMANA 4 ====================
  {
    id: 'hc-semana-04',
    numero: 4,
    projeto: 'house-cleaners',
    semana: 4,
    titulo: '📝 Formulário + INSERT',
    descricao: 'Adicionar clientes via formulário! CRUD completo!',
    duracao: '30min',
    conceito: {
      definicao: 'Formulário HTML envia dados para Flask, Flask faz INSERT no banco. Ciclo completo!',
      analogia: 'Formulário = Caixa de sugestão. Usuário escreve, você guarda no banco!',
      diagrama_ascii: 'Form HTML → POST → Flask → INSERT → SQLite → ✅ Novo cliente!'
    },
    passos: [
      { numero: 1, titulo: 'Criar template com formulário', descricao: 'HTML form com input fields', checklist: ['Form visível'] },
      { numero: 2, titulo: 'Criar rota POST', descricao: '@app.route("/adicionar", methods=["POST"])', checklist: ['Rota POST OK'] },
      { numero: 3, titulo: 'Validar dados', descricao: 'Verificar campos não vazios', checklist: ['Validação OK'] },
      { numero: 4, titulo: 'Fazer INSERT', descricao: 'INSERT INTO usuarios com request.form', checklist: ['Dado salvo'] },
    ],
    teste: {
      confirmacoes_visuais: ['✅ Formulário carrega', '✅ Submit funciona', '✅ Lista atualiza com novo cliente'],
      resultado_esperado: 'Preencher nome/email/telefone, clicar "Adicionar", cliente aparece na lista'
    },
    checklist_final: ['Formulário HTML criado', 'Rota POST funciona', 'Validação OK', 'INSERT funciona', 'Lista atualiza'],
    problemas_comuns: [
      { problema: 'Formulário não envia', solucao: 'Verificar name="" dos inputs' },
      { problema: 'Erro 404 ao enviar', solucao: 'Verificar rota /adicionar e method="POST"' }
    ],
  },
];
