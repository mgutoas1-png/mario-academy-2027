# 💈 ServiçosPro — Semana 2: Navegação com React Router

**Tempo Total:** 30 minutos | **Pré-requisito:** Semana 1 ✅

---

## ⏱️ 5 min: Conceito

**React Router = Múltiplas páginas**

```
/ → Home (lista de serviços)
/servicos → Todos os serviços
/sobre → Sobre a empresa
/contato → Contato
```

---

## 🔨 15 min: Instalar e Configurar

```bash
npm install react-router-dom
```

### App.tsx

```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '16px', background: '#f0f0f0', marginBottom: '20px' }}>
        <a href="/" style={{ marginRight: '20px' }}>🏠 Home</a>
        <a href="/servicos" style={{ marginRight: '20px' }}>💼 Serviços</a>
        <a href="/sobre">ℹ️ Sobre</a>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### pages/Home.tsx

```typescript
export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>💈 Bem-vindo ao ServiçosPro</h1>
      <p>Encontre os melhores serviços perto de você!</p>
    </div>
  );
}
```

### pages/Services.tsx

```typescript
import { ServiceCard } from '../components/ServiceCard';

const services = [
  { id: '1', name: 'Corte', price: 50, description: 'Profissional', icon: '✂️' },
  { id: '2', name: 'Barba', price: 30, description: 'Completa', icon: '🧔' },
];

export default function Services() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>💼 Nossos Serviços</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {services.map(s => <ServiceCard key={s.id} service={s} />)}
      </div>
    </div>
  );
}
```

### pages/About.tsx

```typescript
export default function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>ℹ️ Sobre Nós</h1>
      <p>ServiçosPro - Conectando você aos melhores profissionais!</p>
    </div>
  );
}
```

---

## ✅ 10 min: Testar

**npm run dev** → Teste as rotas

---

**Parabéns! Semana 2 Completa! 🎉**
