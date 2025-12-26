Title: feat(shadcn/accessibility): add shadcn-like components, accessibility fixes, color & spacing polish

Summary:
- Add JS shadcn-like components: Input, Form, Dialog, Menu, SampleShadcnButton
- Add MotionList / MotionWrapper for animations via framer-motion (respects prefers-reduced-motion)
- Improve color tokens and typography helpers: updated Tailwind palette, CSS tokens (.h1, .lead, .text-muted)
- Accessibility fixes: Dialog (aria-labelledby, focus management), Menu (aria attrs, keyboard), focus-visible styles, improved contrast (foreground color)
- Template grid: clickable cards now open an accessible Dialog preview

How to test locally:
1. pnpm install
2. pnpm dev
3. Visit http://localhost:3000
   - Check Home page: hero CTAs, Plans animate in, CTA buttons visible
   - Visit /design: click a template card -> Dialog opens; test keyboard (Tab/Escape)
   - Visit /login and /register: forms use Input components with proper label and focus states

Notes / Followups:
- Visual QA: run a visual pass and check spacing across small screens
- Consider replacing helper shadcn components with official shadcn components (see README)
- I couldn't create the PR automatically (no GitHub CLI installed), but the branch is pushed: feature/shadcn-accessibility
  Create PR via: https://github.com/RijalSolehudin/Frontend-Bahtera-Nextjs/pull/new/feature/shadcn-accessibility
