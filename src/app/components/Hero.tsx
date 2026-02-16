import { motion } from 'motion/react';
import { MessageCircle, ChevronDown } from 'lucide-react';
import heroImage from '../../assets/947038cd0980bba64179da3909c9e56efefdad7f.png';

export function Hero() {
  const scrollToNext = () => {
    const element = document.querySelector('#authority');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Alta Performance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/70 to-[#111111]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
          >
            Alta Performance Não É Sorte.{' '}
            <span className="text-[#E10600]">É Método.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
          >
            Consultoria personalizada com a metodologia PH TEAM
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.a
              href="https://wa.me/5575992179232?text=Olá! Quero conhecer a consultoria PH TEAM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E10600] text-white px-10 py-5 text-lg flex items-center gap-3 hover:bg-[#c10500] transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="group-hover:rotate-12 transition-transform" />
              Quero minha transformação
            </motion.a>

            {/* Secondary CTA */}
            <motion.button
              onClick={scrollToNext}
              className="border-2 border-white text-white px-10 py-5 text-lg hover:bg-white hover:text-[#111111] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conhecer o método
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
}
