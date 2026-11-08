# 💈 ServiçosPro — Semana 1: React + Vite Setup

**Tempo:** 30 minutos | **Dificuldade:** Fácil | **Pré-requisito:** Node.js 18+ instalado

---

## ⏱️ 5 min: CONCEITO

### React vs Flask vs Spring

```
Flask: Backend (Python)          Spring Boot: Backend (Java)        React: Frontend (JavaScript)
Roda no servidor                 Roda no servidor                   Roda no navegador
Serve HTML                       Serve JSON                         Mostra interface bonita
                                                                     Interativo!
```

### O que você vai criar

```
Uma página React que:
1. Mostra lista de serviços
2. Interatividade no navegador
3. Estilo bonito com CSS
```

---

## 🔨 15 min: PASSO A PASSO

### **PASSO 1: Criar Projeto React**

**1.1** Abra PowerShell

**1.2** Navegue até:
```powershell
cd C:\Users\[seu nome]\Documents\mario\projetos
```

**1.3** Crie projeto React:
```bash
npm create vite@latest servicos-pro -- --template react-ts
```

**1.4** Vai perguntar algumas coisas, pressione ENTER em todas

```
Instalando dependências...
Projeto criado com sucesso!
```

**1.5** Navegue para a pasta:
```bash
cd servicos-pro
```

---

### **PASSO 2: Instalar Dependências**

**2.1** No terminal (ainda em servicos-pro), rode:

```bash
npm install
```

```
Aguarde download de dependências
(pode levar 1-2 minutos)
```

---

### **PASSO 3: Abrir no VSCode**

**3.1** Ainda no terminal:

```bash
code .
```

```
VSCode abre automaticamente
```

**3.2** Se pedir para confiar na pasta, clique **Trust**

---

### **PASSO 4: Criar Componente ServiceCard**

**4.1** Em VSCode, clique em **src**

**4.2** Clique DIREITO

**4.3** Selecione: **New File**

**4.4** Digite: **ServiceCard.tsx**

**4.5** Copie este código:

```typescript
interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
}

interface Props {
  service: Service;
}

export const ServiceCard = ({ service }: Props) => {
  return (
    <div className="service-card">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <div className="card-footer">
        <span className="price">R$ {service.price.toFixed(2)}</span>
        <span className="rating">⭐ {service.rating}</span>
      </div>
      <button className="btn-booking">Agendar</button>
    </div>
  );
};
```

**4.6** Cole no arquivo (Ctrl + V)

**4.7** Salve (Ctrl + S)

---

### **PASSO 5: Atualizar App.tsx**

**5.1** Abra **src/App.tsx**

**5.2** Selecione TODO (Ctrl + A)

**5.3** Cole este código:

```typescript
import './App.css'
import { ServiceCard } from './ServiceCard'

function App() {
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
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}

export default App
```

**5.4** Salve (Ctrl + S)

---

### **PASSO 6: Criar CSS Bonito**

**6.1** Abra **src/App.css**

**6.2** Selecione TODO (Ctrl + A)

**6.3** Cole este código:

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

.container {
  max-width: 1200px;
  margin: 0 auto;
}

header {
  text-align: center;
  color: white;
  margin-bottom: 40px;
}

header h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.service-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.service-card h3 {
  color: #333;
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.service-card p {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #667eea;
}

.rating {
  color: #ff9800;
  font-weight: bold;
}

.btn-booking {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s;
}

.btn-booking:hover {
  opacity: 0.9;
}
```

**6.4** Salve (Ctrl + S)

---

## ✅ 10 min: TESTAR

### **PASSO 1: Rodar Servidor**

**1.1** No terminal do VSCode (Ctrl + `):

```bash
npm run dev
```

```
Você verá:
VITE v5.0.0 ready in 123 ms

➜  Local:   http://localhost:5173/
```

**1.2** ✅ Servidor rodando!

---

### **PASSO 2: Acessar Navegador**

**2.1** Abra navegador

**2.2** Digite: **http://localhost:5173**

```
Você vai ver:

💈 ServiçosPro
Encontre os melhores serviços

┌─────────────────────┐  ┌─────────────────────┐
│ Corte de Cabelo     │  │ Barba               │
│ Corte profissional  │  │ Barba completa      │
│                     │  │                     │
│ R$ 50.00 ⭐ 4.8     │  │ R$ 40.00 ⭐ 4.9     │
│ [Agendar]           │  │ [Agendar]           │
└─────────────────────┘  └─────────────────────┘

┌─────────────────────┐
│ Limpeza de Pele     │
│ Tratamento facial   │
│                     │
│ R$ 80.00 ⭐ 4.7     │
│ [Agendar]           │
└─────────────────────┘
```

**2.3** ✅✅✅ FUNCIONOU!

---

## 🚀 PRÓXIMA SEMANA

**Semana 2:** Vamos adicionar **React Router** para navegação!

Você terá:
- ✅ Múltiplas páginas
- ✅ Navegação entre páginas
- ✅ Detalhe de serviço

---

## 🎁 O QUE APRENDEU

✅ Criar projeto React com Vite  
✅ Componentes TypeScript  
✅ Props com tipos  
✅ CSS Grid responsivo  
✅ Estilo bonito!

---

## 📋 CHECKLIST

- [ ] Node.js 18+ instalado
- [ ] Projeto React criado com Vite
- [ ] Dependências instaladas
- [ ] VSCode aberto
- [ ] Componente ServiceCard criado
- [ ] App.tsx atualizado
- [ ] CSS aplicado
- [ ] npm run dev executado
- [ ] Navegador mostrando página
- [ ] 3 cartões de serviço visíveis
- [ ] **SEMANA 1 COMPLETA! 🎉**

---

**PARABÉNS! SEMANA 1 COMPLETA! 🎉**

Você criou sua **PRIMEIRA app React!**

**Próxima semana: React Router! 🚀**
