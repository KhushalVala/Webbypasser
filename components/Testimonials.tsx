export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto text-center"><h2 className="text-4xl font-bold">Trusted by Developers</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10"><p className="text-white/80">"Best bypass tool I've used. Fast and reliable."</p><div className="flex items-center gap-2 mt-4"><div className="w-10 h-10 rounded-full bg-cyan" /> <span>@crypto_dev</span> <span className="text-emerald">✓ Verified</span></div></div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10"><p className="text-white/80">"Saves me hours daily. The API is fantastic."</p><div className="flex items-center gap-2 mt-4"><div className="w-10 h-10 rounded-full bg-emerald" /> <span>@link_master</span> <span className="text-emerald">✓ Verified</span></div></div>
        </div>
      </div>
    </section>
  );
}
