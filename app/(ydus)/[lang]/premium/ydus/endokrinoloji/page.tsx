"C:\Users\hucig\Medknowledge\web\app\(ydus)\[lang]\premium\ydus\endokrinoloji\page.tsx"
'use client';
import { useState } from 'react';
import Link from 'next/link';
// İŞTE EKSİK OLAN KRİTİK SATIR BURASI:
import BranchTemplate from '../components/BranchTemplate';
const ENDO_DATA = {
  title: "Endokrinoloji",
  slug: "endokrinoloji",
  color: "purple",
  icon: "🦋",
  categories: [
    {
      id: "hipofiz-surrenal",
      title: "Hipofiz ve Sürrenal",
      icon: "🧠",
      desc: "Adenomlar, Yetmezlikler ve Hiperfonksiyonlar",
      items: [
        { title: "Cushing Sendromu Tanı Algoritması", href: "#", isReady: false, badges: ["ZOR"] },
        { title: "Primer Hiperaldosteronizm", href: "#", isReady: false, badges: ["YENİ"] },
        { title: "Hipofiz Yetmezliği ve Replasman", href: "#", isReady: false, badges: ["YAKINDA"] },
      ]
    },
    {
      id: "tiroid-metabolizma",
      title: "Tiroid ve Kemik",
      icon: "🦴",
      desc: "Tiroid Nodülleri, Kanserleri ve Osteoporoz",
      items: [
        { title: "Tiroid Fırtınası ve Miksödem Koması", href: "#", isReady: false, badges: ["ACİL"] },
        { title: "Hiperkalsemiye Yaklaşım", href: "#", isReady: false, badges: ["KRİTİK"] },
      ]
    }
  ]
};

export default function EndoPage() {
  const [openCategory, setOpenCategory] = useState<string | null>("hipofiz-surrenal");
  // BranchTemplate fonksiyonunu Gastro dosyasından kopyalayabilir veya ortak bir bileşene taşıyabilirsin.
  return <BranchTemplate data={ENDO_DATA} openCategory={openCategory} setOpenCategory={setOpenCategory} />;
}