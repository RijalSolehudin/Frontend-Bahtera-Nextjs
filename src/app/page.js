import PlansList from '../components/plans/PlansList';
import HeroCTAs from '../components/home/HeroCTAs';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Landing */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
<h1 className="h1 mb-3">Undangan Digital Elegan &amp; Simple</h1>
          <p className="lead mb-4">
            Buat undangan digital profesional untuk acara Anda — gampang, cepat, dan terlihat
            elegan di semua perangkat.
          </p>
          <div className="flex gap-3">
            <HeroCTAs />
          </div>
        </div>
        <div className="w-full h-64 rounded bg-slate-100 flex items-center justify-center">Placeholder Image</div>
      </section>

      {/* Plans */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Pilih Tipe Undangan</h2>
        <PlansList />
      </section>

      <section>
        <div className="bg-primary text-white rounded p-6">Keterangan tambahan / CTA area</div>
      </section>
    </div>
  );
}
