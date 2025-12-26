export default function Footer() {
  return (
    <footer className="w-full border-t bg-neutral py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center gap-3">
          {/* Left: placeholder for payment logos */}
          <div className="flex gap-4">
            <div className="w-24 h-8 bg-white rounded shadow-sm" />
            <div className="w-24 h-8 bg-white rounded shadow-sm" />
          </div>
        </div>

        <div className="flex justify-end items-center text-sm text-muted">
          {/* Right: placeholder for about/company info */}
          <div className="text-right">
            <div>© {new Date().getFullYear()} Bahtera</div>
            <div className="text-xs">Informasi tentang kami &amp; kontak</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
