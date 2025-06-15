
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale } from "lucide-react";

const LegalNotice = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-ksc-navy via-ksc-navy/95 to-ksc-navy/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-ksc-gold/10 border border-ksc-gold/20 rounded-full mb-6">
                <Scale className="h-4 w-4 text-ksc-gold mr-2" />
                <span className="text-ksc-gold font-medium text-sm">Legal Information</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
                Legal
                <span className="text-ksc-gold block">Notice</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Important legal information about King Stock Capital Management and our services.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Notice Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none space-y-8">
                {/* Section: Company Details */}
                <div className="bg-ksc-lightgray/50 p-8 rounded-xl">
                  <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-4">Company Details</h2>
                  <ul className="text-ksc-darkgray text-sm space-y-1">
                    <li><strong>Legal Name:</strong> King Stock Capital Management LLC</li>
                    <li><strong>Address:</strong> 123 Finance Street, New York, NY 10001</li>
                    <li><strong>Email:</strong> info@kingstockcapital.com</li>
                    <li><strong>Phone:</strong> +1 (212) 555-1234</li>
                    <li><strong>Website:</strong> kingstockcapital.com</li>
                    <li><strong>Managing Director:</strong> David King</li>
                    <li><strong>Business Registration:</strong> New York, United States</li>
                  </ul>
                </div>

                {/* Section: Regulatory Status */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-3">Regulatory Status</h2>
                  <p className="text-ksc-darkgray text-base">
                    King Stock Capital Management LLC is registered as an investment adviser with the U.S. Securities and Exchange Commission (SEC).
                    Registration does not imply a certain level of skill or training.
                  </p>
                </div>

                {/* Section: Responsible Authority */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-3">Responsible Authority</h2>
                  <p className="text-ksc-darkgray text-base">
                    The responsible authority for supervisory and regulatory purposes is:
                  </p>
                  <ul className="text-ksc-darkgray text-sm mt-2 space-y-1">
                    <li>U.S. Securities and Exchange Commission (SEC)</li>
                    <li>100 F Street, NE, Washington, DC 20549</li>
                    <li>www.sec.gov</li>
                  </ul>
                </div>

                {/* Section: Disclaimer */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-3">Disclaimer</h2>
                  <p className="text-ksc-darkgray text-base">
                    All content on this website is for informational purposes only and does not constitute investment advice, legal advice, or an offer to buy or sell any securities, financial instruments, or investment products. 
                    The information presented is believed to be accurate at the time of publication but is subject to change without notice. King Stock Capital Management LLC makes no representations or warranties regarding the accuracy or completeness of any information provided herein.
                  </p>
                </div>

                {/* Section: Risk Disclosure */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl">
                  <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-2">Risk Disclosure</h2>
                  <p className="text-ksc-darkgray text-base">
                    Investing involves risks, including the potential loss of principal. Past performance is not indicative of future results. 
                    You should carefully consider your investment objectives, risk tolerance, and time horizon before making investment decisions.
                  </p>
                </div>

                {/* Section: Copyright */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-3">Copyright & Trademark</h2>
                  <p className="text-ksc-darkgray text-base">
                    Unless otherwise stated, all content, logos, and trademarks on this website are the property of King Stock Capital Management LLC. 
                    Reproduction, distribution, or transmission of any part of this website without prior written consent is strictly prohibited.
                  </p>
                </div>

                {/* Section: Contact */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-3">Contact</h2>
                  <p className="text-ksc-darkgray text-base mb-1">
                    For legal inquiries or requests regarding this notice, please contact:
                  </p>
                  <ul className="text-ksc-darkgray text-sm">
                    <li><strong>Email:</strong> info@kingstockcapital.com</li>
                    <li><strong>Phone:</strong> +1 (212) 555-1234</li>
                    <li><strong>Address:</strong> 123 Finance Street, New York, NY 10001</li>
                  </ul>
                </div>

                {/* Section: Last updated */}
                <div className="bg-ksc-navy/5 p-6 rounded-xl">
                  <p className="text-sm text-ksc-darkgray">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString()}<br />
                    This legal notice may be updated periodically. Please review regularly for changes.
                  </p>
                </div>
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
