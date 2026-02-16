import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Message Tooltip */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-20 right-0 bg-white text-[#111111] p-4 rounded-lg shadow-2xl w-64 mb-2"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-2 text-[#111111]/40 hover:text-[#111111]"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
                <p className="pr-4">
                  <strong className="text-[#E10600]">Olá! 👋</strong>
                  <br />
                  Pronto para começar sua transformação?
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/5575992179232?text=Olá! Vim do site e quero saber mais sobre a consultoria"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="flex items-center justify-center w-16 h-16 bg-[#E10600] hover:bg-[#c10500] text-white rounded-full shadow-2xl transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <MessageCircle size={28} />
            </motion.div>
          </motion.a>

          {/* Pulse Effect */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-full h-full bg-[#E10600] rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
