
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import CtaSection from "@/components/CtaSection";
import { Calendar, ArrowUpRight, FileText } from "lucide-react";
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
        
        {/* Research & Insights Section - Redesigned */}
        <section className="py-24 bg-ksc-lightgray/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ksc-navy mb-4">
                  Latest Research & Insights
                </h2>
                <p className="text-ksc-darkgray text-lg max-w-3xl mx-auto">
                  Explore our expert analysis on market trends, investment strategies, and financial news.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {featuredArticles.map((article) => (
                  <Link
                    to={`/research/${article.id}`}
                    key={article.id}
                    className="group block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    <div className="overflow-hidden">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </AspectRatio>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                        <Badge variant="outline" className="font-medium">{article.category}</Badge>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1.5" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-ksc-navy mb-3 group-hover:text-ksc-gold transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-ksc-darkgray text-sm leading-relaxed mb-6 line-clamp-3">
                        {article.summary}
                      </p>
                      <div className="flex items-center text-ksc-navy font-medium text-sm group-hover:text-ksc-gold transition-colors">
                        Read More
                        <ArrowUpRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-ksc-navy hover:bg-ksc-navy/90 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/research">
                    View All Research
                    <FileText className="h-4 w-4 ml-2" />
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
