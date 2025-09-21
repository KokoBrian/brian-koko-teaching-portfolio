import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Philosophy", href: "/philosophy" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" }
  ];

  const navigateToPage = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const goToHome = () => {
    navigate("/");
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={goToHome}
            className="flex items-center gap-2 font-bold text-lg hover:text-primary transition-colors"
          >
            <GraduationCap className="w-6 h-6 text-primary" />
            <span className={isScrolled ? "text-foreground" : "text-white"}>
              Sarah Chen
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigateToPage(item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                  location.pathname === item.href 
                    ? "text-primary" 
                    : isScrolled ? "text-foreground" : "text-white/90"
                }`}
                aria-label={`Navigate to ${item.label} page`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </button>
            ))}
            <Button 
              variant={isScrolled ? "default" : "outline"} 
              size="sm"
              onClick={() => navigateToPage("/contact")}
              className={!isScrolled ? "bg-white/10 border-white/30 text-white hover:bg-white/20" : ""}
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? "text-foreground hover:bg-muted" 
                : "text-white hover:bg-white/10"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/20 bg-background/95 backdrop-blur-md animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => navigateToPage(item.href)}
                  className={`text-left transition-all duration-300 py-2 px-4 rounded-lg hover:bg-muted/50 animate-slide-up ${
                    location.pathname === item.href ? "text-primary bg-muted/50" : "text-foreground hover:text-primary"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={`Navigate to ${item.label} page`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="default" 
                size="sm"
                onClick={() => navigateToPage("/contact")}
                className="self-start"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;