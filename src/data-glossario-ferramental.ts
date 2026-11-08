// 📚 GLOSSÁRIO + FERRAMENTAL + RECURSOS
// Explicações para iniciante total (nível criança de 5 anos)

export interface TermoGlossario {
  termo: string;
  categor: 'conceito' | 'ferramenta' | 'comando' | 'linguagem';
  explicacao_crianca: string;
  analogia_cotidiana: string;
  exemplo_pratico?: string;
  quando_usar: string;
}

export interface Ferramental {
  nome: string;
  categoria: 'linguagem' | 'framework' | 'gerenciador' | 'editor' | 'ferramenta' | 'outro';
  descricao: string;
  para_que_serve: string;
  como_instalar: string[];
  link_download: string;
  versao_minima?: string;
  tamanho_download?: string;
}

export interface RecursoAula {
  aula_id: string;
  ferramentas_necessarias: string[];
  termos_para_entender: string[];
  preparacao_antes_de_comecal: string[];
  tempo_total_setup?: string;
}

// ==================== GLOSSÁRIO ====================
export const GLOSSARIO: TermoGlossario[] = [
  {
    termo: 'Framework',
    categor: 'conceito',
    explicacao_crianca: 'Um Framework é um KIT PRONTO de coisas para você montar rápido. Como quando você compra um LEGO pronto em caixas, ao invés de desenhar do zero!',
    analogia_cotidiana: `
Imagine que quer fazer um bolo:

SEM FRAMEWORK = Fazer tudo do zero
├── Moer trigo
├── Extrair ovos da galinha
├── Fazer manteiga
└── Misturar tudo (horas!)

COM FRAMEWORK = Comprar mistura pronta
├── Abrir caixa
├── Adicionar ovos e leite
├── Assar (30 min)
└── Pronto!

Framework = Mistura pronta! 🎂
    `,
    quando_usar: 'Para criar servidores web rapidinho, sem reinventar a roda',
    exemplo_pratico: 'Flask é um framework. Sem Flask, você teria que programar como cada cliente se conecta ao servidor. Com Flask, é só 5 linhas!'
  },

  {
    termo: 'Python',
    categor: 'linguagem',
    explicacao_crianca: 'Python é uma LINGUAGEM DE PROGRAMAÇÃO. É como um idioma que o computador entende. Igual português, inglês, mas para computador!',
    analogia_cotidiana: `
Linguagens de programação = Idiomas

Português → Brasil entende
Inglês → EUA entende
Python → Computador entende

Python é a linguagem mais fácil do mundo! 🐍
    `,
    quando_usar: 'Quando quer criar programas rápido e fácil',
    exemplo_pratico: 'print("Olá") → Computador mostra: Olá'
  },

  {
    termo: 'Terminal / CMD / PowerShell',
    categor: 'ferramenta',
    explicacao_crianca: 'Terminal é como um "sistema de ordens". Você digita comandos e o computador OBEDECE! Sem clickar no mouse, só digitar.',
    analogia_cotidiana: `
Terminal = Controle remoto do computador

TV: Click no botão → Muda de canal
Computador: Digite comando → Computador obedece!

Exemplos de ordens:
- "criar pasta" → python criar_pasta.py
- "listar arquivos" → ls
- "abrir aplicativo" → python app.py
    `,
    quando_usar: 'Para instalar coisas, rodar programas, etc',
    exemplo_pratico: 'Digitar "python app.py" executa seu programa Python'
  },

  {
    termo: 'pip',
    categor: 'ferramenta',
    explicacao_crianca: 'pip é um "COMPRADOR AUTOMÁTICO" de ferramentas Python! Você diz o que quer, ele baixa e instala.',
    analogia_cotidiana: `
pip = Uber de softwares

Seu app precisa de Flask?
Ao invés de:
├── Procurar Flask na internet
├── Baixar arquivo
├── Instalar manualmente
└── Configurar

Você digita:
pip install flask
✅ Pronto! Instalado!

pip = Facilita demais! 📦
    `,
    quando_usar: 'Para instalar bibliotecas Python (Flask, Django, etc)',
    exemplo_pratico: 'pip install flask → Instala Flask automaticamente'
  },

  {
    termo: 'npm',
    categor: 'ferramenta',
    explicacao_crianca: 'npm é o "pip" mas para JavaScript/React! Baixa e instala dependências automaticamente.',
    analogia_cotidiana: 'npm = pip, mas para Node.js/React. Mesma coisa, linguagem diferente!',
    quando_usar: 'Para instalar dependências JavaScript (React, Vue, etc)',
    exemplo_pratico: 'npm install react → Instala React automaticamente'
  },

  {
    termo: 'localhost',
    categor: 'conceito',
    explicacao_crianca: 'localhost é SEU PRÓPRIO COMPUTADOR! Quando você acessa http://localhost:5000, você está acessando UM SERVIDOR QUE ESTÁ RODANDO NO SEU PC!',
    analogia_cotidiana: `
Servidor normal:
┌─────────────────────┐
│  Computador longe   │
│  (empresa, empresa) │
│  (alguém controla)  │
└─────────────────────┘
         ↓ internet
┌─────────────────────┐
│  SEU COMPUTADOR     │
│  (acessa de longe)  │
└─────────────────────┘

localhost:
┌─────────────────────┐
│  SEU COMPUTADOR     │
│  (servidor rodando) │
│  (você acessa local)│
└─────────────────────┘

localhost = Seu próprio computador sendo servidor! 🏠
    `,
    quando_usar: 'Para testar seu app localmente antes de publicar',
    exemplo_pratico: 'http://localhost:5000 → Abre seu servidor Flask no navegador'
  },

  {
    termo: 'Porta (8080, 5000, 3000, etc)',
    categor: 'conceito',
    explicacao_crianca: 'Porta é como um "número de apartamento" no seu computador. Diferentes servidores usam diferentes portas para não conflitar!',
    analogia_cotidiana: `
Seu computador = Prédio

Apartamento 5000 = Flask rodando
Apartamento 8080 = Spring Boot rodando
Apartamento 3000 = Node.js rodando

Cada um em um "apartamento" diferente!
    `,
    quando_usar: 'Para definir onde seu servidor roda',
    exemplo_pratico: 'Flask na porta 5000, Spring Boot na 8080, React na 3000'
  },

  {
    termo: 'API',
    categor: 'conceito',
    explicacao_crianca: 'API é um "MENU DE OPÇÕES" que seu servidor oferece. Tipo um cardápio de restaurante: você pede algo, servidor entrega!',
    analogia_cotidiana: `
Restaurante = Servidor

Você: "Quero um café"
Garçom (API): Pega pedido
Cozinha (servidor): Faz café
Garçom: Entrega café

API = Garçom que conecta você ao servidor! 🍽️
    `,
    quando_usar: 'Para sua aplicação conversar com o servidor',
    exemplo_pratico: 'GET /api/clientes → Servidor retorna lista de clientes'
  },

  {
    termo: 'Banco de Dados',
    categor: 'conceito',
    explicacao_crianca: 'Banco de Dados é um "FICHÁRIO INTELIGENTE" onde seus dados ficam salvos. Tipo pasta com abas no Excel, mas muito mais poderoso!',
    analogia_cotidiana: `
Banco de Dados = Fichário super organizado

Pasta: "Clientes"
├── João (nome, email, telefone)
├── Maria (nome, email, telefone)
└── Pedro (nome, email, telefone)

Pasta: "Agendamentos"
├── Limpeza João - 15/02
├── Limpeza Maria - 16/02
└── Limpeza Pedro - 17/02

Tudo conectado e rápido! 🗄️
    `,
    quando_usar: 'Para guardar dados do seu app de forma segura',
    exemplo_pratico: 'SQLite, MySQL, PostgreSQL = Tipos de banco de dados'
  },

  {
    termo: 'Git / GitHub',
    categor: 'comando',
    explicacao_crianca: 'Git é um "HISTÓRICO AUTOMÁTICO" do seu código. GitHub é onde você guarda esse histórico na nuvem!',
    analogia_cotidiana: `
Git = Google Docs para código

Google Docs:
├── Salva automaticamente
├── Mostra histórico de mudanças
├── Você pode "desfazer" tudo
└── Compartilhar com outros

GitHub = Google Docs mas para programadores! 📝
    `,
    quando_usar: 'Para guardar seu código na nuvem e trabalhar em equipe',
    exemplo_pratico: 'git push = Enviar código para GitHub'
  },

  {
    termo: 'Deploy',
    categor: 'conceito',
    explicacao_crianca: 'Deploy é "COLOCAR SEU APP NO AR"! Tirar do seu computador e colocar em um servidor que todo mundo acessa!',
    analogia_cotidiana: `
Sem Deploy:
Você → Seu computador → Só você acessa (localhost)

Com Deploy:
Você → Servidor Netlify/Vercel → MUNDO TODO acessa!

Deploy = Levar seu app do PC para o mundo! 🌍
    `,
    quando_usar: 'Quando seu app está pronto e você quer outras pessoas usarem',
    exemplo_pratico: 'https://mario-academy-2027.netlify.app = App deployado no Netlify'
  },

  {
    termo: 'Vite',
    categor: 'comando',
    explicacao_crianca: 'Vite é um "TURBO" para React! Deixa tudo mais rápido - desenvolvimento, build, tudo!',
    analogia_cotidiana: 'Vite = Turbina no carro. Mesma coisa, mas muito mais rápido! ⚡',
    quando_usar: 'Para criar projetos React modernos e rápidos',
    exemplo_pratico: 'npm create vite@latest meu-app -- --template react-ts'
  },

  {
    termo: 'Componente React',
    categor: 'conceito',
    explicacao_crianca: 'Componente é um "LEGO de interface". Você cria um, reutiliza 1000 vezes!',
    analogia_cotidiana: `
Lego = Componentes

Um bloco amarelo = Um componente (Button, Card, Header)
Milhões de blocos = Milha aplicações feitas com os mesmos componentes!

Componente = Reutilizar código! ♻️
    `,
    quando_usar: 'Para organizar sua interface React em pedaços reutilizáveis',
    exemplo_pratico: 'function Button() { return <button>Clique!</button> }'
  },

  {
    termo: 'Hook (useEffect, useState, etc)',
    categor: 'conceito',
    explicacao_crianca: 'Hook é como um "GATILHO AUTOMÁTICO" do React. Quando algo muda, ele reage!',
    analogia_cotidiana: `
Hook = Alarme

Alarme de despertador:
- Hora chega → Alarme toca
- useState: valor muda → Re-render
- useEffect: página carrega → Executa ação
    `,
    quando_usar: 'Para adicionar funcionalidades ao React',
    exemplo_pratico: 'useState para guardar dados, useEffect para carregar dados'
  },

  {
    termo: 'Node.js',
    categor: 'linguagem',
    explicacao_crianca: 'Node.js é JavaScript rodando FORA do navegador! Permite usar JavaScript para criar servidores!',
    analogia_cotidiana: `
JavaScript normal = Só no navegador (Chrome, Firefox)
Node.js = JavaScript em qualquer lugar (servidor, desktop, etc)

Node.js = Liberdade para JavaScript! 🚀
    `,
    quando_usar: 'Necessário para rodar React, npm, Vite, etc',
    exemplo_pratico: 'npm run dev = Usa Node.js para rodar seu servidor dev'
  },

  {
    termo: 'TypeScript',
    categor: 'linguagem',
    explicacao_crianca: 'TypeScript é JavaScript com "regras de segurança". Evita muitos erros!',
    analogia_cotidiana: `
JavaScript = Carro sem airbag (funciona, mas arriscado)
TypeScript = Carro com airbag (mais seguro!)

TypeScript = JavaScript seguro! 🛡️
    `,
    quando_usar: 'Para projetos maiores onde erros são caros',
    exemplo_pratico: 'const nome: string = "João" (garante que é texto)'
  },

  {
    termo: 'CSS',
    categor: 'linguagem',
    explicacao_crianca: 'CSS é o "MAQUIADOR" do HTML. HTML é a estrutura, CSS deixa bonito!',
    analogia_cotidiana: `
HTML = Esqueleto
CSS = Roupa + maquiagem
JavaScript = Movimento

CSS = Deixa bonito! 💄
    `,
    quando_usar: 'Para estilizar sua interface (cores, tamanho, posição)',
    exemplo_pratico: '.botao { color: blue; font-size: 20px; }'
  },

  {
    termo: 'Extensão de arquivo (.py, .js, .tsx, .java)',
    categor: 'conceito',
    explicacao_crianca: 'Extensão é o "TIPO DE ARQUIVO". Diz ao computador que programa usar!',
    analogia_cotidiana: `
Extensões = Rótulos

.txt = Texto (Bloco de notas)
.jpg = Imagem (Visualizador)
.mp3 = Música (Spotify)
.py = Python (Python interpreter)
.js = JavaScript (Node.js)

Extensão = Diz ao computador como abrir! 🏷️
    `,
    quando_usar: 'Sempre que criar um arquivo',
    exemplo_pratico: 'app.py (Python), App.tsx (TypeScript React), Main.java (Java)'
  },
];

