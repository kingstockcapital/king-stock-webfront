
import { Link } from "react-router-dom";
import { getAllArticles } from "@/data/articles";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FileText } from "lucide-react";

interface RelatedArticlesProps {
  currentArticleId: number;
  category: string;
}

const RelatedArticles = ({ currentArticleId, category }: RelatedArticlesProps) => {
  // Get articles from the same category, exclude current one, take up to 3
  const related = getAllArticles()
    .filter(
      (a) => a.id !== currentArticleId && a.category === category
    )
    .slice(0, 3);

  // If not enough, fill with other recent articles
  if (related.length < 3) {
      const otherArticles = getAllArticles()
        .filter(a => a.id !== currentArticleId && !related.find(r => r.id === a.id))
        .slice(0, 3 - related.length);
      related.push(...otherArticles);
  }

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-ksc-navy mb-4 flex items-center justify-center gap-3">
              <FileText className="h-8 w-8 text-ksc-gold" />
              Related Articles
            </h2>
            <p className="text-ksc-darkgray text-lg">Continue exploring our latest research and insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map(relatedArticle => (
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
