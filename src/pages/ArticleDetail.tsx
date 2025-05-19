
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";

// This represents our article database
// In a real application, this would come from an API
const articles = [
  {
    id: 1,
    title: "2025 Market Outlook: Navigating Economic Transitions",
    summary: "A comprehensive analysis of market trends, economic indicators, and investment opportunities for the coming year.",
    date: "May 10, 2025",
    author: "Sarah Johnson, Chief Investment Officer",
    category: "Market Analysis",
    tags: ["Economy", "Investment", "Forecast"],
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png",
    content: `
      <h2>Introduction</h2>
      <p>As we look ahead to 2025, the global economy stands at a significant crossroads. Following a period of unprecedented monetary policy adjustments and supply chain realignments, markets are now navigating a landscape characterized by technological innovation, shifting geopolitical alliances, and evolving demographic patterns.</p>
      
      <p>This comprehensive outlook examines key trends expected to shape investment markets in the coming year and provides strategic insights for investors seeking to position their portfolios effectively.</p>

      <h2>Economic Growth Projections</h2>
      <p>Our analysis suggests global GDP growth will stabilize at approximately 3.2% in 2025, with notable regional variations:</p>

      <ul>
        <li>North America: 2.5-2.8% growth, supported by technology sector expansion and infrastructure spending</li>
        <li>Europe: 1.7-2.0% growth, constrained by demographic challenges but bolstered by green technology investments</li>
        <li>Asia-Pacific: 4.5-5.0% growth, led by continued expansion in India and Southeast Asian markets</li>
        <li>Latin America: 2.8-3.2% growth, with improvements in fiscal positions supporting economic stability</li>
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
        <li>Geopolitical tensions in key regions could disrupt trade flows and energy markets</li>
        <li>Potential for monetary policy divergence between major central banks</li>
        <li>Ongoing climate-related disruptions affecting agricultural production and supply chains</li>
        <li>Debt sustainability concerns in certain emerging markets</li>
      </ul>

      <h2>Investment Strategy Recommendations</h2>
      <p>Given this outlook, we recommend the following strategic positioning:</p>

      <ol>
        <li>Maintain a balanced allocation between growth and value exposures</li>
        <li>Increase allocation to quality companies with strong balance sheets and pricing power</li>
        <li>Consider strategic exposure to emerging markets, particularly in Asia</li>
        <li>Integrate environmental, social and governance (ESG) factors into security selection</li>
        <li>Maintain appropriate fixed income duration to manage interest rate sensitivity</li>
      </ol>

      <p>Our analysis suggests that carefully selected active management will likely deliver value in the coming market environment, particularly in less efficient market segments.</p>

      <h2>Conclusion</h2>
      <p>The 2025 investment landscape offers significant opportunities amid a changing economic backdrop. By focusing on quality, innovation, and careful risk management, investors can navigate this transition effectively and position for long-term success.</p>
    `
  },
  {
    id: 2,
    title: "The Rise of Sustainable Investing: Impact and Returns",
    summary: "Exploring the growth of ESG investments and their performance compared to traditional investment approaches.",
    date: "April 28, 2025",
    author: "Michael Chen, Senior Investment Analyst",
    category: "Sustainable Finance",
    tags: ["ESG", "Sustainability", "Investment"],
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png",
    content: `
      <h2>Introduction</h2>
      <p>Sustainable investing has transformed from a niche strategy to a mainstream investment approach. This report examines the evolution of ESG (Environmental, Social, and Governance) investing and evaluates its performance relative to conventional investment methods.</p>
      
      <h2>The Growth of ESG Assets</h2>
      <p>Global ESG assets are projected to exceed $50 trillion by 2025, representing more than a third of the projected total assets under management worldwide. This remarkable growth reflects increasing investor demand, regulatory developments, and recognition of material financial impacts associated with sustainability factors.</p>
      
      <h2>Performance Analysis</h2>
      <p>Our analysis of ESG fund performance over the past five years reveals:</p>
      <ul>
        <li>ESG-integrated equity funds have shown comparable risk-adjusted returns to conventional peers</li>
        <li>Climate-focused funds have outperformed broader market indices during periods of environmental policy advancement</li>
        <li>Funds with strong social and governance criteria have demonstrated greater resilience during market downturns</li>
      </ul>
      
      <p>When controlling for sector allocation and style factors, ESG integration has contributed positively to risk management without sacrificing returns in most market environments.</p>
      
      <h2>Key Trends and Future Directions</h2>
      <p>Several important trends are shaping the future of sustainable investing:</p>
      
      <h3>Data Quality Improvements</h3>
      <p>Enhanced disclosure requirements and standardization efforts are improving the quality and comparability of ESG data, enabling more sophisticated analysis and integration techniques.</p>
      
      <h3>Impact Measurement</h3>
      <p>Investors are increasingly focusing on measurable real-world outcomes alongside financial returns, driving innovation in impact measurement methodologies.</p>
      
      <h3>Climate Transition Focus</h3>
      <p>Investment strategies are evolving to not only assess current sustainability profiles but also to evaluate companies' transition plans and alignment with climate goals.</p>
      
      <h2>Investment Implications</h2>
      <p>Based on our research, we recommend the following approaches for investors seeking to incorporate sustainability considerations:</p>
      
      <ol>
        <li>Develop a clear philosophy regarding the role of ESG factors in investment processes</li>
        <li>Consider both risk mitigation and opportunity identification aspects of sustainability</li>
        <li>Evaluate the credibility of transition plans for companies in carbon-intensive sectors</li>
        <li>Look beyond ratings to underlying data and methodologies when assessing ESG credentials</li>
        <li>Engage actively with portfolio companies to encourage improved practices and disclosures</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Sustainable investing continues to evolve rapidly, with growing evidence that thoughtful integration of material ESG factors can contribute positively to investment outcomes. As data quality improves and methodologies mature, we expect sustainability considerations to become increasingly central to mainstream investment processes.</p>
    `
  },
  // Additional article content would be added here for each publication
  {
    id: 9,
    title: "Political Landscape and Market Implications for 2025",
    summary: "Analyzing how changing political environments might affect investment markets globally.",
    date: "February 15, 2025",
    author: "Thomas Wright, Political Risk Analyst",
    category: "Political Analysis",
    tags: ["Politics", "Global Markets", "Risk"],
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png",
    content: `
      <h2>Introduction</h2>
      <p>As we navigate through 2025, the global political landscape continues to evolve rapidly, presenting both challenges and opportunities for investors. This analysis examines key political developments around the world and their potential impact on investment markets.</p>
      
      <h2>Major Political Trends</h2>
      
      <h3>Shifting Global Alliances</h3>
      <p>The traditional structure of international relations is undergoing significant transformation. New regional alliances are forming across Asia, Africa, and Latin America, while established alliances face internal pressures. These shifts have important implications for trade flows, regulatory environments, and security arrangements that directly affect market stability and investment opportunities.</p>
      
      <h3>Policy Divergence Among Major Economies</h3>
      <p>Major economies are pursuing increasingly divergent policy approaches to address economic challenges:</p>
      <ul>
        <li>North America: Focus on industrial policy and technological competition</li>
        <li>Europe: Emphasis on green transition and social welfare reform</li>
        <li>Asia: Varying approaches to demographic challenges and development models</li>
      </ul>
      <p>This divergence creates complex cross-currents for multinational businesses and investors operating across these regions.</p>
      
      <h3>Resource Nationalism</h3>
      <p>Control over critical resources—from rare earth minerals to agricultural land—is becoming increasingly politicized. Countries are implementing more restrictive policies regarding foreign investment in strategic sectors and supply chain requirements, particularly for materials essential to the energy transition and technology industries.</p>
      
      <h2>Regional Political Outlook</h2>
      
      <h3>North America</h3>
      <p>The political environment remains characterized by polarization but with increasing focus on economic security, infrastructure development, and technology policy. Bipartisan consensus is emerging around certain aspects of industrial policy and competitive positioning vis-à-vis strategic rivals.</p>
      
      <h3>Europe</h3>
      <p>European politics continues to navigate tensions between further integration and nationalist sentiment. Energy security has become a central political issue, alongside migration policy and economic competitiveness concerns. The European Green Deal implementation faces both acceleration and resistance depending on regional economic conditions.</p>
      
      <h3>Asia-Pacific</h3>
      <p>Political dynamics across the region are increasingly complex, with evolving relationships between major powers affecting smaller economies' strategic choices. Economic integration continues despite security tensions, creating a challenging environment for policy predictability.</p>
      
      <h2>Investment Implications</h2>
      
      <h3>Sector Impact Analysis</h3>
      <p>Political developments are likely to create varying conditions across sectors:</p>
      <ul>
        <li><strong>Energy:</strong> Policy support for transition technologies amid continuing fossil fuel pragmatism</li>
        <li><strong>Technology:</strong> Increased regulatory scrutiny alongside strategic national support</li>
        <li><strong>Financial Services:</strong> Evolving regulatory frameworks with focus on stability and digital transformation</li>
        <li><strong>Healthcare:</strong> Greater government intervention in pricing amid support for innovation</li>
      </ul>
      
      <h3>Risk Management Strategies</h3>
      <p>We recommend investors consider the following approaches to navigate political risks:</p>
      <ol>
        <li>Develop robust scenario analyses incorporating varied political outcomes</li>
        <li>Diversify political risk exposures across regions and regulatory regimes</li>
        <li>Monitor early indicators of policy shifts through systematic political analysis</li>
        <li>Engage proactively with policymakers where appropriate to understand evolving priorities</li>
        <li>Consider political risk insurance for significant investments in higher-risk jurisdictions</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>The political landscape in 2025 presents a complex mosaic of risks and opportunities for investors. By systematically analyzing political developments and their market implications, investors can position portfolios to navigate these challenges effectively while capitalizing on emerging opportunities in this dynamic environment.</p>
    `
  }
];

