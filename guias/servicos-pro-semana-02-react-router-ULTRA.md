# 💈 ServiçosPro — Semana 2: React Router (Navegação)

**Tempo:** 30 minutos | **Dificuldade:** Fácil | **Pré-requisito:** Semana 1 ✅

---

## ⏱️ 5 min: CONCEITO

### Múltiplas Páginas com React Router

**Antes (Semana 1):**
```
Uma página só
Lista de serviços
FIM
```

**Depois (Semana 2):**
```
Página 1: Lista de serviços
Clica em um → Vai para Página 2: Detalhe do serviço
Página 2: Mostra detalhes + botão "Voltar"
Clica "Voltar" → Volta à Página 1
```

### O que você vai criar

```
2 páginas conectadas com Router:
├── /                    (lista)
└── /servico/:id        (detalhe)
```

---

## 🔨 15 min: PASSO A PASSO

### **PASSO 1: Instalar React Router**

**1.1** No terminal (VSCode):

```bash
npm install react-router-dom
```

```
Aguarde instalação
```

---

### **PASSO 2: Criar Página de Detalhe**

**2.1** Clique DIREITO em **src**

**2.2** Selecione: **New File**

**2.3** Digite: **ServiceDetail.tsx**

**2.4** Copie este código:

```typescript
import { useParams, useNavigate } from 'react-router-dom'

export const ServiceDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const servicesData: any = {
    1: {
      id: 1,
      name: "Corte de Cabelo",
      description: "Corte profissional com acabamento de tesoura ou máquina",
      price: 50,
      rating: 4.8,
      fullDescription: "Experimente nosso corte de cabelo profissional realizado por barbeiros experientes. Técnicas modernas e acabamento impecável.",
      duration: "45 min",
      professional: "João Silva"
    },
    2: {
      id: 2,
      name: "Barba",
      description: "Barba completa com hidratação e óleo",
      price: 40,
      rating: 4.9,
      fullDescription: "Cuidado completo com barba: aparação, alinhamento e hidratação profissional.",
      duration: "30 min",
      professional: "Carlos Costa"
    },
    3: {
      id: 3,
      name: "Limpeza de Pele",
      description: "Tratamento facial completo com higienização profunda",
      price: 80,
      rating: 4.7,
      fullDescription: "Tratamento dermatológico que limpa, hidrata e rejuvenesce sua pele.",
      duration: "60 min",
      professional: "Maria Santos"
    }
  }
  
  const service = servicesData[id]
  
  if (!service) {
    return <div className="container"><p>Serviço não encontrado</p></div>
  }
  
  return (
    <div className="container">
      <button onClick={() => navigate('/')} className="btn-back">
        ← Voltar
      </button>
      
      <div className="detail-page">
        <h1>{service.name}</h1>
        
        <div className="detail-info">
          <div className="info-section">
            <h2>Sobre o Serviço</h2>
            <p>{service.fullDescription}</p>
          </div>
          
          <div className="info-section">
            <h2>Informações</h2>
            <p><strong>Duração:</strong> {service.duration}</p>
            <p><strong>Profissional:</strong> {service.professional}</p>
            <p><strong>Preço:</strong> R$ {service.price.toFixed(2)}</p>
            <p><strong>Avaliação:</strong> ⭐ {service.rating}</p>
          </div>
          
          <button className="btn-booking-detail">Agendar Agora</button>
        </div>
      </div>
    </div>
  )
}
```

**2.5** Cole (Ctrl + V)

**2.6** Salve (Ctrl + S)

---

### **PASSO 3: Criar Página Home**

**3.1** Clique DIREITO em **src**

**3.2** Selecione: **New File**

**3.3** Digite: **Home.tsx**

**3.4** Copie este código:

```typescript
import { useNavigate } from 'react-router-dom'
import { ServiceCard } from './ServiceCard'

export const Home = () => {
  const navigate = useNavigate()
  
  const services = [
    {
      id: 1,
      name: "Corte de Cabelo",
      description: "Corte profissional com acabamento",
      price: 50,
      rating: 4.8
    },
    {
      id: 2,
      name: "Barba",
      description: "Barba completa com hidratação",
      price: 40,
      rating: 4.9
    },
    {
      id: 3,
      name: "Limpeza de Pele",
      description: "Tratamento facial completo",
      price: 80,
      rating: 4.7
    }
  ]

  return (
    <div className="container">
      <header>
        <h1>💈 ServiçosPro</h1>
        <p>Encontre os melhores serviços perto de você</p>
      </header>
      
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} onClick={() => navigate(`/servico/${service.id}`)}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  )
}
```

