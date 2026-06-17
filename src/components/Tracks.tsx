import { motion } from 'motion/react';
import { EDUCATION_TRACKS } from '../data';
import { Check, Star, ArrowRight } from 'lucide-react';

export default function Tracks() {
  const handleScrollToQuiz = () => {
    const target = document.getElementById('quiz-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0A192F] relative" id="tracks">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="text-xs font-sans uppercase font-semibold text-gold tracking-[0.25em] block">
            Основні програми навчання
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
            Оберіть освітній трек вашого підлітка
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto"></div>
          <p className="text-base sm:text-lg font-sans text-white/60 font-light leading-relaxed">
            Потреби кожної родини в еміграції унікальні. Ми адаптуємо навчання під конкретну закордонну систему або цільовий університетський грант.
          </p>
        </div>

        {/* 3 Grid Tracks Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EDUCATION_TRACKS.map((track, idx) => (
            <motion.div
              key={track.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex flex-col h-full bg-[#0D2240] border border-white/[0.04] rounded-sm p-6 relative overflow-hidden group hover:border-gold/30 transition-all duration-300 shadow-xl"
            >
              {/* Optional highlight accent loop for premium SAT prep track */}
              {idx === 2 && (
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gold/10 rounded-full blur-xl"></div>
              )}

              {/* Age pill/Header info */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-sans uppercase font-bold text-gold tracking-widest px-3 py-1 bg-gold/5 border border-gold/15 rounded-sm">
                  {track.ageGroup}
                </span>
                {idx === 2 && (
                  <span className="flex items-center gap-1.5 text-[10px] font-sans uppercase font-bold text-sage tracking-wider">
                    <Star className="w-3.5 h-3.5 fill-sage text-sage" />
                    РЕКОМЕНДОВАНО
                  </span>
                )}
              </div>

              {/* Title & Desc */}
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                {track.title}
              </h3>
              
              <p className="font-sans text-xs text-white/70 block opacity-60 font-light mb-8 leading-relaxed">
                {track.description}
              </p>

              {/* Features checklist */}
              <div className="flex-grow space-y-4 mb-10 pt-6 border-t border-white/[0.05]">
                {track.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className="p-1 bg-sage/10 text-sage rounded-sm flex-shrink-0 mt-0.5 group-hover:bg-gold/10 group-hover:text-gold transition-colors duration-300">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-sans text-xs text-white/80 font-light leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button inside card */}
              <motion.button
                onClick={handleScrollToQuiz}
                className="w-full text-center py-3.5 rounded-sm border border-gold/30 hover:border-gold hover:bg-gold hover:text-midnight font-sans font-medium text-xs tracking-wider uppercase text-white bg-transparent transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                Залишити запит
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
