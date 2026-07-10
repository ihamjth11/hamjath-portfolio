# Mohomad Hamjath — Portfolio

Full Stack Developer portfolio. Built with React + Vite + Tailwind CSS.

## Run locally

```
npm install
npm run dev
```

Opens at http://localhost:5173

## Add a new project

Open `src/data.js`. Add a new object to `flagshipProjects` or `otherProjects` — the page updates automatically, no other files need to change.

## Add new experience

Open `src/data.js`. Add a new object to the `experience` or `education` array.

## Change the photo

Replace `public/profile.jpg` with a new image (keep the same filename, or update the path in `src/components/Hero.jsx`).

## Deploy to Vercel (same as your other projects)

1. Push this folder to a new GitHub repo
2. Go to vercel.com → New Project → import the repo
3. Framework preset: **Vite** (auto-detected)
4. Deploy — done

## Build for production

```
npm run build
```

Output goes to the `dist/` folder.
