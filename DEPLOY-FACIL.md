# 🚀 Guia SUPER Fácil de Deploy em Netlify

**Objetivo**: Colocar sua plataforma online em **3 passos simples** (5 minutos)

---

## ✅ Pré-requisitos

- ✅ Node.js instalado (`node --version`)
- ✅ GitHub account (criar se não tiver)
- ✅ Email: **mgutoas@gmail.com**

---

## 📋 Passo 1: Repositório GitHub

### 1.1 Já está sincronizado!

✅ Código já está em: https://github.com/mgutoas-svg/mario
✅ Branch: main
✅ Pasta: plataforma-cursos/

---

## 🌐 Passo 2: Deploy em Netlify (SUPER FÁCIL!)

### 2.1 Abrir Netlify

1. Abra https://netlify.com
2. Clique **"Sign up"**
3. Escolha **"GitHub"**
4. Autorize Netlify
5. Você será redirecionado

### 2.2 Conectar repositório

1. Clique **"Add new site"** → **"Import an existing project"**
2. Escolha **"GitHub"**
3. Procure por `mario` (mgutoas-svg/mario)
4. Clique para selecionar
5. **Branch to deploy**: main
6. Clique **"Connect repo"**

### 2.3 Configurar Deploy (OU deixe automático!)

```
Build command:     npm run build
Publish directory: dist
```

**Netlify detecta automaticamente via netlify.toml!** ✨

Clique **"Deploy site"** e pronto!

**Pronto!** Netlify vai compilar e colocar online automaticamente!

---

## 🎉 Passo 3: Seu Link Público!

Após o deploy (30-60 segundos no Netlify):

```
✅ Site is live!

Your site is live at: https://mario-academy-2027.netlify.app
```

**Netlify gera link automaticamente!** Você pode acessar de:
- 📱 Celular
- 💻 PC
- 📱 Tablet
- 🌍 De qualquer lugar do mundo!

---

## 🔄 Atualizar Depois

Toda vez que você faz push no GitHub:

```bash
# Na pasta mario (raiz do projeto)
git add .
git commit -m "✨ Atualizei a plataforma"
git push github main
```

**Netlify detecta automaticamente!** Em ~30 segundos está atualizado. ✨

---

## 🎯 Resultado Final

```
🎓 Mario Academy 2027 — LIVE!

Seu site está ONLINE em:
https://mario-academy-2027.netlify.app

✅ 128 aulas disponíveis
✅ Gamificação funcionando
✅ Acessível de qualquer lugar
✅ Progresso salvo automaticamente
✅ Deploy automático no GitHub push
```

---

## 🆘 Dúvidas?

### "Não consigo criar conta GitHub"
→ Abra https://github.com/signup

### "Erro ao fazer git push"
→ Verifique se copiou corretamente o link (tem seu-username?)

### "Deploy falha em Vercel"
→ Verifique: `npm run build` funciona localmente?
```bash
npm run build
```

### "Quer um domínio customizado?"
→ Em Vercel: **Domains** → Adicionar seu domínio
→ (Custa ~R$ 20/ano, mas é opcional)

---

## 💡 Pro Tips

### 1. Acompanhar Deploy
- Dashboard Vercel mostra logs em tempo real
- Veja exatamente o que está acontecendo

### 2. Rollback Rápido
- Se errou algo, Vercel tem todas as versões
- Basta clicar "Redeploy" em versão anterior

### 3. Environment Variables
- Em Vercel: **Settings** → **Environment Variables**
- Perfeito para APIs/chaves secretas depois

### 4. Analytics
- Em Vercel: **Analytics** → Quantas pessoas visitaram
- Rastreie tráfego da sua plataforma

---

## ✨ Parabéns!

Você agora tem uma **plataforma de cursos ONLINE**! 🎉

```
🌍 Acessível globalmente
📱 Funciona em qualquer device
⚡ Super rápido (Vercel)
💾 Progresso salvo automaticamente
🎮 Com gamificação total
```

---

**Próximo passo:** Compartilhe o link com amigos!

`https://seu-site.vercel.app`

🚀 **Mario Academy 2027 está LIVE!**
