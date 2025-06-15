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
    title: "Modern Portfolio Diversification: A Comprehensive Guide",
    summary: "Learn the fundamentals and advanced strategies of portfolio diversification to optimize returns and manage risks.",
    author: "John Doe, CFA",
    date: "June 15, 2025",
    category: "Investment Strategy",
    status: "Published",
    tags: ["Portfolio", "Diversification", "Finance"],
    readTime: "7 min read",
    views: 5,
    content: `
      <h2>What is Portfolio Diversification?</h2>
      <p>
        Portfolio diversification is an investment strategy that aims to reduce risk by allocating investments among various financial instruments, industries, and other categories. It helps maximize returns by investing in different areas that would each react differently to the same event.
      </p>
      <h2>Why is Diversification Important?</h2>
      <p>
        Diversification lowers the risk of your overall portfolio because not all assets move in the same direction or with the same strength. By spreading your investments, you protect yourself against significant losses.
      </p>
      <h3>Key Benefits</h3>
      <ul>
        <li>
          <strong>Reduces Risk:</strong> Offsets underperformance in some assets with gains in others.
        </li>
        <li>
          <strong>Improves Returns:</strong> Potentially captures gain in multiple sectors.
        </li>
        <li>
          <strong>Enhances Stability:</strong> Less volatile investment outcomes.
        </li>
      </ul>
      <h2>How to Diversify a Portfolio</h2>
      <p>
        There are many ways to diversify, including:
      </p>
      <ul>
        <li>
          Spreading investments across different asset classes (stocks, bonds, real estate, etc.)
        </li>
        <li>
          Investing in different industries and sectors
        </li>
        <li>
          Geographical diversification (domestic and international assets)
        </li>
      </ul>
      <h2>Conclusion</h2>
      <p>
        Diversification is not about guaranteeing gains, but about balancing risk and reward appropriately. Every investor should tailor their diversification strategy to their own risk tolerance, goals, and investment horizon.
      </p>
    `,
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png"
  }
];

export const getAllArticles = () => articlesData.filter(article => !article.isDeleted);

export const getPublishedArticles = () => articlesData.filter(article => article.status === 'Published' && !article.isDeleted);

export const getFeaturedArticles = () => articlesData.filter(article => article.status === 'Published' && !article.isDeleted).slice(0, 3);

export const getRecentPublications = () => articlesData.filter(article => article.status === 'Published' && !article.isDeleted).slice(3, 8);

export const getArticleById = (id: number) => articlesData.find(article => article.id === id && !article.isDeleted);

export const getDeletedArticles = () => articlesData.filter(article => article.isDeleted);

export const addArticle = (article: Omit<Article, 'id'>) => {
  const newId = Math.max(...articlesData.map(a => a.id)) + 1;
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
