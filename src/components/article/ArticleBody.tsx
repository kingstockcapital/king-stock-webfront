
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tag, Share2 } from "lucide-react";
import type { Article } from "@/data/articles";

interface ArticleBodyProps {
  article: Article;
}

const ArticleBody = ({ article }: ArticleBodyProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {article.image && (
            <div className="mb-12 rounded-lg overflow-hidden shadow-lg border">
                <AspectRatio ratio={16/9}>
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                </AspectRatio>
            </div>
          )}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <article
              className="prose prose-slate lg:prose-lg max-w-none lg:col-span-8
                prose-headings:font-serif 
                prose-headings:text-ksc-navy 
                prose-headings:font-bold 
                prose-h2:text-3xl
                prose-h3:text-xl
                prose-p:text-gray-700 
                prose-strong:text-ksc-navy
                prose-a:text-ksc-gold
                prose-ul:list-disc
                prose-ol:list-decimal
              "
              dangerouslySetInnerHTML={{ __html: article.content || "" }}
            />
            <aside className="lg:col-span-4 lg:sticky top-28">
                <div className="p-6 bg-white rounded-lg shadow-sm border">
                    <h3 className="flex items-center text-lg font-semibold text-ksc-navy mb-4">
                        <Tag className="h-5 w-5 mr-3 text-ksc-gold" />
                        Topics
                    </h3>
                    {article.tags && article.tags.length > 0 ? (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {article.tags.map((tag) => (
                                <Badge 
                                key={tag} 
                                variant="outline"
                                className="bg-ksc-lightgray/50 border-ksc-navy/20 text-ksc-navy hover:bg-ksc-navy hover:text-white transition-colors"
                                >
                                {tag}
                                </Badge>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-gray-500 mb-6">No topics specified.</p>
                    )}

                    <Button variant="outline" className="w-full">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share Article
                    </Button>
                </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleBody;
