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
    content: `
      <h2>Introduction</h2>
      <p>As we look ahead to 2025, the global economy stands at a significant crossroads. Following a period of unprecedented monetary policy adjustments and supply chain realignments, markets are now navigating a landscape characterized by technological innovation, shifting geopolitical alliances, and evolving demographic patterns.</p>
      <p>This comprehensive outlook examines key trends expected to shape investment markets in the coming year and provides strategic insights for investors seeking to position their portfolios effectively.</p>

      <h2>Economic Growth Projections</h2>
      <p>Our analysis suggests global GDP growth will stabilize at approximately 3.2% in 2025, with notable regional variations:</p>
      <ul>
        <li><strong>North America:</strong> 2.5-2.8% growth, supported by technology sector expansion and infrastructure spending.</li>
        <li><strong>Europe:</strong> 1.7-2.0% growth, constrained by demographic challenges but bolstered by green technology investments.</li>
        <li><strong>Asia-Pacific:</strong> 4.5-5.0% growth, led by continued expansion in India and Southeast Asian markets.</li>
        <li><strong>Latin America:</strong> 2.8-3.2% growth, with improvements in fiscal positions supporting economic stability.</li>
      </ul>
      <p>Inflation is projected to remain within central bank target ranges for most developed economies, though upside risks exist particularly in labor-constrained markets.</p>

      <h2>Sector Outlook</h2>
      <p>Several sectors present compelling opportunities as we enter 2025:</p>
      <h3>Technology</h3>
      <p>The technology sector continues to demonstrate strong growth potential, particularly in areas of artificial intelligence, quantum computing, and cybersecurity. Companies with established intellectual property in these domains are well-positioned to deliver above-market returns.</p>
      <h3>Healthcare</h3>
      <p>Demographics and innovation are dual tailwinds for the healthcare sector. Advancements in personalized medicine, bioinformatics, and medical devices present significant investment opportunities in both established companies and emerging innovators.</p>
      <h3>Green Infrastructure</h3>
      <p>Government commitments to carbon reduction targets are driving substantial infrastructure spending globally. Companies involved in renewable energy generation, storage solutions, and grid modernization are expected to benefit from this multi-year trend.</p>

      <h2>Risk Factors to Monitor</h2>
      <p>While our base case remains constructive, several key risks warrant close attention:</p>
      <ul>
        <li>Geopolitical tensions in key regions could disrupt trade flows and energy markets.</li>
        <li>Potential for monetary policy divergence between major central banks.</li>
        <li>Ongoing climate-related disruptions affecting agricultural production and supply chains.</li>
        <li>Debt sustainability concerns in certain emerging markets.</li>
      </ul>

      <h2>Investment Strategy Recommendations</h2>
      <p>Given this outlook, we recommend the following strategic positioning:</p>
      <ol>
        <li>Maintain a balanced allocation between growth and value exposures.</li>
        <li>Increase allocation to quality companies with strong balance sheets and pricing power.</li>
        <li>Consider strategic exposure to emerging markets, particularly in Asia.</li>
        <li>Integrate environmental, social and governance (ESG) factors into security selection.</li>
        <li>Maintain appropriate fixed income duration to manage interest rate sensitivity.</li>
      </ol>
      <p>Our analysis suggests that carefully selected active management will likely deliver value in the coming market environment, particularly in less efficient market segments.</p>

      <h2>Conclusion</h2>
      <p>The 2025 investment landscape offers significant opportunities amid a changing economic backdrop. By focusing on quality, innovation, and careful risk management, investors can navigate this transition effectively and position for long-term success.</p>
    `,
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
    content: `
      <h2>Introduction</h2>
      <p>
        Sustainable investing has transformed from a niche strategy to a mainstream investment approach. This report examines the evolution of ESG (Environmental, Social, and Governance) investing and evaluates its performance relative to conventional investment methods.
      </p>
      <h2>The Growth of ESG Assets</h2>
      <p>
        Global ESG assets are projected to exceed $50 trillion by 2025, representing more than a third of total assets under management worldwide. This remarkable growth reflects increasing investor demand, regulatory developments, and recognition of material financial impacts associated with sustainability factors.
      </p>
      <h2>Performance Analysis</h2>
      <p>Our analysis of ESG fund performance over the past five years reveals:</p>
      <ul>
        <li>ESG-integrated equity funds have shown comparable risk-adjusted returns to conventional peers.</li>
        <li>Climate-focused funds have outperformed broader market indices during periods of environmental policy advancement.</li>
        <li>Funds with strong social and governance criteria have demonstrated greater resilience during market downturns.</li>
      </ul>
      <p>
        When controlling for sector allocation and style factors, ESG integration has contributed positively to risk management without sacrificing returns in most market environments.
      </p>
      <h2>Key Trends and Future Directions</h2>
      <p>Several important trends are shaping the future of sustainable investing:</p>
      <h3>Data Quality Improvements</h3>
      <p>
        Enhanced disclosure requirements and standardization efforts are improving the quality and comparability of ESG data, enabling more sophisticated analysis and integration techniques.
      </p>
      <h3>Impact Measurement</h3>
      <p>
        Investors are increasingly focusing on measurable real-world outcomes alongside financial returns, driving innovation in impact measurement methodologies.
      </p>
      <h3>Climate Transition Focus</h3>
      <p>
        Investment strategies are evolving to not only assess current sustainability profiles but also to evaluate companies' transition plans and alignment with climate goals.
      </p>
      <h2>Investment Implications</h2>
      <p>
        Based on our research, we recommend the following approaches for investors seeking to incorporate sustainability considerations:
      </p>
      <ol>
        <li>Develop a clear philosophy regarding the role of ESG factors in investment processes.</li>
        <li>Consider both risk mitigation and opportunity identification aspects of sustainability.</li>
        <li>Evaluate the credibility of transition plans for companies in carbon-intensive sectors.</li>
        <li>Look beyond ratings to underlying data and methodologies when assessing ESG credentials.</li>
        <li>Engage actively with portfolio companies to encourage improved practices and disclosures.</li>
      </ol>
      <h2>Conclusion</h2>
      <p>
        Sustainable investing continues to evolve rapidly, with growing evidence that thoughtful integration of material ESG factors can contribute positively to investment outcomes. As data quality improves and methodologies mature, we expect sustainability considerations to become increasingly central to mainstream investment processes.
      </p>
    `,
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
    content: `
      <h2>Introduction</h2>
      <p>
        The technology sector continues to be the primary engine of innovation and disruption across the global economy.
        This analysis examines key technological developments that are likely to drive significant investment opportunities over the coming decade.
      </p>

      <h2>Artificial Intelligence: Beyond the Hype Cycle</h2>
      <p>
        Artificial intelligence (AI) has moved from theory to transformative real-world applications.
        Industries across the spectrum are leveraging AI to drive productivity and value. Notable developments include:
      </p>
      <h3>Enterprise AI Integration</h3>
      <p>
        Businesses are now applying AI for:
      </p>
      <ul>
        <li>Process optimization</li>
        <li>Predictive maintenance</li>
        <li>Customer experience enhancement</li>
      </ul>
      <p>
        High-value, narrowly focused use cases are delivering measurable results, with enterprises finding rapid ROI in targeted applications.
      </p>
      <h3>Generative AI Evolution</h3>
      <p>
        Recent breakthroughs in generative AI are enabling:
      </p>
      <ul>
        <li>Advanced content creation</li>
        <li>Automated product design</li>
        <li>Accelerated software development</li>
      </ul>
      <p>
        The capabilities are growing rapidly, promising to transform creative and technical workflows across many industries.
      </p>
      <h3>AI Infrastructure</h3>
      <p>
        Growing computational demands for advanced AI are fueling investments in:
      </p>
      <ul>
        <li>High-performance GPUs</li>
        <li>Custom ASICs</li>
        <li>Novel memory architectures</li>
      </ul>
      <p>
        Companies supporting the AI infrastructure value chain form a critical backbone for future sector growth.
      </p>

      <h2>Quantum Computing: Approaching Commercial Viability</h2>
      <p>
        Quantum computing is nearing commercial deployment in select domains, even as general-purpose systems remain years away.
      </p>
      <ul>
        <li><strong>Material science and drug discovery:</strong> Likely the first domains for quantum breakthroughs.</li>
        <li><strong>Financial modeling:</strong> Early applications in portfolio optimization and risk analysis.</li>
        <li><strong>Supply chain optimization:</strong> Improving efficiency and reducing costs for global enterprises.</li>
      </ul>
      <p>
        Specialized quantum systems are gradually entering the market, with enterprise pilots and proof-of-concept deployments on the rise.
      </p>

      <h2>Biotechnology Convergence</h2>
      <p>
        The fusion of information technology and biotech is accelerating both discovery and commercialization, creating novel opportunities.
      </p>
      <h3>Computational Biology</h3>
      <p>
        Advanced data-driven approaches are revolutionizing drug discovery:
      </p>
      <ul>
        <li>Shortened development cycles</li>
        <li>Higher success rates in clinical research</li>
      </ul>
      <p>
        Companies that excel in both biosciences and computation are especially well-positioned for accelerated growth.
      </p>
      <h3>Synthetic Biology</h3>
      <p>
        The field is moving from experimental to commercial adoption, with real-world applications for:
      </p>
      <ul>
        <li>Healthcare innovations</li>
        <li>Sustainable production of materials</li>
      </ul>

      <h2>Investment Strategy Implications</h2>
      <p>
        These technological trends create meaningful considerations for investment portfolios:
      </p>
      <ol>
        <li>Target companies with enduring competitive advantages in enabling technologies.</li>
        <li>Understand the full value chain, from infrastructure to applications.</li>
        <li>Evaluate potential disruption to incumbents across sectors.</li>
        <li>Balance pure tech plays with firms adopting new capabilities.</li>
        <li>Monitor regulatory and governance developments, especially in AI ethics and data management.</li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        The relentless pace of innovation in technology provides both new opportunities and risks.
        Investors who comprehend these shifts and their market impact can benefit from dynamic growth and stay ahead of disruption.
      </p>
    `,
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
    content: `
      <h2>Quarterly Economic Review: Q1 2025</h2>

      <p>The first quarter of 2025 showed mixed economic signals...</p>
    `,
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
    content: `
      <h2>Infrastructure Investments in Developing Markets</h2>

      <p>Developing markets present unique opportunities...</p>
    `,
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
    content: `
      <h2>Retirement Planning in Inflationary Times</h2>

      <p>Inflation poses unique challenges to retirement planning...</p>
    `,
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
    content: `
      <h2>Healthcare Sector Analysis</h2>

      <p>The post-pandemic healthcare landscape has transformed...</p>
    `,
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
    content: `
      <h2>Fixed Income Strategies</h2>

      <p>The current rate environment requires careful navigation...</p>
    `,
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
    content: `
      <h2>Political Landscape and Market Implications</h2>

      <p>Political changes create market volatility...</p>
    `,
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
    content: `
      <h2>Political Changes in Southeast Asia</h2>

      <p>Southeast Asia's political landscape is evolving...</p>
    `,
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
    content: `
      <h2>Digital Currency Developments</h2>

      <p>The regulatory landscape for digital currencies continues to evolve...</p>
    `,
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
    content: `
      <h2>Climate Change Policies and Markets</h2>

      <p>Environmental policies are driving significant market changes...</p>
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
