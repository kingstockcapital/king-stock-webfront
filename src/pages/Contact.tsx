
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageSquare, Users, Award } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-ksc-navy via-ksc-navy/95 to-ksc-navy/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-ksc-gold/10 border border-ksc-gold/20 rounded-full mb-6">
                <MessageSquare className="h-4 w-4 text-ksc-gold mr-2" />
                <span className="text-ksc-gold font-medium text-sm">Get in Touch</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
                Let's Start a
                <span className="text-ksc-gold block">Conversation</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                We're here to help you achieve your financial goals. Reach out to our expert team 
                for personalized investment solutions and strategic guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-ksc-gold/10 rounded-full mb-4">
                  <Users className="h-6 w-6 text-ksc-gold" />
                </div>
                <h3 className="text-2xl font-bold text-ksc-navy mb-2">500+</h3>
                <p className="text-ksc-darkgray">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-ksc-gold/10 rounded-full mb-4">
                  <Award className="h-6 w-6 text-ksc-gold" />
                </div>
                <h3 className="text-2xl font-bold text-ksc-navy mb-2">18+</h3>
                <p className="text-ksc-darkgray">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-ksc-gold/10 rounded-full mb-4">
                  <MessageSquare className="h-6 w-6 text-ksc-gold" />
                </div>
                <h3 className="text-2xl font-bold text-ksc-navy mb-2">24h</h3>
                <p className="text-ksc-darkgray">Response Time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-ksc-lightgray/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-ksc-navy mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-ksc-darkgray text-lg leading-relaxed">
                    Whether you have questions about our investment services or would like to schedule 
                    a consultation, our dedicated team is ready to assist you with personalized solutions.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="bg-ksc-navy/10 p-3 rounded-lg mr-4">
                        <Phone className="h-5 w-5 text-ksc-navy" />
                      </div>
                      <div>
                        <h3 className="text-ksc-navy font-semibold mb-1">Phone</h3>
                        <p className="text-ksc-darkgray text-sm">Call us directly</p>
                      </div>
                    </div>
                    <a href="tel:+12125551234" className="text-ksc-navy hover:text-ksc-gold transition-colors font-medium">
                      +1 (212) 555-1234
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="bg-ksc-navy/10 p-3 rounded-lg mr-4">
                        <Mail className="h-5 w-5 text-ksc-navy" />
                      </div>
                      <div>
                        <h3 className="text-ksc-navy font-semibold mb-1">Email</h3>
                        <p className="text-ksc-darkgray text-sm">Send us a message</p>
                      </div>
                    </div>
                    <a href="mailto:info@kingstockcapital.com" className="text-ksc-navy hover:text-ksc-gold transition-colors font-medium">
                      info@kingstockcapital.com
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="bg-ksc-navy/10 p-3 rounded-lg mr-4">
                        <MapPin className="h-5 w-5 text-ksc-navy" />
                      </div>
                      <div>
                        <h3 className="text-ksc-navy font-semibold mb-1">Office</h3>
                        <p className="text-ksc-darkgray text-sm">Visit our location</p>
                      </div>
                    </div>
                    <p className="text-ksc-navy font-medium">
                      123 Finance Street<br />
                      New York, NY 10001
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="bg-ksc-navy/10 p-3 rounded-lg mr-4">
                        <Clock className="h-5 w-5 text-ksc-navy" />
                      </div>
                      <div>
                        <h3 className="text-ksc-navy font-semibold mb-1">Hours</h3>
                        <p className="text-ksc-darkgray text-sm">We're available</p>
                      </div>
                    </div>
                    <p className="text-ksc-navy font-medium">
                      Mon - Fri: 9:00 AM - 5:00 PM<br />
                      <span className="text-ksc-darkgray">Weekends: Closed</span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                <div className="mb-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-ksc-navy mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-ksc-darkgray">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ksc-navy mb-4">
                Visit Our Office
              </h2>
              <p className="text-ksc-darkgray text-lg max-w-2xl mx-auto">
                We're conveniently located in the heart of New York's financial district, 
                easily accessible by public transportation.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                <div className="aspect-[21/9] bg-gray-100 rounded-xl overflow-hidden relative">
                  <div className="w-full h-full bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s+D4AF37(-74.010,40.705)/[-74.010,40.705,14]/1200x600@2x?access_token=your_token_here')] bg-cover bg-center flex items-center justify-center">
                    <div className="text-center p-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-ksc-gold/10 rounded-full mb-4">
                        <MapPin className="h-6 w-6 text-ksc-gold" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-ksc-navy mb-2">King Stock Capital Management</h3>
                      <p className="text-ksc-darkgray">123 Finance Street, New York, NY 10001</p>
                      <p className="text-sm text-ksc-darkgray mt-2">Financial District • Easy Metro Access</p>
                    </div>
                  </div>
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

export default Contact;
