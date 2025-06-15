
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import type { Article } from "@/data/articles";

interface ArticleHeaderProps {
  article: Article;
}

const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  return (
    <section className="pt-24 pb-12 bg-white border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/research"
            className="inline-flex items-center text-ksc-navy hover:text-ksc-gold mb-6 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Research
          </Link>

          {article.category && (
            <Badge className="bg-ksc-gold/20 text-ksc-gold border-ksc-gold/30 mb-4">
              {article.category}
            </Badge>
          )}

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ksc-navy mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-ksc-darkgray">
            {article.author && (
              <div className="flex items-center text-sm">
                <User className="h-4 w-4 mr-2" />
                <span>{article.author}</span>
              </div>
            )}
            {article.date && (
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{article.date}</span>
              </div>
            )}
            {article.readTime && (
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-2" />
                <span>{article.readTime}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleHeader;
