
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-ksc-lightgray/30">
      <Navbar />

      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-ksc-navy via-ksc-navy/95 to-ksc-navy/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-8 leading-tight">
                King Stock Capital Management (KSCM)
              </h1>
              <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
                At King Stock Capital Management (KSCM), we are dedicated to providing comprehensive investment research and analysis services. Our team combines deep market knowledge with cutting-edge analytical tools to deliver actionable insights for our clients.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="text-3xl font-serif font-semibold text-ksc-navy mb-6">Who We Are</h2>
            <div className="w-16 h-1 bg-ksc-gold mb-8"></div>
            <p className="text-lg text-ksc-darkgray mb-5">
              King Stock Capital Management (KSCM) is a private investment research and strategy firm specializing in delivering high-quality market insights, portfolio management strategies, and risk analyses. Our expertise spans traditional stock markets, cryptocurrencies, and emerging Web3 opportunities, with a forward-thinking approach to identifying long-term investment trends.
            </p>
            <h3 className="text-2xl font-semibold text-ksc-navy mt-12 mb-4">Our Mission</h3>
            <p className="text-lg text-ksc-darkgray mb-5">
              Our mission is to provide deep, data-driven investment research and strategic insights that empower investors to navigate complex financial landscapes. We believe in precision, foresight, and disciplined investment approaches that effectively balance risk and reward.
            </p>
            <h3 className="text-2xl font-semibold text-ksc-navy mt-12 mb-4">What We Do</h3>
            <p className="text-lg text-ksc-darkgray mb-4">
              KSCM operates as a closed, invitation-only entity, offering exclusive research and investment insights. While we do not publicly solicit investments, we focus on:
            </p>
            <ul className="list-disc ml-8 text-ksc-darkgray mb-5 space-y-1">
              <li>Market Research & Analysis: Identifying opportunities in stocks, cryptocurrencies, and innovative sectors.</li>
              <li>Portfolio & Risk Management: Structuring strategic investment approaches.</li>
              <li>Investment Strategy Development: Crafting long-term investment theses based on macroeconomic trends.</li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-ksc-lightgray/60">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="text-3xl font-serif font-semibold text-ksc-navy mb-6">Our Vision for the Future</h2>
            <div className="w-16 h-1 bg-ksc-gold mb-8"></div>
            <p className="text-lg text-ksc-darkgray mb-8">
              As financial markets evolve, KSCM remains committed to staying ahead of technological advancements, economic shifts, and market cycles. While we currently operate as a private entity, we are exploring the possibility of transitioning into a public investment fund in the future. This transition will depend on meeting all necessary legal, regulatory, and compliance requirements. Any such change will be announced officially when we are fully prepared and compliant with applicable laws.
            </p>
            <h3 className="text-2xl font-semibold text-ksc-navy mt-8 mb-4">Long-Term Vision: Shaping the Future of Finance and Economy</h3>
            <p className="text-md text-ksc-darkgray mb-5">
              We see the future of finance as being shaped by the convergence of technology, innovation, and sustainable economic models. The financial sector must adapt to challenges and opportunities from technological advancements, global dynamics, and shifting investor preferences.
            </p>

            <h4 className="text-xl font-semibold text-ksc-navy mb-3 mt-6">1. The Evolution of Finance: A New Era</h4>
            <p className="mb-3 text-ksc-darkgray">Decentralized finance (DeFi), blockchain technology, and AI-powered services are revolutionizing how money is managed and invested. KSCM is committed to staying ahead and positioning our clients for success in this digitally-native financial world.</p>

            <h4 className="text-xl font-semibold text-ksc-navy mb-3 mt-6">2. The Future of the Global Economy</h4>
            <ul className="list-disc ml-8 text-ksc-darkgray space-y-1 mb-4">
              <li><b>Increased Automation and AI Integration:</b> Advancements in AI and automation will drastically impact industries. Leaders will be those who harness AI to innovate.</li>
              <li><b>Sustainability and Green Finance:</b> Sustainability will be a central theme, with growth for companies leading in clean energy, carbon credits, and eco-innovation.</li>
              <li><b>Rise of the Digital Economy:</b> The digital economy will expand through blockchain, Web3, NFTs, and DeFi, offering more inclusion and innovation.</li>
              <li><b>Geopolitical Shifts and Economic Decoupling:</b> New alliances and decoupling could reshape global finance and supply chains.</li>
            </ul>

            <h4 className="text-xl font-semibold text-ksc-navy mb-3 mt-6">3. How Companies Will Shape the Future</h4>
            <ul className="list-disc ml-8 text-ksc-darkgray mb-4 space-y-1">
              <li>Tech-Driven Innovators</li>
              <li>Purpose-Driven Enterprises</li>
              <li>Agile and Adaptive</li>
              <li>Global and Inclusive</li>
            </ul>

            <h4 className="text-xl font-semibold text-ksc-navy mb-3 mt-6">4. Identifying Companies with Potential for Long-Term Growth</h4>
            <ul className="list-disc ml-8 text-ksc-darkgray mb-4 space-y-1">
              <li>Innovation and technological advancement</li>
              <li>Sustainability commitment</li>
              <li>Resilience and strong fundamentals</li>
              <li>Scalability of business model</li>
              <li>Visionary leadership</li>
            </ul>

            <h4 className="text-xl font-semibold text-ksc-navy mb-3 mt-6">5. KSCM's Role in Shaping the Future</h4>
            <p className="mb-3 text-ksc-darkgray">
              KSCM's long-term vision is to help clients navigate the evolving financial landscape and identify investment opportunities that align with the future economy, focusing on technology-driven, sustainable, and resilient companies.
            </p>

            <h4 className="text-xl font-semibold text-ksc-navy mb-3 mt-6">Conclusion</h4>
            <p className="mb-2 text-ksc-darkgray">
              The future of finance and the global economy is full of opportunities. By focusing on innovation, sustainability, and adaptability, we're committed to helping clients invest in the businesses shaping tomorrow.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="text-3xl font-serif font-semibold text-ksc-navy mb-6">KSCM Research & Analysis: A Data-Driven Approach to Investing</h2>
            <div className="w-16 h-1 bg-ksc-gold mb-8"></div>
            <h3 className="text-xl font-semibold text-ksc-navy mt-8 mb-4">Introduction</h3>
            <p className="text-md text-ksc-darkgray mb-4">
              At King Stock Capital Management (KSCM), research is the cornerstone of our investment strategy. We combine data-driven analysis, market insights, and a disciplined approach to identify high-potential opportunities while managing risk.
            </p>

            <h4 className="text-lg font-semibold text-ksc-navy mb-3 mt-5">1. Research Philosophy</h4>
            <ul className="list-disc ml-8 text-ksc-darkgray mb-4 space-y-1">
              <li>Long-term value creation</li>
              <li>Risk-adjusted returns</li>
              <li>Multi-layered analysis</li>
            </ul>

            <h4 className="text-lg font-semibold text-ksc-navy mb-3 mt-5">2. Research Methodologies</h4>
            <ul className="list-disc ml-8 text-ksc-darkgray mb-2 space-y-1">
              <li>
                <b>Fundamental Analysis:</b> Financial health, industry landscape, macro trends.
              </li>
              <li>
                <b>Technical Analysis:</b> Indicators and price action for entry/exit decisions.
              </li>
              <li>
                <b>Macroeconomic Analysis:</b> Interest rates, inflation, geopolitics.
              </li>
              <li>
                <b>Sentiment & On-Chain Analysis:</b> (For crypto) On-chain data, social sentiment.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-ksc-navy mb-3 mt-5">3. Areas of Focus</h4>
            <ul className="list-disc ml-8 text-ksc-darkgray mb-2 space-y-1">
              <li>
                <b>Stock Market Research:</b> Equities across sectors, both growth & value.
              </li>
              <li>
                <b>Cryptocurrency & Web3 Startups:</b> Blockchain, DeFi, Real World Asset tokens, early Web3.
              </li>
              <li>
                <b>Alternative Investments:</b> Private equity, venture, real estate, commodities.
              </li>
            </ul>
            <h4 className="text-lg font-semibold text-ksc-navy mb-3 mt-5">4. Data Sources & Research Tools</h4>
            <ul className="list-disc ml-8 text-ksc-darkgray mb-2 space-y-1">
              <li>Bloomberg, Reuters, TradingView</li>
              <li>Glassnode, Dune Analytics</li>
              <li>Company earnings, SEC filings</li>
            </ul>
            <h4 className="text-lg font-semibold text-ksc-navy mb-3 mt-5">5. Research Reports & Publications</h4>
            <ul className="list-disc ml-8 text-ksc-darkgray mb-2 space-y-1">
              <li>Deep analysis of high-potential stocks & crypto assets</li>
              <li>Quarterly macroeconomic outlooks & trend forecasts</li>
              <li>Case studies on strategies and portfolio allocation</li>
            </ul>
            <p className="mb-2 text-ksc-darkgray">
              KSCM's research delivers rigorous insights, risk management, and long-term thinking.
            </p>
          </div>
        </section>

        <section className="py-16 bg-ksc-lightgray/60">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="text-3xl font-serif font-semibold text-ksc-navy mb-6">Why Choose King Stock Capital Management (KSCM)?</h2>
            <div className="w-16 h-1 bg-ksc-gold mb-8"></div>
            <p className="text-lg text-ksc-darkgray mb-4">
              Our focus is on providing insightful financial research, personalized investment strategies, and in-depth market analysis to support our clients in making confident financial decisions.
            </p>
            <h3 className="text-xl font-semibold text-ksc-navy mt-8 mb-4">What We Provide:</h3>
            <ul className="list-disc ml-8 text-ksc-darkgray space-y-1 pb-6">
              <li>
                <b>Research & Market Insights:</b> Comprehensive reports on stocks, crypto, and more.
                <ul className="mt-0.5 mb-2 ml-8 list-disc text-ksc-darkgray space-y-1">
                  <li>Quarterly Research Reports on latest trends</li>
                  <li>Custom Reports tailored to client interests</li>
                </ul>
              </li>
              <li>
                <b>Personalized Portfolio Management:</b> Customized strategies aligned with each client.
                <ul className="mt-0.5 mb-2 ml-8 list-disc text-ksc-darkgray space-y-1">
                  <li>Risk tolerance assessments</li>
                  <li>Goal & timeline review</li>
                  <li>Diversified, long-term portfolios</li>
                </ul>
              </li>
              <li>
                <b>Risk Management Strategies:</b> Tailored reviews and hedging techniques.
              </li>
              <li>
                <b>Investment Strategy Development:</b> Long-term and tactical guidance based on real-time market conditions.</li>
              <li>
                <b>Transparent Communication:</b> Quarterly Reports and regular consultations.</li>
              <li>
                <b>Confidentiality & Security:</b> Strict privacy, secure processing, and data protection protocols.</li>
              <li>
                <b>Commitment to Transparency:</b> Full disclosure and regular performance reviews.</li>
            </ul>
            <div className="pt-4">
              <p className="text-sm text-ksc-darkgray mb-2">
                <b>Disclaimer:</b> KSCM is currently a private investment research entity and does not operate as a public investment fund. Public solicitation of investments is not practiced.
              </p>
              <p className="text-sm text-ksc-darkgray mb-2">
                Future transition to a public fund is conditional on all legal and regulatory compliance, with any change officially announced. Any contrary claims are inaccurate.
              </p>
              <p className="text-sm text-ksc-darkgray">
                For inquiries or collaboration, please reach out via our <b>Contact</b> page.
              </p>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;

