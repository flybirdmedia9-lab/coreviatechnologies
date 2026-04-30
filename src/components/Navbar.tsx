import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import coreviaLockupLogo from "@/assets/corevia-lockup.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const y = window.scrollY + 120;
      let current = "#home";
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (el && (el as HTMLElement).offsetTop <= y) current = l.href;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/80 backdrop-blur-md"
          : "bg-background/70 backdrop-blur-sm"
      }`}
      style={{ isolation: "isolate" }}
    >
      <nav className="container mt-3 flex items-center justify-between gap-4 rounded-[22px] border border-white/12 bg-[#09142f]/90 px-4 py-3 shadow-card md:px-6">
        <a href="#home" aria-label="CoreVia Technologies" className="shrink-0 rounded-md bg-[#121f8a] px-2 py-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
          <img
            src={coreviaLockupLogo}
            alt="CoreVia Technologies"
            className="h-9 sm:h-10 md:h-11 w-auto object-contain"
          />
        </a>

        <ul className="hidden md:flex items-center gap-1 rounded-full border border-white/8 bg-white/5 px-3 py-1.5">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-3 py-2 text-sm font-semibold rounded-full transition-smooth ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-foreground/75 hover:text-primary"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Button variant="hero" size="default" className="h-10 rounded-md px-5 text-xs uppercase tracking-[0.14em]" asChild>
            <a href="#contact">Request Talent</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-2 rounded-[22px] border border-white/12 bg-[#09142f]/96 shadow-card">
          <ul className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-xl py-3 px-3 font-semibold text-foreground/85 hover:bg-white/5 hover:text-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <Button variant="hero" className="mt-3" asChild>
              <a onClick={() => setOpen(false)} href="#contact">Request Talent</a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
