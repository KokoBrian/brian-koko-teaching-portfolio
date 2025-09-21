import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, BookOpen, Calculator } from "lucide-react";
import classroomHero from "@/assets/classroom-hero.jpg";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Inspiring minds through Computer Science and Mathematics";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${classroomHero})` }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Floating Icons Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <BookOpen className="absolute top-20 left-10 w-8 h-8 text-white/20 animate-bounce" style={{ animationDelay: "0s" }} />
        <Calculator className="absolute top-32 right-20 w-6 h-6 text-white/20 animate-bounce" style={{ animationDelay: "2s" }} />
        <Mail className="absolute bottom-40 left-20 w-6 h-6 text-white/20 animate-bounce" style={{ animationDelay: "4s" }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hello! I'm{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Sarah Chen
            </span>
          </h1>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}>
          <div className="h-16 flex items-center justify-center mb-8">
            <p className="text-xl md:text-2xl text-white/90 font-medium min-h-[2rem]">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "1s", opacity: 0, animationFillMode: "forwards" }}>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Dedicated to building strong foundational skills and inspiring curiosity in every student. 
            Explore my teaching journey, philosophy, and the impact we create together.
          </p>
        </div>

        <div className="animate-bounce-in flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: "1.5s", opacity: 0, animationFillMode: "forwards" }}>
          <Button variant="hero" size="lg" onClick={scrollToAbout} className="px-8 py-4 text-lg">
            Explore My Portfolio
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToContact} className="px-8 py-4 text-lg bg-white/10 border-white/30 text-white hover:bg-white/20">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;