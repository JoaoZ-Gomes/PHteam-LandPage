import { motion } from 'motion/react';
import { ClipboardCheck, LineChart, Dumbbell, Trophy } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: ClipboardCheck,
      number: '01',
      title: 'Avaliação',
      description: 'Anamnese completa para entender seu histórico, objetivos, limitações e estilo de vida.',
    },
    {
      icon: LineChart,
      number: '02',
      title: 'Planejamento',
      description: 'Criação do plano estratégico personalizado com periodização e progressão inteligente.',
    },
    {
      icon: Dumbbell,
      number: '03',
      title: 'Execução',
      description: 'Acompanhamento próximo, ajustes semanais e suporte direto para garantir evolução.',
    },
    {
      icon: Trophy,
      number: '04',
      title: 'Evolução',
      description: 'Resultados reais e consistentes através de metodologia comprovada e disciplina.',
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#111111]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            Como <span className="text-[#E10600]">Funciona</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Um processo estruturado para resultados consistentes
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-white/10">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-[#E10600] origin-left"
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="text-center"
                  >
                    {/* Icon Circle */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative mx-auto w-40 h-40 bg-[#2A2A2A] border-4 border-[#E10600] rounded-full flex items-center justify-center mb-6 group cursor-pointer"
                    >
                      <Icon className="text-[#E10600] group-hover:scale-110 transition-transform" size={48} />
                      
                      {/* Number Badge */}
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#E10600] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg">
                        {step.number}
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl mb-4">{step.title}</h3>

                    {/* Description */}
                    <p className="text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-6 items-start"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative w-20 h-20 bg-[#2A2A2A] border-2 border-[#E10600] rounded-full flex items-center justify-center">
                      <Icon className="text-[#E10600]" size={32} />
                      <div className="absolute -bottom-2 -right-2 bg-[#E10600] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl mb-3">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-white/70 mb-6">
            Pronto para começar sua transformação?
          </p>
          <a
            href="https://wa.me/5575992179232?text=Quero iniciar minha consultoria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E10600] text-white px-12 py-5 text-lg hover:bg-[#c10500] transition-all duration-300 hover:scale-105"
          >
            Falar com Pedro Henrique
          </a>
        </motion.div>
      </div>
    </section>
  );
}