**3.5** Cole (Ctrl + V)

**3.6** Salve (Ctrl + S)

---

### **PASSO 4: Atualizar App.tsx com Router**

**4.1** Abra **src/App.tsx**

**4.2** Selecione TODO (Ctrl + A)

**4.3** Cole este código:

```typescript
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { ServiceDetail } from './ServiceDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servico/:id" element={<ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

**4.4** Salve (Ctrl + S)

---

### **PASSO 5: Atualizar CSS**

**5.1** Abra **src/App.css**

**5.2** Adicione no final:

```css
/* ServiceCard clicável */
.services-grid > div {
  cursor: pointer;
}

/* Página de Detalhe */
.btn-back {
  background: #667eea;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 1rem;
}

.btn-back:hover {
  background: #764ba2;
}

.detail-page {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.detail-page h1 {
  color: #333;
  margin-bottom: 30px;
  font-size: 2.5rem;
}

.detail-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 30px;
}

.info-section {
  padding-bottom: 20px;
}

.info-section h2 {
  color: #667eea;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.info-section p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 10px;
}

.btn-booking-detail {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
}

.btn-booking-detail:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .detail-info {
    grid-template-columns: 1fr;
  }
  
  .detail-page {
    padding: 20px;
  }
}
```

**5.3** Salve (Ctrl + S)

---

## ✅ 10 min: TESTAR

### **PASSO 1: Rodar Servidor**

**1.1** No terminal:

```bash
npm run dev
```

---

### **PASSO 2: Navegar para Detalhe**

**2.1** Abra navegador: **http://localhost:5173**

**2.2** Clique em qualquer cartão de serviço

```
Você vai para:
http://localhost:5173/servico/1

E vê:
[← Voltar]

💈 Corte de Cabelo

Sobre o Serviço:
Experimente nosso corte...

Informações:
Duração: 45 min
Profissional: João Silva
Preço: R$ 50.00
Avaliação: ⭐ 4.8

[Agendar Agora]
```

**2.3** ✅ Página de detalhe funciona!

---

### **PASSO 3: Voltar para Home**

**3.1** Clique em **← Voltar**

```
Você volta para:
http://localhost:5173/

E vê lista de serviços novamente
```

**3.2** ✅ Navegação funciona!

---

### **PASSO 4: Testar Outros Serviços**

**4.1** Clique em "Barba" (serviço 2)

```
URL muda para: /servico/2
Mostra detalhes do Barba
```

**4.2** ✅ URL dinâmica funciona!

**4.3** ✅✅✅ TUDO FUNCIONA!

---

## 🚀 PRÓXIMO: EscolaX (React + Firebase)

**Semana 5:** Plataforma de Cursos com Gamificação!

Você terá:
- ✅ Sistema de cursos
- ✅ Gamificação (XP, badges)
- ✅ Firebase backend

---

## 🎁 O QUE APRENDEU

✅ React Router  
✅ Navegação entre páginas  
✅ URL dinâmicas  
✅ useParams e useNavigate  
✅ Rotas paramétrizadas!

---

## 📋 CHECKLIST

- [ ] React Router instalado
- [ ] Componente ServiceDetail criado
- [ ] Componente Home criado
- [ ] App.tsx atualizado com BrowserRouter
- [ ] CSS para detalhe adicionado
- [ ] npm run dev executado
- [ ] Clicou em serviço e foi para detalhe
- [ ] Viu URL dinâmica (/servico/1)
- [ ] Clicou "Voltar" e retornou
- [ ] Testou múltiplos serviços
- [ ] **SEMANA 2 COMPLETA! 🎉**

---

**PARABÉNS! SEMANA 2 COMPLETA! 🎉**

ServiçosPro com Navegação PRONTO!

**Próximo: EscolaX! 🚀**
