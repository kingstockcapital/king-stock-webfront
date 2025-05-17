
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 bg-ksc-lightgray">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h6 className="text-ksc-gold font-medium mb-3">Contact Us</h6>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ksc-navy mb-6">
                Get in Touch
              </h1>
              <p className="text-ksc-darkgray text-lg">
                We're here to answer your questions and help you achieve your financial goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-ksc-navy mb-6">
                  Contact Information
                </h2>
                <p className="text-ksc-darkgray mb-8">
                  Whether you have questions about our investment services or would like to schedule 
                  a consultation, our team is ready to assist you. Feel free to reach out using any 
                  of the methods below.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="bg-ksc-lightgray p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-ksc-navy" />
                    </div>
                    <div>
                      <h3 className="text-ksc-navy font-medium mb-1">Phone</h3>
                      <p className="text-ksc-darkgray">
                        <a href="tel:+12125551234" className="hover:text-ksc-gold transition-colors">
                          +1 (212) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-ksc-lightgray p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-ksc-navy" />
                    </div>
                    <div>
                      <h3 className="text-ksc-navy font-medium mb-1">Email</h3>
                      <p className="text-ksc-darkgray">
                        <a href="mailto:info@kingstockcapital.com" className="hover:text-ksc-gold transition-colors">
                          info@kingstockcapital.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-ksc-lightgray p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-ksc-navy" />
                    </div>
                    <div>
                      <h3 className="text-ksc-navy font-medium mb-1">Office Location</h3>
                      <p className="text-ksc-darkgray">
                        123 Finance Street<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-ksc-lightgray p-3 rounded-full mr-4">
                      <Clock className="h-5 w-5 text-ksc-navy" />
                    </div>
                    <div>
                      <h3 className="text-ksc-navy font-medium mb-1">Business Hours</h3>
                      <p className="text-ksc-darkgray">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-ksc-lightgray p-8 rounded-lg">
                <h2 className="font-serif text-2xl font-semibold text-ksc-navy mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-16 bg-ksc-lightgray">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-semibold text-ksc-navy mb-4">
                Visit Our Office
              </h2>
              <p className="text-ksc-darkgray max-w-2xl mx-auto">
                We're conveniently located in the heart of New York's financial district.
              </p>
            </div>
            
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <div className="aspect-[21/9] bg-gray-200 rounded overflow-hidden">
                {/* Placeholder for map */}
                <div className="w-full h-full bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s+D4AF37(-74.010,40.705)/[-74.010,40.705,14]/1200x600@2x?access_token=your_token_here')] bg-cover bg-center flex items-center justify-center">
                  <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg">
                    <p className="font-serif text-xl font-medium text-ksc-navy mb-1">King Stock Capital</p>
                    <p className="text-ksc-darkgray">123 Finance Street, New York, NY 10001</p>
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
