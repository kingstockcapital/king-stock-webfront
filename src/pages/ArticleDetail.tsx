import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Calendar, User, Tag, ArrowLeft, FileText, Clock, Share2 } from "lucide-react";

// Sử dụng dữ liệu đúng từ data/articles.ts
import { getArticleById, getAllArticles } from "@/data/articles";

const ArticleDetail = () => {
  const { articleId } = useParams();

  // Lấy bài viết theo id từ đúng nguồn dữ liệu
  const article = getArticleById(Number(articleId));

  // Debug logging
  console.log('Article content:', article?.content);

  // Lấy tất cả bài viết để hiện Related Articles, loại bỏ bài hiện tại và lấy 3 bài khác đầu tiên
  const relatedArticles = getAllArticles().filter(
    (a) => a.id !== Number(articleId)
  ).slice(0, 3);

  if (!article) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-serif text-3xl font-semibold text-ksc-navy mb-6">
              Article Not Found
            </h1>
            <p className="mb-8">The article you're looking for doesn't exist or has been moved.</p>
            <Button asChild>
              <Link to="/publications">Return to Publications</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-ksc-navy via-ksc-navy/95 to-ksc-navy/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <Link 
                to="/research" 
                className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Research
              </Link>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Article Info */}
                <div className="lg:col-span-2">
                  {article.category && (
                    <Badge className="bg-ksc-gold/20 text-ksc-gold border-ksc-gold/30 mb-4">
                      {article.category}
                    </Badge>
                  )}
                  
                  <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {article.title}
                  </h1>
                  
                  {article.summary && (
                    <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
                      {article.summary}
                    </p>
                  )}
                  
                  {/* Meta Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/80">
                    {article.author && (
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        <span className="text-sm">{article.author}</span>
                      </div>
                    )}
                    {article.date && (
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{article.date}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{article.readTime || "12 min read"}</span>
                    </div>
                  </div>
                </div>
                
                {/* Featured Image with proper aspect ratio */}
                <div className="lg:col-span-1">
                  <div className="bg-white p-3 rounded-xl shadow-2xl">
                    <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Tags & Share */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12 p-6 bg-white rounded-lg shadow-sm border">
                <div className="flex items-center flex-wrap gap-3">
                  <span className="flex items-center text-ksc-darkgray font-medium">
                    <Tag className="h-4 w-4 mr-2" />
                    Topics:
                  </span>
                  {article.tags && article.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline"
                      className="bg-ksc-lightgray/50 border-ksc-navy/20 text-ksc-navy hover:bg-ksc-navy hover:text-white transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
              
              {/* Article Content with better typography */}
              <article
                className="prose prose-slate prose-lg max-w-none
                  prose-headings:font-serif 
                  prose-headings:text-ksc-navy 
                  prose-headings:font-bold 
                  prose-h2:text-3xl 
                  prose-h2:mt-8 
                  prose-h2:mb-6 
                  prose-h3:text-2xl 
                  prose-h3:mt-8
                  prose-h3:mb-4
                  prose-h3:text-ksc-navy/90
                  prose-p:text-gray-700 
                  prose-p:text-lg
                  prose-p:leading-relaxed 
                  prose-p:mb-4
                  prose-ul:my-6
                  prose-ol:my-6
                  prose-li:text-lg
                  prose-li:text-gray-700 
                  prose-li:mb-2
                  prose-li:leading-relaxed
                  prose-strong:text-ksc-navy
                  prose-strong:font-semibold
                  bg-white rounded-lg shadow-sm border p-8 lg:p-12"
                dangerouslySetInnerHTML={{ __html: article.content || "" }}
              />
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-ksc-lightgray">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-bold text-ksc-navy mb-4 flex items-center justify-center gap-3">
                  <FileText className="h-8 w-8 text-ksc-gold" />
                  Related Articles
                </h2>
                <p className="text-ksc-darkgray text-lg">Continue exploring our latest research and insights</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {relatedArticles.map(relatedArticle => (
                  <Link 
                    to={`/research/${relatedArticle.id}`}
                    key={relatedArticle.id}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border"
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
                      {relatedArticle.category && (
                        <Badge className="bg-ksc-gold/10 text-ksc-gold border-ksc-gold/20 mb-3">
                          {relatedArticle.category}
                        </Badge>
                      )}
                      <h3 className="font-serif text-xl font-bold text-ksc-navy mb-3 group-hover:text-ksc-gold transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-ksc-darkgray mb-4 line-clamp-2 text-sm leading-relaxed">
                        {relatedArticle.summary}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{relatedArticle.author?.split(",")[0]}</span>
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
                  className="bg-ksc-navy hover:bg-ksc-navy/90 text-white px-8 py-3"
                >
                  <Link to="/research">View All Research</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
