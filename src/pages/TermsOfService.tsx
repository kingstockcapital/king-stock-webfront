
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, AlertTriangle, CheckCircle, Users } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-ksc-navy via-ksc-navy/95 to-ksc-navy/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-ksc-gold/10 border border-ksc-gold/20 rounded-full mb-6">
                <FileText className="h-4 w-4 text-ksc-gold mr-2" />
                <span className="text-ksc-gold font-medium text-sm">Legal Agreement</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
                Terms of
                <span className="text-ksc-gold block">Service</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Please read these terms carefully before using our investment advisory services.
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
                    <CheckCircle className="h-6 w-6 text-ksc-gold mr-3" />
                    <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-0">Agreement Overview</h2>
                  </div>
                  <p className="text-ksc-darkgray mb-0">
                    By accessing our website or using our services, you agree to be bound by these Terms of Service 
                    and all applicable laws and regulations.
                  </p>
                </div>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Services Provided</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <Users className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-ksc-navy mb-3">Investment Advisory</h3>
                    <p className="text-ksc-darkgray text-sm">
                      Personalized investment advice and portfolio management services for qualified clients.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <FileText className="h-8 w-8 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold text-ksc-navy mb-3">Financial Planning</h3>
                    <p className="text-ksc-darkgray text-sm">
                      Comprehensive financial planning and wealth management strategies.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Client Responsibilities</h2>
                <p className="text-ksc-darkgray mb-6">
                  As a client, you agree to:
                </p>
                <ul className="text-ksc-darkgray mb-6 space-y-2">
                  <li>• Provide accurate and complete information</li>
                  <li>• Notify us of any changes to your financial situation</li>
                  <li>• Review all communications and statements promptly</li>
                  <li>• Pay fees as agreed upon in your service agreement</li>
                </ul>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Investment Risks</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-ksc-darkgray mb-0">
                        <strong>Important Risk Disclosure:</strong> All investments carry risk of loss. Past performance 
                        does not guarantee future results. You may lose some or all of your investment.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Fees and Compensation</h2>
                <p className="text-ksc-darkgray mb-6">
                  Our fee structure is clearly outlined in your Investment Advisory Agreement. Fees may include:
                </p>
                <ul className="text-ksc-darkgray mb-6 space-y-2">
                  <li>• Asset-based management fees</li>
                  <li>• Performance-based fees (where applicable)</li>
                  <li>• Financial planning fees</li>
                  <li>• Transaction costs</li>
                </ul>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Limitation of Liability</h2>
                <p className="text-ksc-darkgray mb-6">
                  Our liability is limited to the extent permitted by law. We are not liable for market losses, 
                  acts of third parties, or circumstances beyond our reasonable control.
                </p>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Confidentiality</h2>
                <p className="text-ksc-darkgray mb-6">
                  We maintain strict confidentiality of all client information in accordance with applicable regulations 
                  and our Privacy Policy. Information is only shared as required by law or with your explicit consent.
                </p>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Termination</h2>
                <p className="text-ksc-darkgray mb-6">
                  Either party may terminate the advisory relationship with written notice. Upon termination, 
                  you will receive a final account statement and any refund of prepaid fees as applicable.
                </p>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Governing Law</h2>
                <p className="text-ksc-darkgray mb-6">
                  These terms are governed by the laws of the State of New York and applicable federal regulations. 
                  Any disputes will be resolved through arbitration or in the courts of New York.
                </p>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Contact Information</h2>
                <div className="bg-ksc-lightgray/50 p-6 rounded-xl">
                  <p className="text-ksc-darkgray">
                    For questions about these terms, contact us at:<br />
                    <strong>Email:</strong> legal@kingstockcapital.com<br />
                    <strong>Phone:</strong> +1 (212) 555-1234<br />
                    <strong>Address:</strong> 123 Finance Street, New York, NY 10001
                  </p>
                </div>

                <div className="bg-ksc-navy/5 p-6 rounded-xl mt-8">
                  <p className="text-sm text-ksc-darkgray">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString()}<br />
                    These terms may be updated periodically. Continued use of our services constitutes acceptance of any changes.
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

export default TermsOfService;
