import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-team.jpg";

const points = [
  "Trusted US IT Consulting & Staffing partner",
  "Rigorous vetting matches expertise to client requirements",
  "Flexible engagement models — contract, contract-to-hire, direct hire",
  "Dedicated account management with seamless support",
];

const About = () => (
  <section id="about" className="py-20">
    <div className="container section-shell grid gap-14 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-2 lg:items-center">
      <div className="relative">
        <img
          src={aboutImg}
          alt="CoreVia Technologies consulting team collaborating"
          className="w-full rounded-[28px] border border-white/10 object-cover shadow-elegant"
          loading="lazy"
          width={1024}
          height={1024}
        />
        <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-white/10 bg-[#0a1a3b]/90 px-6 py-5 text-white shadow-card md:block">
          <p className="font-display font-extrabold text-3xl">15+</p>
          <p className="text-xs uppercase tracking-widest">Years Combined Expertise</p>
        </div>
      </div>

      <div>
        <span className="text-secondary font-semibold tracking-widest text-xs uppercase">About CoreVia</span>
        <h2 className="mt-3 mb-6 font-display text-3xl font-bold text-white md:text-5xl">
          A bridge between <span className="text-secondary">talent</span> and opportunity.
        </h2>
        <p className="mb-5 leading-relaxed text-slate-300">
          CoreVia Technologies is a trusted partner in US IT Consulting & Staffing.
          We specialize in connecting top-tier technology talent with leading enterprises across the
          United States, ensuring the right match between client requirements and candidate expertise.
        </p>
        <p className="mb-8 leading-relaxed text-slate-300">
          With a focus on quality, speed, and reliability, we work closely with our clients to understand their
          business needs and deliver tailored staffing solutions that drive success. We are more than a
          staffing company — we empower businesses with the right workforce while helping professionals
          achieve their career goals.
        </p>

        <ul className="space-y-3 mb-8">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <CheckCircle2 className="text-secondary mt-0.5 shrink-0" size={20} />
              <span className="text-slate-100">{p}</span>
            </li>
          ))}
        </ul>

        <Button variant="hero" size="lg" asChild>
          <a href="#contact">Partner With Us</a>
        </Button>
      </div>
    </div>
  </section>
);

export default About;
