import { Linkedin, Twitter, Instagram, Youtube, Facebook } from "lucide-react";
import coreviaLockupLogo from "@/assets/corevia-lockup.png";

const Footer = () => (
  <footer className="pt-10 text-foreground">
    <div className="container rounded-[26px] border border-white/20 bg-[linear-gradient(180deg,hsl(225_35%_96%_/_0.96),hsl(220_24%_88%_/_0.92))] px-6 py-10 md:px-10">
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <div className="mb-5 inline-block">
          <img
            src={coreviaLockupLogo}
            alt="CoreVia Technologies"
            className="h-12 w-auto object-contain"
            loading="lazy"
          />
        </div>
        <p className="text-sm leading-relaxed text-slate-600">
          Trusted US IT Consulting & Staffing partner.
        </p>
        <div className="flex gap-3 mt-6">
          {[Linkedin, Twitter, Instagram, Youtube, Facebook].map((Icon, i) => (
            <a key={i} href="#" aria-label="social" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0a2466] text-white transition-smooth hover:bg-primary">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 font-display font-bold tracking-tight text-primary">Company</h4>
        <ul className="space-y-2 text-sm text-slate-600">
          {["About", "Services", "Careers", "Contact"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-smooth">{l}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-4 font-display font-bold">Services</h4>
        <ul className="space-y-2 text-sm text-slate-600">
          {["IT Staffing", "Consulting", "Tech Solutions", "Managed Services", "Cloud & DevOps"].map((l) => (
            <li key={l}><a href="#services" className="hover:text-primary transition-smooth">{l}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-4 font-display font-bold">Contact</h4>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>32A Barnum Ave</li>
          <li>Plainview, NY 11803</li>
          <li><a href="mailto:Bandari@coreviatek.com" className="hover:text-primary">Bandari@coreviatek.com</a></li>
        </ul>
      </div>
    </div>

    <div className="mt-8 border-t border-slate-300/80 pt-5">
      <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-slate-600">© {new Date().getFullYear()} CoreVia Technologies. All rights reserved.</p>
        <p className="text-xs text-slate-600">Building Technology. Delivering Talent.</p>
      </div>
    </div>
    </div>
  </footer>
);

export default Footer;
