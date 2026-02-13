# Express + React (TailAdmin) Starter Pack

Monorepo starter pack dengan:

- Backend: Express.js + TypeScript
- Frontend: React + TypeScript (TailAdmin)
- Integrasi API: proxy Vite ke backend (`/api`)

## Struktur

- `backend`: API server Express
- `frontend`: TailAdmin React app

## Project Structure

```text
.
|-- backend/
|   |-- src/
|   |   |-- config/
|   |   |   `-- env.ts
|   |   |-- controllers/
|   |   |   `-- health.controller.ts
|   |   |-- middleware/
|   |   |   |-- error-handler.ts
|   |   |   `-- not-found.ts
|   |   |-- routes/
|   |   |   |-- health.route.ts
|   |   |   `-- index.ts
|   |   |-- services/
|   |   |   `-- health.service.ts
|   |   |-- app.ts
|   |   `-- server.ts
|   |-- .env.example
|   |-- package.json
|   |-- tsconfig.json
|   `-- tsconfig.build.json
|-- frontend/
|   |-- src/
|   |   |-- components/
|   |   |-- context/
|   |   |-- hooks/
|   |   |-- icons/
|   |   |-- layout/
|   |   |-- lib/
|   |   |-- pages/
|   |   |-- types/
|   |   |-- App.tsx
|   |   `-- main.tsx
|   |-- public/
|   |-- .env.example
|   |-- package.json
|   `-- vite.config.ts
|-- package.json
`-- README.md
```

## Prasyarat

- Node.js 20+
- npm 10+

## Setup

```bash
npm install
```

Buat environment backend:

```bash
copy backend\\.env.example backend\\.env
```

## Jalankan Development

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:4000`
- Health API: `http://localhost:4000/api/health`

## Scripts

- `npm run dev`: jalankan backend + frontend bersamaan
- `npm run build`: build backend + frontend
- `npm run start`: jalankan backend dari hasil build
- `npm run lint`: lint semua workspace
- `npm run typecheck`: typecheck semua workspace

## Catatan Integrasi

Frontend memakai helper API di `frontend/src/lib/api.ts`:

- default base URL: `VITE_API_BASE_URL` (default `/api`)
- saat development, request `/api/*` diproxy ke backend (`http://localhost:4000`)

Dashboard (`/`) menampilkan kartu status backend sebagai bukti integrasi frontend-backend berjalan.
