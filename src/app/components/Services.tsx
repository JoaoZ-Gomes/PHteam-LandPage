import { motion } from 'motion/react';
import { MessageCircle, Calendar, TrendingUp, Users } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Users,
      title: 'Consultoria Online Individual',
      description: 'Planejamento 100% personalizado para seus objetivos e rotina. Você não é igual a ninguém, seu treino também não.',
      features: ['Anamnese completa', 'Plano estratégico', 'Suporte exclusivo'],
    },
    {
      icon: TrendingUp,
      title: 'Treino Personalizado',
      description: 'Periodização e metodologia PH TEAM adaptada ao seu nível, equipamento disponível e metas de performance.',
      features: ['Vídeos explicativos', 'Progressão inteligente', 'Técnica aprimorada'],
    },
    {
      icon: Calendar,
      title: 'Ajustes Semanais',
      description: 'Acompanhamento próximo com feedbacks e ajustes constantes para garantir evolução contínua e segura.',
      features: ['Check-in semanal', 'Ajuste de carga', 'Monitoramento ativo'],
    },
    {
      icon: MessageCircle,
      title: 'Suporte Direto WhatsApp',
      description: 'Tire dúvidas, envie vídeos de execução e receba orientação direta para manter sua evolução sempre no caminho certo.',
      features: ['Resposta rápida', 'Análise de treino', 'Motivação constante'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#2A2A2A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            Serviços <span className="text-[#E10600]">Premium</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Uma experiência completa de consultoria focada em resultados reais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-[#111111]/50 backdrop-blur-sm p-8 border border-white/10 hover:border-[#E10600]/50 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-[#E10600]/10 group-hover:bg-[#E10600]/20 transition-colors duration-300">
                    <Icon className="text-[#E10600]" size={32} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl mb-4 group-hover:text-[#E10600] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-white/60 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-[#E10600] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/5575992179232?text=Quero saber mais sobre a consultoria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#E10600] text-white px-10 py-5 text-lg hover:bg-[#c10500] transition-all duration-300 hover:scale-105"
          >
            <MessageCircle />
            Iniciar Consultoria
          </a>
        </motion.div>
      </div>
    </section>
  );
}
