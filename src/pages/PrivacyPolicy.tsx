
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-ksc-navy via-ksc-navy/95 to-ksc-navy/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-ksc-gold/10 border border-ksc-gold/20 rounded-full mb-6">
                <Shield className="h-4 w-4 text-ksc-gold mr-2" />
                <span className="text-ksc-gold font-medium text-sm">Privacy Policy</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
                Privacy
                <span className="text-ksc-gold block">Policy</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Effective Date: [Date] | Last Updated: [Date]
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none space-y-6">
                <p>
                  At King Stock Capital Management (KSCM), we are committed to protecting your privacy and ensuring that your personal information is handled securely and responsibly. This Privacy Policy explains how we collect, use, store, and protect your information, as well as your rights regarding your personal data.
                </p>
                <h2 className="text-2xl font-serif font-bold text-ksc-navy">1. Scope of This Privacy Policy</h2>
                <ul className="text-ksc-darkgray list-disc ml-6">
                  <li>
                    This Privacy Policy applies to all users of KSCM's website, services, and any interactions with us, whether online or offline. It covers the information we collect, how we use it, and the security measures we implement to protect it.
                  </li>
                  <li>This policy applies to clients, potential clients, business partners, and website visitors.</li>
                  <li>KSCM does not publicly solicit investments and only works with private clients.</li>
                  <li>
                    If KSCM transitions to a regulated public investment fund in the future, this policy may be updated accordingly.
                  </li>
                </ul>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy">2. Information We Collect</h2>
                <p>
                  We collect personal and non-personal information based on our interactions with you. The data we collect falls into the following categories:
                </p>
                <h3 className="text-xl font-semibold text-ksc-navy">2.1. Personal Information (PII – Personally Identifiable Information)</h3>
                <p>
                  We may collect the following personal details from private clients:
                </p>
                <ul className="text-ksc-darkgray list-disc ml-6">
                  <li>Full Name</li>
                  <li>Contact Information (Email, Phone Number, Address)</li>
                  <li>Identification Documents (if required by applicable regulations)</li>
                  <li>Financial Information (Investment Amounts, Transaction History)</li>
                  <li>Communication Records (Emails, Messages, and Requests)</li>
                </ul>
                <h3 className="text-xl font-semibold text-ksc-navy">2.2. Non-Personal Information</h3>
                <p>
                  When you visit our website, we may collect non-identifiable data such as:
                </p>
                <ul className="text-ksc-darkgray list-disc ml-6">
                  <li>Browser type and version</li>
                  <li>IP address and device information</li>
                  <li>Website usage statistics (time spent, pages visited)</li>
                  <li>Cookies and tracking technologies</li>
                </ul>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy">3. How We Use Your Information</h2>
                <p>
                  KSCM collects and processes data strictly for business purposes, including:
                </p>
                <ul className="text-ksc-darkgray list-disc ml-6">
                  <li>Client Relationship Management: Managing private investment activities, maintaining communication, and providing relevant services.</li>
                  <li>Regulatory Compliance: Ensuring compliance with applicable financial laws and regulations.</li>
                  <li>Security & Fraud Prevention: Protecting against unauthorized access, fraud, and misuse of our services.</li>
                  <li>Service Improvements: Enhancing user experience, optimizing website performance, and refining our investment strategies.</li>
                  <li>
                    Marketing & Communication (Limited Use): If permitted by you, we may send research updates, financial insights, or announcements.
                  </li>
                </ul>
                <p className="font-bold text-red-700">
                  ⚠️ We do not sell, rent, or share your personal data with third parties for commercial purposes.
                </p>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy">4. How We Store and Protect Your Data</h2>
                <ul className="text-ksc-darkgray list-disc ml-6">
                  <li>Encryption: All sensitive data is encrypted using secure protocols (SSL/TLS).</li>
                  <li>Access Control: Limited access to personal information based on role-based permissions.</li>
                  <li>Regular Security Audits: Periodic reviews to identify and address vulnerabilities.</li>
                  <li>Data Retention Policies: Retaining data only for as long as necessary for business and legal compliance.</li>
                  <li>In case of a data breach, affected users will be notified as required by law.</li>
                </ul>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy">5. Sharing of Information</h2>
                <p>
                  KSCM does not share client data unless required under the following circumstances:
                </p>
                <ul className="text-ksc-darkgray list-disc ml-6">
                  <li>Regulatory and Legal Compliance: If mandated by law or regulatory bodies.</li>
                  <li>With Client Consent: If you explicitly authorize us to share your data.</li>
                  <li>Internal Business Operations: Sharing within KSCM for operational efficiency.</li>
                  <li>Fraud Prevention & Security: If required to investigate fraudulent activities or security threats.</li>
                </ul>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy">6. Your Rights and Choices</h2>
                <p>
                  Depending on your location and applicable data protection laws, you may have the following rights:
                </p>
                <ul className="text-ksc-darkgray list-disc ml-6">
                  <li>Right to Access: Request a copy of your personal data held by KSCM.</li>
                  <li>Right to Rectification: Request corrections to inaccurate or outdated information.</li>
                  <li>Right to Erasure (Right to Be Forgotten): Request deletion of your data, subject to legal obligations.</li>
                  <li>Right to Restrict Processing: Limit how your data is used under certain conditions.</li>
                  <li>Right to Object: Object to specific data processing activities, such as marketing.</li>
                  <li>Right to Data Portability: Request transfer of your data to another service provider (where applicable).</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact [Insert Contact Email].
                </p>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy">7. Cookies and Tracking Technologies</h2>
                <p>
                  Our website uses cookies and similar technologies to improve user experience. By using our site, you consent to our cookie usage.
                </p>
                <p>
                  You can control or disable cookies through your browser settings, but some features of our website may not function properly without them.
                </p>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy">8. International Data Transfers</h2>
                <p>
                  If you are accessing our services from outside our primary jurisdiction, your data may be transferred across international borders. KSCM ensures that all data transfers comply with relevant data protection laws.
                </p>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy">9. Changes to This Privacy Policy</h2>
                <p>
                  KSCM reserves the right to update this Privacy Policy as necessary to reflect changes in our operations, legal requirements, or security practices.
                </p>
                <p>
                  All updates will be posted on our website with a revised "Last Updated" date. If significant changes occur, we will notify clients directly.
                </p>

                <h2 className="text-2xl font-serif font-bold text-ksc-navy">10. Contact Information</h2>
                <p>
                  For any questions, concerns, or requests related to this Privacy Policy, please contact:
                </p>
                <div className="bg-ksc-lightgray/50 p-6 rounded-xl">
                  <p className="text-ksc-darkgray">
                    <strong>King Stock Capital Management (KSCM)</strong><br />
                    <strong>📧 Email:</strong> [Insert Contact Email]<br />
                    <strong>📍 Address:</strong> [Insert Business Address]<br />
                    <strong>🌐 Website:</strong> [Insert Website URL]
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 mt-6">
                  <p className="text-ksc-darkgray font-semibold">
                    ⚠️ Important Disclaimer:
                  </p>
                  <p className="text-ksc-darkgray">
                    KSCM is currently a private investment research entity and does not operate as a public investment fund. Any claims suggesting otherwise are false. In the future, if KSCM meets all legal and regulatory requirements, it may transition into a public fund, but only upon official announcement.
                  </p>
                </div>

                <div className="p-4 text-sm text-ksc-darkgray mt-4">
                  By using KSCM's services, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
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

