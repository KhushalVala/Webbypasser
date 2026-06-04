export default function SupportedSites() {
  return (
    <section id="supported" className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center"><h2 className="text-4xl font-bold">Supported Platforms</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {['go.yorurl', 'youlinks.in'].map(site=>(
            <div key={site} className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-emerald/50 hover:scale-105 w-64"><div className="text-2xl font-mono text-cyan">{site}</div><div className="text-emerald mt-4">✓ Fully Supported</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