// ==================== FERRAMENTAL ====================
export const FERRAMENTAL: Ferramental[] = [
  {
    nome: 'Python',
    categoria: 'linguagem',
    descricao: 'Linguagem de programação fácil e poderosa',
    para_que_serve: 'Criar programas Python (Flask, scripts, bots, etc)',
    como_instalar: [
      '1. Abrir python.org',
      '2. Clicar em "Download" (versão 3.11+)',
      '3. Executar instalador',
      '4. ✅ IMPORTANTE: Marcar "Add Python to PATH"',
      '5. Clicar "Install Now"',
      '6. Aguardar terminar',
      '7. REINICIAR computador',
      '8. Testar: abrir Terminal, digitar "python --version"'
    ],
    link_download: 'https://www.python.org/downloads/',
    versao_minima: '3.9+',
    tamanho_download: '~100 MB'
  },

  {
    nome: 'Node.js',
    categoria: 'linguagem',
    descricao: 'JavaScript rodando fora do navegador',
    para_que_serve: 'Criar apps React, usar npm, executar JavaScript no servidor',
    como_instalar: [
      '1. Abrir nodejs.org',
      '2. Clicar em "LTS" (versão estável)',
      '3. Executar instalador',
      '4. Clicar "Next" em tudo',
      '5. Clicar "Install"',
      '6. Aguardar terminar',
      '7. REINICIAR computador',
      '8. Testar: Terminal, digitar "node --version" e "npm --version"'
    ],
    link_download: 'https://nodejs.org/',
    versao_minima: '18+',
    tamanho_download: '~150 MB'
  },

  {
    nome: 'Java JDK',
    categoria: 'linguagem',
    descricao: 'Kit de desenvolvimento Java',
    para_que_serve: 'Criar aplicações Java (Spring Boot, etc)',
    como_instalar: [
      '1. Abrir oracle.com/java',
      '2. Procurar "Java Downloads"',
      '3. Baixar JDK 17+ (free)',
      '4. Executar instalador',
      '5. Seguir passos padrão',
      '6. REINICIAR computador',
      '7. Testar: Terminal, digitar "java -version"'
    ],
    link_download: 'https://www.oracle.com/java/technologies/downloads/',
    versao_minima: '17+',
    tamanho_download: '~300 MB'
  },

  {
    nome: 'Maven',
    categoria: 'gerenciador',
    descricao: 'Gerenciador de projetos Java',
    para_que_serve: 'Instalar dependências Java, rodar Spring Boot',
    como_instalar: [
      '1. Abrir maven.apache.org',
      '2. Procurar "Download"',
      '3. Baixar versão binária (.zip)',
      '4. Extrair em C:\\Program Files\\ (Windows)',
      '5. Adicionar ao PATH (Variáveis de Ambiente)',
      '6. REINICIAR computador',
      '7. Testar: Terminal, digitar "mvn -version"'
    ],
    link_download: 'https://maven.apache.org/download.cgi',
    tamanho_download: '~10 MB'
  },

  {
    nome: 'VSCode',
    categoria: 'editor',
    descricao: 'Editor de código mais usado do mundo',
    para_que_serve: 'Escrever e editar código',
    como_instalar: [
      '1. Abrir code.visualstudio.com',
      '2. Clicar "Download"',
      '3. Escolher seu sistema (Windows/Mac/Linux)',
      '4. Executar instalador',
      '5. Clicar "Next" em tudo',
      '6. Clicar "Install"',
      '7. Aguardar terminar'
    ],
    link_download: 'https://code.visualstudio.com/',
    tamanho_download: '~100 MB'
  },

  {
    nome: 'Git',
    categoria: 'ferramenta',
    descricao: 'Sistema de controle de versão',
    para_que_serve: 'Guardar histórico do código, fazer deploy',
    como_instalar: [
      '1. Abrir git-scm.com',
      '2. Clicar "Download"',
      '3. Escolher seu sistema',
      '4. Executar instalador',
      '5. Clicar "Next" em tudo',
      '6. Clicar "Install"',
      '7. REINICIAR computador',
      '8. Testar: Terminal, digitar "git --version"'
    ],
    link_download: 'https://git-scm.com/',
    tamanho_download: '~60 MB'
  },

  {
    nome: 'Chrome / Firefox',
    categoria: 'outro',
    descricao: 'Navegador para testar suas aplicações',
    para_que_serve: 'Abrir localhost e testar seu app',
    como_instalar: [
      '1. Abrir google.com/chrome ou mozilla.org',
      '2. Clicar download',
      '3. Executar instalador',
      '4. Aguardar terminar'
    ],
    link_download: 'https://www.google.com/chrome/',
    tamanho_download: '~200 MB'
  },

  {
    nome: 'Netlify',
    categoria: 'ferramenta',
    descricao: 'Plataforma de deploy gratuita',
    para_que_serve: 'Colocar seu app online para o mundo todo acessar',
    como_instalar: [
      '1. Abrir netlify.com',
      '2. Clicar "Sign up"',
      '3. Usar GitHub para login (mais fácil)',
      '4. Pronto! Não precisa instalar nada'
    ],
    link_download: 'https://app.netlify.com/',
    tamanho_download: 'Web-based'
  },
];

