
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 bg-ksc-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Our investment professionals are ready to help you develop a 
            strategy tailored to your unique financial goals and circumstances.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
              <a href="tel:+12125551234">Call Us: (212) 555-1234</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
