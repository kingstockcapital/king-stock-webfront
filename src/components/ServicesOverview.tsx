
import { BriefcaseIcon, Coins, DollarSign, TrendingUp, Wallet, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <BriefcaseIcon className="h-8 w-8 text-ksc-gold" />,
    title: "Portfolio Management",
    description:
      "Expert management of investment portfolios tailored to your specific financial goals and risk tolerance.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-ksc-gold" />,
    title: "Wealth Management",
    description:
      "Comprehensive wealth management strategies designed to preserve and grow your assets over time.",
  },
  {
    icon: <Wallet className="h-8 w-8 text-ksc-gold" />,
    title: "Retirement Planning",
    description:
      "Strategic retirement planning to ensure financial security and prosperity in your retirement years.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-ksc-gold" />,
    title: "Tax Optimization",
    description:
      "Sophisticated tax strategies to minimize liabilities and maximize investment returns.",
  },
  {
    icon: <Coins className="h-8 w-8 text-ksc-gold" />,
    title: "Estate Planning",
    description:
      "Comprehensive estate planning services to preserve your wealth and legacy for future generations.",
  },
  {
    icon: <Building2 className="h-8 w-8 text-ksc-gold" />,
    title: "Corporate Advisory",
    description:
      "Strategic financial advisory services for corporations and institutional clients.",
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
              className="bg-ksc-lightgray p-8 rounded-lg transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="font-serif text-xl font-medium text-ksc-navy mb-3">
                {service.title}
              </h3>
              <p className="text-ksc-darkgray text-sm mb-5">
                {service.description}
              </p>
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
