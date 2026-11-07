# Sunitha Jammu | Software & AI Engineer

A responsive personal portfolio highlighting Sunitha's interests in software engineering, AI engineering, Generative AI, and Agentic AI.

## Live site

Add the production URL from Vercel after deployment.

## Built with

- React 18 and TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Run locally

Requires Node.js 20 or newer.

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production site to `dist/`.

## Deploy with GitHub and Vercel

1. Push this project to a GitHub repository named `sunitha-portfolio`.
2. In Vercel, choose **Add New Project** and import that GitHub repository.
3. Vercel should detect Vite. Use `npm run build` as the build command and `dist` as the output directory.
4. No environment variables are required. The contact form uses a validated `mailto:` draft and does not send data to a backend.
5. After deployment, replace the live-site note above with the production URL.

## Update profile content

- Personal details, profile links, projects, and skills are maintained in `src/App.tsx`.
- Visual styles and responsive layouts are in `src/styles.css`.
- Replace `public/resume.txt` with an up-to-date resume and update the `resume` path in `src/App.tsx` if its filename changes.
- Push changes to the GitHub default branch; Vercel will build and publish them automatically after the project is connected.

## Security notes

Do not commit API keys, passwords, or local environment files. `.gitignore` excludes `.env*`, `*.local`, and Vercel's local project configuration. This portfolio currently has no server-side API or required secrets.
