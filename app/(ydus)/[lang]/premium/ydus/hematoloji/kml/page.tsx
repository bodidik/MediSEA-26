import Link from 'next/link';

export default function KmlDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Üst Navigasyon */}
        <div className="mb-8 flex items-center gap-2 text-sm font-bold text-slate-500 overflow-x-auto whitespace-nowrap pb-2">
          <Link href="/tr/premium/ydus" className="hover:text-slate-800 transition-colors">🏠 Premium Lobi</Link>
          <span>/</span>
          <Link href="/tr/premium/ydus/hematoloji" className="hover:text-rose-600 transition-colors">Hematoloji</Link>
          <span>/</span>
          <span className="text-slate-800">KML</span>
        </div>

        {/* KML Özel Hero Bölümü */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 mb-10 shadow-lg border border-slate-200 relative overflow-hidden">
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 rounded-3xl bg-blue-900 flex items-center justify-center text-5xl shrink-0 shadow-inner text-white">⚙️</div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-black px-2.5 py-1 rounded-md uppercase tracking-wider">Ph(+) Pozitif</span>
                <span className="bg-green-100 text-green-700 text-xs font-black px-2.5 py-1 rounded-md uppercase tracking-wider">TKI Çağı</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">Kronik Myeloid Lösemi (KML)</h1>
              <p className="text-slate-500 font-medium max-w-2xl text-base sm:text-lg leading-relaxed">
                Philadelphia kromozomu [t(9;22)], BCR-ABL1 füzyon geni ve tirozin kinaz inhibitörleri (TKI). ELN 2020 kılavuzuna göre moleküler yanıt takibi ve direnç mutasyonları (T315I) bu modülün kalbidir.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-5 pointer-events-none"></div>
        </div>

        {/* ÇALIŞMA MODÜLLERİ */}
        <h2 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          KML Çalışma Modülleri
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/tr/premium/ydus/flashcards?topic=kml" className="group bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🃏</div>
            <h3 className="font-bold text-slate-800 text-xl mb-2 group-hover:text-blue-700">KML Flashcardlar</h3>
            <p className="text-slate-500 text-sm font-medium mb-8 flex-1">Evreleme (Kronik, Akselere, Blastik), sitogenetik yanıtlar ve moleküler takip eşiklerini (MMR, MR4.5) ezberleyin.</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-blue-600 font-black text-sm">Hemen Başla</span>
              <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">➡️</span>
            </div>
          </Link>

          <Link href="/tr/premium/ydus/pearls?topic=kml" className="group bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">💎</div>
            <h3 className="font-bold text-slate-800 text-xl mb-2 group-hover:text-purple-700">TKI İncileri</h3>
            <p className="text-slate-500 text-sm font-medium mb-8 flex-1">İmatinib ödemi, Dasatinib plevral efüzyonu, Nilotinib vasküler olayları... TKI yan etkileri ve mutasyon yönetimi notları.</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-purple-600 font-black text-sm">Notları Oku</span>
              <span className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">➡️</span>
            </div>
          </Link>

          <div className="opacity-50 grayscale cursor-not-allowed group bg-slate-900 rounded-3xl p-8 border-2 border-slate-800 shadow-lg flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-slate-500 text-white text-[10px] font-black px-4 py-1.5 rounded-bl-xl z-10 uppercase">Hazırlanıyor</div>
             <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-3xl mb-6 relative z-10">📝</div>
             <h3 className="font-bold text-white text-xl mb-2 relative z-10">KML Deneme Sınavı</h3>
             <p className="text-slate-400 text-sm font-medium mb-8 flex-1 relative z-10">Philadelphia pozitif vakaların yönetimini içeren board tipi sorular yakında.</p>
          </div>
        </div>
      </div>
    </div>
  );
}