# Rushil Krishna Sai Narendula — Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4
- A Next.js API route (`/api/contact`) backing the contact form

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Contact form

The contact form posts to `/api/contact`, which sends mail via [Resend](https://resend.com). To enable it, set these environment variables (locally in `.env.local`, or in your Vercel project settings):

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL="Portfolio Contact Form <you@yourdomain.com>" # optional, defaults to Resend's sandbox sender
```

Without `RESEND_API_KEY` set, the form still validates input but responds with a friendly message pointing visitors to email directly.

## Content

All resume/profile content lives in [`src/data/content.ts`](src/data/content.ts) — edit that file to update experience, projects, skills, etc.

## Deployment

Deployed on [Vercel](https://vercel.com). Pushing to `main` triggers a new deployment automatically once the repo is connected.
