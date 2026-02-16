import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import pedroImg from '../../assets/aaron-brogden-9y4MaTz2Js0-unsplash.jpg';
import carlosImg from '../../assets/han-wei-sheng-5Lp7PJONCFw-unsplash.jpg';
import rafaelImg from '../../assets/kobe-kian-clata-SX-ujI961Xk-unsplash.jpg';
import lucasImg from '../../assets/sule-makaroglu-YFmvjO3TP_s-unsplash.jpg';

export function Results() {
  const transformations = [
    {
      name: 'Julio Primo',
      result: 'Transformação Real',
      category: 'Consultor - Fitness',
      image: pedroImg,
    },
    {
      name: 'Carlos Oliveira',
      result: '+8kg de massa magra',
      category: 'Ganho de Massa',
      image: carlosImg,
    },
    {
      name: 'Rafael Santos',
      result: 'De sedentário a atleta',
      category: 'Transformação Total',
      image: rafaelImg,
    },
    {
      name: 'Lucia Pereira',
      result: 'Performance 200%+',
      category: 'Alta Performance',
      image: lucasImg,
    },
  ];

  return (
    <section id="results" className="py-24 bg-[#111111]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            Transformações <span className="text-[#E10600]">Reais</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Resultados que falam por si. Metodologia que funciona.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {transformations.map((transformation, index) => (
            <motion.div
              key={transformation.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden bg-[#2A2A2A] cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="aspect-[3/4] bg-gradient-to-br from-[#2A2A2A] to-[#111111] flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src={transformation.image}
                  alt={transformation.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#E10600]/90 via-[#E10600]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <div className="text-sm uppercase tracking-wider mb-2 opacity-90">
                      {transformation.category}
                    </div>
                    <div className="text-2xl mb-1">
                      {transformation.result}
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#111111] to-transparent p-6">
                <div className="text-sm text-white/60 mb-1">{transformation.category}</div>
                <div className="text-white">{transformation.name}</div>
                <div className="text-[#E10600] mt-1">{transformation.result}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-white/70 mb-6">
            Seja o próximo caso de sucesso
          </p>
          <a
            href="https://wa.me/5575992179232?text=Quero minha transformação"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent border-2 border-[#E10600] text-[#E10600] px-10 py-4 text-lg hover:bg-[#E10600] hover:text-white transition-all duration-300"
          >
            Iniciar Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
