import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import Services from './components/Services';
import GovernmentResources from './components/GovernmentResources';
import TaxCalculators from './components/TaxCalculators';
import LoanCalculators from './components/LoanCalculators';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Partners />
        <Services />
        <GovernmentResources />
        <TaxCalculators />
        <LoanCalculators />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
