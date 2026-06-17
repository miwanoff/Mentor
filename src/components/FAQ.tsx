import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0D2240] relative" id="faq">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-sans uppercase font-semibold text-gold tracking-[0.25em] block">
            Маєте сумніви чи запитання?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
            Часті питання від турботливих батьків
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto"></div>
        </div>

        {/* Custom React Accordion with Motion layout layout animations */}
        <div className="space-y-4">
          {FAQ_ITEMS.map(item => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white/[0.01] border border-white/[0.05] rounded-sm overflow-hidden hover:border-[#A3B18A]/40 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <span className="font-serif text-lg sm:text-xl font-semibold text-white">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Animated expandable body height */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 pl-14 text-sm sm:text-base text-white/70 font-sans font-light leading-relaxed border-t border-white/[0.03]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
