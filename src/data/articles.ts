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
      <p>Sustainable investing means integrating environmental, social, and governance (ESG) criteria into investment decisions. This is about more than just seeking financial gains — it’s about making a positive long-term impact.</p>
      
      <h2>Why is Sustainable Investing Important?</h2>
      <ul>
        <li><strong>Societal Impact:</strong> Your investments help businesses that care about ethics and communities.</li>
        <li><strong>Risk Mitigation:</strong> Companies with strong ESG policies are often more resilient and have lower risk over the long term.</li>
        <li><strong>Performance:</strong> Research suggests that ESG-focused portfolios can perform as well as or better than conventional portfolios.</li>
      </ul>
      
      <h3>How To Start Investing Sustainably</h3>
      <ol>
        <li>Research ESG funds and sustainable ETFs that align with your values.</li>
        <li>Analyze the sustainability practices of companies you’re interested in.</li>
        <li>Seek advice from professionals who understand sustainable strategies.</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>As concerns for the planet and social responsibility grow, sustainable investing is no longer a trend — it’s a necessity. By making mindful choices today, you’re helping build a better future through your investments.</p>
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
