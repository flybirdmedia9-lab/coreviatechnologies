import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImg from "@/assets/hero-network.jpg";

const Hero = () => (
  <section
    id="home"
    className="relative overflow-hidden pt-28 lg:pt-32"
  >
    <div className="container relative z-10">
      <div className="section-shell relative overflow-hidden px-6 py-10 md:px-10 md:py-12 lg:px-14">
        <div className="absolute inset-y-0 right-0 hidden w-[46%] bg-gradient-to-l from-secondary/10 to-transparent lg:block" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[linear-gradient(170deg,transparent_0%,transparent_52%,hsl(220_28%_92%_/_0.92)_53%,hsl(220_28%_92%_/_0.96)_100%)]" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="animate-fade-up max-w-2xl">
            <span className="inline-flex rounded-full border border-primary/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-6">
              US IT STAFFING & WORKFORCE SOLUTIONS
            </span>

            <h1 className="mb-5 font-display text-4xl font-extrabold leading-[1.08] md:text-6xl">
              Building Technology.
              <br />
              Delivering Talent.
            </h1>

            <p className="mb-8 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              We deliver end-to-end IT consulting services across multiple technologies
              along with high-quality staffing solutions to help organizations scale efficiently.
            </p>

            <div className="mb-10 flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="rounded-md px-7 uppercase tracking-[0.14em] text-xs" asChild>
                <a href="#services">
                  Our Services <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-md border-white/55 bg-white text-slate-900 hover:bg-slate-100 hover:text-slate-900">
                <a href="#contact">
                  <Phone className="mr-1" /> Contact Us
                </a>
              </Button>
            </div>

            <div className="grid max-w-lg grid-cols-3 gap-4 border-t border-white/12 pt-6">
              {[
                { n: "500+", l: "Talent Placed" },
                { n: "120+", l: "Enterprise Clients" },
                { n: "24/7", l: "Dedicated Support" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-2xl font-extrabold text-primary md:text-3xl">{s.n}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up lg:pl-4">
            <div className="absolute inset-8 rounded-full bg-primary/12 blur-3xl" />
            <img
              src={heroImg}
              alt="Digital network globe representing technology consulting and global talent reach"
              className="relative mx-auto w-full max-w-[620px] object-contain drop-shadow-[0_0_40px_rgba(0,198,255,0.18)]"
              width={1920}
              height={1080}
            />
            <div className="absolute right-2 top-8 hidden rounded-2xl border border-white/15 bg-[#081430]/80 px-5 py-4 text-right shadow-card md:block">
              <p className="font-display text-2xl font-extrabold text-primary">15+</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-slate-300">Years Combined Expertise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
