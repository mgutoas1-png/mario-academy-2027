# 🎓 Mario Academy 2027 — Plataforma de Cursos com Gamificação

**Plataforma online completa com 4 cursos práticos + gamificação total.**

- ✅ **128 aulas** (4 cursos × 32 semanas)
- ✅ **Gamificação**: XP, Níveis, Badges, Leaderboard
- ✅ **Responsiva**: PC, tablet, celular
- ✅ **Sem backend**: Progresso salvo localmente (localStorage)
- ✅ **Deploy fácil**: Vercel (grátis)

---

## 🚀 Quick Start

### 1. Clonar e Instalar

```bash
cd plataforma-cursos
npm install
```

### 2. Rodar Localmente

```bash
npm run dev
```

Abre em `http://localhost:3000`

### 3. Deploy em Vercel (Grátis!)

```bash
npm install -g vercel
vercel login  # Use email: mgutoas1@gmail.com
vercel
```

URL pública gerada automaticamente (algo como `mario-academy.vercel.app`)

---

## 📚 4 Cursos Inclusos

| Curso | Tech | Status |
|-------|------|--------|
| 🧹 House Cleaners | Python + Flask | 32 semanas ✅ |
| 🏢 Admin Imóveis | Java + Spring Boot | 32 semanas ✅ |
| 💈 ServiçosPro | JS/TS + React | 32 semanas ✅ |
| 🎓 EscolaX | JS/TS + React | 32 semanas ✅ |

---

## 🎮 Gamificação

### XP (Experiência)
- Cada aula completada = +XP
- House Cleaners: 100-320 XP/semana
- Admin Imóveis: 100-320 XP/semana
- ServiçosPro: 100-320 XP/semana
- EscolaX: 100-320 XP/semana

### Níveis
- Nível = XP / 1000
- Nível 1 @ 0 XP
- Nível 50 @ 50.000 XP
- Sem limite!

### Badges
- 🥉 **Bronze**: 1.000 XP
- 🥈 **Prata**: 5.000 XP
- 🥇 **Ouro**: 10.000 XP
- 👑 **Master**: Completar os 128 cursos

### Progresso
- Barra visual mostra avanço
- Salvo automaticamente (localStorage)
- Funciona offline!

---

## 📖 Estrutura de Cada Aula

```
⏱️  5 min: Conceito
    → Explicação clara e simples

🔨 15 min: Build Incremental
    → Código pronto para copiar-colar
    → Passo-a-passo
    → Exemplo visual

✅ 10 min: Quiz
    → 3-5 perguntas
    → 70% mínimo para completar
    → Feedback automático
```

---

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: CSS3 puro (responsivo)
- **Build**: Vite (super rápido)
- **Storage**: localStorage (sem servidor)
- **Deploy**: Vercel (grátis)

---

## 📁 Estrutura de Pastas

```
plataforma-cursos/
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx      (Visão geral)
│   │   └── CursoDetalhe.tsx   (Aulas + Quiz)
│   ├── App.tsx                (Componente principal)
│   ├── App.css                (Estilos)
│   └── main.tsx               (Entrada)
├── data-cursos.ts             (128 aulas em JSON)
├── package.json
├── vite.config.ts
├── vercel.json
└── README.md
```

---

## 💾 Dados Salvos

Tudo salvo em `localStorage`:

```javascript
{
  "mario-usuario": {
    "xp": 5000,
    "level": 5,
    "badges": ["bronze", "prata"],
    "aulasCompletas": ["house-1", "house-2", ...],
    "streakDias": 7
  }
}
```

**Dica**: Abra DevTools (F12) → Storage → localStorage

---

## 🌐 Acessar de Qualquer Lugar

Após deploy em Vercel:

1. **PC**: `https://seu-app.vercel.app`
2. **Tablet**: Mesmo link (responsivo)
3. **Celular**: Mesmo link (otimizado para mobile)
4. **Offline**: Funciona! (progresso salvo localmente)

---

## 🔧 Customizações

### Adicionar Mais Aulas

Edite `data-cursos.ts`:

```typescript
const minhaNovaAula: Aula = {
  id: 'house-5',
  semana: 5,
  titulo: 'Minha Nova Aula',
  conceito: '...',
  build: ['...', '...', '...'],
  codigoExemplo: '...',
  quiz: [{ pergunta: '...', opcoes: [...], resposta: 0, explicacao: '...' }],
  xp: 100
}
```

### Mudar Cores

Em `App.css`:

```css
.header {
  background: linear-gradient(135deg, #SEU-COR-1, #SUA-COR-2);
}
```

---

## 📈 Análise de Dados

O localStorage guarda:

```javascript
// Checar total de XP
const usuario = JSON.parse(localStorage.getItem('mario-usuario'))
console.log(`Total XP: ${usuario.xp}`)
console.log(`Aulas completas: ${usuario.aulasCompletas.length}`)
console.log(`Badges: ${usuario.badges.join(', ')}`)
```

---

## 🚀 Deploy

### Opção 1: Vercel (Recomendado)

```bash
npm install -g vercel
vercel login  # mgutoas1@gmail.com
vercel       # Deploy automático
```

### Opção 2: GitHub Pages

```bash
npm run build
# Fazer upload da pasta 'dist' para GitHub Pages
```

### Opção 3: Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 📱 Suporte Mobile

✅ Totalmente responsivo:
- Header adaptável
- Grid de cursos ajustável
- Aulas legíveis em celular
- Quiz mobile-friendly
- Sidebar colapsável

---

## 🐛 Troubleshooting

### "npm install falha"
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Progresso não salva"
- Abra DevTools (F12)
- Console → `localStorage.getItem('mario-usuario')`
- Deve retornar um objeto JSON

### "Não consigo fazer login no Vercel"
```bash
vercel logout
vercel login  # Use mgutoas1@gmail.com
```

---

## 📚 Próximos Passos

1. **Instale localmente**: `npm install && npm run dev`
2. **Explore os cursos**: Clique em um curso no dashboard
3. **Faça as aulas**: Leia conceito → Build → Quiz
4. **Acompanhe progresso**: Dashboard mostra XP e badges
5. **Deploy**: `vercel` para publicar online

---

## 🎁 O Que Você Terá

Após completar os 128 cursos:

✅ **128 aulas de conteúdo prático**  
✅ **4 sistemas funcionais** (Python, Java, React × 2)  
✅ **~2000 linhas de código** (500 por sistema)  
✅ **Portfolio profissional** (tudo testado)  
✅ **Badges e certificados** (gamificação)  
✅ **Acesso lifetime** (localStorage permanente)  

---

## 📞 Suporte

- Leia os comentários em cada arquivo `.tsx`
- Verifique `data-cursos.ts` para estrutura das aulas
- Issue no GitHub (criar repo depois)

---

## 📄 Licença

MIT - Livre para usar, modificar e distribuir

---

**Criado com ❤️ para seu sucesso em Junho 2027!**

🎓 **Mario Academy 2027** — Plataforma de Cursos Práticos com Gamificação
