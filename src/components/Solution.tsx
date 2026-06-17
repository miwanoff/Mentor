import { motion } from 'motion/react';
import { BookOpen, RefreshCw, Layers, ShieldCheck } from 'lucide-react';

export default function Solution() {
  return (
    <section className="py-20 lg:py-28 bg-[#0D2240] ring-1 ring-white/[0.02]" id="clil-methodology">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content and Explanations */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-sans uppercase font-semibold text-gold tracking-[0.25em] block">
                Наша методика навчання
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
                Методологія CLIL: Вчимо думати математикою, а не зубрити переклад
              </h2>
              <div className="w-16 h-0.5 bg-gold/40"></div>
            </div>

            <div className="space-y-6 text-[#EBF0F6]/80 font-sans font-light leading-relaxed text-sm sm:text-base">
              <p>
                <strong>CLIL (Content and Language Integrated Learning)</strong> — це проривний європейський стандарт інтегрованого вивчення мови та предмету. Ми не зазубрюємо словники окремо, ми проживаємо математику англійською мовою. Дитина вчиться сприймати формули, теореми та логічні операції безпосередньо у мовному контексті США та Великої Британії.
              </p>
              
              <div className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-sm relative">
                <p className="italic text-sage font-serif text-base sm:text-lg">
                  «Дитина отримує подвійну цінність в один і той самий час: академічну математичну майстерність та природне володіння профільною термінологією англійської мови.»
                </p>
              </div>

              <p>
                Наші ментори — двомовні спеціалісти. У разі критичного нерозуміння чи виникнення психологічного затиску, ментор завжди робить <strong>мікро-крок назад в українську мову</strong>. Ми знімаємо емоційну напругу, спокійно пояснюємо суть феномену рідною мовою, а потім впевнено робимо три кроки вперед, закріплюючи знання англійською.
              </p>
            </div>

            {/* Micro bullet features with small icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-gold/10 rounded-sm text-gold flex-shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-white text-sm">Інтегроване вивчення</h4>
                  <p className="text-xs text-white/50">Вивчаємо складну термінологію в контексті математичних задач.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-sage/10 rounded-sm text-sage flex-shrink-0 mt-0.5">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-white text-sm">Двомовні ментори</h4>
                  <p className="text-xs text-white/50">М’яка зміна мови викладання для психологічного комфорту.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Infographics representing CLIL Integration */}
          <div className="lg:col-span-5 bg-white/[0.01] border border-white/[0.04] p-8 rounded-sm relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold/5 blur-3xl rounded-full"></div>
            
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
              Як працює трикутник успіху CLIL
            </h3>

            <div className="space-y-6 relative z-10">
              {/* Level 1: Math Knowledge */}
              <div className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/[0.05] rounded-sm">
                <div className="w-10 h-10 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center font-serif font-bold text-gold text-lg">
                  M
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase font-semibold text-gold tracking-widest block">Потужна база</span>
                  <p className="text-sm text-white font-medium">Шкільна математика та логіка</p>
                </div>
              </div>

              {/* Plus symbol */}
              <div className="flex justify-center -my-3">
                <span className="text-gold opacity-50 font-sans text-xl font-light">+</span>
              </div>

              {/* Level 2: English Vocabulary */}
              <div className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/[0.05] rounded-sm">
                <div className="w-10 h-10 rounded-sm bg-sage/10 border border-sage/20 flex items-center justify-center font-serif font-bold text-sage text-lg">
                  E
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase font-semibold text-[#A3B18A] tracking-widest block">Профільний словник</span>
                  <p className="text-sm text-white font-medium">Термінологія Великої Британії та США</p>
                </div>
              </div>

              {/* Plus symbol */}
              <div className="flex justify-center -my-3">
                <span className="text-gold opacity-50 font-sans text-xl font-light">+</span>
              </div>

              {/* Level 3: Psychological Comfort */}
              <div className="flex items-center gap-4 p-4 bg-white/[0.02] border border-[#A3B18A]/30 rounded-sm bg-[#A3B18A]/5">
                <div className="w-10 h-10 rounded-sm bg-sage/20 border border-sage flex items-center justify-center text-sage">
                  <ShieldCheck className="w-5 h-5 text-[#A3B18A]" />
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase font-semibold text-[#A3B18A] tracking-widest block">Безпека та турбота</span>
                  <p className="text-sm text-white font-medium">Супровід ментора без тиску оцінок</p>
                </div>
              </div>

              {/* Result Indicator */}
              <div className="mt-8 pt-6 border-t border-white/[0.05] text-center">
                <span className="text-[11px] font-sans uppercase text-white/40 tracking-[0.2em] block mb-2">
                  Результат студента
                </span>
                <span className="font-serif text-2xl text-gold font-semibold tracking-wide block">
                  Глобальний академічний капітал
                </span>
                <p className="text-xs text-white/50 font-sans font-light mt-1">
                  Абсолютна вільність відповідей та готовність до іспитів у будь-якій країні.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
