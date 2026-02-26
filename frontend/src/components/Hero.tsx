import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/generated/hero-office.dim_1920x800.png)',
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75 animate-gradient"
          style={{
            backgroundImage:
              'linear-gradient(135deg, oklch(0.45 0.14 160 / 0.95), oklch(0.50 0.15 155 / 0.90), oklch(0.55 0.12 165 / 0.85), oklch(0.48 0.13 160 / 0.90))',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <img
              src="/assets/ca logo.png"
              alt="CA India Logo"
              className="h-20 md:h-24 w-auto"
            />
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
              Chartered Accountants
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            B R Bhandari & Co
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed italic">
            Ya Aeshu Suptaeshu Jagruti
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Trusted chartered accountancy services with 30+ years of experience. We provide comprehensive audit, tax,
            accounting, and financial consulting solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-6 h-auto"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6 h-auto"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
