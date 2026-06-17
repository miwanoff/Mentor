import { motion } from 'motion/react';
import { STEPS_PATH } from '../data';
import { Sparkles } from 'lucide-react';

export default function Path() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A192F] relative" id="our-path">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="text-xs font-sans uppercase font-semibold text-gold tracking-[0.25em] block">
            Проста дорожня карта
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
            3 кроки до впевненості у майбутньому
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto"></div>
          <p className="text-base sm:text-lg font-sans text-white/60 font-light leading-relaxed">
            Почати дуже просто. Ми спланували перші кроки так, щоб дитина відчула підтримку з першої хвилини, а ви отримали повну ясність.
          </p>
        </div>

        {/* Timeline representation (Horizontal on desktop, stacked on mobile) */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-[43px] left-[15%] right-[15%] h-px bg-gradient-to-r from-gold/10 via-gold/50 to-gold/10 -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {STEPS_PATH.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center px-4 relative group"
              >
                {/* Number Square Bubble */}
                <div className="w-16 h-16 rounded-sm bg-midnight border-2 border-gold flex items-center justify-center font-serif text-2xl font-bold text-gold mb-6 shadow-lg group-hover:bg-gold group-hover:text-midnight transition-colors duration-400 relative">
                  0{step.number}
                  {idx === 2 && (
                    <Sparkles className="w-4 h-4 text-gold absolute -top-1 -right-1 group-hover:text-amber-500 transition-colors" />
                  )}
                  <div className="absolute inset-0 rounded-sm border border-gold/10 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                </div>

                {/* Step Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-gold transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="font-sans text-sm sm:text-base text-white/60 font-light leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
