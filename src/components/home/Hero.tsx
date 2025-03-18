
import { useEffect, useRef } from 'react';
import Button from '../ui/Button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      const moveX = x * 20 - 10;
      const moveY = y * 20 - 10;
      
      const layers = heroRef.current.querySelectorAll('.parallax-layer');
      
      layers.forEach((layer, i) => {
        const depth = (i + 1) * 0.2;
        const translateX = moveX * depth;
        const translateY = moveY * depth;
        
        (layer as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-layer absolute top-20 right-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="parallax-layer absolute bottom-20 left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Content */}
        <div className="w-full lg:w-1/2 z-10">
          <div className="animate-fade-up">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Innovative Digital Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
              Building Smart Digital Solutions
              <span className="text-accent">.</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8 max-w-xl text-balance">
              We provide expert services in Web Development, Android Applications, and AI-based Projects. Transform your ideas into reality with Attica Corporations.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button to="/contact" variant="primary" size="lg">
                Hire Us
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Get a Quote
              </Button>
              <Button to="/portfolio" variant="ghost" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
        
        {/* Image/Illustration */}
        <div className="w-full lg:w-1/2 animation-delay-300 animate-fade-up z-10">
          <div className="relative">
            <div className="parallax-layer absolute -top-10 -left-10 w-40 h-40 rounded-2xl bg-accent/10 blur-md"></div>
            <div className="parallax-layer absolute -bottom-10 -right-10 w-40 h-40 rounded-2xl bg-primary/10 blur-md"></div>
            
            <div className="relative z-10 rounded-3xl overflow-hidden border border-border shadow-xl float">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80" 
                alt="Digital Solutions" 
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in animation-delay-900">
        <p className="text-sm text-foreground/60 mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-foreground/60 rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
