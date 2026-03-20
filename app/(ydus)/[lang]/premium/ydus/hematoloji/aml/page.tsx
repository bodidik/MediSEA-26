import Link from 'next/link';
import PremiumVideoRecommendations from '@/app/components/PremiumVideoRecommendations';

// 1. VİDEO RADAR VERİSİ
import amlVideoData from '../../../../../../../content/premium/ydus/videos/hematoloji/aml-videos.json';

// 2. KANONİK TEORİK İÇERİK (Bilgi Ana Üssü)
import amlCanonicalData from '../../../../../../../content/canonical/hematoloji/aml.json';

export default function AmlDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 py-8 px-4 sm:px-6 font-sans text-slate-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Üst Navigasyon */}
        <div className="mb-8 flex items-center gap-2 text-sm font-bold text-slate-500 overflow-x-auto whitespace-nowrap pb-2 border-b border-slate-800/50">
          <Link href="/tr/premium/ydus" className="hover:text-blue-400 transition-colors">
            ⚓ Ana Karargah
          </Link>
          <span>/</span>
          <Link
            href="/tr/premium/ydus/hematoloji"
            className="hover:text-rose-400 transition-colors"
          >
            Hematoloji
          </Link>
          <span>/</span>
          <span className="text-slate-300">AML</span>
        </div>

        {/* AML Özel Hero Bölümü */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 mb-8 shadow-2xl border border-blue-900/30 relative overflow-hidden">
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 rounded-3xl bg-slate-950 flex items-center justify-center text-5xl shrink-0 shadow-inner border border-slate-800">
              🔬
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-red-900/30 text-red-400 text-xs font-black px-3 py-1.5 rounded-lg border border-red-500/20 uppercase tracking-widest">
                  Zorluk: Yüksek
                </span>
                <span className="bg-blue-900/30 text-blue-400 text-xs font-black px-3 py-1.5 rounded-lg border border-blue-500/20 uppercase tracking-widest">
                  Soru Beklenen Konu
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white mb-3 uppercase italic tracking-tighter">
                Akut Myeloid Lösemi (AML)
              </h1>
              <p className="text-slate-400 font-medium max-w-2xl text-base sm:text-lg leading-relaxed">
                Erişkinlerde en sık görülen akut lösemi tipi. WHO sınıflaması, genetik risk faktörleri
                (FLT3, NPM1) ve hedefe yönelik yeni nesil tedaviler bu modülün odak noktasıdır.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-10 pointer-events-none" />
        </div>

        {/* ========================================================= */}
        {/* 1. KISIM: KANONİK TEORİK İÇERİK BÖLÜMÜ (BİLGİ ANA ÜSSÜ)   */}
        {/* ========================================================= */}
        <div className="bg-slate-900/50 p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-lg mb-12 relative overflow-hidden">
          
          {/* Üst Başlık ve Güncelleme Tarihi */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 border-b border-slate-800 pb-4 gap-4">
            <h2 className="text-2xl font-black text-white flex items-center gap-3 uppercase tracking-widest">
              <span className="text-blue-500">📖</span>
              {amlCanonicalData.title}
            </h2>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0">
              Son Güncelleme: {amlCanonicalData.meta.updatedAt}
            </span>
          </div>

          {/* Kanonik Bölümler (Döngü ile Otomatik Geliyor) */}
          <div className="prose prose-invert prose-blue max-w-none text-slate-300 leading-relaxed font-medium">
            {amlCanonicalData.sections.map((sec, idx) => (
              <div key={idx} className="mb-8">
                <h3 className="text-xl font-bold text-blue-100 mb-3 border-l-4 border-blue-500 pl-3">
                  {sec.heading}
                </h3>
                {/* HTML içeren teorik metni güvenle basıyoruz */}
                <div 
                  className="text-[15px] space-y-4"
                  dangerouslySetInnerHTML={{ __html: sec.text }} 
                />
              </div>
            ))}
          </div>

          {/* Etiketler (Tags) */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-2">
            {amlCanonicalData.meta.tags.map((tag, idx) => (
              <span key={idx} className="text-[10px] bg-blue-900/20 text-blue-400 px-3 py-1 rounded-md border border-blue-500/20 uppercase tracking-widest">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. KISIM: TAKTİKSEL MODÜLLER (UYGULAMA VE PRATİK)         */}
        {/* ========================================================= */}
        <h2 className="text-xl font-black text-slate-300 mb-6 flex items-center gap-3 uppercase tracking-widest">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          Teoriyi Pratiğe Dök
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Flashcard Kartı */}
          <Link
            href="/tr/premium/ydus/hizli-tekrar?branch=hematoloji&id=aml"
            className="group bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-lg hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-900/30 border border-blue-500/30 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              🃏
            </div>
            <h3 className="font-black text-white text-xl mb-2 group-hover:text-blue-400 transition-colors">
              Akıllı Flashcardlar
            </h3>
            <p className="text-slate-500 text-sm font-medium mb-8 flex-1 leading-relaxed">
              Genetik mutasyonları ve prognostik faktörleri aralıklı tekrar ile hafızanıza kazıyın.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-blue-500 font-black text-sm uppercase tracking-widest">Başla</span>
              <span className="w-8 h-8 rounded-full bg-slate-950 text-blue-500 border border-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                ➡️
              </span>
            </div>
          </Link>

          {/* İnciler Kartı */}
          <Link
            href="/tr/premium/ydus/inciler?branch=hematoloji&id=aml"
            className="group bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-lg hover:border-yellow-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="w-14 h-14 rounded-2xl bg-yellow-900/30 border border-yellow-500/30 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              💎
            </div>
            <h3 className="font-black text-white text-xl mb-2 group-hover:text-yellow-400 transition-colors">
              Klinik İnciler
            </h3>
            <p className="text-slate-500 text-sm font-medium mb-8 flex-1 leading-relaxed">
              Nokta atışı sızma bilgileri ve kılavuz özetlerini hızlıca okuyun.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-yellow-500 font-black text-sm uppercase tracking-widest">Oku</span>
              <span className="w-8 h-8 rounded-full bg-slate-950 text-yellow-500 border border-slate-800 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-slate-900 transition-all">
                ➡️
              </span>
            </div>
          </Link>

          {/* Sınav Kartı */}
          <Link
            href="/tr/premium/ydus/quiz-coz?branch=hematoloji&id=aml-quiz-1"
            className="group bg-slate-900 rounded-3xl p-8 border border-red-500/30 shadow-2xl hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black px-4 py-2 rounded-bl-xl shadow-lg z-10 uppercase tracking-widest">
              BOARD TİPİ
            </div>
            <div className="w-14 h-14 rounded-2xl bg-red-900/30 border border-red-500/30 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform relative z-10">
              📝
            </div>
            <h3 className="font-black text-white text-xl mb-2 relative z-10 group-hover:text-red-400 transition-colors">
              Mega Deneme
            </h3>
            <p className="text-slate-400 text-sm font-medium mb-8 flex-1 relative z-10 leading-relaxed">
              Vaka temelli zorlayıcı sorularla kendinizi test edin ve analizleri görün.
            </p>
            <div className="flex items-center justify-between mt-auto relative z-10">
              <span className="text-red-400 font-black text-sm uppercase tracking-widest">Sınavı Başlat</span>
              <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center group-hover:bg-red-500 transition-colors shadow-lg shadow-red-900/50">
                ➡️
              </span>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </Link>
        </div>

        {/* ========================================================= */}
        {/* 3. KISIM: VİDEO RADAR SİSTEMİ (EKSİK KAPATMA)             */}
        {/* ========================================================= */}
        <div className="mb-6 mt-12">
          <h2 className="text-xl font-black text-slate-300 mb-6 flex items-center gap-3 uppercase tracking-widest">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></span>
            Uzman Video Brifingleri
          </h2>
          <div className="bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/10 rounded-full blur-[60px] pointer-events-none"></div>
            <div className="relative z-10">
              <p className="text-sm text-slate-400 mb-6 font-medium">Bu modüldeki eksiklerinizi kapatmak için önerilen nokta atışı video dersler.</p>
              
              <PremiumVideoRecommendations data={amlVideoData} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}