
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 bg-ksc-lightgray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfDB8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')] bg-cover bg-center rounded-lg shadow-lg"></div>
              <div className="absolute -bottom-10 -right-10 bg-ksc-navy text-white p-5 rounded-lg shadow-lg hidden md:block">
                <p className="text-4xl font-serif font-bold">3+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
          
          <div>
            <h6 className="text-ksc-gold font-medium mb-2">About Us</h6>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ksc-navy mb-6 leading-tight">
              Building Financial Legacies Since 2021
            </h2>
            
            <p className="text-ksc-darkgray mb-6">
              King Stock Capital Management was founded on the principle that disciplined, 
              research-driven investment strategies deliver superior long-term results. 
              Our team of experienced professionals brings decades of financial expertise
              to help our clients navigate complex markets with confidence.
            </p>
            
            <p className="text-ksc-darkgray mb-8">
              We prioritize transparency, integrity, and personalized service in everything
              we do. Our client-first approach means your financial goals remain at the 
              center of our investment strategies.
            </p>
            
            <div className="flex flex-wrap gap-8 mb-8">
              <div>
                <p className="text-3xl font-serif font-bold text-ksc-navy">$1.2B+</p>
                <p className="text-sm text-ksc-darkgray">Assets Under Management</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-ksc-navy">500+</p>
                <p className="text-sm text-ksc-darkgray">Satisfied Clients</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-ksc-navy">12%</p>
                <p className="text-sm text-ksc-darkgray">Average Annual Return</p>
              </div>
            </div>
            
            <Button
              asChild
              className="bg-ksc-navy hover:bg-ksc-navy/90 text-white border-none"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
