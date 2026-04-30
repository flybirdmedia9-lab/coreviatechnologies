import { Zap, Target, HeartHandshake, Trophy } from "lucide-react";

const items = [
  { icon: Target, title: "Quality Match", desc: "Precise alignment of candidate skills with client requirements." },
  { icon: Zap, title: "Speed to Hire", desc: "Rapid sourcing and screening — most roles filled within days." },
  { icon: HeartHandshake, title: "Long-Term Partnership", desc: "Dedicated account managers and consistent communication." },
  { icon: Trophy, title: "Proven Track Record", desc: "Trusted by enterprises across the US for reliable delivery." },
];

const WhyUs = () => (
  <section id="why" className="relative overflow-hidden py-20">
    {/* Subtle cyan/blue ambient glow */}
    <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
      backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(193 100% 50%) 0%, transparent 45%), radial-gradient(circle at 75% 75%, hsl(217 91% 60%) 0%, transparent 45%)'
    }} />

    <div className="container relative section-shell-light px-6 py-10 md:px-10 md:py-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary font-semibold tracking-widest text-xs uppercase">Why CoreVia</span>
        <h2 className="mt-3 mb-4 font-display text-3xl font-bold text-slate-900 md:text-5xl">
          The CoreVia Advantage
        </h2>
        <p className="text-slate-600">
          Quality, speed, and reliability — the principles that drive every engagement.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-[22px] border border-slate-200 bg-white/90 p-7 transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_45px_-24px_rgba(0,99,186,0.3)]"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 transition-smooth group-hover:bg-primary/20">
              <Icon className="text-primary" size={24} />
            </div>
            <h3 className="mb-2 font-display text-xl font-bold text-slate-900">{title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
