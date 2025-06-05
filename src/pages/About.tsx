
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { Card, CardContent } from "@/components/ui/card";

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
    <div className="min-h-screen bg-gradient-to-b from-white to-ksc-lightgray/30">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-ksc-navy via-ksc-navy/95 to-ksc-navy/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-ksc-gold/10 border border-ksc-gold/20 rounded-full px-6 py-2 mb-8">
                <span className="text-ksc-gold font-medium text-sm">About Us</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-8 leading-tight">
                Building Financial
                <span className="block text-ksc-gold">Legacies</span>
              </h1>
              <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
                A dedication to excellence, integrity, and client success since our founding in 2008.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-serif font-bold text-ksc-navy mb-2">$1.2B+</div>
                <div className="text-ksc-darkgray">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif font-bold text-ksc-navy mb-2">500+</div>
                <div className="text-ksc-darkgray">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif font-bold text-ksc-navy mb-2">15+</div>
                <div className="text-ksc-darkgray">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-gradient-to-b from-ksc-lightgray/50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-4xl font-semibold text-ksc-navy mb-6">
                    Our Story
                  </h2>
                  <div className="w-16 h-1 bg-ksc-gold mb-8"></div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-ksc-darkgray text-lg leading-relaxed">
                    Founded in 2008 amid one of the most challenging financial crises in modern history, 
                    King Stock Capital Management was established with a contrarian vision: that times 
                    of market turmoil present the greatest opportunities for strategic investors.
                  </p>
                  <p className="text-ksc-darkgray text-lg leading-relaxed">
                    Jonathan King, our founder, assembled a team of experienced investment professionals 
                    who shared his perspective on disciplined, research-driven investment approaches.
                  </p>
                  <p className="text-ksc-darkgray text-lg leading-relaxed">
                    Today, we manage over $1.2 billion in assets for individuals, families, and 
                    institutions, maintaining the same principles that guided our founding.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')] bg-cover bg-center rounded-2xl shadow-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ksc-gold/10 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-4xl font-semibold text-ksc-navy mb-6">
                  Mission & Values
                </h2>
                <div className="w-16 h-1 bg-ksc-gold mx-auto mb-8"></div>
                <p className="text-ksc-darkgray text-xl max-w-3xl mx-auto leading-relaxed">
                  Our mission is to help clients achieve their financial goals through prudent 
                  investment strategies, personalized advice, and exceptional service.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Mission */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="font-serif text-2xl font-semibold text-ksc-navy mb-6">Our Approach</h3>
                    <div className="space-y-4">
                      {[
                        "Disciplined research and analysis",
                        "Strategic asset allocation",
                        "Active risk management",
                        "Transparent client communication"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-ksc-gold rounded-full mr-4"></div>
                          <span className="text-ksc-darkgray">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Values */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Integrity", desc: "We adhere to the highest ethical standards and always place our clients' interests first." },
                    { title: "Excellence", desc: "We strive for excellence in all aspects of our work, from research to client service." },
                    { title: "Innovation", desc: "We continuously seek innovative solutions to complex financial challenges." },
                    { title: "Transparency", desc: "We maintain open and honest communication with our clients at all times." }
                  ].map((value, index) => (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <h4 className="font-serif text-lg font-semibold text-ksc-navy mb-3">{value.title}</h4>
                        <p className="text-ksc-darkgray text-sm leading-relaxed">{value.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-gradient-to-b from-ksc-lightgray/30 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-4xl font-semibold text-ksc-navy mb-6">
                  Leadership Team
                </h2>
                <div className="w-16 h-1 bg-ksc-gold mx-auto mb-8"></div>
                <p className="text-ksc-darkgray text-xl max-w-3xl mx-auto leading-relaxed">
                  Meet the experienced professionals behind King Stock Capital's investment strategies.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-serif text-xl font-semibold text-ksc-navy mb-2">
                        {member.name}
                      </h3>
                      <p className="text-ksc-gold text-sm font-medium mb-4">{member.position}</p>
                      <p className="text-ksc-darkgray text-sm leading-relaxed">{member.bio}</p>
                    </CardContent>
                  </Card>
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

export default About;
