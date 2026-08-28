# Minha Vez — Documentação

Manual de uso do ecossistema **Minha Vez**, construído com [Docusaurus](https://docusaurus.io/).

Cobre dois produtos:

- **App** (`docs/app/`) — manual do paciente, para quem usa o aplicativo mobile.
- **Manager** (`docs/manager/`) — manual da equipe da unidade de saúde, para quem usa o painel web.

> Esta documentação cobre **uso** dos produtos (manual/tutorial para usuários finais). Documentação técnica (instalação, arquitetura, deploy) fica nos READMEs de cada repositório (`minha-vez-app`, `minha-vez-manager`, `minhavez-backend`).

## Desenvolvimento local

```bash
npm install
npm start
```

Abre um servidor local com hot-reload em `http://localhost:3000`.

## Build de produção

```bash
npm run build
```

Gera os arquivos estáticos em `build/`, prontos para qualquer hospedagem estática (Vercel, Netlify, GitHub Pages).

```bash
npm run serve
```

Serve o build de produção localmente, para conferir antes do deploy.

## Estrutura

```
docs/
├── intro.md          # página inicial (/)
├── app/               # manual do app (paciente)
│   ├── primeiros-passos.md
│   ├── buscar-unidade.md
│   ├── agendar-exame.md
│   ├── fila-tempo-real.md
│   ├── notificacoes.md
│   ├── perfil-e-conta.md
│   └── faq.md
└── manager/           # manual do manager (unidade de saúde)
    ├── primeiros-passos.md
    ├── gestao-da-unidade.md
    ├── profissionais.md
    ├── exames.md
    ├── agendamentos.md
    ├── gestao-de-fila.md
    ├── perfil.md
    └── faq.md
```

Cada seção tem sua própria sidebar (`sidebars.js`), gerada automaticamente a partir dos arquivos da pasta — para adicionar uma página nova, basta criar o `.md` com `sidebar_position` no front matter.

## Pendências / próximos passos

- [ ] Substituir logo e favicon padrão do Docusaurus em `static/img/` pelos da marca.
- [ ] Trocar os placeholders `{/* IMG: ... */}` por prints reais de cada tela.
- [ ] Ajustar `url`/`organizationName`/`projectName` em `docusaurus.config.js` quando o domínio e o repositório definitivos estiverem definidos.
- [ ] Configurar deploy (GitHub Pages via `npm run deploy`, ou Vercel/Netlify apontando para este diretório).

## Deploy via GitHub Pages

```bash
GIT_USER=<seu usuário do GitHub> npm run deploy
```

Publica o build na branch `gh-pages` do repositório configurado em `organizationName`/`projectName` (`docusaurus.config.js`).
