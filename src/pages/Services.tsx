
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseIcon, Coins, DollarSign, TrendingUp, Wallet, Building2, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <BriefcaseIcon className="h-12 w-12 text-ksc-gold" />,
    title: "Portfolio Management",
    description:
      "Our portfolio management services are tailored to your specific investment objectives, risk tolerance, and time horizon. We develop and implement customized investment strategies using a diversified approach to help you achieve your financial goals.",
    benefits: [
      "Customized investment strategies",
      "Disciplined portfolio construction",
      "Regular portfolio rebalancing",
      "Ongoing monitoring and adjustments",
    ],
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-ksc-gold" />,
    title: "Wealth Management",
    description:
      "Our comprehensive wealth management services take a holistic approach to your financial life. We integrate investment management with tax planning, estate planning, and retirement strategies to create a coordinated plan that supports your long-term financial well-being.",
    benefits: [
      "Comprehensive financial planning",
      "Strategic tax optimization",
      "Estate planning coordination",
      "Wealth preservation strategies",
    ],
  },
  {
    icon: <Wallet className="h-12 w-12 text-ksc-gold" />,
    title: "Retirement Planning",
    description:
      "Our retirement planning services help you prepare for a secure and comfortable retirement. We assess your current financial situation, define your retirement goals, and develop a strategic plan to help you achieve the retirement lifestyle you envision.",
    benefits: [
      "Retirement income planning",
      "Social Security optimization",
      "401(k) and IRA strategies",
      "Pension analysis and planning",
    ],
  },
  {
    icon: <DollarSign className="h-12 w-12 text-ksc-gold" />,
    title: "Tax Optimization",
    description:
      "Our tax optimization strategies aim to minimize your tax liability while maximizing your investment returns. We coordinate with your tax professionals to ensure your investment strategy is aligned with your overall tax situation.",
    benefits: [
      "Tax-efficient investment strategies",
      "Capital gains management",
      "Tax-loss harvesting",
      "Charitable giving strategies",
    ],
  },
  {
    icon: <Coins className="h-12 w-12 text-ksc-gold" />,
    title: "Estate Planning",
    description:
      "Our estate planning services help you create a comprehensive plan to preserve your wealth and legacy. We work with your legal advisors to ensure your estate plan reflects your wishes and minimizes potential tax implications for your heirs.",
    benefits: [
      "Wealth transfer strategies",
      "Estate tax minimization",
      "Trust services coordination",
      "Legacy planning",
    ],
  },
  {
    icon: <Building2 className="h-12 w-12 text-ksc-gold" />,
    title: "Corporate Advisory",
    description:
      "We provide strategic financial advisory services for corporations and institutional clients. Our team helps businesses optimize their capital structure, manage treasury functions, and develop comprehensive financial strategies.",
    benefits: [
      "Corporate treasury management",
      "Capital structure optimization",
      "Risk management strategies",
      "Financial restructuring",
    ],
  },
];

const investmentProcess = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "We begin with a comprehensive analysis of your financial situation, goals, risk tolerance, and investment timeline to establish a solid foundation.",
    highlight: "Deep Financial Analysis",
    highlightDescription: "Thorough evaluation of your current position and future aspirations to create a personalized roadmap."
  },
  {
    step: "02",
    title: "Strategic Planning",
    description: "Based on our assessment, we develop a tailored investment strategy with clear objectives, asset allocation, and risk management protocols.",
    highlight: "Customized Strategy",
    highlightDescription: "Bespoke investment plan designed specifically for your unique circumstances and goals."
  },
  {
    step: "03",
    title: "Implementation",
    description: "We execute your strategy with precision, selecting optimal investment vehicles and establishing proper diversification across asset classes.",
    highlight: "Expert Execution",
    highlightDescription: "Professional implementation with focus on cost efficiency and strategic timing."
  },
  {
    step: "04",
    title: "Monitoring & Optimization",
    description: "Continuous portfolio oversight with regular performance reviews, rebalancing, and strategic adjustments to ensure alignment with your evolving needs.",
    highlight: "Ongoing Excellence",
    highlightDescription: "Proactive management with detailed reporting and transparent communication."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-ksc-lightgray/30">
      <Navbar />
      
      <main>
        {/* Enhanced Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-ksc-navy via-ksc-navy/95 to-ksc-navy/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-ksc-gold/10 border border-ksc-gold/20 rounded-full px-6 py-2 mb-6">
                <span className="text-ksc-gold font-medium text-sm">Premium Investment Solutions</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Comprehensive Investment
                <span className="block text-ksc-gold">Excellence</span>
              </h1>
              <p className="text-gray-300 text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
                Six specialized service areas designed to meet all your financial planning and investment management needs with institutional-grade expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-ksc-gold hover:bg-ksc-gold/90 text-ksc-navy font-semibold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold text-lg px-8 py-6 rounded-lg backdrop-blur-sm"
                >
                  <a href="tel:+12125551234">Call (212) 555-1234</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-ksc-navy mb-6">
                Our Investment Services
              </h2>
              <p className="text-ksc-darkgray text-xl max-w-3xl mx-auto leading-relaxed">
                Each service is designed with institutional-grade standards and personalized attention to deliver exceptional results for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-br from-ksc-lightgray to-white p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="bg-white p-4 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        {service.icon}
                      </div>
                      <div className="text-6xl font-bold text-ksc-lightgray/50">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <CardTitle className="font-serif text-2xl font-bold text-ksc-navy mb-4 group-hover:text-ksc-gold transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-ksc-darkgray leading-relaxed text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-ksc-lightgray/50 to-ksc-lightgray/30 p-6 rounded-xl mb-6">
                      <h4 className="text-ksc-navy font-bold mb-4 text-lg">Key Benefits</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="h-5 w-5 text-ksc-gold mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-ksc-darkgray font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      asChild
                      className="w-full bg-ksc-navy hover:bg-ksc-navy/90 text-white font-semibold py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <Link to="/contact">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Process Section */}
        <section className="py-24 bg-gradient-to-b from-ksc-lightgray/50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-ksc-navy mb-6">
                Our Investment Process
              </h2>
              <p className="text-ksc-darkgray text-xl max-w-3xl mx-auto leading-relaxed">
                A disciplined, research-driven approach to building and managing investment portfolios with proven methodologies and continuous optimization.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {investmentProcess.map((step, index) => (
                  <div key={index} className="relative">
                    <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden h-full">
                      <CardHeader className="relative bg-gradient-to-br from-ksc-navy to-ksc-navy/90 text-white p-8">
                        <div className="flex items-center justify-between mb-4">
                          <div className="bg-ksc-gold text-ksc-navy font-black text-2xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                            {step.step}
                          </div>
                          <div className="w-24 h-1 bg-ksc-gold rounded-full"></div>
                        </div>
                        <CardTitle className="font-serif text-2xl font-bold mb-4">
                          {step.title}
                        </CardTitle>
                        <CardDescription className="text-gray-300 leading-relaxed text-base">
                          {step.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="p-8">
                        <div className="bg-gradient-to-r from-ksc-gold/10 to-ksc-gold/5 p-6 rounded-xl border-l-4 border-ksc-gold">
                          <h4 className="font-bold text-ksc-navy mb-3 text-lg">{step.highlight}</h4>
                          <p className="text-ksc-darkgray text-sm leading-relaxed">
                            {step.highlightDescription}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
