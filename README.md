This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---

## Project scaffold (Digital Invitation Frontend)

This repository contains a Next.js frontend scaffold for a digital invitation service. It includes:

- App Router layout (`src/app`) with global styles and Tailwind configured
- Component primitives (Buttons, Cards, Skeletons) using Tailwind utility classes
- Pages: Home, Design/Template, Login, Register
- Placeholder API bindings and lazy-loading with skeletons

Optional packages to install (recommended for full experience):

- framer-motion (for animations): `pnpm add framer-motion`
- shadcn UI (Radix + shadcn): follow https://ui.shadcn.com/ — typical flow:
  1. Install radix primitives and shadcn tooling per docs
  2. Run the shadcn setup and copy the generated components into `src/components` to customize

Note: This scaffold intentionally uses JavaScript (no TypeScript) and keeps a simple, scalable folder structure with separation of concerns.

---

Framer Motion integration notes

- I added `src/components/ui/MotionWrapper.js` and `src/components/ui/MotionList.js` which will dynamically try to import `framer-motion`. If `framer-motion` is not installed the components gracefully fall back to plain elements.
- `PlansList` and `TemplateGrid` use `MotionList` for staggered entry/fade animations. Since you've installed `framer-motion`, animations should now be active — restart the dev server if needed.

Color tokens & typography

- I expanded the Tailwind color palette (`tailwind.config.cjs`) and added typographic helpers in `src/app/globals.css` (`.h1`, `.h2`, `.lead`, `.text-muted`, `.text-subtle`) so text hierarchy is consistent and accessible.
- To adjust the primary or neutral tones, edit `tailwind.config.cjs` and `:root` CSS variables in `src/app/globals.css`.

Shadcn UI notes

- I added several shadcn-like helper components under `src/components/shadcn/`:
  - `Input.js` (form input with label & error presentation)
  - `Form.js` (small form wrapper)
  - `Dialog.js` (accessible modal dialog)
  - `Menu.js` (simple dropdown menu)
  - `SampleShadcnButton.js` (button styled like shadcn)
- These components are intentionally small, framework-agnostic, and implemented in plain JavaScript so you can replace them with official shadcn-generated components later if desired. Follow https://ui.shadcn.com/ to generate components and copy them into `src/components`.

---

How to run

1. Install dependencies: `pnpm install` (or `npm install` / `yarn`)
2. Start development server: `pnpm dev`

Customization notes

- Colors: primary/secondary/neutral are defined in `tailwind.config.cjs` and CSS variables in `src/app/globals.css`.
- Dynamic data: templates are fetched from `https://jsonplaceholder.typicode.com/photos?_limit=16` in `src/hooks/useTemplates.js` — replace with your API when ready.
- Plans/specs: default plans are in `src/data/plans.js` — edit the text/specs there to customize features per type.
- Lazy loading & skeletons: dynamic sections use `next/dynamic` and `Skeleton` components to preserve perceived performance.

Accessibility & best practice notes

- Components are small, focused and client/server concerns are separated (data hooks for fetching client-side dynamic items).
- Keep UI primitive files under `src/components/ui` and page-specific components under their domain folders for scalability.

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
