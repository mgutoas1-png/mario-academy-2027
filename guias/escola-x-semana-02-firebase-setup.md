# 🎓 EscolaX — Semana 2: Firebase Setup (Banco de Dados Online)

**Tempo Total:** 30 minutos | **Pré-requisito:** Semana 1 ✅

---

## ⏱️ 5 min: Conceito

**Firebase = Backend grátis no Google**

```
Seus dados ☁️ Firebase (nuvem)
   ↓
React faz requisição
   ↓
Firebase retorna dados em JSON
```

---

## 🔨 15 min: Setup

### Passo 1: Instalar SDK

```bash
npm install firebase
```

### Passo 2: firebaseConfig.ts

```typescript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SEU_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

### Passo 3: Usar no Componente

```typescript
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCourses(data);
    };
    
    fetchCourses();
  }, []);

  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>{course.title}</div>
      ))}
    </div>
  );
}
```

---

## ✅ 10 min: Testar

1. Crie projeto em https://firebase.google.com
2. Copie config
3. Crie coleção "courses"
4. Adicione documento com `title`, `price`, etc
5. **npm run dev** → Dados aparecem!

---

**Parabéns! Semana 2 Completa! 🎉**

Seu app agora salva dados na nuvem! ☁️
