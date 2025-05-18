
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { Button } from "@/components/ui/button";
import { BriefcaseIcon, Coins, DollarSign, TrendingUp, Wallet } from "lucide-react";
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
];

const investmentProcess = [
  {
    number: 1,
    title: "Assessment",
    description: "We begin by understanding your financial goals, risk tolerance, time horizon, and overall financial situation to establish a solid foundation for your investment strategy.",
    highlight: "Discovery Meeting",
    highlightDescription: "A comprehensive analysis of your current financial situation, goals, and risk profile."
  },
  {
    number: 2,
    title: "Strategy Development",
    description: "Based on our assessment, we develop a tailored investment strategy that aligns with your financial goals and risk tolerance, incorporating diversification across asset classes.",
    highlight: "Customized Planning",
    highlightDescription: "Development of a personalized investment plan with clear objectives and timelines."
  },
  {
    number: 3,
    title: "Implementation",
    description: "We execute your investment strategy with precision and care, selecting appropriate investment vehicles and establishing the proper asset allocation.",
    highlight: "Efficient Execution",
    highlightDescription: "Careful selection of investments and strategic deployment of capital to maximize efficiency."
  },
  {
    number: 4,
    title: "Monitoring & Optimization",
    description: "We continuously monitor your portfolio performance and make adjustments as needed to ensure alignment with your goals and adapt to changing market conditions.",
    highlight: "Ongoing Management",
    highlightDescription: "Regular reviews, performance reporting, and strategic adjustments to optimize results."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 bg-ksc-lightgray">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h6 className="text-ksc-gold font-medium mb-3">Our Services</h6>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ksc-navy mb-6">
                Investment Solutions Tailored to Your Needs
              </h1>
              <p className="text-ksc-darkgray text-lg">
                Comprehensive investment and wealth management services designed to help you achieve your financial goals.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex justify-center lg:justify-start mb-6">
                      {service.icon}
                    </div>
                    <h2 className="font-serif text-3xl font-semibold text-ksc-navy mb-6 text-center lg:text-left">
                      {service.title}
                    </h2>
                    <p className="text-ksc-darkgray mb-6">
                      {service.description}
                    </p>
                    <div className="bg-ksc-lightgray p-6 rounded-lg">
                      <h3 className="text-ksc-navy font-medium mb-4">Key Benefits</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-ksc-gold mr-2">•</span>
                            <span className="text-ksc-darkgray">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative">
                      <div className="aspect-[4/3] bg-gradient-to-br from-ksc-navy to-ksc-navy/70 rounded-lg flex items-center justify-center p-8">
                        <div className="text-center text-white">
                          <h3 className="font-serif text-2xl font-medium mb-4">
                            {service.title}
                          </h3>
                          <p className="mb-6 text-gray-200">
                            Personalized solutions to help you achieve your financial goals.
                          </p>
                          <Button 
                            asChild
                            className="bg-ksc-gold hover:bg-ksc-gold/90 text-ksc-navy border-none"
                          >
                            <Link to="/contact">Learn More</Link>
                          </Button>
                        </div>
                      </div>
                      <div className="absolute -bottom-4 -right-4 h-24 w-1/3 bg-ksc-gold opacity-20 rounded-lg -z-10"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Improved version */}
        <section className="py-16 bg-ksc-lightgray">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ksc-navy mb-4">
                Our Investment Process
              </h2>
              <p className="text-ksc-darkgray max-w-2xl mx-auto">
                A disciplined, research-driven approach to building and managing investment portfolios.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-16">
              {investmentProcess.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-16 h-16 rounded-full bg-ksc-gold flex items-center justify-center flex-shrink-0 text-ksc-navy font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl text-ksc-navy mb-3">
                      {step.number}. {step.title}
                    </h3>
                    <p className="text-ksc-darkgray mb-6">
                      {step.description}
                    </p>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="font-medium text-ksc-navy mb-2">{step.highlight}</h4>
                      <p className="text-sm text-ksc-darkgray">
                        {step.highlightDescription}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
