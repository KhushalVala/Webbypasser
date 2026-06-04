export default function Pricing() {
  const plans = [{ name: 'FREE', price: '$0', features: ['100 links/day', 'Basic support', 'Standard processing'], popular: false },{ name: 'PRO', price: '$9.99', features: ['Unlimited links', 'Priority support', 'API access', 'Analytics'], popular: true },{ name: 'ENTERPRISE', price: 'Custom', features: ['Dedicated infra', 'SLA', 'Team access', 'Custom integration'], popular: false }];
  return (
    <section className="py-20 px-6"><div className="max-w-7xl mx-auto text-center"><h2 className="text-4xl font-bold">Pricing Plans</h2><div className="grid md:grid-cols-3 gap-8 mt-12">{plans.map((p,i)=>(
      <div key={i} className={`relative bg-white/5 rounded-2xl p-8 border ${p.popular ? 'border-emerald scale-105' : 'border-white/10'} hover:scale-105 transition`}>{p.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald text-black px-4 py-1 rounded-full text-sm font-bold">POPULAR</div>}<h3 className="text-2xl font-bold">{p.name}</h3><div className="text-4xl font-bold mt-4 text-cyan">{p.price}</div><ul className="mt-6 space-y-2">{p.features.map((f,j)=><li key={j} className="text-white/70">✓ {f}</li>)}</ul><button className="mt-8 px-6 py-2 bg-gradient-to-r from-emerald to-cyan rounded-xl text-black font-semibold">Choose Plan</button></div>
    ))}</div></div></section>
  );
}
