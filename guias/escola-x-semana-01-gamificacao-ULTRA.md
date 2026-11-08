# 🎓 EscolaX — Semana 1: Gamificação Básica

**Tempo:** 30 minutos | **Dificuldade:** Fácil | **Pré-requisito:** Node.js + React conhecimento básico

---

## ⏱️ 5 min: CONCEITO

### O que é Gamificação?

**Analogia:**
```
Duolingo: Aprende + Ganha moedas + Sobe level
Spotify: Ouve + Conquista badges + Vê progresso

EscolaX: Estuda + Ganha XP + Sobe level + Badges!
```

### Elementos de Gamificação

```
XP (Experience Points)
└─ 100 XP por aula
└─ Acumula até virar Level

Levels
└─ A cada 1000 XP = 1 Level
└─ Mostra seu progresso

Badges (Troféus)
└─ 🥉 Bronze (10 aulas)
└─ 🥈 Prata (25 aulas)
└─ 🥇 Ouro (50 aulas)

Leaderboard
└─ Ranking dos top estudantes
```

---

## 🔨 15 min: PASSO A PASSO

### **PASSO 1: Criar Projeto EscolaX**

**1.1** No terminal:

```bash
cd C:\Users\[seu nome]\Documents\mario\projetos
npm create vite@latest escola-x -- --template react-ts
cd escola-x
npm install
code .
```

---

### **PASSO 2: Criar Sistema de Gamificação**

**2.1** Clique DIREITO em **src**

**2.2** Selecione: **New File**

**2.3** Digite: **useGamification.ts**

**2.4** Copie este código:

```typescript
import { useState } from 'react'

interface UserStats {
  name: string
  xp: number
  level: number
  lessonsCompleted: number
  currentBadge: string
}

export const useGamification = () => {
  const [stats, setStats] = useState<UserStats>({
    name: "Estudante",
    xp: 0,
    level: 1,
    lessonsCompleted: 0,
    currentBadge: "🔵 Iniciante"
  })

  const completeLesson = () => {
    setStats(prev => {
      const newXP = prev.xp + 100
      const newLevel = Math.floor(newXP / 1000) + 1
      const newLessonsCompleted = prev.lessonsCompleted + 1
      
      // Determinar badge
      let badge = "🔵 Iniciante"
      if (newLessonsCompleted >= 50) badge = "🥇 Mestre"
      else if (newLessonsCompleted >= 25) badge = "🥈 Avançado"
      else if (newLessonsCompleted >= 10) badge = "🥉 Intermediário"
      
      return {
        ...prev,
        xp: newXP,
        level: newLevel,
        lessonsCompleted: newLessonsCompleted,
        currentBadge: badge
      }
    })
  }

  const resetStats = () => {
    setStats({
      name: "Estudante",
      xp: 0,
      level: 1,
      lessonsCompleted: 0,
      currentBadge: "🔵 Iniciante"
    })
  }

  return { stats, completeLesson, resetStats }
}
```

**2.5** Cole (Ctrl + V)

**2.6** Salve (Ctrl + S)

---

### **PASSO 3: Criar Componente de Progresso**

**3.1** Clique DIREITO em **src**

**3.2** Selecione: **New File**

**3.3** Digite: **ProgressBar.tsx**

**3.4** Copie:

```typescript
interface Props {
  current: number
  max: number
  label: string
}

export const ProgressBar = ({ current, max, label }: Props) => {
  const percentage = (current / max) * 100
  
  return (
    <div className="progress-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span>{label}</span>
        <span>{current} / {max}</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  )
}
```

**3.5** Cole (Ctrl + V) e salve

---

### **PASSO 4: Criar Dashboard**

**4.1** Clique DIREITO em **src**

**4.2** Selecione: **New File**

**4.3** Digite: **Dashboard.tsx**

**4.4** Copie:

```typescript
import { useGamification } from './useGamification'
import { ProgressBar } from './ProgressBar'

export const Dashboard = () => {
  const { stats, completeLesson, resetStats } = useGamification()
  
  const xpToNextLevel = ((stats.level) * 1000) - stats.xp
  
  return (
    <div className="dashboard">
      <div className="header-dashboard">
        <h1>🎓 EscolaX</h1>
        <div className="user-badge">
          <span>{stats.currentBadge}</span>
        </div>
      </div>
      
      <div className="stats-grid">
        {/* Level */}
        <div className="stat-card">
          <h2>📊 Level</h2>
          <p className="big-number">{stats.level}</p>
        </div>
        
        {/* XP */}
        <div className="stat-card">
          <h2>⚡ Experiência</h2>
          <p className="big-number">{stats.xp}</p>
          <p className="small-text">XP totais</p>
        </div>
        
        {/* Aulas */}
        <div className="stat-card">
          <h2>📚 Aulas Concluídas</h2>
          <p className="big-number">{stats.lessonsCompleted}</p>
        </div>
      </div>
      
      <div className="progress-section">
        <h2>Progresso para Próximo Level</h2>
        <ProgressBar 
          current={stats.xp % 1000} 
          max={1000} 
          label="XP"
        />
        <p className="info-text">Faltam {xpToNextLevel} XP para o próximo level</p>
      </div>
      
      <div className="buttons">
        <button className="btn-complete" onClick={completeLesson}>
          ✅ Completar Aula (+100 XP)
        </button>
        <button className="btn-reset" onClick={resetStats}>
          🔄 Resetar Progresso
        </button>
      </div>
    </div>
  )
}
```

