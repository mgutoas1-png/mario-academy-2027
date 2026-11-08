# 🎓 EscolaX — Semana 2: Firebase (Salvar na Nuvem)

**Tempo:** 30 minutos | **Dificuldade:** Fácil | **Pré-requisito:** Semana 1 ✅

---

## ⏱️ 5 min: CONCEITO

### O que é Firebase?

**Analogia:**
```
Computador = Dados desaparecem ao fechar
Firebase = Dados salvos na nuvem

Antes (Semana 1):
- Recarrega página → Dados zerados

Depois (Semana 2):
- Recarrega página → Dados voltam!
- Muda de dispositivo → Dados sincronizam!
```

### O que você vai criar

```
Sistema que:
1. Cria usuário no Firebase
2. Salva progresso na nuvem
3. Sincroniza em tempo real
```

---

## 🔨 15 min: PASSO A PASSO

### **PASSO 1: Instalar Firebase**

**1.1** No terminal:

```bash
npm install firebase
```

```
Aguarde instalação
```

---

### **PASSO 2: Criar Arquivo de Configuração Firebase**

**2.1** Clique DIREITO em **src**

**2.2** Selecione: **New File**

**2.3** Digite: **firebase.ts**

**2.4** Copie este código:

```typescript
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Configuração Firebase (use credenciais públicas, é só para demo!)
const firebaseConfig = {
  apiKey: "AIzaSyDEsJ7e2P1qZ9kL3M5nO7pQ9rS1tU3vW5x",
  authDomain: "escola-x-demo.firebaseapp.com",
  projectId: "escola-x-demo",
  storageBucket: "escola-x-demo.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcd"
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)

// Inicializar Firestore
export const db = getFirestore(app)
```

**2.5** Cole (Ctrl + V)

⚠️ **NOTA:** Use suas próprias credenciais do Firebase Console!

**2.6** Salve (Ctrl + S)

---

### **PASSO 3: Atualizar useGamification com Firebase**

**3.1** Abra **useGamification.ts**

**3.2** Selecione TODO (Ctrl + A)

**3.3** Cole este código NOVO:

```typescript
import { useState, useEffect } from 'react'
import { db } from './firebase'
import { collection, doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore'

interface UserStats {
  name: string
  xp: number
  level: number
  lessonsCompleted: number
  currentBadge: string
}

// ID do usuário (fixo para demo)
const USER_ID = "student-001"

export const useGamification = () => {
  const [stats, setStats] = useState<UserStats>({
    name: "Estudante",
    xp: 0,
    level: 1,
    lessonsCompleted: 0,
    currentBadge: "🔵 Iniciante"
  })

  const [loading, setLoading] = useState(true)

  // Carregar dados do Firebase ao iniciar
  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, "users", USER_ID),
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          setStats(docSnapshot.data() as UserStats)
        }
        setLoading(false)
      },
      (error) => {
        console.log("Usando dados locais:", error)
        setLoading(false)
      }
    )

    return () => unsubscribe()
  }, [])

  // Determinar badge baseado em aulas
  const getBadge = (lessonsCompleted: number): string => {
    if (lessonsCompleted >= 50) return "🥇 Mestre"
    if (lessonsCompleted >= 25) return "🥈 Avançado"
    if (lessonsCompleted >= 10) return "🥉 Intermediário"
    return "🔵 Iniciante"
  }

  const completeLesson = async () => {
    const newXP = stats.xp + 100
    const newLevel = Math.floor(newXP / 1000) + 1
    const newLessonsCompleted = stats.lessonsCompleted + 1
    const badge = getBadge(newLessonsCompleted)

    const updatedStats = {
      ...stats,
      xp: newXP,
      level: newLevel,
      lessonsCompleted: newLessonsCompleted,
      currentBadge: badge
    }

    setStats(updatedStats)

    // Salvar no Firebase
    try {
      await setDoc(doc(db, "users", USER_ID), updatedStats)
    } catch (error) {
      console.log("Dados salvos localmente:", error)
    }
  }

  const resetStats = async () => {
    const resetData: UserStats = {
      name: "Estudante",
      xp: 0,
      level: 1,
      lessonsCompleted: 0,
      currentBadge: "🔵 Iniciante"
    }

    setStats(resetData)

    // Resetar no Firebase
    try {
      await setDoc(doc(db, "users", USER_ID), resetData)
    } catch (error) {
      console.log("Reset local:", error)
    }
  }

  return { stats, completeLesson, resetStats, loading }
}
```

**3.4** Cole (Ctrl + V)

**3.5** Salve (Ctrl + S)

---

### **PASSO 4: Atualizar Dashboard com Loading**

**4.1** Abra **Dashboard.tsx**

**4.2** Substitua a primeira linha de código:

**DE:**
```typescript
const { stats, completeLesson, resetStats } = useGamification()
```

