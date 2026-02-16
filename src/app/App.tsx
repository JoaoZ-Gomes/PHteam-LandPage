import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Authority } from './components/Authority';
import { Services } from './components/Services';
import { Results } from './components/Results';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Header } from './components/Header';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#111111] text-white overflow-x-hidden">
      <Header scrolled={scrolled} />
      <Hero />
      <Authority />
      <Services />
      <Results />
      <Testimonials />
      <Process />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
