# Axioware — Company Website

The official website for [Axioware](https://axioware.tech), an AI solutions company based in Karachi, Pakistan. We build intelligent automation tools — Voice Agents, AI Chatbots, Machine Learning solutions, and more — to help businesses transform customer engagement.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** + **shadcn/ui** (styling & components)
- **Framer Motion** (animations)
- **React Router v6** (routing)
- **React Hook Form** + **Zod** (forms & validation)

## Local Development

Requires Node.js 18+.

```sh
# Install dependencies
npm install

# Start dev server at http://localhost:8080
npm run dev
```

## Build & Deploy

```sh
# Production build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

Deployments are automated via GitHub Actions on every push to `main`. The workflow builds the project and syncs the `dist/` folder to AWS S3, then invalidates the CloudFront cache.

## Project Structure

```
src/
├── components/     # Reusable UI components
│   └── ui/         # shadcn/ui primitives
├── pages/          # Route-level page components
│   └── services/   # Individual service pages
├── hooks/          # Custom React hooks
└── assets/         # Static assets (images, logos)
```

## Contact

- Email: business@axioware.tech
- Phone: +92 325 8988683
- Location: Karachi, Pakistan
