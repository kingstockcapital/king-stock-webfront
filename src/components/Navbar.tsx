
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <h1 className="text-xl md:text-2xl font-serif font-semibold text-ksc-navy">
            <span className="text-ksc-gold">King</span> Stock Capital
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium hover:text-ksc-gold transition-colors ${
                location.pathname === link.path
                  ? "text-ksc-gold border-b border-ksc-gold pb-1"
                  : "text-ksc-navy"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            size="sm" 
            className="bg-ksc-navy hover:bg-ksc-navy/90 text-white border-none"
          >
            Client Portal
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-ksc-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium py-2 ${
                  location.pathname === link.path
                    ? "text-ksc-gold"
                    : "text-ksc-navy"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              size="sm" 
              className="bg-ksc-navy hover:bg-ksc-navy/90 text-white border-none w-full"
            >
              Client Portal
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
