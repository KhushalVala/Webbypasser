export default function Features() {
  const features = ['Lightning Fast Processing', 'AI Detection Engine', 'Automatic Updates', 'Advanced Security', 'Cloud Infrastructure', 'Developer API Access'];
  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-b from-transparent to-white/5">
      <div className="max-w-7xl mx-auto"><h2 className="text-4xl font-bold text-center">Premium Features</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">{features.map((f,i)=>(
          <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-emerald/30 hover:scale-105 transition">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald to-cyan mb-4" /><h3 className="text-xl font-semibold">{f}</h3><p className="text-white/50 mt-2">High-performance link resolution technology.</p>
          </div>
        ))}</div>
      </div>
    </section>
  );
}
