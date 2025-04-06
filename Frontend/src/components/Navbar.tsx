import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/therapists", label: "Find Therapists" },
    { path: "/medications", label: "Order Medications" },
    { path: "/register", label: "Ai Therapist" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 backdrop-blur-lg bg-white/80 shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-semibold text-mind-700 flex items-center"
        >
          <span
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            MindConnect
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition-all duration-300 opacity-0 animate-fade-in ${
                isActive(item.path)
                  ? "text-mind-600 border-b-2 border-mind-600"
                  : "text-calm-700 hover:text-mind-500"
              }`}
              style={{
                animationDelay: `${0.2 + index * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/register"
            className="opacity-0 animate-fade-in btn-primary"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-calm-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 glass animate-slide-in-right">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium py-2 transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-mind-600"
                    : "text-calm-700 hover:text-mind-500"
                }`}
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/register"
              className="btn-primary w-full text-center mt-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
