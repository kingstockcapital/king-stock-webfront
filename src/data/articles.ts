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
      <h2>Overview</h2>
      <p>2025 hứa hẹn là năm có nhiều chuyển biến về kinh tế và đầu tư trên toàn cầu. Báo cáo này phân tích các xu hướng lớn, chỉ số kinh tế nổi bật và những cơ hội đầu tư quan trọng.</p>
      <h2>Key Trends</h2>
      <ul>
        <li>Tăng trưởng toàn cầu ở mức ổn định: ~3.2%</li>
        <li>Đổi mới công nghệ là động lực chính</li>
        <li>Chính sách tiền tệ được kiểm soát tốt</li>
      </ul>
      <h3>Cơ hội đầu tư nổi bật</h3>
      <p>Công nghệ, hạ tầng xanh và chăm sóc sức khỏe là ba lĩnh vực được dự báo hưởng lợi lớn từ các chính sách mới cũng như nhu cầu thị trường.</p>
      <h2>Kết luận</h2>
      <p>Để tận dụng tối đa xu hướng 2025, nhà đầu tư nên giữ cân bằng giữa tăng trưởng và an toàn, chủ động theo dõi các yếu tố vĩ mô để điều chỉnh chiến lược phù hợp.</p>
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
      <h2>Tổng quan</h2>
      <p>Đầu tư bền vững (ESG) đang dần trở thành xu hướng chủ đạo trên thế giới với mức tăng trưởng vượt bậc và hiệu quả cạnh tranh so với đầu tư truyền thống.</p>
      <h2>Các tác động nổi bật</h2>
      <ul>
        <li>Hiệu quả giảm rủi ro nhờ yếu tố môi trường và xã hội</li>
        <li>Lợi nhuận không thua kém các quỹ thông thường</li>
        <li>Dòng vốn tăng mạnh vào các ngành xanh, bền vững</li>
      </ul>
      <h3>Khuyến nghị đầu tư</h3>
      <p>Đối với nhà đầu tư mới, cần xác định rõ tiêu chí ESG, đồng thời giám sát minh bạch về báo cáo các công ty để tăng hiệu quả đầu tư bền vững.</p>
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
      <h2>Tech Sector Analysis</h2>
      <p>
        The technology sector continuously drives innovation and global economic growth.
        Here are the major trends shaping new waves of investment.
      </p>
      <h3>Main Trends</h3>
      <ul>
        <li>
          <strong>AI & Artificial Intelligence:</strong>
          Broad adoption in products, data analysis, and automation.
        </li>
        <li>
          <strong>Quantum Computing:</strong>
          Unlocks new possibilities in pharmaceuticals, finance, and data security.
        </li>
        <li>
          <strong>Biotechnology:</strong>
          Accelerates biomedical research and personalized healthcare.
        </li>
      </ul>
      <h2>Investment Strategies</h2>
      <p>
        Diversify across areas including software, hardware, and digital biology.
        Prioritize companies with strong innovation capabilities and robust intellectual property ownership.
      </p>
      <ul>
        <li>Diversify your portfolio</li>
        <li>Frequently review regulatory factors and global trends</li>
      </ul>
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
      <h2>Báo cáo kinh tế quý I/2025</h2>
      <p>Quý 1 năm 2025 cho thấy nhiều tín hiệu đan xen giữa các vùng kinh tế. Tăng trưởng Mỹ và châu Á khả quan nhờ tiêu dùng nội địa mạnh, châu Âu và các thị trường mới nổi vẫn gặp khó khăn.</p>
      <h3>Dự báo quý tiếp theo</h3>
      <ul>
        <li>Tăng trưởng duy trì ở mức trung bình 2-3%</li>
        <li>Lạm phát cơ bản kiểm soát tốt</li>
        <li>Nhiều chính sách kích thích kinh tế dự kiến được duy trì</li>
      </ul>
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
      <h2>Đầu tư hạ tầng tại các thị trường mới nổi</h2>
      <p>Cơ sở hạ tầng là yếu tố then chốt để thúc đẩy tăng trưởng dài hạn ở các nền kinh tế đang phát triển.</p>
      <h3>Cơ hội tiêu biểu</h3>
      <ul>
        <li>Phát triển năng lượng tái tạo</li>
        <li>Đầu tư hệ thống giao thông và logistics</li>
        <li>Ứng dụng công nghệ mới vào xây dựng/kiểm soát chất lượng công trình</li>
      </ul>
      <p>Dòng vốn nước ngoài đang tập trung mạnh vào các dự án mang lại hiệu quả bền vững, đóng góp tích cực cho cộng đồng.</p>
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
      <h2>Lập kế hoạch hưu trí khi lạm phát tăng cao</h2>
      <p>Lạm phát kéo dài ảnh hưởng lớn đến nguồn tiết kiệm và kế hoạch hưu trí của mỗi cá nhân. Những giải pháp dưới đây giúp bảo vệ tài sản và duy trì chất lượng cuộc sống về già.</p>
      <ul>
        <li>Đa dạng hóa khoản đầu tư</li>
        <li>Tăng tỷ trọng tài sản phòng thủ (vàng, bất động sản, trái phiếu lạm phát)</li>
        <li>Xem xét điều chỉnh chi tiêu và mục tiêu tài chính theo thời gian</li>
      </ul>
      <p>Luôn chủ động cập nhật thông tin và điều chỉnh kế hoạch sẽ giúp bạn giữ vững an toàn tài chính khi nghỉ hưu.</p>
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
      <h2>Đầu tư vào ngành y tế hậu đại dịch</h2>
      <p>Đại dịch đã thay đổi đáng kể cách thức đầu tư và phát triển lĩnh vực chăm sóc sức khỏe. Các doanh nghiệp đón đầu đổi mới sáng tạo sẽ có ưu thế lớn trong giai đoạn tới.</p>
      <ul>
        <li>Tiếp tục bùng nổ nền tảng y tế số và công nghệ chăm sóc sức khỏe từ xa</li>
        <li>Nâng cao hiệu quả sản xuất, tồn trữ và phân phối vacxin</li>
        <li>Quản trị rủi ro chuỗi cung ứng y tế</li>
      </ul>
      <h3>Khuyến nghị đầu tư</h3>
      <p>Lựa chọn các công ty dẫn đầu về đổi mới, <strong>ưu tiên hệ sinh thái y tế số</strong> và phân tán rủi ro bằng cách đa dạng hóa lĩnh vực phụ trợ.</p>
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
      <h2>Chiến lược thu nhập cố định trong thời kỳ biến động lãi suất</h2>
      <p>Lãi suất thay đổi liên tục đặt ra thách thức nhưng cũng mở ra cơ hội cho nhà đầu tư trái phiếu.</p>
      <h3>Một số chiến lược gợi ý</h3>
      <ul>
        <li>Kéo dài thời hạn danh mục nếu dự báo lãi suất giảm</li>
        <li>Phối hợp các loại trái phiếu (chính phủ, doanh nghiệp, lạm phát)</li>
        <li>Giám sát kỹ chất lượng tín dụng của tổ chức phát hành</li>
      </ul>
      <p>Linh hoạt điều chỉnh sẽ tối ưu hóa lợi suất và kiểm soát rủi ro hiệu quả.</p>
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
      <h2>Chính trị năm 2025 và tác động tới thị trường</h2>
      <p>Biến động chính trị và các sự kiện lớn có thể tạo ra nhiều rủi ro cũng như cơ hội trên thị trường tài chính toàn cầu.</p>
      <ul>
        <li>Rủi ro từ xung đột địa chính trị</li>
        <li>Những thay đổi về chính sách thương mại và đầu tư</li>
        <li>Tăng cường hoạt động giám sát, siết chặt quy định với lĩnh vực nhạy cảm</li>
      </ul>
      <p>Chủ động nắm bắt thông tin chính trị là lợi thế lớn cho nhà đầu tư để phòng ngừa rủi ro.</p>
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
      <h2>Chuyển động chính trị Đông Nam Á và cơ hội đầu tư mới</h2>
      <p>Những thay đổi chính trị ở Đông Nam Á tạo nên làn gió mới về chính sách và tiềm năng tăng trưởng cho nhà đầu tư quốc tế.</p>
      <ul>
        <li>Sự tăng trưởng của nền dân chủ và cải cách pháp lý</li>
        <li>Thu hút vốn đầu tư vào các ngành chiến lược (công nghệ, nông nghiệp…)</li>
        <li>Tăng cường hợp tác khu vực về logistics, thương mại tự do</li>
      </ul>
      <p>Cần theo sát cải cách và chủ động tiếp cận thị trường mới nổi trong khu vực.</p>
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
      <h2>Sự phát triển của tiền số và tác động tới thị trường</h2>
      <p>Tiền kỹ thuật số mang đến nhiều cơ hội mới nhưng cũng đi kèm thách thức lớn về quản lý, kiểm soát cũng như an ninh tài chính toàn cầu.</p>
      <ul>
        <li>Chính sách quản lý liên tục thay đổi</li>
        <li>Ứng dụng blockchain trong ngân hàng, tài chính</li>
        <li>Bảo mật, an ninh và phòng chống rửa tiền là chủ đề nóng</li>
      </ul>
      <p>Doanh nghiệp, nhà đầu tư cần chủ động cập nhật, đánh giá kỹ rủi ro và cơ hội khi tham gia lĩnh vực Tiền số.</p>
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
      <h2>Chính sách môi trường & tác động lên các ngành</h2>
      <p>Chính sách chống biến đổi khí hậu đang tái định hình bức tranh đầu tư tại nhiều lĩnh vực then chốt.</p>
      <h3>Các xu hướng chính:</h3>
      <ul>
        <li>Tăng vốn cho ngành năng lượng tái tạo</li>
        <li>Hỗ trợ đổi mới cơ sở hạ tầng xanh</li>
        <li>Chiến lược đầu tư tích hợp ESG ngày một phổ biến</li>
      </ul>
      <p>Biến đổi khí hậu là yếu tố không thể thiếu trong quyết định đầu tư dài hạn, đòi hỏi doanh nghiệp liên tục thích nghi và đổi mới.</p>
    `,
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png"
  },
  {
    id: 13,
    title: "Digital Transformation in Finance: A New Era",
    summary: "An overview of how digital transformation is shaping the future of finance with practical implications for organizations.",
    author: "Anna Nguyen, Digital Transformation Lead",
    date: "June 15, 2025",
    category: "FinTech",
    status: "Published",
    tags: ["Digital", "Transformation", "Finance"],
    readTime: "6 min read",
    views: 0,
    content: `
      <h2>Introduction</h2>
      <p>Digital transformation is revolutionizing the finance industry, from how services are delivered to the way organizations operate. This article will explore the essential drivers, benefits, and real-world examples of digital innovation in the sector.</p>
      
      <h2>Key Drivers of Change</h2>
      <p>New technologies such as artificial intelligence, cloud computing, and big data analytics create significant opportunities for financial institutions. Companies are investing heavily to stay competitive and meet growing customer expectations.</p>
      
      <h3>Main Benefits</h3>
      <ul>
        <li>Enhanced customer experience with personalized services</li>
        <li>Improved operational efficiency and cost reduction</li>
        <li>Greater data security and compliance</li>
        <li>Faster product and service innovation</li>
      </ul>
      
      <h2>Case Study: BankGo’s Journey</h2>
      <p>BankGo, a leading retail bank, adopted cloud-based solutions and introduced AI-powered chatbots. As a result, they reduced operation times, improved the customer helpdesk, and launched mobile loan approval in minutes.</p>
      
      <h2>Conclusion</h2>
      <p>Embracing digital transformation is essential for any financial organization that wishes to remain relevant. Leaders should promote a culture of innovation and continuously monitor emerging technologies to sustain growth.</p>
    `,
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png"
  },
  {
    id: 14,
    title: "Tech Sector Analysis: Innovations Driving Global Growth",
    summary: "Insights into how technology is driving innovation and growth across the global economy, with key trends and investment strategies.",
    author: "David Williams, Technology Sector Specialist",
    date: "June 16, 2025",
    category: "Sector Analysis",
    status: "Published",
    tags: ["Technology", "Innovation", "Investment"],
    readTime: "10 min read",
    views: 0,
    content: `
      <h2>Tech Sector Overview</h2>
      <p>
        The technology sector is a constant engine for innovation and a key driver of global economic growth.
        Below are the leading trends that are propelling a new wave of investment opportunities.
      </p>
      <h3>Key Trends</h3>
      <ul>
        <li>
          <strong>AI & Artificial Intelligence:</strong>
          Widespread application in products, data analysis, and automation across industries.
        </li>
        <li>
          <strong>Quantum Computing:</strong>
          Unlocking new possibilities in pharmaceuticals, finance, and data security.
        </li>
        <li>
          <strong>Biotechnology:</strong>
          Accelerating biomedical research and personalized healthcare.
        </li>
      </ul>
      <h2>Investment Strategies</h2>
      <p>
        To capture technology-driven growth, investors should diversify across software, hardware, and digital biotech.
        Organizations with strong innovation capabilities and robust intellectual property are most likely to succeed.
      </p>
      <ul>
        <li>Diversify across portfolios and segments</li>
        <li>Regularly review regulations and emerging global trends</li>
      </ul>
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