**4.5** Cole (Ctrl + V) e salve

---

### **PASSO 5: Atualizar App.tsx**

**5.1** Abra **App.tsx**

**5.2** Selecione TODO (Ctrl + A)

**5.3** Cole:

```typescript
import './App.css'
import { Dashboard } from './Dashboard'

function App() {
  return (
    <div className="app">
      <Dashboard />
    </div>
  )
}

export default App
```

**5.4** Salve (Ctrl + S)

---

### **PASSO 6: Criar CSS**

**6.1** Abra **App.css**

**6.2** Selecione TODO (Ctrl + A)

**6.3** Cole:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.app {
  max-width: 900px;
  margin: 0 auto;
}

.dashboard {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.header-dashboard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #eee;
}

.header-dashboard h1 {
  font-size: 2.5rem;
  color: #333;
}

.user-badge {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: bold;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.stat-card h2 {
  font-size: 1rem;
  margin-bottom: 10px;
  opacity: 0.9;
}

.big-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 10px 0;
}

.small-text {
  font-size: 0.9rem;
  opacity: 0.8;
}

.progress-section {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;
}

.progress-section h2 {
  color: #333;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.progress-bar {
  background: #ddd;
  height: 25px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  height: 100%;
  transition: width 0.3s ease;
  border-radius: 12px;
}

.info-text {
  color: #666;
  font-size: 0.9rem;
}

.buttons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.btn-complete {
  flex: 1;
  padding: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn-complete:hover {
  transform: translateY(-2px);
}

.btn-reset {
  flex: 1;
  padding: 15px;
  background: #f0f0f0;
  color: #333;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-reset:hover {
  background: #e0e0e0;
}

@media (max-width: 768px) {
  .dashboard {
    padding: 20px;
  }
  
  .header-dashboard {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
  
  .buttons {
    flex-direction: column;
  }
}
```

**6.4** Salve (Ctrl + S)

---

## ✅ 10 min: TESTAR

### **PASSO 1: Rodar Servidor**

**1.1** Terminal:
```bash
npm run dev
```

---

### **PASSO 2: Acessar Dashboard**

**2.1** Navegador: **http://localhost:5173**

```
Você vê:

🎓 EscolaX           🔵 Iniciante

📊 Level          ⚡ Experiência    📚 Aulas Concluídas
1                 0 XP              0

Progresso para Próximo Level
[████░░░░░░░░░░░░░░]  0 / 1000
Faltam 1000 XP para o próximo level

[✅ Completar Aula (+100 XP)]  [🔄 Resetar Progresso]
```

**2.2** ✅ Dashboard funciona!

---

### **PASSO 3: Completar Aulas**

**3.1** Clique **✅ Completar Aula** 10 vezes

```
Você vai ver:
- XP aumentando (100, 200, 300, ...)
- Aulas Concluídas aumentando
- Barra de progresso enchendo
- Após 1000 XP: Level muda para 2
- Após 10 aulas: Badge muda para 🥉 Intermediário
```

**3.2** ✅ Gamificação funciona!

---

### **PASSO 4: Resetar**

**4.1** Clique **🔄 Resetar Progresso**

```
Tudo volta ao inicial:
Level: 1
XP: 0
Aulas: 0
Badge: 🔵 Iniciante
```

**4.2** ✅✅✅ TUDO FUNCIONA!

---

## 🚀 PRÓXIMA SEMANA

**Semana 2:** Vamos integrar **Firebase**!

Você terá:
- ✅ Salvar dados na nuvem
- ✅ Múltiplos usuários
- ✅ Dados persistentes

---

## 🎁 O QUE APRENDEU

✅ Sistema de XP  
✅ Levels  
✅ Badges  
✅ useState com lógica complexa  
✅ Gamificação funcionando!

---

## 📋 CHECKLIST

- [ ] Projeto EscolaX criado
- [ ] Hook useGamification criado
- [ ] Componente ProgressBar criado
- [ ] Componente Dashboard criado
- [ ] App.tsx atualizado
- [ ] CSS com estilo bonito
- [ ] npm run dev executado
- [ ] Dashboard mostrando estatísticas
- [ ] Clicou "Completar Aula" e XP aumentou
- [ ] Viu badge mudar para Intermediário
- [ ] **SEMANA 1 COMPLETA! 🎉**

---

**PARABÉNS! SEMANA 1 COMPLETA! 🎉**

Sistema de Gamificação PRONTO!

**Próxima semana: Firebase! 🚀**
