# Timberhack

Site institucional da Timberhack — engenharia estrutural em madeira engenheirada (CLT, glulam, sistemas híbridos).

**Produção:** https://ja1ap.github.io/timberhack-foundations/

## Stack

Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui · React Router (SPA) · Zod + FormSubmit (formulário de contato) · Vitest

## Setup

Requer Node.js 18+.

```bash
npm install
```

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com HMR em http://localhost:8080/timberhack-foundations/ |
| `npm run build` | Build de produção em `dist/` (inclui `404.html` para fallback SPA) |
| `npm run preview` | Serve o conteúdo de `dist/` localmente para validar o build |
| `npm test` | Roda a suíte Vitest |
| `npm run lint` | Roda ESLint |

## Estrutura

```
src/
  components/      Componentes da landing (Hero, Portfolio, Contact, ...)
  pages/           Index, Blog, BlogArticle, NotFound
  data/articles.ts Conteúdo do blog (artigos)
  assets/          Imagens importadas pelo bundler
public/            Assets servidos a partir da raiz (favicon, og-image)
```

## Configuração de base path

O site é publicado em subpath `/timberhack-foundations/`. O `vite.config.ts` lê `process.env.VITE_BASE` com fallback para esse subpath, então é possível buildar para outra rota com:

```bash
VITE_BASE=/ npm run build   # build para servir na raiz
```

O `BrowserRouter` lê automaticamente `import.meta.env.BASE_URL` via `basename`, e as âncoras internas (Navbar, Footer) também respeitam o base.

## Deploy (GitHub Pages)

A branch `main` guarda o código-fonte. A branch `gh-pages` guarda os arquivos de `dist/` e é o que o GitHub Pages serve. O fluxo manual atual:

1. `npm run build`
2. Em um diretório temporário, copiar `dist/*`, fazer `git init -b gh-pages`, commit e `git push -f origin gh-pages`
3. Aguardar o deployment do GitHub Pages (~1 min)

> **Melhoria pendente:** adicionar um `npm run deploy` (via `gh-pages` ou GitHub Actions) para automatizar esse ritual.
