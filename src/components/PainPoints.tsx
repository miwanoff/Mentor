import { motion } from 'motion/react';
import { PAIN_POINTS } from '../data';
import { MessageSquareOff, Compass, AlertCircle } from 'lucide-react';

const icons = [
  <MessageSquareOff className="w-6 h-6 text-gold" key="1" />,
  <Compass className="w-6 h-6 text-gold" key="2" />,
  <AlertCircle className="w-6 h-6 text-gold" key="3" />
];

export default function PainPoints() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A192F] relative" id="pain-points">
      {/* Absolute faint grids and stars represent logical sky */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* H2 Header & Section Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <span className="text-xs font-sans uppercase font-semibold text-gold tracking-[0.25em]">
            Прихована криза підлітків-емігрантів
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
            Коли знання є, але мова заважає їх показати
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto"></div>
          <p className="text-base sm:text-lg font-sans text-white/70 font-light leading-relaxed">
            Тисячі талановитих українських підлітків стикаються з невидимим академічним випробуванням. Вони знали математику на «відмінно» вдома, але в нових школах Великої Британії, США чи Німеччини раптом опинилися на задніх партах і почали мовчати.
          </p>
        </div>

        {/* 3 Interactive Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PAIN_POINTS.map((card, idx) => (
            <motion.div
              key={card.id}
              whileHover={{ y: -8, borderColor: '#C5A059', boxShadow: '0 10px 30px -15px rgba(197, 160, 89, 0.2)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex flex-col h-full bg-white/[0.01] border border-sage rounded-sm p-6 cursor-pointer relative group transition-colors duration-300"
            >
              {/* Card visual header */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-white/[0.03] border border-white/[0.08] rounded-sm group-hover:bg-gold/5 group-hover:border-gold/30 transition-colors">
                  {icons[idx]}
                </div>
                <span className="font-mono text-sm text-[#A3B18A] opacity-50 group-hover:opacity-100 transition-opacity">
                  0{idx + 1}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-4 group-hover:text-gold transition-colors">
                {card.title}
              </h3>
              <p className="font-sans text-xs text-white/70 block opacity-60 leading-relaxed flex-grow">
                {card.description}
              </p>
              
              {/* Bottom stylized card accent list line */}
              <div className="mt-6 w-8 h-px bg-sage/30 group-hover:w-full group-hover:bg-gold/40 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Section Summary Quote / Closing message */}
        <div className="mt-16 lg:mt-24 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-sm bg-white/[0.01] border border-white/[0.03] relative overflow-hidden"
          >
            {/* Soft decorative quote glyph */}
            <span className="absolute -top-6 -left-2 text-[120px] font-serif text-sage/5 select-none pointer-events-none">
              “
            </span>
            <p className="font-serif text-lg sm:text-xl lg:text-2xl text-sage italic leading-relaxed relative z-10">
              «Ви не маєте платити тисячі фунтів чи євро закордонним репетиторам, які не розуміють менталітету вашої дитини. Для адаптації потрібен міст, а не просто перекладач.»
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
