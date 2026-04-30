import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Clients from "@/components/Clients";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="site-shell min-h-screen">
    <Navbar />
    <main className="px-4 pb-8 pt-6 md:px-6 lg:px-8">
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Clients />
      <Careers />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
