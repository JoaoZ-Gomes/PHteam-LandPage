import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-32 bg-[#2A2A2A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #E10600 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            Você Pode Continuar Igual.
            <span className="block text-[#E10600] mt-4">Ou Evoluir Agora.</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed">
            Cada dia que passa sem ação é um dia a menos de resultados.<br />
            A decisão é sua. A metodologia, comprovada.
          </p>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/5575992179232?text=Estou pronto para evoluir com a consultoria PH TEAM"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-[#E10600] text-white px-12 py-6 text-xl hover:bg-[#c10500] transition-all duration-300 group shadow-2xl shadow-[#E10600]/20"
          >
            <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
            Quero Evoluir Agora
            <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
          </motion.a>

          {/* Urgency Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-white/60 text-sm"
          >
            Vagas limitadas • Atendimento personalizado
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
