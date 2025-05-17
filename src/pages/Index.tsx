
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesOverview />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
