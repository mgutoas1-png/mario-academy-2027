# 💈 ServiçosPro — Semana 1: React Componente Básico

**Tempo Total:** 30 minutos | **IDE:** VSCode | **Pré-requisito:** Node.js instalado

---

## ⏱️ 5 min: Conceito

**React = Blocos reutilizáveis (Componentes)**

```
Um ServiceCard = Cartão com dados do serviço
  ├── Foto
  ├── Nome
  ├── Preço
  └── Botão "Contratar"

Em uma página, você tem 10 ServiceCards = 10 cartões iguais
```

---

## 🔨 15 min: Criar Componente

**Em `src/components/ServiceCard.tsx`:**

```typescript
import React from 'react';

interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: string;
}

interface Props {
  service: Service;
}

export function ServiceCard({ service }: Props) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '280px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      transition: 'transform 0.2s'
    }}>
      <div style={{ fontSize: '32px', marginBottom: '8px' }}>
        {service.icon}
      </div>
      <h3 style={{ margin: '8px 0' }}>{service.name}</h3>
      <p style={{ color: '#666', fontSize: '14px', margin: '8px 0' }}>
        {service.description}
      </p>
      <strong style={{ fontSize: '18px', color: '#2ecc71' }}>
        R$ {service.price.toFixed(2)}
      </strong>
      <button style={{
        width: '100%',
        marginTop: '12px',
        padding: '10px',
        background: '#2ecc71',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Contratar
      </button>
    </div>
  );
}
```

### Usar em App.tsx

```typescript
import { ServiceCard } from './components/ServiceCard';

export default function App() {
  const services = [
    { id: '1', name: 'Corte de Cabelo', price: 50, description: 'Corte profissional', icon: '✂️' },
    { id: '2', name: 'Barba', price: 30, description: 'Barba completa', icon: '🧔' },
    { id: '3', name: 'Limpeza', price: 100, description: 'Limpeza profunda', icon: '🧹' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>💈 ServiçosPro</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
```

---

## ✅ 10 min: Testar

**npm run dev** → http://localhost:3000

Você verá 3 cartões de serviços! ✅

---

**Parabéns! Semana 1 Completa! 🎉**
