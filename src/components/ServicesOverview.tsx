
import { BriefcaseIcon, TrendingUp, Wallet, Coins, Rocket, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Danh sách dịch vụ giống trang Services, đúng thứ tự, đặc biệt 3 cái cuối cùng
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
  // 3 dịch vụ cuối giống với trang Services
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
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ksc-navy mb-4">
            Our Services
          </h2>
          <p className="text-ksc-darkgray max-w-2xl mx-auto">
            We offer six comprehensive service areas designed to help you achieve your financial objectives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden flex flex-col h-full group"
            >
              <div className="bg-gradient-to-br from-ksc-lightgray to-white p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-white p-4 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    {service.icon}
                  </div>
                  <div className="text-4xl font-bold text-ksc-lightgray/50">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-semibold text-ksc-navy mb-4 group-hover:text-ksc-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-ksc-darkgray leading-relaxed text-sm mb-4 flex-1">
                  {service.description}
                </p>
                <div className="bg-gradient-to-r from-ksc-lightgray/50 to-ksc-lightgray/30 p-5 rounded-xl mb-6">
                  <h4 className="text-ksc-navy font-semibold mb-3 text-base">Key Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-xs">
                        <CheckCircle className="h-4 w-4 text-ksc-gold mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-ksc-darkgray font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/services"
                  className="text-ksc-navy font-medium text-sm hover:text-ksc-gold transition-colors inline-flex items-center"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            asChild
            className="bg-ksc-navy hover:bg-ksc-navy/90 text-white border-none"
          >
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
