// 💻 GUIA DE IDEs — Como configurar CADA uma

export interface IDEGuia {
  nome: string;
  para: string;
  download_link: string;
  versao: string;
  tamanho: string;
  passos_instalacao: string[];
  primeiros_passos: string[];
  extensoes_importantes?: string[];
  atalhos_essenciais?: { comando: string; tecla: string }[];
  troubleshooting: { problema: string; solucao: string }[];
}

export const GUIA_IDES: IDEGuia[] = [
  {
    nome: 'PyCharm Community',
    para: '🧹 House Cleaners (Python + Flask)',
    download_link: 'https://www.jetbrains.com/pycharm/download/',
    versao: 'Community Edition (Gratuita)',
    tamanho: '~500 MB',

    passos_instalacao: [
      '1. Abrir jetbrains.com/pycharm/download/',
      '2. Clicar em "Community Edition" (FREE)',
      '3. Escolher seu sistema (Windows/Mac/Linux)',
      '4. Executar instalador',
      '5. Clicar "Next" em tudo',
      '6. REINICIAR computador',
      '7. Abrir PyCharm',
      '8. Escolher "Create New Project"',
    ],

    primeiros_passos: [
      '1. Criar novo projeto → "Python"',
      '2. Nome: "house-cleaners"',
      '3. Selecionar Python 3.11+',
      '4. Clicar "Create"',
      '5. No projeto, botão direito → New → Python File',
      '6. Criar app.py e database.py',
      '7. Terminal dentro do PyCharm (View → Tool Windows → Terminal)',
      '8. Executar: python app.py',
    ],

    extensoes_importantes: [
      'Database Browser Plugin (para ver SQLite)',
      'Flask Support (suporte para Flask)',
      'Git Integration (já vem)',
    ],

    atalhos_essenciais: [
      { comando: 'Executar arquivo', tecla: 'Shift + F10' },
      { comando: 'Terminal', tecla: 'Alt + F12' },
      { comando: 'Debug', tecla: 'Shift + F9' },
      { comando: 'Autocomplete', tecla: 'Ctrl + Space' },
      { comando: 'Buscar arquivo', tecla: 'Ctrl + Shift + N' },
    ],

    troubleshooting: [
      {
        problema: 'Python não encontrado',
        solucao: 'PyCharm → Settings → Project → Python Interpreter → Adicionar Python 3.11+',
      },
      {
        problema: 'Terminal não abre',
        solucao: 'View → Tool Windows → Terminal (ou Alt + F12)',
      },
      {
        problema: 'Flask não importa',
        solucao: 'Terminal: pip install flask, depois reiniciar PyCharm',
      },
    ],
  },

  {
    nome: 'IntelliJ IDEA Community',
    para: '🏢 Admin Imóveis (Java + Spring Boot)',
    download_link: 'https://www.jetbrains.com/idea/download/',
    versao: 'Community Edition (Gratuita)',
    tamanho: '~700 MB',

    passos_instalacao: [
      '1. Abrir jetbrains.com/idea/download/',
      '2. Clicar em "Community Edition" (FREE)',
      '3. Escolher seu sistema',
      '4. Executar instalador',
      '5. Clicar "Next" em tudo',
      '6. REINICIAR computador',
      '7. Abrir IntelliJ',
      '8. Escolher "New Project"',
    ],

    primeiros_passos: [
      '1. New Project → "Java"',
      '2. JDK deve estar selecionado (verificar)',
      '3. Nome: "admin-imoveis"',
      '4. Clicar "Create"',
      '5. Na pasta do projeto, clicar direito → New → Java Class',
      '6. Criar ImoveisController.java',
      '7. Terminal: View → Tool Windows → Terminal',
      '8. Depois usar start.spring.io para projeto Spring Boot',
    ],

    extensoes_importantes: [
      'Spring Support (para Spring Boot)',
      'Maven Support (já vem)',
      'Database Browser (para H2 DB)',
    ],

    atalhos_essenciais: [
      { comando: 'Run', tecla: 'Shift + F10' },
      { comando: 'Debug', tecla: 'Shift + F9' },
      { comando: 'Terminal', tecla: 'Alt + F12' },
      { comando: 'Format Code', tecla: 'Ctrl + Alt + L' },
      { comando: 'Build Project', tecla: 'Ctrl + F9' },
    ],

    troubleshooting: [
      {
        problema: 'JDK não encontrado',
        solucao: 'Settings → Project → SDK → Add SDK → Home → selecionar pasta Java',
      },
      {
        problema: 'Spring não reconhecido',
        solucao: 'Plugins → Search "Spring" → Install Spring Boot Assistant',
      },
      {
        problema: 'Maven error',
        solucao: 'Terminal: mvn clean install, depois reimportar projeto',
      },
    ],
  },

  {
    nome: 'Visual Studio Code',
    para: '💈 ServiçosPro + 🎓 EscolaX (React + TypeScript)',
    download_link: 'https://code.visualstudio.com/',
    versao: 'Community (Gratuita)',
    tamanho: '~100 MB',

    passos_instalacao: [
      '1. Abrir code.visualstudio.com',
      '2. Clicar "Download"',
      '3. Escolher seu sistema',
      '4. Executar instalador',
      '5. Clicar "Next" em tudo',
      '6. ✅ IMPORTANTE: Marcar "Add to PATH"',
      '7. Clicar "Install"',
      '8. REINICIAR computador',
      '9. Abrir VSCode',
    ],

    primeiros_passos: [
      '1. File → Open Folder → Escolher pasta do projeto',
      '2. Terminal → New Terminal (Ctrl + `)',
      '3. npm create vite@latest meu-app -- --template react-ts',
      '4. cd meu-app && npm install',
      '5. npm run dev',
      '6. Abrir http://localhost:5173',
      '7. Começar a editar src/App.tsx',
      '8. Arquivo salva automaticamente (Ctrl + S confirma)',
    ],

    extensoes_importantes: [
      'ES7+ React/Redux/React-Native snippets',
      'Prettier - Code formatter',
      'TypeScript Vue Plugin',
      'Thunder Client (testa APIs)',
      'Git Graph (visualizar git)',
      'Docker (se usar containers)',
    ],

    atalhos_essenciais: [
      { comando: 'Terminal', tecla: 'Ctrl + `' },
      { comando: 'Buscar arquivo', tecla: 'Ctrl + P' },
      { comando: 'Buscar em arquivos', tecla: 'Ctrl + Shift + F' },
      { comando: 'Formatter', tecla: 'Shift + Alt + F' },
      { comando: 'Comentar linha', tecla: 'Ctrl + /' },
      { comando: 'Duplicar linha', tecla: 'Alt + Shift + Down' },
    ],

    troubleshooting: [
      {
        problema: 'npm comando não reconhecido',
        solucao: 'Reinstalar Node.js e marcar "Add to PATH", depois reiniciar VSCode',
      },
      {
        problema: 'Port 5173 já em uso',
        solucao: 'npm run dev -- --port 5174 (usar outra porta)',
      },
      {
        problema: 'ESLint errors',
        solucao: 'Terminal: npm install eslint, ou desabilitar em settings.json',
      },
    ],
  },
];

// Configuração rápida está integrada no componente GuiaIDEs.tsx
