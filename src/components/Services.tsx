import { Users, Cpu, Briefcase, Settings, Cloud, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "IT Staffing",
    desc: "Contract, contract-to-hire, and direct placement of pre-vetted technology professionals across the US.",
  },
  {
    icon: Briefcase,
    title: "Consulting Services",
    desc: "Strategic advisory and project consulting to help enterprises anticipate and exceed business expectations.",
  },
  {
    icon: Cpu,
    title: "Technology Solutions",
    desc: "Implementing leading technologies — cloud, data, AI/ML, and modern application platforms.",
  },
  {
    icon: Settings,
    title: "Managed Services",
    desc: "End-to-end managed delivery for application, infrastructure, and support operations.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "AWS, Azure, GCP migration, automation, CI/CD pipelines, and 24/7 site reliability engineering.",
  },
  {
    icon: Briefcase,
    title: "Enterprise Applications",
    desc: "SAP, Oracle, Microsoft Dynamics implementation, integration, and support services.",
  },
  {
    icon: ShieldCheck,
    title: "Workforce Solutions",
    desc: "Flexible workforce models, payroll, compliance, and onboarding support tailored to your needs.",
  },
];

const Services = () => (
  <section id="services" className="py-20">
    <div className="container">
      <div className="section-shell-light px-6 py-10 md:px-10 md:py-12">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-secondary">What We Offer</span>
          <h2 className="mt-3 mb-3 font-display text-3xl font-bold md:text-5xl">Our Services</h2>
          <p className="text-slate-600">
            Tailored consulting, technology, and staffing solutions designed to help enterprises move faster,
            scale smarter, and hire the right talent.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <a
              key={title}
              href="#contact"
              onClick={() => {
                const el = document.getElementById("message") as HTMLTextAreaElement;
                if (el) {
                  el.value = `I am interested in ${title}. `;
                  el.focus();
                }
              }}
              className="group block rounded-[22px] border border-slate-200 bg-white/90 p-6 text-center shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)] transition-smooth hover:-translate-y-1 hover:shadow-[0_20px_50px_-22px_rgba(0,99,186,0.28)]"
            >
              <article>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-warm">
                  <Icon size={26} />
                </div>
                <h3 className="mb-3 font-display text-lg font-bold">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{desc}</p>
              </article>
            </a>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default Services;