const ArticleDetail = () => {
  const { articleId } = useParams();
  
  // Find the article based on the URL parameter
  const article = articles.find(a => a.id === Number(articleId));
  
  // If article not found, show a message
  if (!article) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-serif text-3xl font-semibold text-ksc-navy mb-6">
              Article Not Found
            </h1>
            <p className="mb-8">The article you're looking for doesn't exist or has been moved.</p>
            <Button asChild>
              <Link to="/research">Return to Research</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Article Header */}
        <section className="pt-24 pb-12 bg-ksc-lightgray">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/publications" 
                className="inline-flex items-center text-ksc-navy hover:text-ksc-gold mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to all publications
              </Link>
              
              <h6 className="text-ksc-gold font-medium mb-3">{article.category}</h6>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-ksc-navy mb-6">
                {article.title}
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center text-ksc-darkgray gap-4 sm:gap-8">
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              <div className="mb-10 rounded-lg overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-auto"
                />
              </div>
              
              {/* Summary */}
              <div className="mb-10 p-6 bg-ksc-lightgray rounded-lg border-l-4 border-ksc-gold">
                <h2 className="font-serif text-xl font-semibold text-ksc-navy mb-3">
                  Summary
                </h2>
                <p className="text-ksc-darkgray text-lg">
                  {article.summary}
                </p>
              </div>
              
              {/* Tags */}
              <div className="mb-10 flex items-center flex-wrap gap-3">
                <span className="flex items-center text-ksc-darkgray">
                  <Tag className="h-4 w-4 mr-1" />
                  Topics:
                </span>
                {article.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline"
                    className="bg-gray-50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles and CTA */}
        <section className="py-12 bg-ksc-lightgray">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-semibold text-ksc-navy mb-8">
                Continue Reading
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {articles
                  .filter(a => a.id !== article.id)
                  .slice(0, 2)
                  .map(relatedArticle => (
                    <Link 
                      to={`/research/${relatedArticle.id}`}
                      key={relatedArticle.id}
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-serif text-xl font-medium text-ksc-navy mb-2 hover:text-ksc-gold transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-ksc-darkgray mb-4 line-clamp-2">
                        {relatedArticle.summary}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-ksc-gold text-sm">{relatedArticle.category}</span>
                        <span className="text-sm text-gray-500">{relatedArticle.date}</span>
                      </div>
                    </Link>
                  ))}
              </div>
              <Button 
                asChild
                className="bg-ksc-navy hover:bg-ksc-navy/90 text-white px-8"
              >
                <Link to="/publications">View All Publications</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;
