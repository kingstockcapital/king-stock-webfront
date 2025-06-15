
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-ksc-navy via-ksc-navy/95 to-ksc-navy/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-ksc-gold/10 border border-ksc-gold/20 rounded-full mb-6">
                <FileText className="h-4 w-4 text-ksc-gold mr-2" />
                <span className="text-ksc-gold font-medium text-sm">Terms of Services</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
                TERMS OF<br />
                <span className="text-ksc-gold block">SERVICES</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                KING STOCK CAPITAL MANAGEMENT (KSCM)
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Effective Date: [Insert Date]
              </p>
            </div>
          </div>
        </section>

        {/* ToS Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p>Welcome to King Stock Capital Management (KSCM). These Terms of Services ("ToS") govern your access to and use of our website, research, insights, and any related services. By accessing or using KSCM's website and services, you agree to comply with these terms. If you do not agree with these terms, please refrain from using our website and services.</p>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy mt-12 mb-2">1. DEFINITIONS</h2>
                <p>For the purposes of these Terms of Services, the following definitions apply:</p>
                <ul className="text-ksc-darkgray list-disc ml-8">
                  <li>
                    <strong>"KSCM"</strong> refers to King Stock Capital Management, its website, research materials, and any related services provided.
                  </li>
                  <li>
                    <strong>"Client"</strong> refers to any individual or entity accessing or using KSCM's services, whether for informational purposes or for financial analysis.
                  </li>
                  <li>
                    <strong>"Services"</strong> refer to investment research, portfolio analysis, market insights, and other related content provided by KSCM. These services do not include financial advisory or fund management services.
                  </li>
                  <li>
                    <strong>"Website"</strong> refers to KSCM's official website located at [Insert Website URL].
                  </li>
                  <li>
                    <strong>"Confidential Information"</strong> refers to all proprietary research, client interactions, investment strategies, and internal data that KSCM manages.
                  </li>
                </ul>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy mt-10 mb-2">2. NATURE OF SERVICES</h2>
                <p>KSCM is an investment research and analysis entity, providing insights into financial markets, portfolio management strategies, risk assessments, and macroeconomic trends.</p>
                <p>KSCM does not function as a public investment fund, a brokerage, or a financial advisory service. The content provided by KSCM is for informational and educational purposes only and should not be construed as financial advice.</p>
                <p>Any investment decisions made based on KSCM's content are done at the sole discretion and responsibility of the user. Clients are strongly advised to consult with professional financial advisors before making any investment decisions.</p>
                <p>In the future, should all necessary legal and regulatory requirements be met, KSCM may transition into a publicly accessible investment fund. However, this will only occur through an official announcement from KSCM, and until such an announcement is made, KSCM remains a private research entity.</p>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy mt-10 mb-2">3. ELIGIBILITY</h2>
                <p>By accessing or using KSCM's website and services, you confirm that:</p>
                <ul className="text-ksc-darkgray list-disc ml-8">
                  <li>You are at least 18 years old or meet the legal age of majority in your jurisdiction.</li>
                  <li>You have the legal authority to enter into these Terms of Services.</li>
                  <li>You are not violating any laws or regulations by using our services.</li>
                </ul>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy mt-10 mb-2">4. USER RESPONSIBILITIES</h2>
                <p>Clients agree to use KSCM's website and services in a lawful manner. The following actions are strictly prohibited:</p>
                <ul className="text-ksc-darkgray list-disc ml-8">
                  <li>Unauthorized distribution of KSCM's research, reports, or analysis.</li>
                  <li>Misuse of content for fraudulent, misleading, or illegal activities.</li>
                  <li>Reverse engineering or scraping of website content or proprietary models.</li>
                  <li>Impersonating KSCM or falsely claiming affiliation with the entity.</li>
                </ul>
                <p>Any breach of these responsibilities may result in immediate termination of access to KSCM's services and potential legal action.</p>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy mt-10 mb-2">5. INTELLECTUAL PROPERTY RIGHTS</h2>
                <p>All content, analysis, research reports, trademarks, and intellectual property displayed on the KSCM website are the exclusive property of KSCM.</p>
                <p>Clients and website visitors are not permitted to:</p>
                <ul className="text-ksc-darkgray list-disc ml-8">
                  <li>Reproduce, modify, or distribute KSCM's proprietary materials without prior written consent.</li>
                  <li>Use KSCM's content for commercial purposes, unless explicitly authorized.</li>
                  <li>Claim ownership or authorship over any materials published by KSCM.</li>
                </ul>
                <p>Violations of KSCM's intellectual property rights may result in legal action.</p>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy mt-10 mb-2">6. DISCLAIMER OF LIABILITY</h2>
                <p>KSCM strives to provide accurate, data-driven, and well-researched financial insights. However:</p>
                <ul className="text-ksc-darkgray list-disc ml-8">
                  <li>No guarantees are made regarding the accuracy, completeness, or reliability of the research and analysis provided.</li>
                  <li>Market conditions are volatile, and all investment decisions carry inherent risks.</li>
                  <li>Past performance is not indicative of future results.</li>
                  <li>KSCM is not responsible for any financial losses or damages incurred from decisions made based on its content.</li>
                </ul>
                <p>By using KSCM's research, clients acknowledge that they bear full responsibility for their financial decisions.</p>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy mt-10 mb-2">7. PRIVACY AND CONFIDENTIALITY</h2>
                <p>KSCM is committed to protecting the privacy of its clients and visitors. Key privacy protections include:</p>
                <ul className="text-ksc-darkgray list-disc ml-8">
                  <li>No unauthorized sharing of client data with third parties.</li>
                  <li>Secure storage of any confidential client interactions.</li>
                  <li>Compliance with all applicable data protection regulations.</li>
                </ul>
                <p>For more details, please refer to KSCM's Privacy Policy.</p>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy mt-10 mb-2">8. TERMINATION OF SERVICES</h2>
                <p>KSCM reserves the right to suspend or terminate access to its services in the following cases:</p>
                <ul className="text-ksc-darkgray list-disc ml-8">
                  <li>Violation of these Terms of Services by a client or visitor.</li>
                  <li>Abuse, fraudulent activity, or misconduct involving KSCM's content or services.</li>
                  <li>Legal or regulatory changes that require the cessation of specific services.</li>
                </ul>
                <p>Clients may also choose to discontinue using KSCM's services at any time.</p>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy mt-10 mb-2">9. AMENDMENTS TO TERMS</h2>
                <p>KSCM reserves the right to modify or update these Terms of Services at any time to reflect changes in regulatory requirements, service offerings, or operational needs.</p>
                <p>All updates will be posted on KSCM's website, and continued use of the website after updates have been published constitutes acceptance of the revised terms.</p>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy mt-10 mb-2">10. GOVERNING LAW & DISPUTE RESOLUTION</h2>
                <p>These Terms of Services are governed by the laws of [Insert Jurisdiction]. Any disputes or claims arising from the use of KSCM's services shall be resolved through:</p>
                <ul className="text-ksc-darkgray list-disc ml-8">
                  <li>Arbitration conducted in [Insert Location], or</li>
                  <li>Legal proceedings within the jurisdiction where KSCM is registered.</li>
                </ul>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy mt-10 mb-2">11. CONTACT INFORMATION</h2>
                <p>If you have any questions or concerns regarding these Terms of Services, please contact KSCM via:</p>
                <ul className="text-ksc-darkgray list-disc ml-8">
                  <li><strong>Email:</strong> [Insert Contact Email]</li>
                  <li><strong>Website:</strong> [Insert Website URL]</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
