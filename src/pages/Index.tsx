import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Differentiators from "@/components/Differentiators";
import About from "@/components/About";
import Content from "@/components/Content";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Why />
      <Services />
      <Portfolio />
      <Differentiators />
      <About />
      <Content />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
