import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import phTeamLogo from '../../assets/55e335312512861d8a06e54d00b45ef824a2c347.png';

interface HeaderProps {
  scrolled: boolean;
}

export function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Sobre', href: '#authority' },
    { label: 'Serviços', href: '#services' },
    { label: 'Resultados', href: '#results' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Processo', href: '#process' },
  ];

  const handleClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#111111]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <img src={phTeamLogo} alt="PH TEAM" className="h-12 w-auto" />
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleClick(item.href)}
                className="text-white/80 hover:text-[#E10600] transition-colors duration-300"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            href="https://wa.me/5575992179232"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-[#E10600] text-white px-6 py-3 hover:bg-[#c10500] transition-all duration-300 hover:scale-105"
          >
            Fale Comigo
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#111111] md:hidden pt-24"
          >
            <nav className="flex flex-col items-center gap-6 p-8">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className="text-2xl text-white/80 hover:text-[#E10600] transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/5575992179232"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-[#E10600] text-white px-8 py-4 text-xl hover:bg-[#c10500] transition-all duration-300"
              >
                Fale Comigo
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
