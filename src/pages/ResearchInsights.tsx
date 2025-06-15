
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { Button } from "@/components/ui/button";
import { Calendar, Search, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAllArticles } from "@/data/articles";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ResearchInsights = () => {
  const allArticles = getAllArticles();
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredArticles = allArticles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-ksc-lightgray/30">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-ksc-navy to-ksc-navy/80 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover opacity-10"></div>
            <div className="container mx-auto px-4 md:px-6 relative">
                <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-6">Research & Insights</h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                    Stay ahead with our expert analysis on market trends, investment strategies, and financial news.
                </p>
            </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-white border-b border-gray-100 sticky top-[72px] z-20 backdrop-blur-sm bg-white/95">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  type="text" 
                  placeholder="Search by title, category, or keyword..." 
                  className="pl-12 pr-4 py-3 w-full text-base border-gray-200 rounded-xl focus:ring-ksc-gold/50 focus:border-ksc-gold"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* All Articles Section */}
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article) => (
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
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex-1 mb-4">
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
                                    <p className="text-ksc-darkgray text-sm leading-relaxed line-clamp-3">
                                        {article.summary}
                                    </p>
                                </div>
                                <div className="flex items-center text-ksc-navy font-medium text-sm group-hover:text-ksc-gold transition-colors mt-auto">
                                    Read Article
                                    <ArrowUpRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {filteredArticles.length === 0 && (
                    <div className="text-center py-16">
                        <h3 className="text-2xl font-semibold text-ksc-navy">No articles found.</h3>
                        <p className="text-ksc-darkgray mt-2">Try adjusting your search term.</p>
                    </div>
                )}
            </div>
        </section>

        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ResearchInsights;
