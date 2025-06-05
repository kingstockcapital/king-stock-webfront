
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-ksc-navy via-ksc-navy/95 to-ksc-navy/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-ksc-gold/10 border border-ksc-gold/20 rounded-full mb-6">
                <Shield className="h-4 w-4 text-ksc-gold mr-2" />
                <span className="text-ksc-gold font-medium text-sm">Data Protection</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
                Privacy
                <span className="text-ksc-gold block">Policy</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
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
                    <Lock className="h-6 w-6 text-ksc-gold mr-3" />
                    <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-0">Our Commitment</h2>
                  </div>
                  <p className="text-ksc-darkgray mb-0">
                    King Stock Capital Management is committed to protecting your privacy and maintaining the confidentiality 
                    of your personal and financial information.
                  </p>
                </div>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Information We Collect</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <Eye className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-ksc-navy mb-3">Personal Information</h3>
                    <ul className="text-ksc-darkgray space-y-2 text-sm">
                      <li>• Name and contact details</li>
                      <li>• Financial information</li>
                      <li>• Investment preferences</li>
                      <li>• Employment information</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <Database className="h-8 w-8 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold text-ksc-navy mb-3">Technical Information</h3>
                    <ul className="text-ksc-darkgray space-y-2 text-sm">
                      <li>• Website usage data</li>
                      <li>• IP addresses</li>
                      <li>• Browser information</li>
                      <li>• Device identifiers</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">How We Use Your Information</h2>
                <p className="text-ksc-darkgray mb-6">
                  We use your information to provide investment advisory services, communicate with you about your account, 
                  comply with regulatory requirements, and improve our services. We do not sell your personal information to third parties.
                </p>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Information Sharing</h2>
                <p className="text-ksc-darkgray mb-6">
                  We may share your information with:
                </p>
                <ul className="text-ksc-darkgray mb-6 space-y-2">
                  <li>• Service providers who assist in our operations</li>
                  <li>• Regulatory authorities as required by law</li>
                  <li>• Other parties with your explicit consent</li>
                </ul>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Data Security</h2>
                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                  <p className="text-ksc-darkgray">
                    We implement industry-standard security measures to protect your information, including encryption, 
                    secure servers, and access controls. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Your Rights</h2>
                <p className="text-ksc-darkgray mb-6">
                  You have the right to access, update, or delete your personal information. You may also opt out of 
                  certain communications. Contact us to exercise these rights.
                </p>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Cookies and Tracking</h2>
                <p className="text-ksc-darkgray mb-6">
                  Our website uses cookies to enhance your experience and analyze website traffic. You can control 
                  cookie settings through your browser preferences.
                </p>

                <h2 className="text-3xl font-serif font-bold text-ksc-navy mb-6">Contact Us</h2>
                <p className="text-ksc-darkgray mb-6">
                  If you have questions about this privacy policy, please contact us at:
                </p>
                <div className="bg-ksc-lightgray/50 p-6 rounded-xl">
                  <p className="text-ksc-darkgray">
                    <strong>Email:</strong> privacy@kingstockcapital.com<br />
                    <strong>Phone:</strong> +1 (212) 555-1234<br />
                    <strong>Address:</strong> 123 Finance Street, New York, NY 10001
                  </p>
                </div>

                <div className="bg-ksc-navy/5 p-6 rounded-xl mt-8">
                  <p className="text-sm text-ksc-darkgray">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString()}<br />
                    This privacy policy may be updated periodically. We will notify you of any material changes.
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

export default PrivacyPolicy;
