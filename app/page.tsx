'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import Features from '@/components/Features';
import SupportedSites from '@/components/SupportedSites';
import ProcessFlow from '@/components/ProcessFlow';
import DashboardPreview from '@/components/DashboardPreview';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

export default function Home() {
  const [bypassResult, setBypassResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const handleBypass = async (url: string) => {
    setLoading(true);
    setBypassResult(null);
    try {
      const res = await fetch('/api/bypass', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (data.success) setBypassResult(data.finalUrl);
      else alert(data.error || 'Bypass failed');
    } catch (err) { alert('Server error'); }
    finally { setLoading(false); }
  };
  return (
    <main className="bg-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero onBypass={handleBypass} loading={loading} result={bypassResult} />
      <Statistics />
      <Features />
      <SupportedSites />
      <ProcessFlow />
      <DashboardPreview />
      <Testimonials />
      <Pricing />
      <Community />
      <Footer />
      <a href="https://t.me/themodsking" target="_blank" className="fixed bottom-6 right-6 z-50 bg-emerald p-4 rounded-full shadow-2xl hover:scale-110 transition">📱</a>
    </main>
  );
}
