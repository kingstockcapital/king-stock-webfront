
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";

const teamMembers = [
  {
    name: "Jonathan King",
    position: "Founder & CEO",
    bio: "With over 25 years of experience in finance and investment, Jonathan founded King Stock Capital with a vision to provide institutional-grade investment strategies to individual investors.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Elizabeth Wells",
    position: "Chief Investment Officer",
    bio: "Elizabeth brings extensive expertise in portfolio management and market analysis, with previous roles at top-tier investment banks and a Ph.D. in Financial Economics.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
  },
  {
    name: "Richard Chen",
    position: "Head of Research",
    bio: "Richard leads our research team with a focus on identifying emerging market trends and investment opportunities, leveraging his background in quantitative analysis.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1148&q=80"
  },
  {
    name: "Sophia Martinez",
    position: "Director of Client Relations",
    bio: "Sophia ensures our clients receive exceptional service and personalized attention, with a deep understanding of their unique financial needs and goals.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 bg-ksc-lightgray">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h6 className="text-ksc-gold font-medium mb-3">About Us</h6>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ksc-navy mb-6">
                Our Story & Mission
              </h1>
              <p className="text-ksc-darkgray text-lg">
                A dedication to excellence, integrity, and client success since our founding.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-ksc-navy mb-6">
                  Our Story
                </h2>
                <p className="text-ksc-darkgray mb-6">
                  Founded in 2008 amid one of the most challenging financial crises in modern history, 
                  King Stock Capital Management was established with a contrarian vision: that times 
                  of market turmoil present the greatest opportunities for strategic investors.
                </p>
                <p className="text-ksc-darkgray mb-6">
                  Jonathan King, our founder, assembled a team of experienced investment professionals 
                  who shared his perspective on disciplined, research-driven investment approaches. 
                  Together, they developed proprietary methodologies for identifying undervalued assets 
                  and market inefficiencies.
                </p>
                <p className="text-ksc-darkgray">
                  Today, we manage over $1.2 billion in assets for individuals, families, and 
                  institutions, maintaining the same principles that guided our founding: thorough 
                  research, disciplined execution, and unwavering client focus.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')] bg-cover bg-center rounded-lg shadow-lg"></div>
                <div className="absolute -bottom-4 -left-4 h-24 w-1/2 bg-ksc-gold opacity-20 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-ksc-lightgray">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-ksc-navy mb-6">
                  Our Mission
                </h2>
                <p className="text-ksc-darkgray mb-8">
                  At King Stock Capital Management, our mission is to help our clients achieve 
                  their financial goals through prudent investment strategies, personalized advice, 
                  and exceptional service. We believe in creating long-term value through disciplined 
                  research, strategic asset allocation, and active risk management.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-ksc-navy font-serif text-xl mb-4">Our Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-ksc-gold mr-2">•</span>
                      <span className="text-ksc-darkgray">Disciplined research and analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ksc-gold mr-2">•</span>
                      <span className="text-ksc-darkgray">Strategic asset allocation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ksc-gold mr-2">•</span>
                      <span className="text-ksc-darkgray">Active risk management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ksc-gold mr-2">•</span>
                      <span className="text-ksc-darkgray">Transparent client communication</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="font-serif text-3xl font-semibold text-ksc-navy mb-6">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-ksc-navy font-serif text-lg mb-3">Integrity</h3>
                    <p className="text-ksc-darkgray text-sm">
                      We adhere to the highest ethical standards and always place our clients' interests first.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-ksc-navy font-serif text-lg mb-3">Excellence</h3>
                    <p className="text-ksc-darkgray text-sm">
                      We strive for excellence in all aspects of our work, from research to client service.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-ksc-navy font-serif text-lg mb-3">Innovation</h3>
                    <p className="text-ksc-darkgray text-sm">
                      We continuously seek innovative solutions to complex financial challenges.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-ksc-navy font-serif text-lg mb-3">Transparency</h3>
                    <p className="text-ksc-darkgray text-sm">
                      We maintain open and honest communication with our clients at all times.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ksc-navy mb-4">
                Our Leadership Team
              </h2>
              <p className="text-ksc-darkgray max-w-2xl mx-auto">
                Meet the experienced professionals behind King Stock Capital's investment strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-ksc-lightgray rounded-lg overflow-hidden shadow-sm">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-medium text-ksc-navy mb-1">
                      {member.name}
                    </h3>
                    <p className="text-ksc-gold text-sm mb-3">{member.position}</p>
                    <p className="text-ksc-darkgray text-sm">{member.bio}</p>
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

export default About;
