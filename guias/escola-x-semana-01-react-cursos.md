# 🎓 EscolaX — Semana 1: React Componente CourseCard

**Tempo Total:** 30 minutos | **IDE:** VSCode | **Pré-requisito:** Node.js ✅

---

## ⏱️ 5 min: Conceito

**Parecido com ServiçosPro, mas para cursos!**

```
CourseCard = Cartão com:
  ├── Foto do curso
  ├── Título
  ├── Descrição
  ├── Preço ou "Grátis"
  └── Botão "Inscrever"
```

---

## 🔨 15 min: Criar CourseCard

**Em `src/components/CourseCard.tsx`:**

```typescript
import React from 'react';

interface Course {
  id: string;
  title: string;
  instructor: string;
  price: number | string;
  students: number;
  rating: number;
  icon: string;
}

interface Props {
  course: Course;
}

export function CourseCard({ course }: Props) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      maxWidth: '300px',
      transition: 'transform 0.3s'
    }}>
      <div style={{
        background: '#3498db',
        padding: '40px',
        textAlign: 'center',
        fontSize: '48px'
      }}>
        {course.icon}
      </div>
      
      <div style={{ padding: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0' }}>{course.title}</h3>
        <p style={{ color: '#666', fontSize: '14px', margin: '4px 0' }}>
          👨‍🏫 {course.instructor}
        </p>
        
        <div style={{ fontSize: '14px', margin: '8px 0', color: '#f39c12' }}>
          ⭐ {course.rating.toFixed(1)} ({course.students} alunos)
        </div>
        
        <strong style={{ fontSize: '20px', color: '#27ae60' }}>
          {typeof course.price === 'string' ? course.price : `R$ ${course.price}`}
        </strong>
        
        <button style={{
          width: '100%',
          marginTop: '12px',
          padding: '12px',
          background: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px'
        }}>
          📚 Inscrever
        </button>
      </div>
    </div>
  );
}
```

### Usar em App.tsx

```typescript
import { CourseCard } from './components/CourseCard';

export default function App() {
  const courses = [
    {
      id: '1',
      title: 'Python Básico',
      instructor: 'João Silva',
      price: 'Grátis',
      students: 1250,
      rating: 4.8,
      icon: '🐍'
    },
    {
      id: '2',
      title: 'React Avançado',
      instructor: 'Maria Santos',
      price: 149,
      students: 890,
      rating: 4.9,
      icon: '⚛️'
    },
    {
      id: '3',
      title: 'Java para Iniciantes',
      instructor: 'Pedro Costa',
      price: 99,
      students: 2100,
      rating: 4.7,
      icon: '☕'
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>🎓 EscolaX - Cursos Online</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
```

---

## ✅ 10 min: Testar

**npm run dev** → http://localhost:3000

Você verá 3 cartões de cursos! ✅

---

**Parabéns! Semana 1 Completa! 🎉**