// ==================== RECURSOS POR AULA ====================
export const RECURSOS_AULAS: RecursoAula[] = [
  {
    aula_id: 'hc-semana-01',
    ferramentas_necessarias: ['Python'],
    termos_para_entender: ['Framework', 'Python', 'Terminal/CMD', 'localhost', 'porta'],
    preparacao_antes_de_comecal: [
      '✅ Instalar Python (python.org)',
      '✅ Verificar: python --version no Terminal',
      '✅ Abrir VSCode',
      '✅ Criar pasta: C:\\Users\\SeuNome\\house-cleaners',
      '✅ Abrir Terminal/PowerShell nessa pasta'
    ],
    tempo_total_setup: '10-15 min'
  },

  {
    aula_id: 'ai-semana-01',
    ferramentas_necessarias: ['Java JDK', 'Maven'],
    termos_para_entender: ['Framework', 'Java', 'Terminal/CMD', 'localhost', 'porta'],
    preparacao_antes_de_comecal: [
      '✅ Instalar Java JDK (oracle.com/java)',
      '✅ Instalar Maven (maven.apache.org)',
      '✅ Verificar: java -version',
      '✅ Verificar: mvn -version',
      '✅ Abrir start.spring.io na web',
      '✅ Baixar primeiro projeto Spring Boot'
    ],
    tempo_total_setup: '20-30 min'
  },

  {
    aula_id: 'sp-semana-01',
    ferramentas_necessarias: ['Node.js'],
    termos_para_entender: ['Framework', 'JavaScript', 'React', 'npm', 'TypeScript', 'Vite'],
    preparacao_antes_de_comecal: [
      '✅ Instalar Node.js (nodejs.org)',
      '✅ Verificar: node --version',
      '✅ Verificar: npm --version',
      '✅ Instalar VSCode (code.visualstudio.com)',
      '✅ Abrir Terminal/PowerShell',
      '✅ Criar pasta: C:\\Users\\SeuNome\\servicos-pro'
    ],
    tempo_total_setup: '15-20 min'
  },

  {
    aula_id: 'ex-semana-01',
    ferramentas_necessarias: ['Node.js'],
    termos_para_entender: ['Framework', 'React', 'TypeScript', 'Hook', 'useState', 'npm'],
    preparacao_antes_de_comecal: [
      '✅ Instalar Node.js',
      '✅ Verificar: node --version e npm --version',
      '✅ Instalar VSCode',
      '✅ Entender o que é React (ler glossário)',
      '✅ Entender o que é Hook (ler glossário)',
      '✅ Terminal na pasta escola-x'
    ],
    tempo_total_setup: '15-20 min'
  },
];

