'use client';
import { useEffect, useState } from 'react';
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const handleScroll = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', handleScroll); return () => window.removeEventListener('scroll', handleScroll); }, []);
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-emerald to-cyan bg-clip-text text-transparent">TheModsKing</div>
        <div className="hidden md:flex gap-8 text-white/80">
          <a href="#home" className="hover:text-emerald">Home</a><a href="#features" className="hover:text-emerald">Features</a><a href="#supported" className="hover:text-emerald">Supported Sites</a><a href="#api" className="hover:text-emerald">API Docs</a><a href="#contact" className="hover:text-emerald">Contact</a>
        </div>
        <a href="https://t.me/themodsking" target="_blank" className="bg-white/10 px-5 py-2 rounded-full border border-white/20 hover:border-emerald/50">Telegram</a>
      </div>
    </nav>
  );
}
