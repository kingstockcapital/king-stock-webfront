
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
    readTime: "12 min read",
    views: 0,
    content: `
      <p class="text-xl text-gray-600 leading-relaxed">Sustainable investing, which integrates environmental, social, and governance (ESG) criteria into investment decisions, is rapidly shifting from a niche strategy to a mainstream imperative. This article explores why sustainable investing is critical for modern portfolios and how you can get started.</p>

      <h2 class="border-b-2 border-ksc-gold/20 pb-2 mt-10 mb-4">The Core Principles of Sustainable Investing</h2>
      <p>At its heart, sustainable investing is about "doing well by doing good." It operates on three core principles, collectively known as ESG:</p>
      <ul class="list-disc list-outside pl-5 space-y-2 mt-4">
        <li><strong>Environmental:</strong> This considers a company's impact on the planet. Key factors include carbon emissions, resource depletion, waste management, and deforestation.</li>
        <li><strong>Social:</strong> This examines how a company manages relationships with its employees, suppliers, customers, and the communities where it operates. It covers data privacy, labor standards, and diversity and inclusion.</li>
        <li><strong>Governance:</strong> This deals with a company's leadership, executive pay, audits, internal controls, and shareholder rights. Strong governance is often a proxy for effective, ethical management.</li>
      </ul>
      
      <figure class="my-8">
        <img src="/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png" alt="The three pillars of ESG criteria" class="rounded-lg shadow-lg w-full">
        <figcaption class="text-center text-sm text-gray-500 mt-2">The three pillars of Environmental, Social, and Governance (ESG) criteria.</figcaption>
      </figure>

      <h2>Why Sustainable Investing is More Than a Trend</h2>
      <p>The rise of sustainable investing is driven by several powerful forces:</p>
      <h3 class="mt-6 font-semibold text-ksc-navy/90">1. Enhanced Long-Term Returns</h3>
      <p>Contrary to old beliefs, a focus on sustainability can enhance investment performance. Companies with strong ESG practices are often more innovative, efficient, and better equipped to handle future challenges, leading to sustained growth and lower risk.</p>
      
      <h3 class="mt-6 font-semibold text-ksc-navy/90">2. Superior Risk Management</h3>
      <p>ESG analysis helps identify risks that traditional financial analysis might miss. For example, a company with poor environmental practices could face hefty fines or reputational damage, while a company with high employee turnover might suffer from reduced productivity. Factoring in ESG provides a more holistic view of risk.</p>

      <h3 class="mt-6 font-semibold text-ksc-navy/90">3. Aligning Investments with Personal Values</h3>
      <p>For many investors, sustainable investing is a way to ensure their money is not only growing but also contributing to a better world. It allows you to support companies that are committed to positive change, whether it's tackling climate change or promoting social equity.</p>

      <h2 class="border-b-2 border-ksc-gold/20 pb-2 mt-10 mb-4">How to Build a Sustainable Portfolio</h2>
      <p>Getting started with sustainable investing is more accessible than ever. Here’s a simple roadmap:</p>
      <ol class="list-decimal list-outside pl-5 space-y-2 mt-4">
        <li><strong>Define Your Priorities:</strong> What issues matter most to you? Is it clean energy, gender equality, or ethical supply chains? Clarifying your values will help you focus your investment search.</li>
        <li><strong>Research ESG Funds and ETFs:</strong> There is a growing universe of mutual funds and exchange-traded funds (ETFs) that specialize in sustainable investing. Look for funds with a clear ESG integration strategy and a track record of engagement.</li>
        <li><strong>Analyze Individual Companies:</strong> If you prefer picking individual stocks, use ESG ratings from providers like MSCI or Sustainalytics to assess a company's performance on key sustainability metrics.</li>
        <li><strong>Seek Professional Guidance:</strong> A financial advisor with expertise in sustainable investing can help you navigate the options and build a portfolio that aligns with both your financial goals and your personal values.</li>
      </ol>

      <h2 class="border-b-2 border-ksc-gold/20 pb-2 mt-10 mb-4">The Future is Sustainable</h2>
      <p>Sustainable investing is reshaping the financial landscape. As global challenges like climate change and social inequality become more pressing, the integration of ESG factors is no longer optional—it's essential for prudent, forward-looking investment management. By embracing this approach, investors can achieve competitive returns while helping to build a more resilient and equitable world.</p>
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