// ==================== RESUMO RÁPIDO ====================
export const RESUMO_FERRAMENTAL = `
🛠️ FERRAMENTAL TOTAL NECESSÁRIO

PARA HOUSE CLEANERS (Python):
├── Python 3.11+ ........................ 100 MB
├── VSCode ............................ 100 MB
├── Git ................................ 60 MB
└── Navegador ......................... 200 MB
Total: ~460 MB | Tempo: 30 min

PARA ADMIN IMÓVEIS (Java):
├── Java JDK 17+ ...................... 300 MB
├── Maven ............................. 10 MB
├── VSCode ............................ 100 MB
├── Git ................................ 60 MB
└── Navegador ......................... 200 MB
Total: ~670 MB | Tempo: 45 min

PARA SERVIÇOS PRO (React):
├── Node.js ........................... 150 MB
├── VSCode ............................ 100 MB
├── Git ................................ 60 MB
└── Navegador ......................... 200 MB
Total: ~510 MB | Tempo: 30 min

PARA ESCOLA X (React + Gamificação):
├── Node.js ........................... 150 MB
├── VSCode ............................ 100 MB
├── Git ................................ 60 MB
└── Navegador ......................... 200 MB
Total: ~510 MB | Tempo: 30 min

=====================================
TOTAL TUDO = ~2 GB | Tempo: 2-3 horas
(só precisa fazer uma vez!)
`;