**PARA:**
```typescript
const { stats, completeLesson, resetStats, loading } = useGamification()
```

**4.3** Logo após `return (`, adicione:

```typescript
if (loading) {
  return <div className="dashboard"><p>Carregando dados...</p></div>
}
```

**4.4** Salve (Ctrl + S)

```
Pronto! Agora o app:
✅ Carrega dados do Firebase
✅ Salva ao completar aulas
✅ Sincroniza em tempo real
```

---

### **PASSO 5: Criar Firebase Project (Grátis)**

**5.1** Abra navegador

**5.2** Vá para: **firebase.google.com**

**5.3** Clique em **Vá para console**

**5.4** Clique em **+ Criar Projeto**

```
Nome: escola-x-demo
Continuar → Continuar → Continuar
Criar Projeto (aguarde)
```

**5.5** Clique em **Web** (ícone `</>``)

**5.6** Preencha:
```
Nome do app: escola-x-web
```

**5.7** Copie a configuração que aparecer

**5.8** Cole em **src/firebase.ts** (substitua o firebaseConfig)

**5.9** Ative **Firestore Database**:
- Clique em **Firestore Database**
- Clique em **Criar Banco de Dados**
- Modo: **Começar em modo de teste**
- Local: **nam5 (us-central)**
- Criar

---

## ✅ 10 min: TESTAR

### **PASSO 1: Rodar Servidor**

**1.1** Terminal:
```bash
npm run dev
```

---

### **PASSO 2: Completar Aulas**

**2.1** Navegador: **http://localhost:5173**

**2.2** Clique **✅ Completar Aula** algumas vezes

```
Você vê XP aumentando
```

**2.3** ✅ Dados salvando!

---

### **PASSO 3: Recarregar Página**

**3.1** Pressione **F5** (recarregar)

```
Espere carregar...
Dados voltam! (XP, level, aulas)
```

**3.2** ✅ Firebase funciona!

---

### **PASSO 4: Abrir em Outro Navegador**

**4.1** Abra em **Incognito** (ou navegador diferente)

**4.2** Acesse: **http://localhost:5173**

```
MESMO usuário, MESMOS dados!
Sincronização em tempo real!
```

**4.3** ✅✅✅ TUDO FUNCIONA!

---

## 🚀 PRÓXIMO

**Depois dessa base:** Você pode criar:
- ✅ Múltiplos usuários (login)
- ✅ Leaderboard
- ✅ Aulas com conteúdo
- ✅ Sistema de certificados

---

## 🎁 O QUE APRENDEU

✅ Firebase setup  
✅ Firestore Database  
✅ Salvar dados na nuvem  
✅ Sincronização em tempo real  
✅ Dados persistentes!

---

## 📋 CHECKLIST

- [ ] Firebase instalado
- [ ] Arquivo firebase.ts criado
- [ ] Conta Google Firebase criada
- [ ] Projeto Firebase criado
- [ ] Firestore Database ativado
- [ ] Credenciais do Firebase atualizadas
- [ ] useGamification atualizado com Firebase
- [ ] Dashboard atualizado com loading
- [ ] npm run dev executado
- [ ] Completou aulas e XP salvou
- [ ] Recarregou página e dados voltaram
- [ ] Testou em outro navegador e sincronizou
- [ ] **SEMANA 2 COMPLETA! 🎉**

---

## 🆘 SE NÃO FUNCIONAR

### Erro: "auth/app-not-initialized"

**Solução:**
1. Verifique as credenciais do Firebase em `firebase.ts`
2. Certifique-se de que o Firestore está ativado
3. Aguarde 1-2 minutos pela propagação

---

### Dados não salvam

**Significa:** Firestore não inicializou corretamente

**Solução:**
1. Vá ao Firebase Console
2. Firestore Database → Criar Banco de Dados
3. Modo: Teste
4. Aguarde criação

---

**PARABÉNS! SEMANA 2 COMPLETA! 🎉**

EscolaX com Firebase PRONTO!

---

## 🏆 VOCÊ COMPLETOU 11 SEMANAS!

```
🧹 House Cleaners ✅
├─ Semana 1: Flask Hello World
├─ Semana 2: SQLite Banco de Dados
├─ Semana 3: Flask + Banco Integrado
└─ Semana 4: Formulário

🏢 Admin Imóveis ✅
├─ Semana 1: Spring Boot
├─ Semana 2: JPA + Banco de Dados
├─ Semana 3: REST API Completa
└─ Semana 4: Service Layer

💈 ServiçosPro ✅
├─ Semana 1: React + Vite
└─ Semana 2: React Router

🎓 EscolaX ✅
├─ Semana 1: Gamificação
└─ Semana 2: Firebase
```

---

**Próximos passos:** Deploy + Mais semanas!

Você tem base em 4 stacks diferentes! 🚀
