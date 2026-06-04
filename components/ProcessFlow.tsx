export default function ProcessFlow() {
  const steps = ['Paste Link', 'Smart Detection', 'Cloud Processing', 'Instant Result'];
  return (
    <section className="py-20 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto text-center"><h2 className="text-4xl font-bold">How It Works</h2>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-12">{steps.map((step,i)=>(
          <div key={i} className="flex items-center gap-4"><div className="bg-gradient-to-r from-emerald to-cyan w-16 h-16 rounded-full flex items-center justify-center text-black font-bold text-xl">{i+1}</div><span className="text-xl">{step}</span>{i<steps.length-1 && <span className="text-3xl text-cyan">→</span>}</div>
        ))}</div>
      </div>
    </section>
  );
}
