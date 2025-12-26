'use client';
import Card from '../ui/Card';
import { IconCheck, IconX } from '../ui/icons';
import usePlans from '../../hooks/usePlans';
import Skeleton from '../ui/Skeleton';
import MotionList from '../ui/MotionList';

export default function PlansList() {
  const { plans, loading } = usePlans();

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Skeleton className="h-48" />
        <Skeleton className="h-48" />
        <Skeleton className="h-48" />
      </div>
    );
  }

  return (
    <MotionList className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {plans.map((p) => (
        <Card key={p.id} className="flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="h2">{p.title}</div>
              <div className="text-sm text-subtle">{p.price}</div>
            </div>
          </div>
          <div className="flex-1">
            <ul className="space-y-2 text-sm">
              {p.specs.map((s) => (
                <li key={s.label} className="flex items-center gap-2">
                  {s.available ? <IconCheck /> : <IconX />}
                  <span className="text-muted">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      ))}
    </MotionList>
  );
}
