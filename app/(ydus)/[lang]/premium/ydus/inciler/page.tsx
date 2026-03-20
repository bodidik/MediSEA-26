import fs from 'fs';
import path from 'path';
import PearlsViewer from './PearlsViewer';

// KAPTANIN DİNAMİK İNCİ OKUYUCUSU
export default async function PearlsPage({
  searchParams,
}: {
  searchParams: { branch: string; id: string };
}) {
  const branch = searchParams?.branch;
  const id = searchParams?.id;

  if (!branch || !id) {
    return (
      <div className="flex min-h-[calc(100vh-100px)] items-center justify-center bg-slate-950 p-4">
        <div className="relative bg-slate-900/50 p-8 rounded-3xl border border-red-500/30 text-center shadow-[0_0_30px_rgba(239,68,68,0.1)] max-w-md w-full overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
          <div className="w-20 h-20 mx-auto bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20 mb-6 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <h2 className="text-xl font-black text-red-400 tracking-widest uppercase mb-3">Sinyal Koptu</h2>
          <p className="text-slate-400 text-sm font-medium">Hedef rota (branş veya dosya) tespit edilemedi. Lütfen komutları kontrol edin.</p>
        </div>
      </div>
    );
  }

  try {
    // Dinamik Dosya Yolu
    const filePath = path.join(
      process.cwd(), 
      `content/premium/ydus/pearls/${branch}/${id}.json`
    );
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    return <PearlsViewer data={data} />;
  } catch (error) {
    console.error("Pearls veri okuma hatası:", error);
    return (
      <div className="flex min-h-[calc(100vh-100px)] items-center justify-center bg-slate-950 p-4">
        <div className="relative bg-slate-900/50 p-8 rounded-3xl border border-slate-700/50 text-center shadow-2xl max-w-md w-full overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-50"></div>
          <div className="w-20 h-20 mx-auto bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <h2 className="text-xl font-black text-white tracking-widest uppercase mb-3">İstihbarat Bulunamadı</h2>
          <p className="text-slate-400 text-sm font-medium leading-relaxed">
            Seyir defterinde <span className="text-blue-400 font-mono bg-blue-500/10 px-2 py-0.5 rounded mx-1">{branch}/{id}.json</span> dosyasına ulaşılamıyor.
          </p>
        </div>
      </div>
    );
  }
}