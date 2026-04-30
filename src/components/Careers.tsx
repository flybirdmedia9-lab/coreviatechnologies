import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Rocket } from "lucide-react";

const Careers = () => (
  <section id="careers" className="py-20">
    <div className="container section-shell grid gap-12 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-2 lg:items-center">
      <div>
        <span className="text-secondary font-semibold tracking-widest text-xs uppercase">Careers</span>
        <h2 className="mt-3 mb-6 font-display text-3xl font-bold text-white md:text-5xl">
          Build your career with CoreVia.
        </h2>
        <p className="mb-8 leading-relaxed text-slate-300">
          Whether you're a seasoned technology professional or just starting your journey,
          CoreVia connects you with opportunities at top US enterprises. We invest in our people
          with continuous learning, competitive benefits, and meaningful projects.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="#contact">Submit Your Resume</a>
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {[
          { icon: Briefcase, title: "Top Roles", text: "Cloud, Data, AI, DevOps, Full-Stack and more." },
          { icon: GraduationCap, title: "Skill Growth", text: "Certification support and mentorship." },
          { icon: Rocket, title: "Fast Placement", text: "From application to onboarding in days." },
          { icon: Briefcase, title: "Nationwide", text: "Opportunities across all 50 US states." },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-sm">
            <Icon className="text-secondary mb-3" size={24} />
            <h3 className="mb-1 font-display text-lg font-bold text-white">{title}</h3>
            <p className="text-sm text-slate-300">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Careers;
