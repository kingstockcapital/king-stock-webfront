import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseIcon, Coins, DollarSign, TrendingUp, Wallet, Building2, CheckCircle, Rocket } from "lucide-react";
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
    icon: <TrendingUp className="h-12 w-12 text-ksc-gold" />,
    title: "Cryptocurrency Investment",
    description:
      "Our cryptocurrency investment services help you access opportunities in the digital asset space. We guide you through portfolio diversification, secure custody, and ongoing strategy adjustments to help you maximize your potential returns while managing risk.",
    benefits: [
      "Access to leading cryptocurrencies",
      "Portfolio diversification with digital assets",
      "Secure custody and best practices",
      "Market trend analysis and ongoing strategy",
    ],
  },
  {
    icon: <Coins className="h-12 w-12 text-ksc-gold" />,
    title: "Investment Strategy",
    description:
      "Our investment strategy services help you design, implement, and manage sophisticated portfolios that align with your financial ambitions. We focus on asset allocation, research-driven insights, and disciplined processes to optimize returns and manage risk.",
    benefits: [
      "Strategic asset allocation",
      "Research-driven decision making",
      "Dynamic portfolio adjustments",
      "Emphasis on consistent performance",
    ],
  },
  {
    icon: <Rocket className="h-12 w-12 text-ksc-gold" />,
    title: "Start-up Investment",
    description:
      "Our start-up investment services connect visionary entrepreneurs with the resources and expertise they need to scale. We provide early-stage capital, mentorship, and strategic support to help founders turn innovative ideas into thriving businesses.",
    benefits: [
      "Early-stage capital funding",
      "Access to experienced mentors",
      "Growth strategy and operational guidance",
      "Networking with industry leaders",
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
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-ksc-navy via-ksc-navy/95 to-ksc-navy/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-ksc-gold/10 border border-ksc-gold/20 rounded-full px-6 py-2 mb-6">
                <span className="text-ksc-gold font-medium text-xs md:text-sm font-sans">Premium Investment Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-8 leading-tight">
                Comprehensive Investment
                <span className="block text-ksc-gold">Excellence</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-3xl mx-auto font-sans">
                Six specialized service areas designed to meet all your financial planning and investment management needs with institutional-grade expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-ksc-gold hover:bg-ksc-gold/90 text-ksc-navy font-semibold text-base md:text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="bg-transparent border-white text-white hover:bg-white/10 font-semibold text-base md:text-lg px-8 py-6 rounded-lg transition-all duration-300"
                >
                  <a href="tel:+12125551234">Call (212) 555-1234</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-ksc-navy mb-6">
                Our Investment Services
              </h2>
              <p className="text-ksc-darkgray text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
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
                      <div className="text-5xl md:text-6xl font-bold text-ksc-lightgray/50">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-serif font-semibold text-ksc-navy mb-4 group-hover:text-ksc-gold transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-ksc-darkgray leading-relaxed text-sm md:text-base font-sans">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-ksc-lightgray/50 to-ksc-lightgray/30 p-5 md:p-6 rounded-xl mb-6">
                      <h4 className="text-ksc-navy font-semibold mb-4 text-base md:text-lg font-sans">Key Benefits</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-xs md:text-sm">
                            <CheckCircle className="h-4 w-4 text-ksc-gold mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-ksc-darkgray font-medium font-sans">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      asChild
                      className="w-full bg-ksc-navy hover:bg-ksc-navy/90 text-white font-semibold py-5 md:py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-base md:text-lg"
                    >
                      <Link to="/contact">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-b from-ksc-lightgray/50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-ksc-navy mb-6">
                Our Investment Process
              </h2>
              <p className="text-ksc-darkgray text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
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
                          <div className="bg-ksc-gold text-ksc-navy font-black text-xl md:text-2xl w-12 md:w-16 h-12 md:h-16 rounded-full flex items-center justify-center shadow-lg">
                            {step.step}
                          </div>
                          <div className="w-16 md:w-24 h-1 bg-ksc-gold rounded-full"></div>
                        </div>
                        <CardTitle className="text-xl md:text-2xl font-serif font-semibold mb-4">
                          {step.title}
                        </CardTitle>
                        <CardDescription className="text-gray-300 leading-relaxed text-sm md:text-base font-sans">
                          {step.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="p-8">
                        <div className="bg-gradient-to-r from-ksc-gold/10 to-ksc-gold/5 p-5 md:p-6 rounded-xl border-l-4 border-ksc-gold">
                          <h4 className="font-semibold text-ksc-navy mb-3 text-base md:text-lg font-sans">{step.highlight}</h4>
                          <p className="text-ksc-darkgray text-xs md:text-sm leading-relaxed font-sans">
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
