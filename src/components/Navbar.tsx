
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
          <img 
            src="/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png" 
            alt="King Stock Capital Logo" 
            className="h-10 mr-3" 
          />
          <h1 className="text-xl md:text-2xl font-serif font-semibold text-ksc-navy">
            <span className="text-ksc-gold">King</span> Stock Capital
          </h1>
        </Link>

        {/* Hamburger Menu for all screen sizes */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-ksc-navy hover:bg-ksc-navy/10">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[280px] sm:w-[350px] bg-white py-12">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium transition-colors hover:text-ksc-gold ${
                    location.pathname === link.path
                      ? "text-ksc-gold border-l-4 border-ksc-gold pl-4"
                      : "text-ksc-navy pl-4"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                size="lg" 
                className="bg-ksc-navy hover:bg-ksc-navy/90 text-white border-none mt-4"
              >
                Client Portal
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
