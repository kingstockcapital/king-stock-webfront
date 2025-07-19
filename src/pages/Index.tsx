
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import CtaSection from "@/components/CtaSection";
import { Calendar, ArrowUpRight, FileText, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getFeaturedArticles } from "@/data/articles";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  const featuredArticles = getFeaturedArticles();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesOverview />
        
        {/* Research & Insights Section - Completely Redesigned */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-ksc-gold/10 text-ksc-gold px-4 py-2 rounded-full mb-4">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">Latest Insights</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Research & Market Intelligence
                </h2>
                <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
                  Stay ahead of market trends with our expert analysis, investment strategies, and financial insights 
                  crafted by industry professionals.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {featuredArticles.map((article, index) => (
                  <Link
                    to={`/research/${article.id}`}
                    key={article.id}
                    className={`group block rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 hover:border-slate-300 ${
                      index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                    }`}
                  >
                    <div className="bg-white h-full flex flex-col">
                      <div className="overflow-hidden relative">
                        <AspectRatio ratio={16 / 9}>
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300" />
                        </AspectRatio>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-slate-800 font-medium backdrop-blur-sm">
                            {article.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1.5" />
                            <span>{article.date}</span>
                          </div>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                        
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 group-hover:text-ksc-gold transition-colors line-clamp-2 flex-shrink-0">
                          {article.title}
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                          {article.summary}
                        </p>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-sm text-slate-500 font-medium">
                            {article.author.split(',')[0]}
                          </span>
                          <div className="flex items-center text-ksc-navy font-medium text-sm group-hover:text-ksc-gold transition-colors">
                            Read More
                            <ArrowUpRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-ksc-navy hover:bg-ksc-navy/90 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Link to="/research" className="flex items-center">
                    Explore All Research
                    <FileText className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                </Button>
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
