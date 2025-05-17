
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ksc-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">
              <span className="text-ksc-gold">King</span> Stock Capital
            </h3>
            <p className="text-sm text-gray-300 mb-6 max-w-md">
              Transforming wealth through strategic investment excellence since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-ksc-gold transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-ksc-gold transition-colors">
                Twitter
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-ksc-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-ksc-gold transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-ksc-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-4">Contact</h4>
            <address className="text-sm text-gray-300 not-italic">
              <p className="mb-2">123 Finance Street</p>
              <p className="mb-2">New York, NY 10001</p>
              <p className="mb-2">
                <a href="tel:+12125551234" className="hover:text-ksc-gold transition-colors">
                  +1 (212) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:info@kingstockcapital.com" className="hover:text-ksc-gold transition-colors">
                  info@kingstockcapital.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} King Stock Capital Management. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-400">
            <a href="#" className="hover:text-ksc-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-ksc-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
