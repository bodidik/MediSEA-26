// "C:\Users\hucig\Medknowledge\web\app\(ydus)\[lang]\premium\ydus\page.tsx"
'use client';

import React from 'react';
import Link from 'next/link';

// --- YENİ NESİL BİLEŞEN MONTAJI ---
import PremiumDailyProgram from '@/components/PremiumDailyProgram';
import PremiumQuizHistory from '@/components/PremiumQuizHistory';
import PlanBadge from '@/components/PlanBadge';
import PremiumCard from '@/components/PremiumCard';
import { FLEET_STATUS } from '@/app/(ydus)/config/fleet';

export default function YdusPremiumLobby() {
  // ZIRH: İçerik durumu kontrolü (Şu an sadece Hematoloji ve Endokrinoloji hazır gibi davranıyoruz)
  const READY_BRANCHES = ['hematoloji', 'endokrinoloji'];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
      
      {/* 1. ÜST KOMUTA PANELİ */}
      <div className="border-b border-blue-900/30 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20 border border-blue-500/30">
              <span className="text-xl">⚓</span>
            </div>
            <div>
              <h1 className="text-sm font-black tracking-tighter text-white uppercase italic leading-none">Deniz</h1>
              <p className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.2em] mt-1">Komuta Merkezi</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <PlanBadge plan="premium" />
            <Link href="/tr/premium/ydus/profil" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:border-blue-500 transition-all shadow-inner group">
              <span className="group-hover:scale-110 transition-transform">👨‍⚕️</span>
            </Link>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* 2. ANALİZ BÖLGESİ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <PremiumDailyProgram />
          </div>
          <div className="lg:col-span-2">
            <PremiumQuizHistory days={14} />
          </div>
        </div>

        {/* 3. STRATEJİ HARİTASI (FLEET STATUS) */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6 border-l-4 border-blue-600 pl-4">
            <div>
              <h2 className="text-xl font-black text-white uppercase tracking-tight">Aktif Filo Durumu</h2>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Branş Bazlı İlerleme Raporu</p>
            </div>
            <Link href="/tr/premium/ydus/liderlik" className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-[10px] font-black text-slate-400 hover:text-blue-400 hover:border-blue-500 transition-all uppercase tracking-widest">
              Liderlik Tablosu 🏆
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FLEET_STATUS.map((ship) => {
              const isReady = READY_BRANCHES.includes(ship.id);
              
              return (
                <div key={ship.id} className={`group ${!isReady ? 'grayscale opacity-60' : ''}`}>
                  <PremiumCard title={`${ship.name} (${ship.shipType})`}>
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <div className="flex flex-col">
                          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Konum</span>
                          <span className="text-xs font-bold text-slate-200 uppercase">{ship.currentPort}</span>
                        </div>
                        <div className="text-right">
                          <span className={`text-[9px] font-black uppercase tracking-widest block mb-1 ${isReady ? 'text-blue-400' : 'text-slate-500'}`}>
                            {isReady ? ship.status : 'İKMAL BEKLENİYOR'}
                          </span>
                          <span className="text-lg font-black text-white">%{isReady ? ship.progress : 0}</span>
                        </div>
                      </div>

                      {/* İlerleme Çubuğu */}
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800 shadow-inner">
                        <div 
                          className={`h-full transition-all duration-1000 ${isReady ? 'bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-slate-800'}`} 
                          style={{ width: `${isReady ? ship.progress : 0}%` }}
                        ></div>
                      </div>

                      {/* Son Rapor */}
                      <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/50 min-h-[50px] flex items-center">
                         <p className="text-[10px] font-medium text-slate-500 italic leading-relaxed line-clamp-2">
                           {isReady ? `"${ship.lastReport}"` : "İstihbarat henüz toplanmadı."}
                         </p>
                      </div>

                      {isReady ? (
                        <Link 
                          href={`/tr/premium/ydus/${ship.id}`}
                          className="block w-full py-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 text-white text-[10px] font-black text-center transition-all uppercase tracking-[0.2em] border border-slate-700 hover:border-blue-500 shadow-lg"
                        >
                          Güverteye Çık 🏁
                        </Link>
                      ) : (
                        <button disabled className="w-full py-2.5 rounded-xl bg-slate-900 text-slate-600 text-[10px] font-black text-center uppercase tracking-[0.2em] border border-slate-800 cursor-not-allowed">
                          Yakında Açılacak ⚓
                        </button>
                      )}
                    </div>
                  </PremiumCard>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. HIZLI ERİŞİM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
           <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-800 relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-9xl">💎</span>
              </div>
              <h3 className="text-xl font-black text-white mb-2 relative z-10">TIBBİ İSTİHBARAT</h3>
              <p className="text-slate-400 text-sm mb-6 max-w-xs relative z-10 leading-relaxed font-medium">En güncel YDUS kılavuzları ve klinik incilerle donanımınızı artırın.</p>
              <Link href="/tr/premium/ydus/inciler?branch=hematoloji&id=aml" className="relative z-10 inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-[0.2em] hover:text-blue-300 transition-colors">
                İncileri Keşfet <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
           </div>

           <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 rounded-3xl p-8 border border-blue-900/30 relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-9xl">🕹️</span>
              </div>
              <h3 className="text-xl font-black text-white mb-2 relative z-10 uppercase italic">Vaka Simülasyonu</h3>
              <p className="text-slate-400 text-sm mb-6 max-w-xs relative z-10 leading-relaxed font-medium">Gerçek klinik senaryolarda hayat kurtaran kararlar verin.</p>
              <Link href="/tr/premium/ydus/soru-cozum?branch=hematoloji&id=case-aml-fit" className="relative z-10 inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-[0.2em] hover:text-blue-300 transition-colors">
                Simülasyona Başla <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
           </div>
        </div>

      </main>
    </div>
  );
}