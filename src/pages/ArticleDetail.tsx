import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Tag, ArrowLeft, FileText, Clock, Share2 } from "lucide-react";

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
  {
    id: 3,
    title: "Tech Sector Analysis: Innovations Driving Future Growth",
    summary: "An in-depth look at emerging technologies and their potential impact on investment portfolios.",
    date: "April 15, 2025",
    author: "David Williams, Technology Sector Specialist",
    category: "Sector Analysis",
    tags: ["Technology", "Innovation", "Growth"],
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png",
    content: `
      <h2>Introduction</h2>
      <p>The technology sector continues to be the primary engine of innovation and disruption across the global economy. This analysis examines key technological developments that are likely to drive significant investment opportunities over the coming decade.</p>
      
      <h2>Artificial Intelligence: Beyond the Hype Cycle</h2>
      <p>Artificial intelligence has transitioned from theoretical concepts to practical applications that are transforming industries. Key developments include:</p>
      
      <h3>Enterprise AI Integration</h3>
      <p>Businesses across sectors are deploying AI solutions for process optimization, predictive maintenance, and customer experience enhancement. The most successful implementations focus on specific, high-value use cases rather than generalized applications.</p>
      
      <h3>Generative AI Evolution</h3>
      <p>The rapid development of generative AI capabilities is creating new possibilities in content creation, product design, and software development. While current models have limitations, the trajectory of improvement suggests transformative capabilities within the next investment cycle.</p>
      
      <h3>AI Infrastructure</h3>
      <p>The computational demands of advanced AI systems are driving substantial investment in specialized hardware, from graphics processing units (GPUs) to application-specific integrated circuits (ASICs) and new memory architectures.</p>
      
      <h2>Quantum Computing: Approaching Commercial Viability</h2>
      <p>Quantum computing is advancing toward practical applications in specific domains:</p>
      
      <ul>
        <li>Material science and drug discovery are likely to be early beneficiaries of quantum computational advantages</li>
        <li>Financial modeling applications are being developed to leverage quantum capabilities for portfolio optimization and risk analysis</li>
        <li>Supply chain optimization represents another promising application domain</li>
      </ul>
      
      <p>While general-purpose quantum computers remain years away, specialized quantum systems addressing specific computational challenges are approaching commercial deployment.</p>
      
      <h2>Biotechnology Convergence</h2>
      <p>The convergence of information technology with biotechnology is accelerating innovation:</p>
      
      <h3>Computational Biology</h3>
      <p>Advanced computational methods are transforming drug discovery, reducing time-to-market and improving success rates for novel therapeutics. Companies with strong capabilities in both biological science and computational methods are particularly well-positioned.</p>
      
      <h3>Synthetic Biology</h3>
      <p>Engineering biological systems is becoming increasingly sophisticated, with applications ranging from sustainable materials production to novel medical treatments. The sector is transitioning from research-focused to commercial applications.</p>
      
      <h2>Investment Strategy Implications</h2>
      <p>These technological trends have several implications for investment strategy:</p>
      
      <ol>
        <li>Focus on companies with sustainable competitive advantages in key enabling technologies</li>
        <li>Consider the entire value chain, from infrastructure providers to application developers</li>
        <li>Evaluate potential disruptive impacts on incumbent businesses across all sectors</li>
        <li>Balance pure technology plays with established companies successfully integrating new capabilities</li>
        <li>Monitor regulatory developments, particularly around AI ethics and data governance</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>The technology sector's innovation cycle continues to accelerate, creating both opportunities and disruption across the investment landscape. Investors who develop a deep understanding of these technologies and their applications will be well-positioned to identify winners in this dynamic environment.</p>
    `
  },
  {
    id: 4,
    title: "Quarterly Economic Review: Q1 2025",
    date: "April 5, 2025",
    category: "Economic Analysis",
    author: "Jonathan Reed, Chief Economist",
    summary: "A detailed analysis of economic performance, trends, and forecasts for the first quarter of 2025.",
    tags: ["Economy", "Markets", "Analysis"],
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png",
    content: `
      <h2>Executive Summary</h2>
      <p>The first quarter of 2025 demonstrated resilient economic growth despite persistent inflationary pressures and geopolitical uncertainties. This review examines key indicators, regional variations, and provides our outlook for the remainder of the year.</p>
      
      <h2>Global Economic Performance</h2>
      <p>Global GDP expanded at an annualized rate of 3.1% during Q1 2025, slightly exceeding consensus expectations of 2.9%. Key observations include:</p>
      
      <ul>
        <li>Developed markets averaged 2.2% growth, led by North America</li>
        <li>Emerging markets collectively grew at 4.5%, with significant variance between regions</li>
        <li>Global trade volumes increased by 3.3% year-over-year, showing resilience despite continued supply chain reconfiguration</li>
      </ul>
      
      <h2>Inflation and Monetary Policy</h2>
      <p>Inflation remained above central bank targets in most major economies, though the rate of increase has moderated:</p>
      
      <h3>Developed Markets</h3>
      <p>Core inflation in developed economies averaged 2.8% in Q1, down from 3.1% in the previous quarter. Central banks have maintained restrictive monetary policy, with the weighted average policy rate holding steady at 4.2%.</p>
      
      <h3>Emerging Markets</h3>
      <p>Inflation dynamics in emerging markets showed greater variation, ranging from 3.5% in Asia to 7.2% in parts of Latin America. Several emerging market central banks have begun cautious easing cycles in response to moderating price pressures.</p>
      
      <h2>Labor Markets</h2>
      <p>Labor markets remained tight across most developed economies:</p>
      
      <ul>
        <li>Unemployment rates averaged 4.3% across OECD countries</li>
        <li>Wage growth moderated slightly to 4.1% year-over-year</li>
        <li>Labor force participation rates increased marginally, helping to ease capacity constraints</li>
      </ul>
      
      <h2>Financial Markets</h2>
      <p>Financial markets demonstrated mixed performance during the quarter:</p>
      
      <h3>Equities</h3>
      <p>Global equity markets returned 4.2% in Q1, with notable sectoral divergence. Technology and healthcare outperformed, while utilities and consumer staples lagged.</p>
      
      <h3>Fixed Income</h3>
      <p>Bond markets stabilized as yield curves steepened moderately. Investment grade credit spreads tightened by 15 basis points, while high yield spreads remained relatively unchanged.</p>
      
      <h2>Outlook</h2>
      <p>Looking ahead to the remainder of 2025, we anticipate:</p>
      
      <ol>
        <li>Gradual disinflation to continue, with core inflation approaching target levels by year-end</li>
        <li>Central banks to begin cautious easing cycles in the second half of the year</li>
        <li>Global growth to moderate slightly but remain above long-term trend</li>
        <li>Continued divergence between sectors exposed to technological innovation and traditional industries</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>The first quarter of 2025 suggests a global economy transitioning toward a more sustainable growth path, though numerous risks remain. Policy flexibility will be essential to navigate potential shocks while supporting continued expansion.</p>
    `
  },
  {
    id: 5,
    title: "Infrastructure Investments: Opportunities in Developing Markets",
    date: "March 22, 2025",
    category: "Global Markets",
    author: "Elena Rodriguez, Emerging Markets Strategist",
    summary: "Exploring infrastructure investment opportunities in developing economies and their potential for portfolio diversification.",
    tags: ["Infrastructure", "Emerging Markets", "Investment"],
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png",
    content: `
      <h2>Introduction</h2>
      <p>Infrastructure development represents one of the most significant investment themes in emerging and frontier markets. This analysis explores the opportunity set, risk considerations, and strategic approaches for investors seeking exposure to this dynamic sector.</p>
      
      <h2>The Infrastructure Gap</h2>
      <p>Developing economies face a substantial infrastructure deficit estimated at $2.5 trillion annually. This gap represents both a development challenge and an investment opportunity spanning multiple sectors:</p>
      
      <h3>Transportation Networks</h3>
      <p>Road, rail, port, and airport infrastructure remains underdeveloped relative to economic potential in many emerging markets. Investments in these assets can enhance productivity while generating stable long-term returns.</p>
      
      <h3>Energy Infrastructure</h3>
      <p>Energy demand in developing economies is projected to grow at 3.4% annually through 2035, driving substantial investment in generation, transmission, and distribution infrastructure. Renewable energy represents an increasing share of new capacity additions.</p>
      
      <h3>Digital Infrastructure</h3>
      <p>Telecommunications and data center investments are accelerating across emerging markets, supporting digital economy development and financial inclusion initiatives. Mobile network coverage expansion and broadband deployment represent particularly dynamic segments.</p>
      
      <h2>Regional Opportunities</h2>
      <p>Infrastructure opportunities vary significantly by region:</p>
      
      <h3>Asia Pacific</h3>
      <p>The region continues to lead global infrastructure investment, with particular focus on urban infrastructure, renewable energy, and regional connectivity initiatives. Regulatory frameworks have matured considerably, providing greater investor certainty.</p>
      
      <h3>Latin America</h3>
      <p>Public-private partnerships are being revitalized across several major economies, with particular emphasis on transportation and energy infrastructure. Political transitions have created new openings for foreign investment participation.</p>
      
      <h3>Africa</h3>
      <p>The continent represents both the largest infrastructure gap and potentially the highest returns. Regional integration initiatives, urbanization, and natural resource development are driving increased infrastructure investment despite persistent challenges.</p>
      
      <h2>Investment Approaches</h2>
      <p>Investors can access emerging market infrastructure through multiple vehicles:</p>
      
      <ul>
        <li>Listed infrastructure companies and funds offering liquidity and diversification</li>
        <li>Private infrastructure funds providing direct project exposure and potential illiquidity premium</li>
        <li>Infrastructure debt instruments offering fixed income characteristics with development exposure</li>
        <li>Blended finance structures that combine institutional capital with development finance</li>
      </ul>
      
      <h2>Risk Considerations</h2>
      <p>Infrastructure investments in developing markets entail specific risk factors that require careful management:</p>
      
      <ol>
        <li>Political and regulatory risk, including contract enforcement and tariff setting mechanisms</li>
        <li>Currency risk, particularly for projects with local currency revenue and foreign currency funding</li>
        <li>Construction and operational risks that may exceed those in developed markets</li>
        <li>Environmental and social considerations that increasingly impact project viability</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Infrastructure investment in developing economies offers compelling opportunities for investors seeking long-duration assets with potential inflation protection and portfolio diversification benefits. The sector's direct connection to economic development provides both financial returns and potential impact outcomes for sustainability-focused investors.</p>
    `
  },
  {
    id: 6,
    title: "Retirement Planning in an Inflationary Environment",
    date: "March 15, 2025",
    category: "Retirement Strategies",
    author: "Patricia Morgan, Financial Planning Director",
    summary: "Strategies and considerations for retirement planning during periods of elevated inflation.",
    tags: ["Retirement", "Inflation", "Planning"],
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png",
    content: `
      <h2>Introduction</h2>
      <p>Inflation represents one of the most significant challenges to retirement security, eroding purchasing power and potentially undermining even well-designed financial plans. This analysis examines strategies for protecting retirement assets and income in an inflationary environment.</p>
      
      <h2>Understanding Inflation's Impact</h2>
      <p>Inflation affects retirement planning through multiple channels:</p>
      
      <h3>Purchasing Power Erosion</h3>
      <p>Even moderate inflation compounds significantly over a multi-decade retirement. At 3% annual inflation, purchasing power declines by approximately 50% over 25 years, potentially transforming a comfortable retirement into financial hardship.</p>
      
      <h3>Healthcare Cost Acceleration</h3>
      <p>Healthcare expenses typically rise faster than general inflation and represent an increasing share of spending as retirees age. Recent data indicates medical inflation exceeding general inflation by approximately 1.8 percentage points annually.</p>
      
      <h3>Fixed Income Challenges</h3>
      <p>Traditional retirement portfolios with significant fixed income allocations may underperform during inflationary periods, creating a potential mismatch between asset returns and spending needs.</p>
      
      <h2>Inflation-Resistant Investment Strategies</h2>
      <p>Several investment approaches can enhance retirement portfolio resilience during inflationary periods:</p>
      
      <h3>Treasury Inflation-Protected Securities (TIPS)</h3>
      <p>TIPS provide direct inflation protection through principal adjustments based on changes in the Consumer Price Index. While yields may be lower than conventional bonds, the inflation protection feature creates valuable portfolio insurance.</p>
      
      <h3>Real Assets</h3>
      <p>Allocations to real estate, infrastructure, and commodities can provide inflation sensitivity and portfolio diversification. These assets typically have intrinsic value and cash flows that adjust to inflationary pressures over time.</p>
      
      <h3>Equities with Pricing Power</h3>
      <p>Companies with strong market positions and the ability to pass through cost increases to customers often perform relatively well during inflationary periods. Sectors such as consumer staples, healthcare, and technology may offer particular resilience.</p>
      
      <h2>Income Strategies</h2>
      <p>Retirement income planning requires special consideration during inflationary periods:</p>
      
      <ul>
        <li>Social Security benefits include cost-of-living adjustments, making them valuable inflation-protected income</li>
        <li>Inflation-adjusted annuities can provide guaranteed income that maintains purchasing power</li>
        <li>Systematic withdrawal strategies may need adjustment to account for higher inflation scenarios</li>
        <li>Part-time work during early retirement can reduce portfolio withdrawals during inflationary periods</li>
      </ul>
      
      <h2>Dynamic Planning Approaches</h2>
      <p>Effective retirement planning in an inflationary environment requires ongoing adaptation:</p>
      
      <ol>
        <li>Regular financial plan updates incorporating current and projected inflation data</li>
        <li>Stress testing retirement projections across multiple inflation scenarios</li>
        <li>Maintaining flexibility in spending patterns, particularly for discretionary expenses</li>
        <li>Considering longevity risk in conjunction with inflation risk for comprehensive planning</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>While inflation presents significant challenges to retirement security, thoughtful planning and appropriate investment strategies can help preserve purchasing power and financial independence throughout retirement. A diversified approach incorporating both inflation-resistant investments and adaptive planning techniques offers the greatest likelihood of long-term success.</p>
    `
  },
  {
    id: 7,
    title: "Healthcare Sector: Post-Pandemic Investment Landscape",
    date: "March 3, 2025",
    category: "Sector Analysis",
    author: "Dr. Robert Chen, Healthcare Analyst",
    summary: "Analysis of investment opportunities in the healthcare sector following the transformation of the industry during the pandemic.",
    tags: ["Healthcare", "Innovation", "Investment"],
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png",
    content: `
      <h2>Introduction</h2>
      <p>The healthcare sector has undergone profound transformation in recent years, accelerated by the global pandemic and technological innovation. This analysis examines the post-pandemic healthcare landscape and identifies key investment themes for forward-looking investors.</p>
      
      <h2>Digital Health Acceleration</h2>
      <p>Digital health adoption has permanently shifted to a higher trajectory following pandemic-era necessity:</p>
      
      <h3>Telemedicine Evolution</h3>
      <p>Virtual care delivery has matured beyond simple urgent care consultations to include chronic disease management, specialist consultations, and hybrid care models. Utilization has stabilized at approximately 15-20% of total outpatient visits, representing significant market expansion.</p>
      
      <h3>Remote Patient Monitoring</h3>
      <p>Connected devices and wearable technology are enabling continuous health monitoring outside traditional clinical settings. This shift supports preventive care, reduces hospital readmissions, and generates valuable longitudinal health data.</p>
      
      <h3>Digital Therapeutics</h3>
      <p>Software-based interventions for disease management represent an emerging category with particular strength in behavioral health, diabetes, and other chronic conditions. Regulatory pathways are becoming more defined, supporting commercialization efforts.</p>
      
      <h2>Biotechnology Innovation</h2>
      <p>The biotechnology sector continues to advance breakthrough therapeutic approaches:</p>
      
      <h3>mRNA Technology Applications</h3>
      <p>Following successful vaccine deployment, mRNA technology is being applied to oncology, rare diseases, and autoimmune conditions. The platform's flexibility and manufacturing advantages suggest broad applicability across multiple therapeutic areas.</p>
      
      <h3>Gene and Cell Therapies</h3>
      <p>Curative approaches for previously untreatable conditions are advancing through clinical development, with particular progress in hematological disorders, certain genetic diseases, and selected oncology indications. Delivery technologies and manufacturing scaling represent key focus areas.</p>
      
      <h2>Healthcare System Evolution</h2>
      <p>The business of healthcare continues to transform in response to economic and demographic pressures:</p>
      
      <ul>
        <li>Value-based care models are gaining traction, creating opportunities for technology-enabled care management platforms</li>
        <li>Healthcare labor constraints are driving investment in automation and workflow optimization solutions</li>
        <li>Consumer-directed healthcare is expanding, supporting digital-first providers and price transparency tools</li>
        <li>Home-based care is growing across the acuity spectrum, from primary care to hospital-at-home programs</li>
      </ul>
      
      <h2>Investment Considerations</h2>
      <p>The healthcare sector offers diverse investment opportunities with varying risk-return profiles:</p>
      
      <h3>Established Leaders</h3>
      <p>Large healthcare companies with strong innovation pipelines and efficient capital allocation offer relatively stable returns with defensive characteristics. Those successfully integrating digital capabilities while maintaining core strengths are particularly well-positioned.</p>
      
      <h3>Emerging Innovators</h3>
      <p>Earlier-stage companies developing breakthrough technologies or business models offer higher growth potential with corresponding volatility. Portfolio approaches are advisable given clinical development and commercial execution risks.</p>
      
      <h2>Conclusion</h2>
      <p>The healthcare sector continues to present compelling long-term investment opportunities driven by demographic trends, scientific advancement, and system transformation. Discerning investors who understand both the science and business model evolution can identify companies poised to deliver both financial returns and improved health outcomes.</p>
    `
  },
  {
    id: 8,
    title: "Fixed Income Strategies for the Current Rate Environment",
    date: "February 20, 2025",
    category: "Fixed Income",
    author: "Andrew Martinez, Fixed Income Strategist",
    summary: "Analyzing optimal fixed income strategies in response to the evolving interest rate landscape.",
    tags: ["Bonds", "Interest Rates", "Strategy"],
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png",
    content: `
      <h2>Introduction</h2>
      <p>The fixed income landscape has undergone significant transformation following the recent interest rate cycle. This analysis examines current market conditions and provides strategic recommendations for fixed income investors navigating this complex environment.</p>
      
      <h2>Market Context</h2>
      <p>Following the most aggressive monetary tightening cycle in decades, fixed income markets are adjusting to a new interest rate equilibrium:</p>
      
      <h3>Yield Curve Dynamics</h3>
      <p>The yield curve has normalized from its previous inversion, with short-term rates stabilizing below intermediate and longer-term yields. This structure provides opportunities for investors to capture term premium while managing duration risk.</p>
      
      <h3>Credit Conditions</h3>
      <p>Credit fundamentals remain generally solid, though with increased differentiation between sectors and quality tiers. Default rates remain below historical averages despite higher financing costs, reflecting pre-emptive refinancing activity during the low-rate era.</p>
      
      <h3>Market Liquidity</h3>
      <p>Fixed income market liquidity has stabilized following earlier volatility, though structural challenges remain in certain segments. Electronic trading platforms continue to gain market share, particularly in more standardized instruments.</p>
      
      <h2>Core Allocation Strategies</h2>
      <p>Several strategies merit consideration for core fixed income allocations:</p>
      
      <h3>Barbell Approach</h3>
      <p>A barbell strategy combining shorter and longer duration instruments can provide attractive yield while maintaining flexibility to adjust as monetary policy evolves. This approach may be particularly effective during periods of yield curve uncertainty.</p>
      
      <h3>Core-Plus-Satellite</h3>
      <p>Maintaining a core allocation to high-quality bonds supplemented by satellite positions in higher-yielding sectors offers a balance of stability and income. This structure facilitates tactical adjustments based on changing market conditions.</p>
      
      <h2>Sector Opportunities</h2>
      <p>Relative value opportunities exist across fixed income sectors:</p>
      
      <ul>
        <li>Investment-grade corporate bonds offer attractive risk-adjusted yields following spread widening</li>
        <li>Agency mortgage-backed securities present value as prepayment risk has diminished in the higher rate environment</li>
        <li>Municipal bonds provide compelling after-tax returns for appropriate investors, with credit fundamentals supported by strong tax receipts</li>
        <li>Emerging market debt offers yield enhancement opportunities, though with increased sensitivity to U.S. dollar movements</li>
      </ul>
      
      <h2>Risk Management Considerations</h2>
      <p>Effective fixed income investing requires thoughtful risk management:</p>
      
      <ol>
        <li>Interest rate risk requires ongoing assessment as central bank policy frameworks evolve</li>
        <li>Credit quality monitoring is essential as financing conditions tighten for marginal borrowers</li>
        <li>Liquidity management deserves particular attention in less liquid market segments</li>
        <li>Inflation risk remains relevant despite moderation from peak levels</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>The current fixed income environment offers improved income generation potential compared to recent years, though with ongoing challenges that require active management. A disciplined approach incorporating thoughtful sector allocation, duration management, and appropriate diversification can help investors capture the opportunities presented by this evolving landscape.</p>
    `
  },
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
              <Link to="/publications">Return to Publications</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-ksc-navy via-ksc-navy/95 to-ksc-navy/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <Link 
                to="/publications" 
                className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Publications
              </Link>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Article Info */}
                <div className="lg:col-span-2">
                  <Badge className="bg-ksc-gold/20 text-ksc-gold border-ksc-gold/30 mb-4">
                    {article.category}
                  </Badge>
                  
                  <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {article.title}
                  </h1>
                  
                  <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
                    {article.summary}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/80">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span className="text-sm">{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">12 min read</span>
                    </div>
                  </div>
                </div>
                
                {/* Featured Image */}
                <div className="lg:col-span-1">
                  <div className="bg-white p-2 rounded-lg shadow-xl">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 lg:h-64 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Tags & Share */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12 p-6 bg-white rounded-lg shadow-sm border">
                <div className="flex items-center flex-wrap gap-3">
                  <span className="flex items-center text-ksc-darkgray font-medium">
                    <Tag className="h-4 w-4 mr-2" />
                    Topics:
                  </span>
                  {article.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline"
                      className="bg-ksc-lightgray/50 border-ksc-navy/20 text-ksc-navy hover:bg-ksc-navy hover:text-white transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
              
              {/* Article Content with better typography */}
              <div className="bg-white rounded-lg shadow-sm border p-8 lg:p-12">
                <article className="prose prose-lg max-w-none 
                    prose-headings:font-serif 
                    prose-headings:text-ksc-navy 
                    prose-headings:font-bold 
                    prose-h2:text-3xl 
                    prose-h2:mt-12 
                    prose-h2:mb-6 
                    prose-h2:pb-3
                    prose-h2:border-b-2
                    prose-h2:border-ksc-gold/20
                    prose-h3:text-2xl 
                    prose-h3:mt-10 
                    prose-h3:mb-4
                    prose-h3:text-ksc-navy/90
                    prose-p:text-gray-700 
                    prose-p:text-lg
                    prose-p:leading-relaxed 
                    prose-p:my-6
                    prose-ul:my-8
                    prose-ol:my-8
                    prose-li:text-lg
                    prose-li:text-gray-700 
                    prose-li:mb-3
                    prose-li:leading-relaxed
                    prose-strong:text-ksc-navy
                    prose-strong:font-semibold">
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-ksc-lightgray">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-bold text-ksc-navy mb-4 flex items-center justify-center gap-3">
                  <FileText className="h-8 w-8 text-ksc-gold" />
                  Related Articles
                </h2>
                <p className="text-ksc-darkgray text-lg">Continue exploring our latest research and insights</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {articles
                  .filter(a => a.id !== article.id)
                  .slice(0, 3)
                  .map(relatedArticle => (
                    <Link 
                      to={`/research/${relatedArticle.id}`}
                      key={relatedArticle.id}
                      className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <Badge className="bg-ksc-gold/10 text-ksc-gold border-ksc-gold/20 mb-3">
                          {relatedArticle.category}
                        </Badge>
                        <h3 className="font-serif text-xl font-bold text-ksc-navy mb-3 group-hover:text-ksc-gold transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-ksc-darkgray mb-4 line-clamp-2 text-sm leading-relaxed">
                          {relatedArticle.summary}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{relatedArticle.author.split(',')[0]}</span>
                          <span>{relatedArticle.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
              
              <div className="text-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-ksc-navy hover:bg-ksc-navy/90 text-white px-8 py-3"
                >
                  <Link to="/publications">View All Publications</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;
