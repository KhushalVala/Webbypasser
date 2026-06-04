'use client';
import { useState } from 'react';
export default function Hero({ onBypass, loading, result }: { onBypass: (url: string) => void; loading: boolean; result: string | null }) {
  const [url, setUrl] = useState('');
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#00D9FF20,_transparent)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald/10 rounded-full blur-3xl animate-pulse" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Next Generation <br /><span className="bg-gradient-to-r from-emerald to-cyan bg-clip-text text-transparent">Link Processor</span></h1>
        <p className="text-xl text-white/60 mt-6">Fast, Secure & Intelligent Link Resolution Platform</p>
        <div className="mt-12 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 p-1 shadow-2xl">
          <div className="bg-dark/50 rounded-xl p-6">
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Paste your link here..." className="w-full bg-black/50 border border-white/20 rounded-xl px-6 py-4 text-white focus:border-emerald/50" />
            <div className="flex gap-4 justify-center mt-4">
              <button onClick={() => onBypass(url)} disabled={loading} className="px-8 py-3 bg-gradient-to-r from-emerald to-cyan rounded-xl text-black font-semibold hover:scale-105 disabled:opacity-50">{loading ? 'Processing...' : 'Process Link'}</button>
              <button className="px-8 py-3 bg-white/10 rounded-xl">Try Demo</button>
            </div>
            {result && <div className="mt-4 p-4 bg-emerald/10 border border-emerald/30 rounded-xl"><p className="text-emerald">✅ Bypass done!</p><a href={result} target="_blank" className="text-cyan break-all">{result}</a></div>}
          </div>
        </div>
      </div>
    </section>
  );
}
