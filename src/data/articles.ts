
import type { Config } from "tailwindcss";

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
  featured?: boolean;
}

export const articlesData: Article[] = [
  {
    id: 1,
    title: "Digital Transformation in Financial Services: A 2025 Outlook",
    summary: "Explore how artificial intelligence, blockchain, and digital banking are reshaping the financial landscape in 2025.",
    author: "Michael Chen, CFP",
    date: "January 15, 2025",
    category: "Technology & Finance",
    status: "Published",
    tags: ["Digital Banking", "AI", "Blockchain", "Fintech"],
    readTime: "8 min read",
    views: 1247,
    featured: true,
    content: `
      <div class="article-content">
        <h1>The Digital Revolution in Finance</h1>
        <p>The financial services industry is experiencing an unprecedented digital transformation. From AI-powered investment advisors to blockchain-based transactions, technology is fundamentally changing how we manage, invest, and think about money.</p>

        <h2>Key Trends Shaping 2025</h2>
        <p>Several major trends are driving this transformation:</p>
        
        <h3>1. Artificial Intelligence Integration</h3>
        <p>AI is no longer a futuristic concept but a present reality in financial services. From automated trading algorithms to personalized financial advice, AI is making financial services more efficient and accessible.</p>
        
        <h3>2. Blockchain and Cryptocurrency Adoption</h3>
        <p>Traditional financial institutions are increasingly embracing blockchain technology and digital currencies, moving beyond experimental phases to practical implementation.</p>
        
        <h3>3. Open Banking Revolution</h3>
        <p>Open banking initiatives are creating new opportunities for innovation, allowing third-party providers to build applications and services around financial institutions.</p>

        <h2>Impact on Investors</h2>
        <p>These technological advances present both opportunities and challenges for investors. Understanding these changes is crucial for making informed investment decisions in the digital age.</p>

        <blockquote>
          <p>"The future of finance is not just digital – it's intelligent, interconnected, and increasingly democratized."</p>
        </blockquote>

        <h2>Looking Ahead</h2>
        <p>As we move further into 2025, the pace of digital transformation in financial services will only accelerate. Investors and consumers alike must stay informed about these changes to navigate the evolving landscape successfully.</p>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "Global Market Volatility: Strategies for Uncertain Times",
    summary: "Navigate market uncertainty with proven strategies and risk management techniques for volatile economic conditions.",
    author: "Sarah Rodriguez, CFA",
    date: "January 12, 2025",
    category: "Market Analysis",
    status: "Published",
    tags: ["Market Volatility", "Risk Management", "Investment Strategy"],
    readTime: "10 min read",
    views: 892,
    featured: true,
    content: `
      <div class="article-content">
        <h1>Understanding Market Volatility</h1>
        <p>Market volatility has become a defining characteristic of today's investment landscape. Understanding how to navigate these uncertain waters is essential for long-term investment success.</p>

        <h2>The Nature of Modern Volatility</h2>
        <p>Today's markets are influenced by a complex web of factors including geopolitical tensions, technological disruption, and changing monetary policies.</p>
        
        <h3>Key Volatility Drivers</h3>
        <ul>
          <li>Geopolitical uncertainties and trade relations</li>
          <li>Central bank policy changes</li>
          <li>Technological disruption across industries</li>
          <li>Climate change and sustainability concerns</li>
        </ul>

        <h2>Strategic Approaches to Volatility</h2>
        <p>Successful investors don't avoid volatility – they prepare for it and use it to their advantage.</p>
        
        <h3>Diversification Strategies</h3>
        <p>True diversification goes beyond traditional asset allocation. Consider geographic diversification, sector rotation, and alternative investments.</p>
        
        <h3>Dollar-Cost Averaging</h3>
        <p>Systematic investment approaches can help smooth out the impact of market timing and reduce the emotional stress of volatile markets.</p>

        <h2>Risk Management Techniques</h2>
        <p>Effective risk management is about preparation, not prediction. Having clear strategies in place before volatility strikes is crucial for maintaining long-term investment goals.</p>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Sustainable Investing: Beyond ESG Metrics",
    summary: "Discover the evolution of sustainable investing and how impact measurement is reshaping investment decisions.",
    author: "Dr. Emily Watson, PhD",
    date: "January 10, 2025",
    category: "Sustainable Finance",
    status: "Published",
    tags: ["ESG", "Impact Investing", "Sustainability", "Climate Finance"],
    readTime: "12 min read",
    views: 1156,
    featured: true,
    content: `
      <div class="article-content">
        <h1>The Evolution of Sustainable Investing</h1>
        <p>Sustainable investing has evolved far beyond simple ESG screening. Today's impact investors are using sophisticated metrics and technologies to measure real-world outcomes.</p>

        <h2>Beyond Traditional ESG</h2>
        <p>While Environmental, Social, and Governance factors remain important, the field has expanded to include direct impact measurement and outcome-based investing.</p>
        
        <h3>Impact Measurement Revolution</h3>
        <p>New technologies and methodologies are enabling investors to track the actual impact of their investments on communities and the environment.</p>
        
        <h3>Climate Finance Innovation</h3>
        <p>The climate crisis has sparked innovation in green bonds, carbon credits, and climate-focused investment vehicles.</p>

        <h2>The Business Case for Sustainability</h2>
        <p>Sustainable investing is no longer just about doing good – it's about identifying companies and investments that are positioned for long-term success in a changing world.</p>

        <blockquote>
          <p>"Sustainable investing represents the convergence of financial returns and positive impact – it's not either/or, it's both."</p>
        </blockquote>

        <h2>Future Outlook</h2>
        <p>As regulatory frameworks evolve and investor demand grows, sustainable investing will continue to mainstream, offering new opportunities for both impact and returns.</p>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 4,
    title: "Alternative Investments: Expanding Beyond Traditional Assets",
    summary: "Explore the growing world of alternative investments and how they can enhance portfolio diversification.",
    author: "James Thompson, CAIA",
    date: "January 8, 2025",
    category: "Alternative Investments",
    status: "Published",
    tags: ["Real Estate", "Private Equity", "Commodities", "Alternative Assets"],
    readTime: "9 min read",
    views: 743,
    content: `
      <div class="article-content">
        <h1>The Rise of Alternative Investments</h1>
        <p>As traditional asset classes face challenges from low yields and high valuations, investors are increasingly turning to alternative investments for diversification and enhanced returns.</p>

        <h2>Types of Alternative Investments</h2>
        <p>The alternative investment universe is vast and continues to expand with new opportunities emerging regularly.</p>
        
        <h3>Real Estate Investment</h3>
        <p>From REITs to direct property investment, real estate continues to offer attractive risk-adjusted returns and inflation protection.</p>
        
        <h3>Private Markets</h3>
        <p>Private equity, private debt, and venture capital provide access to companies and opportunities not available in public markets.</p>

        <h2>Benefits and Considerations</h2>
        <p>Alternative investments can provide diversification benefits, but they also come with unique risks and considerations that investors must understand.</p>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
  },
  {
    id: 5,
    title: "Retirement Planning in the New Economy",
    summary: "Navigate the changing retirement landscape with updated strategies for long-term financial security.",
    author: "Patricia Lee, CFP",
    date: "January 5, 2025",
    category: "Retirement Planning",
    status: "Published",
    tags: ["Retirement", "Financial Planning", "Social Security", "401k"],
    readTime: "11 min read",
    views: 967,
    content: `
      <div class="article-content">
        <h1>Retirement Planning for the Modern Era</h1>
        <p>The traditional three-legged stool of retirement (Social Security, employer pensions, and personal savings) has evolved significantly, requiring new approaches to retirement planning.</p>

        <h2>The Changing Retirement Landscape</h2>
        <p>Longer lifespans, changing work patterns, and evolving benefit structures are reshaping how Americans plan for retirement.</p>
        
        <h3>The Longevity Factor</h3>
        <p>With people living longer, retirement funds need to last 20-30 years or more, requiring careful planning and risk management.</p>

        <h2>Modern Retirement Strategies</h2>
        <p>Today's retirement planning requires a more sophisticated approach that accounts for healthcare costs, inflation, and market volatility.</p>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  }
];

export const getAllArticles = () => articlesData.filter(article => !article.isDeleted);

export const getPublishedArticles = () => articlesData.filter(article => article.status === 'Published' && !article.isDeleted);

export const getFeaturedArticles = () => articlesData.filter(article => article.status === 'Published' && !article.isDeleted && article.featured);

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
