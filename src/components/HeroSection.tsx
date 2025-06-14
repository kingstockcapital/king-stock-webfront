
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-ksc-lightgray">
      <div className="absolute inset-0 bg-gradient-to-r from-ksc-navy/80 to-ksc-navy/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight mb-6">
            Strategic Investments for <span className="text-ksc-gold">Long-Term Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Strategic investments for long-term growth.<br />
            At <span className="font-semibold text-ksc-gold">King Stock Capital Management</span>, we create tailored investment strategies that align with your financial goals and risk tolerance to optimize growth and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              asChild
              className="bg-ksc-gold hover:bg-ksc-gold/90 text-ksc-navy border-none"
            >
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
