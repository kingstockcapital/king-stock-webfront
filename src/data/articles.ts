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
    title: "2025 Market Outlook: Navigating Economic Transitions",
    summary: "A comprehensive analysis of market trends, economic indicators, and investment opportunities for the coming year.",
    author: "Sarah Johnson, Chief Investment Officer",
    date: "May 10, 2025",
    category: "Market Analysis",
    status: "Published",
    tags: ["Economy", "Investment", "Forecast"],
    readTime: "8 min read",
    views: 1234,
    content: "# 2025 Market Outlook: Navigating Economic Transitions\n\nAs we navigate through the complexities of the global economy...",
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png"
  },
  {
    id: 2,
    title: "The Rise of Sustainable Investing: Impact and Returns",
    summary: "Exploring the growth of ESG investments and their performance compared to traditional investment approaches.",
    author: "Michael Chen, Senior Investment Analyst",
    date: "April 28, 2025",
    category: "Sustainable Finance",
    status: "Published",
    tags: ["ESG", "Sustainability", "Investment"],
    readTime: "6 min read",
    views: 856,
    content: "# The Rise of Sustainable Investing\n\nESG investing has become more than just a trend...",
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png"
  },
  {
    id: 3,
    title: "Tech Sector Analysis: Innovations Driving Future Growth",
    summary: "An in-depth look at emerging technologies and their potential impact on investment portfolios.",
    author: "David Williams, Technology Sector Specialist",
    date: "April 15, 2025",
    category: "Sector Analysis",
    status: "Published",
    tags: ["Technology", "Innovation", "Growth"],
    readTime: "10 min read",
    views: 923,
    content: "# Tech Sector Analysis\n\nThe technology sector continues to evolve rapidly...",
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png"
  },
  {
    id: 4,
    title: "Quarterly Economic Review: Q1 2025",
    summary: "A detailed analysis of global economic performance and projections for the coming quarters.",
    author: "Jennifer Smith, Economic Analyst",
    date: "April 5, 2025",
    category: "Economic Analysis",
    status: "Published",
    tags: ["Economy", "Quarterly", "Global"],
    readTime: "12 min read",
    views: 745,
    content: "# Quarterly Economic Review: Q1 2025\n\nThe first quarter of 2025 showed mixed economic signals...",
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png"
  },
  {
    id: 5,
    title: "Infrastructure Investments: Opportunities in Developing Markets",
    summary: "Examining investment prospects in infrastructure projects across emerging economies.",
    author: "Robert Lee, Global Markets Strategist",
    date: "March 22, 2025",
    category: "Global Markets",
    status: "Published",
    tags: ["Infrastructure", "Emerging Markets", "Investment"],
    readTime: "9 min read",
    views: 612,
    content: "# Infrastructure Investments in Developing Markets\n\nDeveloping markets present unique opportunities...",
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png"
  },
  {
    id: 6,
    title: "Retirement Planning in an Inflationary Environment",
    summary: "Strategies for protecting retirement savings during periods of elevated inflation.",
    author: "Lisa Thompson, Retirement Specialist",
    date: "March 15, 2025",
    category: "Retirement Strategies",
    status: "Published",
    tags: ["Retirement", "Inflation", "Planning"],
    readTime: "7 min read",
    views: 534,
    content: "# Retirement Planning in Inflationary Times\n\nInflation poses unique challenges to retirement planning...",
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png"
  },
  {
    id: 7,
    title: "Healthcare Sector: Post-Pandemic Investment Landscape",
    summary: "Analysis of healthcare industry trends and investment opportunities following global health crises.",
    author: "Emily Johnson, Healthcare Sector Analyst",
    date: "March 3, 2025",
    category: "Sector Analysis",
    status: "Published",
    tags: ["Healthcare", "Investment", "Trends"],
    readTime: "11 min read",
    views: 423,
    content: "# Healthcare Sector Analysis\n\nThe post-pandemic healthcare landscape has transformed...",
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png"
  },
  {
    id: 8,
    title: "Fixed Income Strategies for the Current Rate Environment",
    summary: "Navigating the bond market and optimizing fixed income portfolios in changing interest rate conditions.",
    author: "Daniel Brown, Fixed Income Specialist",
    date: "February 20, 2025",
    category: "Fixed Income",
    status: "Published",
    tags: ["Bonds", "Interest Rates", "Strategy"],
    readTime: "8 min read",
    views: 356,
    content: "# Fixed Income Strategies\n\nThe current rate environment requires careful navigation...",
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png"
  },
  {
    id: 9,
    title: "Political Landscape and Market Implications for 2025",
    summary: "Analyzing how changing political environments might affect investment markets globally.",
    author: "Thomas Wright, Political Risk Analyst",
    date: "February 15, 2025",
    category: "Political Analysis",
    status: "Draft",
    tags: ["Politics", "Global Markets", "Risk"],
    readTime: "9 min read",
    views: 0,
    content: "# Political Landscape and Market Implications\n\nPolitical changes create market volatility...",
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png"
  },
  {
    id: 10,
    title: "Political Changes in Southeast Asia: Investment Opportunities",
    summary: "Examining how political shifts in Southeast Asian countries are creating new investment landscapes.",
    author: "Alice Wong, Asia Pacific Strategist",
    date: "February 8, 2025",
    category: "Regional Analysis",
    status: "Draft",
    tags: ["Politics", "Southeast Asia", "Emerging Markets"],
    readTime: "10 min read",
    views: 0,
    content: "# Political Changes in Southeast Asia\n\nSoutheast Asia's political landscape is evolving...",
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png"
  },
  {
    id: 11,
    title: "Digital Currency Developments and Regulatory Impacts",
    summary: "Understanding the evolving landscape of digital currencies and potential effects on traditional markets.",
    author: "Mark Johnson, Financial Technology Specialist",
    date: "January 30, 2025",
    category: "FinTech",
    status: "Published",
    tags: ["Digital Currency", "Regulation", "Technology"],
    readTime: "8 min read",
    views: 289,
    content: "# Digital Currency Developments\n\nThe regulatory landscape for digital currencies continues to evolve...",
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png"
  },
  {
    id: 12,
    title: "Climate Change Policies and Market Effects",
    summary: "Analyzing how new environmental policies are reshaping investment landscapes across sectors.",
    author: "Sophia Martinez, ESG Research Lead",
    date: "January 18, 2025",
    category: "Environmental Analysis",
    status: "Published",
    tags: ["Climate", "Policy", "ESG"],
    readTime: "7 min read",
    views: 198,
    content: "# Climate Change Policies and Markets\n\nEnvironmental policies are driving significant market changes...",
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
