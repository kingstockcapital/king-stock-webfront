
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
                Legal information, copyright and disclaimer for King Stock Capital Management.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Notice Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none space-y-8">

                {/* Section: Company Information */}
                <div className="bg-ksc-lightgray/50 p-8 rounded-xl">
                  <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-4">Company Information</h2>
                  <ul className="text-ksc-darkgray text-sm space-y-1">
                    <li><strong>King Stock Capital Management LLC</strong></li>
                    <li>123 Finance Street</li>
                    <li>New York, NY 10001</li>
                    <li>United States</li>
                    <li><strong>Email:</strong> info@kingstockcapital.com</li>
                    <li><strong>Phone:</strong> +1 (212) 555-1234</li>
                    <li><strong>Website:</strong> <a href="https://kingstockcapital.com" className="text-ksc-gold hover:underline">kingstockcapital.com</a></li>
                  </ul>
                </div>

                {/* Section: Representative */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-3">Represented by:</h2>
                  <p className="text-ksc-darkgray text-base">
                    David King, Managing Director
                  </p>
                </div>

                {/* Section: Registration */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-3">Business Registration</h2>
                  <p className="text-ksc-darkgray text-base">
                    Registered in New York, United States
                  </p>
                  <p className="text-ksc-darkgray text-base">
                    King Stock Capital Management LLC is registered as an investment adviser with the U.S. Securities and Exchange Commission (SEC). Registration does not imply a certain level of skill or training.
                  </p>
                </div>

                {/* Section: Regulatory Authority */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-3">Regulatory Authority</h2>
                  <p className="text-ksc-darkgray text-base">
                    The responsible authority for supervision and regulation is:
                  </p>
                  <ul className="text-ksc-darkgray text-sm mt-2 space-y-1">
                    <li>U.S. Securities and Exchange Commission (SEC)</li>
                    <li>100 F Street, NE</li>
                    <li>Washington, DC 20549</li>
                    <li><a href="https://www.sec.gov" className="text-ksc-gold hover:underline">www.sec.gov</a></li>
                  </ul>
                </div>

                {/* Section: Legal Notice and Disclaimer */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-3">Legal Notice & Disclaimer</h2>
                  <p className="text-ksc-darkgray text-base mb-2">
                    The content of our website has been created with the utmost care. However, we cannot guarantee the contents’ accuracy, completeness or topicality.
                  </p>
                  <p className="text-ksc-darkgray text-base mb-2">
                    The information provided on this website is for general informational purposes only and does not constitute legal, investment, tax or any other advice. Visitors are encouraged to consult with qualified professionals for individual advice tailored to their situation.
                  </p>
                  <p className="text-ksc-darkgray text-base mb-2">
                    All offers are non-binding and without obligation. Parts of the pages or the complete publication including all offers and information might be extended, changed or partly or completely deleted by the author without separate announcement.
                  </p>
                </div>

                {/* Section: Copyright */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-3">Copyright</h2>
                  <p className="text-ksc-darkgray text-base mb-2">
                    All content and works published on this website are governed by copyright laws. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of King Stock Capital Management LLC.
                  </p>
                  <p className="text-ksc-darkgray text-base mb-2">
                    Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected.
                  </p>
                </div>

                {/* Section: Liability for Links */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-3">Liability for Links</h2>
                  <p className="text-ksc-darkgray text-base mb-2">
                    Our website contains links to external websites of third parties. We have no influence on the contents of those websites; therefore, we do not assume any liability for these external contents.
                  </p>
                  <p className="text-ksc-darkgray text-base mb-2">
                    The respective provider or operator of the sites is always responsible for the contents of the linked pages.
                  </p>
                </div>
                
                {/* Section: Contact */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-3">Contact</h2>
                  <p className="text-ksc-darkgray text-base mb-1">
                    For questions about this legal notice, please contact us:
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
                    Please check this page regularly for possible changes.
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
