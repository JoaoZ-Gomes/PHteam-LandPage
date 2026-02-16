import { motion } from 'motion/react';
import Slider from 'react-slick';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Bruno Almeida',
      role: 'Empresário',
      image: 'photo-1506794778202-cad84cf45f1d',
      rating: 5,
      text: 'A consultoria com Pedro mudou completamente minha relação com o treino. Resultados reais, acompanhamento próximo e suporte sempre que preciso. Metodologia PH TEAM é diferenciada.',
    },
    {
      name: 'Rodrigo Costa',
      role: 'Engenheiro',
      image: 'photo-1507003211169-0a1dd7228f2d',
      rating: 5,
      text: 'Nunca havia conseguido manter consistência antes. Com o método personalizado e os ajustes semanais, finalmente estou vendo evolução constante. Melhor investimento que fiz.',
    },
    {
      name: 'Felipe Mendes',
      role: 'Advogado',
      image: 'photo-1500648767791-00dcc994a43e',
      rating: 5,
      text: 'Profissionalismo e resultados andam juntos aqui. Pedro entende do assunto e sabe exatamente como extrair o máximo potencial. Transformação física e mental.',
    },
    {
      name: 'Thiago Ribeiro',
      role: 'Analista de Sistemas',
      image: 'photo-1519085360753-af0119f7cbe7',
      rating: 5,
      text: 'Suporte direto via WhatsApp faz toda diferença. Qualquer dúvida é respondida rapidamente. O acompanhamento é realmente individualizado e eficiente.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-24 bg-[#2A2A2A] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            O Que Dizem <span className="text-[#E10600]">Meus Alunos</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Depoimentos reais de quem transformou com a consultoria PH TEAM
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3">
                <div className="bg-[#111111]/50 backdrop-blur-sm p-8 border border-white/10 h-full">
                  {/* Quote Icon */}
                  <Quote className="text-[#E10600] mb-4" size={32} />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-[#E10600] fill-[#E10600]"
                        size={20}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-white/80 mb-6 leading-relaxed min-h-[120px]">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <ImageWithFallback
                      src={`https://images.unsplash.com/${testimonial.image}?w=80&h=80&fit=crop`}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-white mb-1">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
