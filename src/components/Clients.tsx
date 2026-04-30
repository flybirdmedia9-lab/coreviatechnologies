import React from "react";

const clients = [
  { name: "E*TRADE", abbr: "ET", color: "#6B21A8" },
  { name: "DTCC", abbr: "DTCC", color: "#0F4C81" },
  { name: "USAA", abbr: "USAA", color: "#1A3A6B" },
  { name: "Walmart", abbr: "WMT", color: "#0071CE" },
  { name: "Everlaw", abbr: "EL", color: "#1E6B52" },
];

// Duplicate for seamless infinite scroll
const marqueeClients = [...clients, ...clients, ...clients];

const ClientCard = ({ name, abbr, color }: { name: string; abbr: string; color: string }) => (
  <div
    className="mx-4 flex flex-shrink-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white/92 px-8 py-5 shadow-[0_16px_38px_-26px_rgba(15,23,42,0.35)] transition-smooth hover:-translate-y-1 hover:border-primary/40"
    style={{ minWidth: "200px" }}
  >
    {/* Logo placeholder with brand initials */}
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center font-display font-bold text-white text-xs"
      style={{ background: color, boxShadow: `0 4px 14px ${color}55` }}
    >
      {abbr}
    </div>
    <span className="whitespace-nowrap font-display text-base font-semibold text-slate-900">
      {name}
    </span>
  </div>
);

const Clients = () => (
  <section id="clients" className="overflow-hidden py-20">
    <div className="container section-shell-light px-6 py-10 md:px-10 md:py-12">
    <div className="text-center mb-12">
      <span className="text-primary font-semibold tracking-widest text-xs uppercase">
        Trusted By
      </span>
      <h2 className="mt-3 mb-4 font-display text-3xl font-bold text-slate-900 md:text-4xl">
        Our Clients
      </h2>
      <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-600">
        Industry-leading enterprises trust CoreVia Technologies to power their
        workforce and technology initiatives.
      </p>
    </div>

    {/* Infinite Marquee */}
    <div className="relative w-full">
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, hsl(225 40% 97%) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, hsl(225 40% 97%) 0%, transparent 100%)",
        }}
      />


      {/* Scrolling track */}
      <div
        className="flex"
        style={{
          animation: "marquee-scroll 28s linear infinite",
          width: "max-content",
        }}
      >
        {marqueeClients.map((client, i) => (
          <ClientCard key={`${client.name}-${i}`} {...client} />
        ))}
      </div>
    </div>

    {/* Marquee keyframe injected via style tag */}
    <style>{`
      @keyframes marquee-scroll {
        0%   { transform: translateX(0); }
        100% { transform: translateX(calc(-100% / 3)); }
      }
    `}</style>
    </div>
  </section>
);

export default Clients;
