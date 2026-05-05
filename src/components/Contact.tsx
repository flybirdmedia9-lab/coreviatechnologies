import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, User } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const service = formData.get("selectedService") || "General Inquiry";

    const whatsappMessage = `*New Inquiry from CoreVia Site*%0A%0A*Service:* ${service}%0A*Name:* ${name}%0A*Email:* ${email}%0A*Company:* ${company}%0A*Phone:* ${phone}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/15163971234?text=${whatsappMessage}`;

    setTimeout(() => {
      setLoading(false);
      window.open(whatsappUrl, "_blank");
      toast.success("Redirecting to WhatsApp...");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container section-shell grid gap-10 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="text-secondary font-semibold tracking-widest text-xs uppercase">Get in Touch</span>
          <h2 className="mt-3 mb-6 font-display text-3xl font-bold md:text-5xl">
            Let's build your team.
          </h2>
          <p className="mb-10 leading-relaxed text-slate-300">
            Tell us about your hiring needs or career goals — our team will respond within one business day.
          </p>

          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                <User size={18} />
              </div>
              <div>
                <p className="font-semibold text-white">Sai Srinivas Madamoni</p>
                <p className="text-sm text-slate-300">Founder</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                <User size={18} />
              </div>
              <div>
                <p className="font-semibold text-white">Gagan Somlok</p>
                <p className="text-sm text-slate-300">Managing Director &amp; Co-Founder</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-semibold text-white">Headquarters</p>
                <p className="text-sm text-slate-300">32A Barnum Ave, Plainview, NY 11803</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <a href="mailto:Bandari@coreviatek.com" className="text-sm text-slate-300 hover:text-secondary">
                  Bandari@coreviatek.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a href="tel:+15163971234" className="text-sm text-slate-300 hover:text-secondary">
                  (516) 397-1234
                </a>
              </div>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 rounded-[28px] border border-white/10 bg-white/95 p-8 text-slate-900 shadow-elegant md:p-10">
          <input type="hidden" id="selectedService" name="selectedService" value="" />
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" required className="mt-2 bg-slate-50 border-slate-200 text-slate-900 focus:bg-white" placeholder="John Smith" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required className="mt-2 bg-slate-50 border-slate-200 text-slate-900 focus:bg-white" placeholder="john@company.com" />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" className="mt-2 bg-slate-50 border-slate-200 text-slate-900 focus:bg-white" placeholder="Acme Corp" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" className="mt-2 bg-slate-50 border-slate-200 text-slate-900 focus:bg-white" placeholder="+1 555 123 4567" />
            </div>
          </div>
          <div className="mt-5">
            <Label htmlFor="message">How can we help?</Label>
            <Textarea id="message" name="message" required rows={5} className="mt-2 bg-slate-50 border-slate-200 text-slate-900 focus:bg-white" placeholder="Tell us about your hiring needs..." />
          </div>
          <Button type="submit" variant="hero" size="lg" className="mt-6 w-full sm:w-auto" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
