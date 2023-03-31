# Coding Challenge

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

## How to use this Project

Run the development server locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Or visit the Vercel Deployment

Open [Vercel link](link)

---

## How this app works

- frontend
  - user can search for artists
  - if there are matches, display them in a list
  - display button to download the csv file
  - display button to jump top and focus input field
- backend
  - search input is sent to the backend api route
  - backend sends request to last.fm API
  - if there are results, send them to the frontend
  - if there are no results or no connection, send the local file to the frontend instead
  - error handling is implemented

---

## API Routing

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/searchArtist](http://localhost:3000/api/searchArtist). This endpoint can be edited in `pages/api/searchArtist.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
