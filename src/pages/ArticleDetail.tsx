import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Calendar, User, ArrowLeft, Clock, Share2, Eye } from "lucide-react";
import { getArticleById, getAllArticles } from "@/data/articles";

const ArticleDetail = () => {
  const { articleId } = useParams();
  const article = getArticleById(Number(articleId));
  const relatedArticles = getAllArticles()
    .filter((a) => a.id !== Number(articleId) && a.category === article?.category)
    .slice(0, 3);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-md mx-auto">
              <h1 className="font-serif text-3xl font-bold text-slate-900 mb-4">
                Article Not Found
              </h1>
              <p className="text-slate-600 mb-8">The article you're looking for doesn't exist.</p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/research">Browse All Research</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/research" 
              className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors group text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Research
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                  <Badge className="bg-amber-500 text-white font-semibold px-3 py-1">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-white/60 text-sm">
                    <Eye className="h-4 w-4 mr-1" />
                    {article.views} views
                  </div>
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {article.title}
                </h1>
                
                {article.summary && (
                  <p className="text-xl text-white/90 leading-relaxed">
                    {article.summary}
                  </p>
                )}
                
                <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {article.readTime}
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-400/40 rounded-2xl blur-lg"></div>
                  <div className="relative bg-white p-4 rounded-xl shadow-2xl">
                    <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Share Bar */}
            <div className="flex items-center justify-between mb-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3">
                {article.tags?.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline"
                    className="bg-white border-slate-300 text-slate-700"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share Article
              </Button>
            </div>
            
            {/* Main Article Content */}
            <div className="prose prose-lg max-w-none">
              <style>
                {`
                .article-content h1 {
                  font-size: 2.5rem;
                  font-weight: 700;
                  color: #1e293b;
                  margin: 2rem 0 1.5rem 0;
                  font-family: serif;
                  line-height: 1.2;
                }
                
                .article-content h2 {
                  font-size: 2rem;
                  font-weight: 600;
                  color: #1e293b;
                  margin: 3rem 0 1.5rem 0;
                  padding-bottom: 0.75rem;
                  border-bottom: 3px solid #f59e0b;
                  font-family: serif;
                }
                
                .article-content h3 {
                  font-size: 1.5rem;
                  font-weight: 600;
                  color: #334155;
                  margin: 2rem 0 1rem 0;
                  font-family: serif;
                }
                
                .article-content p {
                  color: #475569;
                  line-height: 1.8;
                  margin: 1.5rem 0;
                  font-size: 1.125rem;
                }
                
                .article-content ul, .article-content ol {
                  margin: 1.5rem 0;
                  padding-left: 2rem;
                  color: #475569;
                }
                
                .article-content li {
                  margin: 0.75rem 0;
                  line-height: 1.7;
                }
                
                .article-content blockquote {
                  background: #f8fafc;
                  border-left: 4px solid #f59e0b;
                  padding: 1.5rem 2rem;
                  margin: 2rem 0;
                  font-style: italic;
                  font-size: 1.25rem;
                  color: #334155;
                  border-radius: 0 0.5rem 0.5rem 0;
                }
                `}
              </style>
              
              <div 
                className="article-content bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100"
                dangerouslySetInnerHTML={{ __html: article.content || "" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
                  Related Articles
                </h2>
                <p className="text-slate-600 text-lg">Continue exploring insights</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {relatedArticles.map(relatedArticle => (
                  <Link 
                    to={`/research/${relatedArticle.id}`}
                    key={relatedArticle.id}
                    className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
                  >
                    <div className="overflow-hidden">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </AspectRatio>
                    </div>
                    <div className="p-6">
                      <Badge className="bg-slate-100 text-slate-700 mb-3">
                        {relatedArticle.category}
                      </Badge>
                      <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-slate-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                        {relatedArticle.summary}
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{relatedArticle.author.split(",")[0]}</span>
                        <span>{relatedArticle.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="text-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
                >
                  <Link to="/research">Explore All Research</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;
