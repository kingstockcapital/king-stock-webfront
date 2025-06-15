export interface Article {
  id: number;
  title: string;
  summary?: string;
  author: string;
  date: string;
  category: string;
  status: 'Published' | 'Draft';
  tags?: string[];
  readTime?: string;
  views: number;
  content?: string;
  image?: string;
  isDeleted?: boolean;
  deletedAt?: string;
}

export const articlesData: Article[] = [
  {
    id: 1,
    title: "The Importance of Sustainable Investing in Modern Portfolios",
    summary: "Discover why sustainable investing is transforming financial strategies for individuals and institutions alike.",
    author: "Sarah Nguyen, CFA",
    date: "June 15, 2025",
    category: "Sustainable Finance",
    status: "Published",
    tags: ["ESG", "Sustainability", "Investing"],
    readTime: "8 min read",
    views: 0,
    content: `
      <h2>What is Sustainable Investing?</h2>
      <p>
        Sustainable investing means integrating environmental, social, and governance (ESG) criteria into investment decisions.
        This approach goes beyond seeking financial gains — it’s about making a positive long-term impact for people and the planet.
      </p>
      
      <h2>Why is Sustainable Investing Important?</h2>
      <p>
        There are several compelling reasons why sustainable investing is rapidly gaining traction:
      </p>
      <ul>
        <li>
          <strong>Societal Impact:</strong>
          <span> Your investments can support businesses that care about ethics, transparency, and communities.</span>
        </li>
        <li>
          <strong>Risk Mitigation:</strong>
          <span> Companies with strong ESG practices are often more resilient and have lower risk over the long term.</span>
        </li>
        <li>
          <strong>Competitive Performance:</strong>
          <span> Recent research suggests that ESG-focused portfolios can perform as well as – or even better than – conventional portfolios.</span>
        </li>
      </ul>

      <h3>How to Start Investing Sustainably</h3>
      <p>
        If you’re interested in aligning your investments with your values, here are some simple steps to begin:
      </p>
      <ol>
        <li>Research ESG funds and sustainable ETFs that reflect your interests and priorities.</li>
        <li>Analyze the sustainability practices of individual companies you consider adding to your portfolio.</li>
        <li>Seek guidance from professionals specializing in sustainable investment strategies.</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>
        As concerns about the planet and social responsibility grow, sustainable investing has become more than a trend — it’s now essential. By being mindful today, you help pave the way for a brighter, more responsible financial future.
      </p>
    `,
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png"
  }
];

export const getAllArticles = () => articlesData.filter(article => !article.isDeleted);

export const getPublishedArticles = () => articlesData.filter(article => article.status === 'Published' && !article.isDeleted);

export const getFeaturedArticles = () => articlesData.filter(article => article.status === 'Published' && !article.isDeleted).slice(0, 3);

export const getRecentPublications = () => articlesData.filter(article => article.status === 'Published' && !article.isDeleted).slice(0, 5);

export const getArticleById = (id: number) => articlesData.find(article => article.id === id && !article.isDeleted);

export const getDeletedArticles = () => articlesData.filter(article => article.isDeleted);

export const addArticle = (article: Omit<Article, 'id'>) => {
  const newId = Math.max(0, ...articlesData.map(a => a.id)) + 1;
  const newArticle = { ...article, id: newId };
  articlesData.push(newArticle);
  return newArticle;
};

export const updateArticle = (id: number, updates: Partial<Article>) => {
  const index = articlesData.findIndex(article => article.id === id);
  if (index !== -1) {
    articlesData[index] = { ...articlesData[index], ...updates };
    return articlesData[index];
  }
  return null;
};

export const deleteArticle = (id: number) => {
  const index = articlesData.findIndex(article => article.id === id);
  if (index !== -1) {
    articlesData[index] = { 
      ...articlesData[index], 
      isDeleted: true, 
      deletedAt: new Date().toISOString() 
    };
    return articlesData[index];
  }
  return null;
};

export const restoreArticle = (id: number) => {
  const index = articlesData.findIndex(article => article.id === id);
  if (index !== -1) {
    articlesData[index] = { 
      ...articlesData[index], 
      isDeleted: false, 
      deletedAt: undefined 
    };
    return articlesData[index];
  }
  return null;
};

export const permanentlyDeleteArticle = (id: number) => {
  const index = articlesData.findIndex(article => article.id === id);
  if (index !== -1) {
    return articlesData.splice(index, 1)[0];
  }
  return null;
};
