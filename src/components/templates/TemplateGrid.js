'use client';
import { useState } from 'react';
import Card from '../ui/Card';
import Skeleton from '../ui/Skeleton';
import useTemplates from '../../hooks/useTemplates';
import Image from 'next/image';
import Carousel from '../ui/Carousel';
import Dialog from '../shadcn/Dialog';

const FILTERS = ['all', 'basic', 'premium', 'eksclusif'];

export default function TemplateGrid() {
  const { templates, loading } = useTemplates();
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const items = templates.filter((t) => filter === 'all' || t.type === filter);

  if (loading) {
    return (
      <div>
        <div className="flex gap-2 mb-4">
          {FILTERS.map((f) => (
            <button key={f} className="px-3 py-1 bg-slate-100 rounded text-sm">{f}</button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded text-sm border ${filter === f ? 'bg-primary text-white border-primary' : 'bg-white text-muted border-slate-100'}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="pb-4 md:pb-0">
        <Carousel autoplay={true}>
          {items.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelected(t)}
              className="w-full text-left focus:outline-none h-full p-2"
            >
              <Card className="relative overflow-hidden transition transform hover:scale-105 h-full group">
                <div className="aspect-[4/5] bg-slate-50 rounded overflow-hidden">
                  {/* use next/image for optimization but fall back if external */}
                  <img src={t.thumbnail} alt={t.title} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" />
                </div>
                <div className="absolute left-2 top-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium shadow-sm">{t.type}</div>
                <div className="absolute left-2 bottom-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium shadow-sm max-w-[90%] truncate">{t.title}</div>
              </Card>
            </button>
          ))}
        </Carousel>
      </div>

      <Dialog open={!!selected} onOpenChange={(v) => { if (!v) setSelected(null); }} title={selected?.title}>
        {selected ? (
          <div>
            <div className="mb-4">
              <img src={selected.url} alt={selected.title} className="w-full rounded" />
            </div>
            <div className="text-sm text-muted">Type: {selected.type}</div>
            <div className="mt-4 flex gap-2 justify-end">
              <button className="px-3 py-2 bg-primary text-white rounded">Pilih Template</button>
              <button className="px-3 py-2 rounded bg-slate-100" onClick={() => setSelected(null)}>Tutup</button>
            </div>
          </div>
        ) : null}
      </Dialog>
    </div>
  );
}
