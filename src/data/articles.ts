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
      <h2>What Is Sustainable Investing?</h2>
      <p>Sustainable investing integrates environmental, social, and governance (ESG) criteria into investment strategies and portfolio management. This approach not only aims for financial return, but also positive long-term impact on society and the environment.</p>
      <h2>Why Is It Important?</h2>
      <ul>
        <li><strong>Societal Impact:</strong> Your capital contributes to companies prioritizing ethical practices.</li>
        <li><strong>Risk Mitigation:</strong> ESG-compliant companies show greater resilience and lower long-term risk.</li>
        <li><strong>Performance:</strong> Studies suggest sustainable portfolios can perform as well as, or better than, traditional ones.</li>
      </ul>
      <h3>How To Get Started</h3>
      <ol>
        <li>Research available ESG funds or ETFs.</li>
        <li>Review the sustainability practices of companies in your portfolio.</li>
        <li>Consult financial advisers who specialize in sustainable strategies.</li>
      </ol>
      <h2>Conclusion</h2>
      <p>As global awareness of climate change and social justice grows, integrating sustainable practices in investing isn’t just responsible—it’s smart. Start building a more sustainable future with your investments today.</p>
    `,
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png"
  }
];

export const getAllArticles = () => articlesData.filter(article => !article.isDeleted);

export const getPublishedArticles = () => articlesData.filter(article => article.status === 'Published' && !article.isDeleted);

export const getFeaturedArticles = () => articlesData.filter(article => article.status === 'Published' && !article.isDeleted).slice(0, 3);

export const getRecentPublications = () => articlesData.filter(article => article.status === 'Published' && !article.isDeleted).slice(3, 8);

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
