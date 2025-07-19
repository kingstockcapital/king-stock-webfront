
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { Button } from "@/components/ui/button";
import { Calendar, Search, ArrowUpRight, Filter, TrendingUp, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAllArticles } from "@/data/articles";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ResearchInsights = () => {
  const allArticles = getAllArticles();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = Array.from(new Set(allArticles.map(article => article.category)));
  
  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      <main>
        {/* Hero Section - Modern Design */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3')] bg-cover opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">Market Intelligence Hub</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Research & Insights
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Navigate complex markets with confidence through our comprehensive research, 
                expert analysis, and strategic insights designed for modern investors.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Search and Filter Section */}
        <section className="py-12 bg-white border-b border-slate-200 sticky top-[72px] z-20 backdrop-blur-sm bg-white/95 shadow-sm">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <Input 
                    type="text" 
                    placeholder="Search research articles, topics, or authors..." 
                    className="pl-12 pr-4 py-3 w-full text-base border-slate-300 rounded-xl focus:ring-ksc-gold/50 focus:border-ksc-gold bg-slate-50 focus:bg-white transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-slate-600" />
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={selectedCategory === null ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(null)}
                      className={selectedCategory === null ? "bg-ksc-navy" : ""}
                    >
                      All Categories
                    </Button>
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? "bg-ksc-navy" : ""}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-slate-600">
                Showing <span className="font-semibold text-slate-900">{filteredArticles.length}</span> of {allArticles.length} articles
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid - Enhanced Layout */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, index) => (
                  <Link 
                    to={`/research/${article.id}`} 
                    key={article.id} 
                    className={`group block bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 hover:border-slate-300 ${
                      index % 4 === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                    }`}
                  >
                    <div className="h-full flex flex-col">
                      <div className="overflow-hidden relative">
                        <AspectRatio ratio={16 / 9}>
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </AspectRatio>
                        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                          <Badge className="bg-white/90 text-slate-800 font-medium backdrop-blur-sm">
                            {article.category}
                          </Badge>
                          <div className="flex items-center text-white/80 text-xs bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full">
                            <Eye className="h-3 w-3 mr-1" />
                            {article.views}
                          </div>
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
                        
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 group-hover:text-ksc-gold transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
                          {article.summary}
                        </p>
                        
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                          <span className="text-sm text-slate-500 font-medium">
                            {article.author.split(',')[0]}
                          </span>
                          <div className="flex items-center text-ksc-navy font-medium text-sm group-hover:text-ksc-gold transition-colors">
                            Read Article
                            <ArrowUpRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {filteredArticles.length === 0 && (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-10 w-10 text-slate-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">No articles found</h3>
                  <p className="text-slate-600 mb-6">Try adjusting your search terms or filters to find what you're looking for.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory(null);
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ResearchInsights;
