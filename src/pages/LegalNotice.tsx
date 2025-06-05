
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Scale, Shield } from "lucide-react";

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

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div className="bg-ksc-lightgray/50 p-8 rounded-xl mb-12">
                  <div className="flex items-center mb-4">
                    <FileText className="h-6 w-6 text-ksc-gold mr-3" />
                    <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-0">Company Information</h2>
                  </div>
                  <div className="text-ksc-darkgray space-y-2">
                    <p><strong>Company Name:</strong> King Stock Capital Management LLC</p>
                    <p><strong>Address:</strong> 123 Finance Street, New York, NY 10001</p>
                    <p><strong>Phone:</strong> +1 (212) 555-1234</p>
                    <p><strong>Email:</strong> info@kingstockcapital.com</p>
                    <p><strong>SEC Registration:</strong> Investment Adviser Representative</p>
                  </div>
                </div>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Regulatory Information</h2>
                <p className="text-ksc-darkgray mb-6">
                  King Stock Capital Management LLC is a registered investment adviser with the Securities and Exchange Commission (SEC). 
                  Our registration does not imply a certain level of skill or training.
                </p>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Investment Advisory Services</h2>
                <p className="text-ksc-darkgray mb-6">
                  We provide investment advisory services to qualified individuals and institutions. All investments involve risk, 
                  including the potential loss of principal. Past performance does not guarantee future results.
                </p>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Risk Disclosure</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                  <p className="text-ksc-darkgray">
                    <strong>Important:</strong> Investing involves substantial risk of loss and is not suitable for all investors. 
                    The value of investments and the income derived from them can go down as well as up.
                  </p>
                </div>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Professional Standards</h2>
                <p className="text-ksc-darkgray mb-6">
                  Our firm adheres to the highest professional standards and is committed to acting in the best interests of our clients. 
                  We are subject to regulatory oversight and maintain comprehensive compliance procedures.
                </p>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Contact Information</h2>
                <p className="text-ksc-darkgray mb-6">
                  For questions about this legal notice or our services, please contact us at the information provided above. 
                  Our compliance department is available to address any concerns or inquiries.
                </p>

                <div className="bg-ksc-navy/5 p-6 rounded-xl mt-8">
                  <p className="text-sm text-ksc-darkgray">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString()}<br />
                    This legal notice is subject to change without prior notification. Please review regularly for updates.
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
