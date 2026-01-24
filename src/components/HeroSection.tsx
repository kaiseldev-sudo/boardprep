import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-vet.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Veterinarian caring for a dog"
          className="w-full h-full object-cover object-center sm:object-left-center md:object-right-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Enhanced overlay for mobile to improve text readability and focus */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent md:from-black/50 md:via-black/30 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p className="animate-fade-up text-accent font-medium tracking-[0.2em] uppercase text-sm mb-6">
            Ed-Tech Board Exam Prep
          </p>

          {/* Headline */}
          <h1 className="animate-fade-up delay-100 font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-8">
            Master your board exam with{" "}
            <em className="not-italic text-accent">top-notch</em> drills.
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up delay-200 text-lg md:text-xl text-white mb-10 leading-relaxed max-w-xl font-light">
            Affordable but high-quality question drills curated by board topnotchers.
            Join our self-paced review classes and study at your own convenience.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4">
            <a href="/products/qa" className="w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                <span>Start Practice Drills</span>
                <ArrowRight size={18} />
              </Button>
            </a>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="/review/vet">
                View Review Classes
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center z-10 animate-fade-up delay-500">
        <div className="flex flex-col items-center gap-3">
          <span className="text-white text-xs tracking-[0.2em] uppercase">
            Scroll Down
          </span>
          <div className="relative w-px h-12 overflow-hidden">
            <div className="absolute inset-0 w-full bg-gradient-to-b from-white/60 to-transparent" />
            <div className="absolute inset-0 w-full h-8 bg-gradient-to-b from-transparent via-white to-transparent animate-scroll-flow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
