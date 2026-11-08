# 🧹 House Cleaners — Semana 3: Flask + Banco de Dados

**Tempo:** 30 minutos | **Dificuldade:** Fácil | **Pré-requisito:** Semanas 1 e 2 ✅

---

## ⏱️ 5 min: CONCEITO

### Conectando Flask com Banco de Dados

**Antes (Semana 1-2):**
```
Flask fala com você (browser)
Banco de Dados fica sozinho

Página diz:        Banco guarda:
"Olá!"             João Silva
"Servidor OK"      Maria Santos
```

**Agora (Semana 3):**
```
Flask fala TUDO!

Página diz:              Banco guarda:
"Lista de clientes:"     João Silva → Página web
"1. João Silva"          Maria Santos → Página web
"2. Maria Santos"        Dados aparecem AO VIVO
"3. Pedro Costa"
```

### O que você vai criar

```
Uma página Flask que:
1. Lê dados do banco de dados
2. Mostra clientes em uma lista
3. Tudo automático!
```

---

## 🔨 15 min: PASSO A PASSO

### **PASSO 1: Atualizar o arquivo app.py**

**1.1** Abra PyCharm

**1.2** Abra a pasta **house-cleaners**

**1.3** Clique no arquivo **app.py**

```
Você vai ver:
┌────────────────────────┐
│ app.py                 │
├────────────────────────┤
│ from flask import ...  │
│ app = Flask(__name__)  │
│ ... (código da semana 1)
└────────────────────────┘
```

**1.4** Selecione TODO o código (Ctrl + A)

**1.5** Apague (Delete)

**1.6** Copie este código NOVO:

```python
# 🧹 House Cleaners — Flask + Banco de Dados
from flask import Flask, render_template
from database import listar_clientes, listar_agendamentos

app = Flask(__name__)

@app.route('/')
def home():
    clientes = listar_clientes()
    agendamentos = listar_agendamentos()
    
    return render_template('index.html', 
                          clientes=clientes,
                          agendamentos=agendamentos)

if __name__ == '__main__':
    print("🚀 House Cleaners iniciando...")
    print("🌐 Acesse: http://localhost:5000")
    app.run(debug=True, port=5000)
```

**1.7** Cole no PyCharm (Ctrl + V)

**1.8** Salve (Ctrl + S)

```
Pronto! Você agora tem:
✅ Flask conectado ao banco
✅ Dados sendo lidos automaticamente
```

---

### **PASSO 2: Criar Template HTML**

**2.1** Clique DIREITO na pasta **templates**

**2.2** Selecione: **New → HTML File**

**2.3** Digite: **index.html**

**2.4** Pressione ENTER

```
Pasta templates agora tem:
├── clientes.html
├── adicionar.html
├── index.html ← NOVO!
```

**2.5** Abra o arquivo **index.html**

**2.6** Copie este código:

```html
<!DOCTYPE html>
<html>
<head>
    <title>House Cleaners - Clientes</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
        }
        .section {
            margin: 30px 0;
        }
        .section h2 {
            border-bottom: 2px solid #007bff;
            padding-bottom: 10px;
            color: #007bff;
        }
        .item {
            background: #f9f9f9;
            padding: 15px;
            margin: 10px 0;
            border-left: 4px solid #007bff;
            border-radius: 4px;
        }
        .item p {
            margin: 5px 0;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🧹 House Cleaners</h1>
        
        <div class="section">
            <h2>📋 Clientes Cadastrados</h2>
            {% if clientes %}
                {% for cliente in clientes %}
                    <div class="item">
                        <p><strong>ID:</strong> {{ cliente[0] }}</p>
                        <p><strong>Nome:</strong> {{ cliente[1] }}</p>
                        <p><strong>Email:</strong> {{ cliente[2] }}</p>
                        <p><strong>Telefone:</strong> {{ cliente[3] }}</p>
                    </div>
                {% endfor %}
            {% else %}
                <p style="color: #999;">Nenhum cliente cadastrado ainda.</p>
            {% endif %}
        </div>
        
        <div class="section">
            <h2>📅 Agendamentos</h2>
            {% if agendamentos %}
                {% for agenda in agendamentos %}
                    <div class="item">
                        <p><strong>ID:</strong> {{ agenda[0] }}</p>
                        <p><strong>Cliente:</strong> {{ agenda[1] }}</p>
                        <p><strong>Data:</strong> {{ agenda[2] }}</p>
                        <p><strong>Serviço:</strong> {{ agenda[3] }}</p>
                        <p><strong>Preço:</strong> R$ {{ "%.2f"|format(agenda[4]) }}</p>
                    </div>
                {% endfor %}
            {% else %}
                <p style="color: #999;">Nenhum agendamento cadastrado ainda.</p>
            {% endif %}
        </div>
    </div>
</body>
</html>
```

