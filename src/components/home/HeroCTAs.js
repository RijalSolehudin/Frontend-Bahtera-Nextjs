'use client';
import Link from 'next/link';
import SampleShadcnButton from '../shadcn/SampleShadcnButton';

export default function HeroCTAs() {
  return (
    <div className="flex gap-3">
      <Link href="#design"><SampleShadcnButton> Lihat Template </SampleShadcnButton></Link>
      <Link href="/register"><SampleShadcnButton className="bg-secondary text-black"> Daftar Sekarang </SampleShadcnButton></Link>
    </div>
  );
}
