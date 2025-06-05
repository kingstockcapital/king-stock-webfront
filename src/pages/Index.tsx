
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import CtaSection from "@/components/CtaSection";
import { Calendar, ArrowUpRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredInsights = [
    {
      id: 1,
      title: "2025 Market Outlook: Navigating Economic Transitions",
      date: "May 10, 2025",
      category: "Market Analysis",
      excerpt: "Comprehensive analysis of emerging market trends and strategic investment opportunities in the evolving economic landscape."
    },
    {
      id: 2,
      title: "The Rise of Sustainable Investing: Impact and Returns",
      date: "April 28, 2025", 
      category: "Sustainable Finance",
      excerpt: "Exploring ESG investment strategies and their performance metrics compared to traditional portfolio approaches."
    },
    {
      id: 3,
      title: "Tech Sector Analysis: Innovations Driving Future Growth",
      date: "April 15, 2025",
      category: "Sector Analysis",
      excerpt: "In-depth examination of breakthrough technologies and their transformative impact on investment portfolios."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesOverview />
        
        {/* Research & Insights Section - Professional Redesign */}
        <section className="py-24 bg-gradient-to-b from-white to-ksc-lightgray/30 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-[0.02]"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-ksc-gold/10 border border-ksc-gold/20 rounded-full px-6 py-2 mb-6">
                  <TrendingUp className="h-4 w-4 text-ksc-gold mr-2" />
                  <span className="text-ksc-gold font-medium text-sm">Expert Analysis</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ksc-navy mb-6">
                  Research & <span className="text-ksc-gold">Insights</span>
                </h2>
                <p className="text-ksc-darkgray text-xl max-w-3xl mx-auto leading-relaxed">
                  Stay ahead of market trends with our expert analysis and strategic investment insights, 
                  crafted by our team of financial specialists.
                </p>
              </div>
              
              {/* Featured Articles Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {featuredInsights.map((insight, index) => (
                  <article key={index} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100/50">
                    {/* Image Header */}
                    <div className="relative h-56 bg-gradient-to-br from-ksc-navy to-ksc-navy/80 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80')] bg-cover bg-center opacity-10"></div>
                      <img 
                        src="/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png" 
                        alt="King Stock Capital Logo" 
                        className="h-16 w-auto relative z-10 group-hover:scale-110 transition-transform duration-300" 
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <ArrowUpRight className="h-4 w-4 text-ksc-navy group-hover:text-ksc-gold transition-colors" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      {/* Category & Date */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-ksc-gold/10 text-ksc-gold border border-ksc-gold/20">
                          {insight.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{insight.date}</span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-serif text-xl font-semibold text-ksc-navy mb-3 leading-tight group-hover:text-ksc-gold transition-colors">
                        <Link to={`/research/${insight.id}`} className="line-clamp-2">
                          {insight.title}
                        </Link>
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-ksc-darkgray text-sm leading-relaxed mb-6 line-clamp-3">
                        {insight.excerpt}
                      </p>
                      
                      {/* Read More Link */}
                      <Link 
                        to={`/research/${insight.id}`}
                        className="inline-flex items-center text-ksc-navy font-medium text-sm hover:text-ksc-gold transition-colors group-hover:translate-x-1 transform duration-200"
                      >
                        Read Full Analysis
                        <ArrowUpRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Call to Action */}
              <div className="text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-ksc-navy hover:bg-ksc-navy/90 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link to="/research" className="flex items-center">
                      View All Research
                      <ArrowUpRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <p className="text-sm text-ksc-darkgray">
                    Access our complete library of market insights
                  </p>
                </div>
              </div>
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
