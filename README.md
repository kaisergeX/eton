[![.github/workflows/ci.yml](https://github.com/kaisergeX/eton/actions/workflows/ci.yml/badge.svg)](https://github.com/kaisergeX/eton/actions/workflows/ci.yml)

<div align="center">
<h1>etoN</h1>

<p>A minimalistic note-taking app for everyone.</p>

[![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=vercel)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-fff?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![@vercel/postgres](https://img.shields.io/badge/@vercel/postgres-000?style=for-the-badge&logo=postgresql&logoColor=white)](https://vercel.com/storage/postgres)
[![Drizzle](https://img.shields.io/badge/drizzile-fff?style=for-the-badge&logo=drizzile&logoColor=4bb74a)](https://orm.drizzle.team/)

</div>

## Environment Variables

Generate env file.

```bash
cp .env.example .env.local
```

Then populate the `.env.local` file with your secrets.

## Installation

```bash
pnpm i
```

## Development

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font).

## Coding convention

Check lint and format.

```bash
pnpm lint
```
