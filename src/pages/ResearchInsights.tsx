
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Search, TrendingUp, ArrowUpRight, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getFeaturedArticles, getRecentPublications } from "@/data/articles";

const ResearchInsights = () => {
  // Get data from shared articles data
  const featuredArticles = getFeaturedArticles();
  const recentPublications = getRecentPublications();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-ksc-lightgray/30">
      <Navbar />
      
      <main>
        {/* Hero Section - Enhanced */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-ksc-navy via-ksc-navy/95 to-ksc-navy/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-ksc-gold/10 border border-ksc-gold/20 rounded-full px-6 py-2 mb-8">
                <TrendingUp className="h-4 w-4 text-ksc-gold mr-2" />
                <span className="text-ksc-gold font-medium text-sm">Expert Analysis</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-8 leading-tight">
                Research &
                <span className="block text-ksc-gold">Insights</span>
              </h1>
              <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto mb-12">
                Stay ahead of market trends with our expert analysis and strategic investment insights, 
                crafted by our team of financial specialists.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-ksc-gold hover:bg-ksc-gold/90 text-ksc-navy px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="#featured" className="flex items-center">
                    Explore Latest Research
                    <ArrowUpRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <span className="text-gray-400 text-sm">Updated weekly with fresh insights</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section - Enhanced */}
        <section className="py-12 bg-white border-b border-gray-100 sticky top-0 z-20 backdrop-blur-sm bg-white/90">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input 
                      type="text" 
                      placeholder="Search articles, insights, and analysis..." 
                      className="pl-12 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ksc-gold/50 focus:border-ksc-gold transition-all bg-gray-50/50"
                    />
                  </div>
                  <Button variant="outline" className="border-gray-200 text-gray-600 hover:bg-gray-50 px-6 rounded-xl">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button className="bg-ksc-navy text-white hover:bg-ksc-navy/90 rounded-full px-6">
                    All Topics
                  </Button>
                  <Button variant="outline" className="border-gray-200 text-gray-600 hover:bg-gray-50 rounded-full px-6">
                    Market Analysis
                  </Button>
                  <Button variant="outline" className="border-gray-200 text-gray-600 hover:bg-gray-50 rounded-full px-6">
                    Investment Strategy
                  </Button>
                  <Button variant="outline" className="border-gray-200 text-gray-600 hover:bg-gray-50 rounded-full px-6">
                    Economic Outlook
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles - Enhanced */}
        <section id="featured" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ksc-navy mb-6">
                  Featured <span className="text-ksc-gold">Insights</span>
                </h2>
                <div className="w-16 h-1 bg-ksc-gold mx-auto mb-8"></div>
                <p className="text-ksc-darkgray text-xl max-w-3xl mx-auto leading-relaxed">
                  Our latest research and market perspectives from leading financial experts.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredArticles.map((article, index) => (
                  <Card key={article.id} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white">
                    {/* Enhanced Image Header */}
                    <div className="relative h-64 bg-gradient-to-br from-ksc-navy to-ksc-navy/80 overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80')] bg-cover bg-center opacity-10"></div>
                      <img 
                        src="/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png" 
                        alt="King Stock Capital Logo" 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-auto group-hover:scale-110 transition-transform duration-300" 
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 group-hover:bg-ksc-gold/90 transition-colors">
                        <ArrowUpRight className="h-4 w-4 text-ksc-navy group-hover:text-white transition-colors" />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-ksc-gold/90 text-ksc-navy border border-ksc-gold">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Enhanced Content */}
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{article.date}</span>
                        </div>
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs">{article.readTime}</span>
                      </div>
                      <CardTitle className="text-xl font-serif font-semibold text-ksc-navy mb-2 leading-tight group-hover:text-ksc-gold transition-colors">
                        <Link to={`/research/${article.id}`} className="line-clamp-2">
                          {article.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0 pb-6">
                      <p className="text-ksc-darkgray leading-relaxed line-clamp-3 mb-4">
                        {article.summary}
                      </p>
                      <Link 
                        to={`/research/${article.id}`}
                        className="inline-flex items-center text-ksc-navy font-medium hover:text-ksc-gold transition-colors group-hover:translate-x-1 transform duration-200"
                      >
                        Read Full Analysis
                        <ArrowUpRight className="h-4 w-4 ml-1" />
                      </Link>
                    </CardContent>
                    
                    <CardFooter className="pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600">{article.author}</p>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Publications - Enhanced */}
        <section className="py-20 bg-gradient-to-b from-ksc-lightgray/30 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-4xl font-semibold text-ksc-navy mb-6">
                  Recent Publications
                </h2>
                <div className="w-16 h-1 bg-ksc-gold mx-auto mb-8"></div>
                <p className="text-ksc-darkgray text-lg max-w-2xl mx-auto">
                  Stay current with our latest research publications and market analysis.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100/50">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50/50">
                      <TableHead className="w-[400px] font-semibold text-ksc-navy">Publication</TableHead>
                      <TableHead className="font-semibold text-ksc-navy">Category</TableHead>
                      <TableHead className="font-semibold text-ksc-navy">Date</TableHead>
                      <TableHead className="font-semibold text-ksc-navy">Reading Time</TableHead>
                      <TableHead className="text-right font-semibold text-ksc-navy">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentPublications.map((publication) => (
                      <TableRow key={publication.id} className="hover:bg-gray-50/50 transition-colors">
                        <TableCell className="font-medium">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-ksc-gold/10 rounded-lg">
                              <FileText className="h-5 w-5 text-ksc-gold" />
                            </div>
                            <div>
                              <Link 
                                to={`/research/${publication.id}`}
                                className="text-ksc-navy hover:text-ksc-gold transition-colors font-medium"
                              >
                                {publication.title}
                              </Link>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {publication.category}
                          </span>
                        </TableCell>
                        <TableCell className="text-gray-600">{publication.date}</TableCell>
                        <TableCell className="text-gray-600">{publication.readTime}</TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-ksc-navy text-ksc-navy hover:bg-ksc-navy hover:text-white rounded-lg"
                            asChild
                          >
                            <Link to={`/research/${publication.id}`}>
                              Read More
                              <ArrowUpRight className="h-3 w-3 ml-1" />
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-12 text-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-ksc-navy hover:bg-ksc-navy/90 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="/publications" className="flex items-center">
                    View All Publications
                    <ArrowUpRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription - Enhanced */}
        <section className="py-20 bg-gradient-to-br from-ksc-navy via-ksc-navy/95 to-ksc-navy/90 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-ksc-gold/10 border border-ksc-gold/20 rounded-full px-6 py-2 mb-8">
                <span className="text-ksc-gold font-medium text-sm">Stay Connected</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
                Never Miss an <span className="text-ksc-gold">Insight</span>
              </h2>
              <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Subscribe to our newsletter to receive the latest market insights, research publications, 
                and investment perspectives directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-6 py-4 rounded-xl text-ksc-darkgray bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-ksc-gold border-0 shadow-lg"
                />
                <Button className="bg-ksc-gold hover:bg-ksc-gold/90 text-ksc-navy font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-gray-400 text-sm mt-6">
                Join 5,000+ investors who trust our research. Unsubscribe anytime.
              </p>
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
