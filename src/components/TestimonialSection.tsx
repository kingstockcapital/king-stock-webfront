
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "King Stock Capital has transformed our financial portfolio. Their strategic approach and personalized attention have exceeded our expectations.",
    author: "David Mitchell",
    position: "CEO, Mitchell Enterprises",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    quote:
      "The team at King Stock Capital provided invaluable guidance during market volatility. Their expertise helped us navigate uncertain times with confidence.",
    author: "Sarah Johnson",
    position: "CFO, Johnson Industries",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    quote:
      "From retirement planning to wealth preservation, King Stock Capital has been our trusted partner for over a decade. Their holistic approach sets them apart.",
    author: "Michael Thompson",
    position: "Founder, Thompson Group",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ksc-navy mb-4">
            Client Testimonials
          </h2>
          <p className="text-ksc-darkgray max-w-2xl mx-auto">
            Hear from our clients about their experience working with King Stock Capital Management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative mb-8">
                <div className="absolute -top-4 -left-4 text-5xl text-ksc-gold opacity-40 font-serif">
                  "
                </div>
                <p className="text-ksc-darkgray italic relative z-10">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-ksc-navy">{testimonial.author}</p>
                  <p className="text-xs text-ksc-darkgray">{testimonial.position}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
