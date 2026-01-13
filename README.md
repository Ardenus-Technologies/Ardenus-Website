# Backend Flows Website

A Next.js landing page for Backend Flows, showcasing AI automation solutions.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js App Router pages and API routes
  - `page.jsx` - Home page
  - `privacy/page.jsx` - Privacy Policy page
  - `terms/page.jsx` - Terms of Service page
  - `faq/page.jsx` - FAQ page
  - `api/` - API route handlers
    - `chat/route.js` - ChatBot API endpoint
    - `newsletter/route.js` - Newsletter signup API endpoint
- `src/components/` - React components
- `src/lib/` - Utility functions
- `src/index.css` - Global styles

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is configured for deployment on Vercel. Simply push to GitHub and connect your repository to Vercel.

## API Routes

### `/api/chat`
Handles chatbot messages. Currently forwards to external webhook.

### `/api/newsletter`
Handles newsletter signups. Currently forwards to external webhook.

Both routes include placeholder logic that can be replaced with database integration or email services like Resend or SendGrid.
# Backend-Flows-Website
