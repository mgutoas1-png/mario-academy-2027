# 💻 CÓDIGOS DE EXEMPLO — TODOS OS PROJETOS

**Pasta com todos os códigos prontos para COPIAR E USAR!**

---

## 🚀 COMO USAR

1. **Abra o guia** da semana que quer (em `guias/`)
2. **Siga os passos** do guia
3. **Quando pedir código**, copie daqui!
4. **Cola no seu projeto**
5. **Pronto!**

---

## 📁 ESTRUTURA

```
exemplos-codigo/
├── house-cleaners/         (Python + Flask)
│   ├── semana-02-sqlite/
│   │   ├── database.py
│   │   └── README.md
│   ├── semana-03-flask-bd/
│   ├── semana-04-formulario/
│
├── admin-imoveis/          (Java + Spring Boot)
│   ├── semana-01-spring-boot/
│   ├── semana-02-jpa-bd/
│   ├── semana-03-rest-api/
│   └── semana-04-service/
│
├── servicos-pro/           (React + TypeScript)
│   ├── semana-01-react/
│   └── semana-02-router/
│
└── escola-x/               (React + Firebase)
    ├── semana-01-gamificacao/
    └── semana-02-firebase/
```

---

## 🧹 HOUSE CLEANERS (Python + Flask)

### **Semana 2: Banco de Dados SQLite**
**Arquivo:** `house-cleaners/semana-02-sqlite/database.py`

```python
# Use exatamente este código!
# Cria banco + tabelas + funções

python database.py
# Resultado: clientes.db criado + 3 clientes adicionados + agendamentos listados
```

### **Semana 3: Flask + BD**
**Arquivos:** 
- `app.py` (conecta Flask com BD)
- `templates/index.html` (mostra dados)

```bash
pip install flask
python app.py
# Acesse: http://localhost:5000
```

### **Semana 4: Formulário**
**Arquivos:**
- `app.py` (com rota POST)
- `templates/formulario.html` (formulário)

```bash
python app.py
# Clique em "Adicionar Cliente"
```

---

## 🏢 ADMIN IMÓVEIS (Java + Spring Boot)

### **Semana 1: Spring Boot**
**Arquivo:** `ImoveisController.java`

```java
@RestController
public class ImoveisController {
    @GetMapping("/")
    public String home() {
        return "Bem-vindo ao Admin Imóveis! 🏢";
    }
}
```

### **Semana 2: JPA + BD**
**Arquivos:**
- `Propriedade.java` (Entidade)
- `PropriedadeRepository.java` (Repositório)
- `application.properties` (BD H2)

### **Semana 3: REST API**
**Arquivo:** `ImoveisController.java` (com CRUD)

```
GET  /api/propriedades        (lista todas)
GET  /api/propriedades/1      (por ID)
POST /api/propriedades        (criar)
PUT  /api/propriedades/1      (atualizar)
DELETE /api/propriedades/1    (deletar)
```

### **Semana 4: Service Layer**
**Arquivo:** `PropriedadeService.java` (validação + lógica)

---

## 💈 SERVIÇOS PRO (React + TypeScript)

### **Semana 1: React + Vite**
**Arquivos:**
- `App.tsx` (componente principal)
- `ServiceCard.tsx` (card)
- `App.css` (estilos)

```bash
npm create vite@latest servicos-pro -- --template react-ts
cd servicos-pro
npm install
npm run dev
```

### **Semana 2: React Router**
**Arquivos:**
- `App.tsx` (com BrowserRouter)
- `Home.tsx` (página inicial)
- `ServiceDetail.tsx` (detalhe do serviço)

```bash
npm install react-router-dom
npm run dev
```

---

## 🎓 ESCOLA X (React + Firebase)

### **Semana 1: Gamificação**
**Arquivos:**
- `useGamification.ts` (hook com XP, levels)
- `Dashboard.tsx` (interface)
- `ProgressBar.tsx` (barra visual)

```bash
npm create vite@latest escola-x -- --template react-ts
npm install
npm run dev
```

### **Semana 2: Firebase**
**Arquivos:**
- `firebase.ts` (configuração)
- `useGamification.ts` (atualizado com Firestore)

```bash
npm install firebase
npm run dev
```

---

## 🎯 RESUMO RÁPIDO

| Semana | O que faz | Arquivo |
|--------|----------|---------|
| HC-2 | Cria banco SQLite | `database.py` |
| HC-3 | Conecta Flask + BD | `app.py` |
| HC-4 | Formulário para adicionar | `app.py` |
| AI-1 | Spring Boot básico | `ImoveisController.java` |
| AI-2 | JPA + Banco H2 | `Propriedade.java` |
| AI-3 | REST API completa | `ImoveisController.java` |
| AI-4 | Service Layer | `PropriedadeService.java` |
| SP-1 | React + Vite | `App.tsx` |
| SP-2 | React Router | `App.tsx` |
| EX-1 | Gamificação | `useGamification.ts` |
| EX-2 | Firebase | `firebase.ts` |

---

## ✨ TUDO PRONTO!

```
✅ Copie os códigos
✅ Siga os guias
✅ Cole no projeto
✅ Teste
✅ Pronto para usar!
```

---

**Data:** 08/11/2026  
**Status:** ✅ COMPLETO COM CÓDIGOS  
**Próximo:** Semanas 5-32!
