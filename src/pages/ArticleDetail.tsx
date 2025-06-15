
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getArticleById } from "@/data/articles";

import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleBody from "@/components/article/ArticleBody";
import RelatedArticles from "@/components/article/RelatedArticles";

const ArticleDetail = () => {
  const { articleId } = useParams();
  const article = getArticleById(Number(articleId));

  if (!article) {
    return (
      <div className="min-h-screen bg-ksc-lightgray/30 flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
            <div className="text-center py-20 px-4">
                <h1 className="font-serif text-4xl font-semibold text-ksc-navy mb-4">
                Article Not Found
                </h1>
                <p className="text-lg text-ksc-darkgray mb-8">
                The article you're looking for doesn't exist or has been moved.
                </p>
                <Button asChild size="lg">
                <Link to="/research">Return to Research</Link>
                </Button>
            </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ksc-lightgray/30">
      <Navbar />
      <main>
        <ArticleHeader article={article} />
        <ArticleBody article={article} />
        <RelatedArticles 
          currentArticleId={article.id}
          category={article.category}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
