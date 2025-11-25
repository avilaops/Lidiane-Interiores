# 🚀 Configuração GitHub Pages - Lidiane de Interiores

## ✅ Status: Código enviado com sucesso!

O projeto foi enviado para o GitHub. Agora precisamos configurar o GitHub Pages.

---

## 📋 PASSOS PARA ATIVAR O GITHUB PAGES

### 1. Acessar Configurações do Repositório
1. Acesse: https://github.com/avilaops/Lidiane-Interiores
2. Clique em **Settings** (Configurações)

### 2. Configurar GitHub Pages
1. No menu lateral, clique em **Pages**
2. Em **Source** (Fonte):
   - Branch: **main**
   - Folder: **/web** ← IMPORTANTE: selecionar a pasta web
3. Clique em **Save**

### 3. Aguardar Deploy
- O GitHub levará 1-3 minutos para fazer o deploy
- Você verá uma mensagem verde quando estiver pronto
- URL temporária: `https://avilaops.github.io/Lidiane-Interiores/`

---

## 🌐 CONFIGURAÇÃO DO DOMÍNIO PERSONALIZADO

### Arquivo CNAME
✅ Já criado em: `web/CNAME` com o domínio: **lidiane.avila.inc**

### Configurar DNS no seu provedor de domínio

Você precisa adicionar estes registros DNS:

#### Opção 1: Usar CNAME (Recomendado)
```
Tipo: CNAME
Nome: lidiane (ou @)
Valor: avilaops.github.io
TTL: 3600
```

#### Opção 2: Usar A Records
```
Tipo: A
Nome: @ (ou vazio)
Valor: 185.199.108.153
TTL: 3600

Tipo: A
Nome: @ (ou vazio)
Valor: 185.199.109.153
TTL: 3600

Tipo: A
Nome: @ (ou vazio)
Valor: 185.199.110.153
TTL: 3600

Tipo: A
Nome: @ (ou vazio)
Valor: 185.199.111.153
TTL: 3600
```

### No GitHub (após configurar DNS)
1. Volte em **Settings → Pages**
2. Em **Custom domain**, digite: `lidiane.avila.inc`
3. Clique em **Save**
4. Aguarde a verificação do DNS (pode levar até 24h)
5. Marque a opção **Enforce HTTPS** quando disponível

---

## ⚙️ VERIFICAR STATUS DO DEPLOY

### Via GitHub Actions
1. Na página do repositório, clique em **Actions**
2. Você verá o workflow "pages build and deployment"
3. Quando ficar verde ✅, o site está no ar!

### Testar o Site
Após deploy, acesse:
- **URL temporária:** https://avilaops.github.io/Lidiane-Interiores/
- **URL final (após DNS):** https://lidiane.avila.inc

---

## 🔧 TROUBLESHOOTING

### Site não aparece?
1. Verifique se selecionou a pasta **/web** nas configurações
2. Confirme que o branch é **main**
3. Aguarde 3-5 minutos após o deploy

### Domínio personalizado não funciona?
1. Verifique se os registros DNS estão corretos
2. Use ferramentas como https://dnschecker.org para verificar propagação
3. DNS pode levar de 1 hora a 24 horas para propagar

### Erro 404?
1. Certifique-se que o arquivo `web/CNAME` existe
2. Verifique se o domínio está correto no arquivo
3. Refaça a configuração em Settings → Pages

### HTTPS não ativa?
1. Aguarde o DNS propagar completamente
2. Pode levar algumas horas após a verificação do domínio
3. O GitHub ativa automaticamente quando possível

---

## 📱 PRÓXIMOS PASSOS APÓS DEPLOY

### 1. Personalizar Conteúdo
- [ ] Atualizar email em `web/index.html` (linha ~500)
- [ ] Atualizar telefone em `web/index.html` (linha ~501)
- [ ] Atualizar número WhatsApp em `web/js/main.js` (linha ~135)
- [ ] Adicionar links de redes sociais

### 2. Adicionar Imagens
- [ ] Criar pasta `web/imagens/`
- [ ] Adicionar fotos dos projetos
- [ ] Adicionar foto profissional da Lidiane
- [ ] Substituir placeholders no HTML

### 3. Otimizações
- [ ] Adicionar Google Analytics
- [ ] Adicionar Pixel do Facebook/Instagram
- [ ] Comprimir imagens antes de adicionar
- [ ] Testar em diferentes dispositivos

### 4. SEO
- [ ] Configurar Google Search Console
- [ ] Criar sitemap.xml
- [ ] Otimizar meta tags
- [ ] Adicionar Schema markup

---

## 🎯 COMANDOS GIT ÚTEIS

### Fazer alterações no site:
```bash
# Editar arquivos localmente
# Depois:
git add .
git commit -m "Descrição das alterações"
git push origin main
```

### Verificar status:
```bash
git status
```

### Ver histórico:
```bash
git log --oneline
```

---

## 📞 SUPORTE

### Links Úteis:
- 📖 [Documentação GitHub Pages](https://docs.github.com/pt/pages)
- 🌐 [Configurar Domínio Personalizado](https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site)
- 🔒 [HTTPS no GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

### Verificar DNS:
- https://dnschecker.org
- https://mxtoolbox.com/SuperTool.aspx

---

## ✨ RESUMO

✅ **Código enviado:** https://github.com/avilaops/Lidiane-Interiores
⏳ **Aguardando:** Configuração do GitHub Pages
🌐 **Domínio configurado:** lidiane.avila.inc (arquivo CNAME criado)
📝 **Próximo passo:** Configurar DNS no provedor do domínio

---

**O projeto está pronto para ir ao ar! 🚀**

Assim que configurar o DNS e ativar o GitHub Pages, o site estará online e acessível!
