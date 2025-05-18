
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import CtaSection from "@/components/CtaSection";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredInsights = [
    {
      title: "2025 Market Outlook: Navigating Economic Transitions",
      date: "May 10, 2025",
      category: "Market Analysis"
    },
    {
      title: "The Rise of Sustainable Investing: Impact and Returns",
      date: "April 28, 2025", 
      category: "Sustainable Finance"
    },
    {
      title: "Tech Sector Analysis: Innovations Driving Future Growth",
      date: "April 15, 2025",
      category: "Sector Analysis"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesOverview />
        
        {/* Research & Insights Section */}
        <section className="py-16 bg-ksc-lightgray">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h6 className="text-ksc-gold font-medium mb-3">Latest Publications</h6>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ksc-navy mb-4">
                Research & Insights
              </h2>
              <p className="text-ksc-darkgray max-w-2xl mx-auto">
                Expert analysis and market perspectives to help you make informed investment decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {featuredInsights.map((insight, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-4">
                    <FileText className="h-5 w-5 text-ksc-gold mr-3 mt-1" />
                    <h3 className="font-serif text-xl font-medium text-ksc-navy">
                      {insight.title}
                    </h3>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{insight.date}</span>
                    <span className="text-ksc-gold">{insight.category}</span>
                  </div>
                  <Link 
                    to="/research" 
                    className="text-ksc-navy font-medium hover:text-ksc-gold transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                asChild
                className="bg-ksc-navy hover:bg-ksc-navy/90 text-white"
              >
                <Link to="/research">View All Research</Link>
              </Button>
            </div>
          </div>
        </section>
        
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
