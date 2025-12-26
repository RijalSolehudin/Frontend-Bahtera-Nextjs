import TemplateGrid from '../../components/templates/TemplateGrid';

export default function DesignPage() {
  return (
    <div id="design" className="space-y-8">
      <section className="bg-white rounded p-6">
        <h1 className="h2">Preset Make easy, Tinggal Pakai langsung jadi!</h1>
        <p className="lead">Pilih dari berbagai preset template undangan, mudah dikustomisasi.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-48 bg-slate-100 rounded flex items-center justify-center">Marketing Image 1</div>
        <div className="h-48 bg-slate-100 rounded flex items-center justify-center">Marketing Image 2</div>
      </section>

      <section>
        <TemplateGrid />
      </section>
    </div>
  );
}
