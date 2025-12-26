'use client';
// This is a small helper component that mimics a shadcn-style button while
// remaining independent of the official shadcn packages. If you decide to
// install shadcn and radix primitives, replace usage with the real component.

import Button from '../ui/Button';

export default function SampleShadcnButton({ children, className = '', ...props }) {
  return (
    <Button className={`rounded-md shadow-sm px-3 py-2 tracking-tight ${className}`} {...props}>
      {children}
    </Button>
  );
}
