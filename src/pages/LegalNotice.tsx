
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale } from "lucide-react";

const sections = [
  {
    title: "1. General Information",
    content: (
      <>
        <p>
          King Stock Capital Management (hereinafter referred to as &quot;KSCM&quot;) is a private investment research entity that operates exclusively for private clients. KSCM is not a public investment fund, hedge fund, or registered financial institution. It does not publicly solicit investments, accept funds from the general public, or manage assets on behalf of external investors. The information provided on this website and through any communication channels is strictly for educational and informational purposes only.
        </p>
        <p>
          KSCM is structured as a private investment initiative, meaning that all financial activities, research, and investment decisions are conducted internally for a closed group of private clients. There is no open invitation for participation, and KSCM does not seek to attract outside investors or manage third-party funds.
        </p>
      </>
    ),
  },
  {
    title: "2. No Investment Solicitation or Public Offering",
    content: (
      <>
        <p>
          Nothing on this website or in any KSCM communication constitutes an offer, solicitation, or recommendation to buy, sell, or invest in securities, cryptocurrencies, or any financial instruments. KSCM does not provide investment advisory services to the public, nor does it act as a licensed financial advisor or broker.
        </p>
        <p>
          Any information published by KSCM, including market research, analysis, and investment strategies, is solely for private educational purposes and does not constitute financial, legal, or tax advice. Investors should conduct their own due diligence and consult professional advisors before making any investment decisions.
        </p>
      </>
    ),
  },
  {
    title: "3. Private Clients and Confidentiality",
    content: (
      <>
        <p>
          KSCM operates on a private-client basis, meaning that only pre-approved individuals with existing private arrangements may access detailed investment strategies or participate in any discussions related to capital deployment. KSCM does not publicly disclose its private clients, investment strategies, or internal fund allocations.
        </p>
        <p>
          Confidentiality is a key principle of KSCM&apos;s operations, and all internal communications, documents, and research remain restricted to private members. Any unauthorized disclosure, reproduction, or distribution of KSCM materials is strictly prohibited.
        </p>
      </>
    ),
  },
  {
    title: "4. Investment Risks and Disclaimer",
    content: (
      <>
        <p>
          All investments involve risk, including the possible loss of capital. Past performance is not a guarantee of future results. KSCM does not provide any guarantees on returns, nor does it accept liability for financial losses arising from investment decisions made based on its research.
        </p>
        <p>
          KSCM does not trade, hold, or invest funds on behalf of third parties. Any investments discussed in research papers or articles are purely for analytical and educational purposes and should not be interpreted as endorsements or financial advice.
        </p>
      </>
    ),
  },
  {
    title: "5. Future Plans and Legal Compliance",
    content: (
      <>
        <p>
          KSCM is currently a private investment research entity and does not operate as a public investment fund. We do not publicly solicit investments or offer financial services to the general public.
        </p>
        <p>
          However, in the future, if KSCM meets all necessary legal, regulatory, and compliance requirements, it may transition into an open fund. This transition will only occur if and when KSCM officially announces such a change. Until then, KSCM remains a private and invitation-only entity. Any claims suggesting otherwise are inaccurate.
        </p>
      </>
    ),
  },
  {
    title: "6. No Financial Advice",
    content: (
      <>
        <p>
          All content provided by KSCM, including research articles, market analyses, and investment insights, is for informational and educational purposes only. Nothing published by KSCM should be interpreted as financial, legal, or investment advice. Investors should conduct their own due diligence and consult with professional advisors before making any financial decisions.
        </p>
      </>
    ),
  },
  {
    title: "7. Limitation of Liability",
    content: (
      <>
        <p>
          KSCM and its contributors do not assume liability for any financial losses, investment decisions, or market outcomes based on information provided on this website or in any related publications. Market conditions are inherently volatile, and past performance does not guarantee future results.
        </p>
      </>
    ),
  },
  {
    title: "8. Intellectual Property Rights",
    content: (
      <>
        <p>
          All content, including but not limited to research articles, analysis reports, and proprietary methodologies, is the intellectual property of KSCM. Unauthorized reproduction, distribution, or modification of our content without explicit written consent is strictly prohibited.
        </p>
      </>
    ),
  },
  {
    title: "9. Amendments and Updates",
    content: (
      <>
        <p>
          KSCM reserves the right to modify or update this Legal Notice at any time without prior notice. Changes will be reflected on this page, and it is the responsibility of users to stay informed of any revisions. Continued use of the website implies acceptance of any updated terms.
        </p>
      </>
    ),
  },
];

const LegalNotice = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-ksc-navy via-ksc-navy/95 to-ksc-navy/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-ksc-gold/10 border border-ksc-gold/20 rounded-full mb-6">
                <Scale className="h-4 w-4 text-ksc-gold mr-2" />
                <span className="text-ksc-gold font-medium text-sm">Legal Notice</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
                Legal
                <span className="text-ksc-gold block">Notice</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Please read this Legal Notice carefully before using this website.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Notice Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none space-y-8">
                <div>
                  <p className="text-sm text-ksc-darkgray mb-2">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                  </p>
                </div>
                {sections.map((section, idx) => (
                  <div key={idx}>
                    <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-3">{section.title}</h2>
                    <div className="text-ksc-darkgray text-base flex flex-col gap-3">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNotice;
