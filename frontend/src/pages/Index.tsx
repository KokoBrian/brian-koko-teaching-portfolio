import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PhilosophySection from "@/components/PhilosophySection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <div id="philosophy">
          <PhilosophySection />
        </div>
        <div id="portfolio">
          <PortfolioSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-80">
            © 2024 Brian Koko. Inspiring minds through Computer Science and Mathematics.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;