**2.7** Cole no arquivo (Ctrl + V)

**2.8** Salve (Ctrl + S)

```
Pronto! HTML criado com:
✅ Layout profissional
✅ Estilos CSS
✅ Mostrar clientes
✅ Mostrar agendamentos
```

---

## ✅ 10 min: TESTAR

### **PASSO 1: Abrir Terminal**

**1.1** Pressione **Ctrl + `** (crase)

**1.2** No terminal, verifique se está na pasta correta:
```bash
cd C:\Users\[seu nome]\Documents\mario\projetos\house-cleaners
```

---

### **PASSO 2: Rodar Flask**

**2.1** Instale Flask se ainda não tiver:
```bash
pip install flask
```

**2.2** Rodar o servidor:
```bash
python app.py
```

```
Você vai ver:
🚀 House Cleaners iniciando...
🌐 Acesse: http://localhost:5000
```

**2.3** ✅ Servidor rodando!

---

### **PASSO 3: Acessar no Navegador**

**3.1** Abra o navegador

**3.2** Digite: **http://localhost:5000**

```
Você vai ver:

┌─────────────────────────────┐
│ 🧹 House Cleaners           │
├─────────────────────────────┤
│ 📋 Clientes Cadastrados     │
│                             │
│ ID: 1                       │
│ Nome: João Silva            │
│ Email: joao@email.com       │
│ Telefone: (11) 99999-9999   │
│                             │
│ ID: 2                       │
│ Nome: Maria Santos          │
│ Email: maria@email.com      │
│ Telefone: (11) 88888-8888   │
│                             │
│ 📅 Agendamentos             │
│                             │
│ ID: 1                       │
│ Cliente: João Silva         │
│ Data: 2027-02-15            │
│ Serviço: Limpeza Básica     │
│ Preço: R$ 100.00            │
└─────────────────────────────┘
```

**3.2** ✅✅✅ FUNCIONOU!

---

## 🚀 PRÓXIMA SEMANA

**Semana 4:** Vamos criar um **Formulário** para adicionar clientes!

Você terá:
- ✅ Página para adicionar clientes
- ✅ Dados salvam automaticamente
- ✅ Banco de dados atualizado

---

## 🎁 O QUE APRENDEU

✅ Conectar Flask com Banco de Dados  
✅ Usar templates HTML com Python  
✅ Mostrar dados dinâmicos na página  
✅ Sistema funcionando de verdade!

---

## 📋 CHECKLIST

- [ ] PyCharm aberto
- [ ] Arquivo app.py atualizado
- [ ] Arquivo index.html criado
- [ ] Flask instalado
- [ ] Servidor rodando (python app.py)
- [ ] Navegador acessando http://localhost:5000
- [ ] Página mostrando clientes
- [ ] Página mostrando agendamentos
- [ ] **SEMANA 3 COMPLETA! 🎉**

---

## 🆘 SE NÃO FUNCIONAR

### Erro: "ModuleNotFoundError: No module named 'flask'"

**Solução:**
```bash
pip install flask
python app.py
```

---

### Página em branco ou erro "500"

**Significa:** Template HTML não encontrado

**Solução:**
1. Verifique se o arquivo está em: `templates/index.html`
2. Verifique a ortografia do nome do arquivo
3. Reinicie o servidor

---

### Clientes não aparecem

**Significa:** Banco de dados vazio ou não foi criado

**Solução:**
1. No terminal, rode primeiro:
```bash
python database.py
```
2. Depois rode:
```bash
python app.py
```

---

**PARABÉNS! SEMANA 3 COMPLETA! 🎉**

Você conectou **Flask + Banco de Dados!**

**Próxima semana: Formulário para adicionar clientes! 🚀**
