import { Gamepad2, Brain, Rocket, Coins } from 'lucide-react';

const integrationCards = [
  {
    icon: <Gamepad2 className="w-5 h-5 text-gold" />,
    title: 'Економіка геймдеву',
    description: 'Вивчаємо дроби, пропорції та теорію ймовірностей через механіки Roblox, Minecraft та економічні цикли IT-ігор.'
  },
  {
    icon: <Brain className="w-5 h-5 text-gold" />,
    title: 'Алгоритми AI',
    description: 'Розбираємо координатні площини, логічні вирази та функції на прикладі навчання нейронних мереж.'
  },
  {
    icon: <Rocket className="w-5 h-5 text-gold" />,
    title: 'IT-стартапи',
    description: 'Знайомимося з відсотками та прогресіями через розрахунок капіталізації та фінансові моделі технологічних стартапів.'
  },
  {
    icon: <Coins className="w-5 h-5 text-gold" />,
    title: 'Цифрові фінанси',
    description: 'Основи криптографії, блокчейн-логіка та розподіл ресурсів — це справжня жива алгебра.'
  }
];

export default function Mentorship() {
  return (
    <section className="py-20 lg:py-28 bg-[#0D2240] relative overflow-hidden" id="mentorship">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Editorial Typography and Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-sans uppercase font-semibold text-gold tracking-[0.25em] block">
              Нова філософія навчання
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
              Ми не просто репетитори.<br />Ми — ментори.
            </h2>
            <div className="w-16 h-0.5 bg-gold/40"></div>

            <div className="space-y-6 text-[#EBF0F6]/80 font-sans font-light leading-relaxed text-sm sm:text-base">
              <p>
                Більшість підлітків ненавидять математику не тому, що мають гуманітарний склад розуму, а тому, що бачать у ній безглузду муштру з відірваними від життя формулами.
              </p>
              <p>
                Ми говоримо на одній хвилі з поколінням Alpha та Gen Z. Ми не вимагаємо зазубрювати абстрактні правила під наглядом суворого вчителя. Наші ментори — це старші надійні партнери, які допомагають відкрити дивовижне прикладне значення точних наук у сучасному цифровому світі.
              </p>
              <p className="font-serif text-[#A3B18A] italic text-base sm:text-lg">
                «Математика в Mentor Math — це не мука заради оцінки, а захоплива подорож до опанування коду реальності.»
              </p>
            </div>
          </div>

          {/* Right Side: 4 Bento Columns representing real-world Math integration */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {integrationCards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white/[0.01] border border-white/[0.04] hover:border-[#A3B18A]/40 rounded-sm space-y-4 transition-all duration-300"
                >
                  <div className="inline-flex p-2.5 bg-white/[0.03] border border-white/[0.08] rounded-sm text-gold">
                    {card.icon}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/50 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
