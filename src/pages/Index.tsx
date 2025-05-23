
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import CtaSection from "@/components/CtaSection";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredInsights = [
    {
      id: 1,
      title: "2025 Market Outlook: Navigating Economic Transitions",
      date: "May 10, 2025",
      category: "Market Analysis"
    },
    {
      id: 2,
      title: "The Rise of Sustainable Investing: Impact and Returns",
      date: "April 28, 2025", 
      category: "Sustainable Finance"
    },
    {
      id: 3,
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
        
        {/* Research & Insights Section - Redesigned */}
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
                <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
                  <div className="h-48 bg-ksc-gold flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png" 
                      alt="King Stock Capital Logo" 
                      className="h-24 w-auto" 
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{insight.date}</span>
                    </div>
                    <h3 className="font-serif text-xl font-medium text-ksc-navy mb-4 hover:text-ksc-gold transition-colors">
                      <Link to={`/research/${insight.id}`}>{insight.title}</Link>
                    </h3>
                    <div className="mt-auto">
                      <span className="text-ksc-gold text-sm">{insight.category}</span>
                      <div className="mt-3">
                        <Link 
                          to={`/research/${insight.id}`}
                          className="text-ksc-navy font-medium hover:text-ksc-gold transition-colors flex items-center"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                asChild
                className="bg-ksc-navy hover:bg-ksc-navy/90 text-white px-8"
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
