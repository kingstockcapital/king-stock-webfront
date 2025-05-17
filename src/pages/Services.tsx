
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

        {/* Process Section */}
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

            <div className="relative max-w-4xl mx-auto">
              {/* Connecting line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-ksc-gold/30 hidden md:block"></div>
              
              {/* Steps */}
              <div className="space-y-12 md:space-y-24">
                {/* Step 1 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <h3 className="font-serif text-2xl text-ksc-navy mb-3">1. Assessment</h3>
                    <p className="text-ksc-darkgray">
                      We begin by understanding your financial goals, risk tolerance, time horizon, 
                      and overall financial situation to establish a solid foundation for your investment strategy.
                    </p>
                  </div>
                  <div className="md:relative">
                    <div className="hidden md:block absolute -left-12 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-ksc-gold rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm md:ml-4">
                      <h4 className="font-medium text-ksc-navy mb-2">Discovery Meeting</h4>
                      <p className="text-sm text-ksc-darkgray">
                        A comprehensive analysis of your current financial situation, goals, and risk profile.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <h3 className="font-serif text-2xl text-ksc-navy mb-3">2. Strategy Development</h3>
                    <p className="text-ksc-darkgray">
                      Based on our assessment, we develop a tailored investment strategy that aligns with your 
                      financial goals and risk tolerance, incorporating diversification across asset classes.
                    </p>
                  </div>
                  <div className="md:relative md:order-1">
                    <div className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-ksc-gold rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm md:mr-4">
                      <h4 className="font-medium text-ksc-navy mb-2">Customized Planning</h4>
                      <p className="text-sm text-ksc-darkgray">
                        Development of a personalized investment plan with clear objectives and timelines.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <h3 className="font-serif text-2xl text-ksc-navy mb-3">3. Implementation</h3>
                    <p className="text-ksc-darkgray">
                      We execute your investment strategy with precision and care, selecting appropriate 
                      investment vehicles and establishing the proper asset allocation.
                    </p>
                  </div>
                  <div className="md:relative">
                    <div className="hidden md:block absolute -left-12 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-ksc-gold rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm md:ml-4">
                      <h4 className="font-medium text-ksc-navy mb-2">Efficient Execution</h4>
                      <p className="text-sm text-ksc-darkgray">
                        Careful selection of investments and strategic deployment of capital to maximize efficiency.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <h3 className="font-serif text-2xl text-ksc-navy mb-3">4. Monitoring & Optimization</h3>
                    <p className="text-ksc-darkgray">
                      We continuously monitor your portfolio performance and make adjustments as needed to ensure 
                      alignment with your goals and adapt to changing market conditions.
                    </p>
                  </div>
                  <div className="md:relative md:order-1">
                    <div className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-ksc-gold rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm md:mr-4">
                      <h4 className="font-medium text-ksc-navy mb-2">Ongoing Management</h4>
                      <p className="text-sm text-ksc-darkgray">
                        Regular reviews, performance reporting, and strategic adjustments to optimize results.
                      </p>
                    </div>
                  </div>
                </div>
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
