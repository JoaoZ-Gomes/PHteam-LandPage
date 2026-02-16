import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import pedroImage from '../../assets/90baf6235aa140493d88a71ab2f4ba9b6cf05db0.png';
import phTeamLogo from '../../assets/55e335312512861d8a06e54d00b45ef824a2c347.png';

export function Authority() {
  const stats = [
    { number: '50+', label: 'Alunos Transformados' },
    { number: '3+', label: 'Anos de Experiência' },
    { number: '100%', label: 'Metodologia Comprovada' },
  ];

  return (
    <section id="authority" className="py-24 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={pedroImage}
                alt="Pedro Henrique"
                className="w-full h-auto"
              />
              {/* PH TEAM Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-[#E10600] p-4 shadow-2xl"
              >
                <img src={phTeamLogo} alt="PH TEAM" className="h-16 w-auto" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Pedro Henrique
              <span className="block text-[#E10600] mt-2">Consultor PH TEAM</span>
            </h2>

            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Especialista em alta performance e transformação física. Com formação pela metodologia PH TEAM, desenvolvo planos personalizados que entregam resultados reais e sustentáveis.
            </p>

            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Minha missão é simples: transformar seu potencial em resultado através de um método comprovado, acompanhamento próximo e estratégias personalizadas.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {[
                'Consultoria 100% personalizada',
                'Acompanhamento semanal',
                'Suporte direto via WhatsApp',
                'Metodologia PH TEAM',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-[#E10600] flex-shrink-0" size={24} />
                  <span className="text-white/80">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl text-[#E10600] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
