export default function DashboardPreview() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center"><h2 className="text-4xl font-bold">Dashboard Preview</h2>
        <div className="mt-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8"><div className="bg-black/40 rounded-2xl p-6 border border-white/10"><div className="h-32 bg-gradient-to-r from-emerald/30 to-cyan/30 rounded-xl animate-pulse" /><div className="mt-4 text-left">Processing History</div></div>
          <div className="bg-black/40 rounded-2xl p-6 border border-white/10"><div className="h-32 bg-gradient-to-r from-cyan/30 to-emerald/30 rounded-xl animate-pulse" /><div className="mt-4 text-left">Success Rate: 99.9%</div></div></div>
          <div className="mt-8 text-white/50 text-sm">Real-time analytics & logs</div>
        </div>
      </div>
    </section>
  );
}
