'use client';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
const stats = [
  { label: 'Links Processed', value: 2.5, suffix: 'M+' },
  { label: 'Success Rate', value: 99.9, suffix: '%' },
  { label: 'Uptime', value: 24, suffix: '/7' },
  { label: 'Supported Domains', value: 50, suffix: '+' },
  { label: 'Active Users', value: 100, suffix: 'K+' },
];
export default function Statistics() {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald to-cyan bg-clip-text text-transparent">{inView && <CountUp start={0} end={s.value} duration={2.5} decimals={s.value%1!==0?1:0} />}{s.suffix}</div>
            <div className="text-white/60 mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
