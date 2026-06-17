import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Hero() {
  const handleScrollToQuiz = () => {
    const target = document.getElementById('quiz-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden py-16 lg:py-28 bg-[#0A192F] border-b border-white/[0.02]">
      {/* Subtle background ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-sage/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Hero Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-6"
            >
              {/* Pre-heading eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-sm">
                <span className="w-1.5 h-1.5 bg-gold rounded-full animate-ping"></span>
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#EBF0F6]/90">
                  МЕТОДОЛОГІЯ CLIL · ТУРБОТА ТА ЛОГІКА
                </span>
              </div>

              {/* H1 Heading */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-3xl font-semibold leading-[1.1] text-white tracking-tight">
                Перетворюємо <span className="text-gold italic block sm:inline">мовний бар'єр</span> на академічний успіх.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg font-sans text-sage text-sm leading-relaxed mb-6">
                Міжнародна онлайн-школа математики англійською мовою за стандартами Великої Британії та США. Допомагаємо підліткам 12–17 років подолати стрес еміграції, наздогнати закордонну програму та закохатися в точні науки.
              </p>

              {/* CTA Widget area */}
              <div className="pt-4 space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <motion.button
                    onClick={handleScrollToQuiz}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-gold hover:brightness-110 text-midnight font-sans font-semibold text-sm tracking-widest uppercase rounded-sm transition-all duration-300 cursor-pointer"
                  >
                    Забронювати заняття-адаптацію
                    <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                  </motion.button>
                </div>

                {/* Micro-text below CTA */}
                <div className="flex items-start gap-2.5 max-w-xl text-xs sm:text-sm text-white/50 font-sans font-light">
                  <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Безкоштовно.</strong> Складемо індивідуальну карту термінологічних розбіжностей дитини, оцінимо рівень бази й розуміння англійської лексики.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Athena/Math Animated Geometric SVG Lineart */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-[400px] aspect-square"
            >
              {/* Golden circular frame / orbit indicator */}
              <div className="absolute inset-0 border border-gold/10 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none"></div>
              <div className="absolute inset-[30px] border border-sage/10 rounded-full animate-[spin_45s_linear_infinite_reverse] pointer-events-none"></div>

              {/* Math graph grid background helper */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10 pointer-events-none">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="border border-white/[0.05]"></div>
                ))}
              </div>

              {/* Animated Geometric Owl-Shield-Math Core Artwork */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full text-gold/80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                {/* Polar mathematical lines / concentric coordinate framework */}
                <circle cx="200" cy="200" r="140" strokeDasharray="3,3" className="opacity-40" />
                <circle cx="200" cy="200" r="90" strokeDasharray="6,4" className="opacity-55" />
                <circle cx="200" cy="200" r="40" className="opacity-30" />

                <line x1="200" y1="40" x2="200" y2="360" strokeDasharray="2,4" className="opacity-35" />
                <line x1="40" y1="200" x2="360" y2="200" strokeDasharray="2,4" className="opacity-35" />

                {/* Mathematical sine/cosine functions intersecting to represent communication blockages (wave-guide) */}
                <path
                  d="M 60,200 Q 130,280 200,200 T 340,200"
                  className="stroke-sage opacity-50"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                />
                <path
                  d="M 60,200 Q 130,120 200,200 T 340,200"
                  className="stroke-gold/60"
                  strokeWidth="1"
                />

                {/* Shield Outline of Athena (wisdom & security) */}
                <path
                  d="M 200,70 C 270,70 290,120 290,180 C 290,260 200,310 200,330 C 200,310 110,260 110,180 C 110,120 130,70 200,70 Z"
                  className="stroke-gold"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Stylized Owl Feather and Math Intersect vectors */}
                <g className="stroke-sage" strokeWidth="1.5">
                  <path d="M 200,100 L 250,150 L 200,200 L 150,150 Z" className="opacity-75" />
                  <path d="M 200,200 L 250,250 L 200,300 L 150,250 Z" className="opacity-75" />
                </g>

                {/* Center node: Athena's Owl minimalist stylized layout */}
                <g className="stroke-gold" strokeWidth="1.8">
                  {/* Eyes / Infinity of Logic */}
                  <circle cx="175" cy="165" r="15" />
                  <circle cx="225" cy="165" r="15" />
                  <circle cx="175" cy="165" r="3" fill="#C5A059" />
                  <circle cx="225" cy="165" r="3" fill="#C5A059" />
                  {/* Beak / Triangle of wisdom */}
                  <polygon points="194,175 206,175 200,187" />
                  {/* Eyebrows */}
                  <path d="M 155,150 C 165,152 180,158 188,162" strokeLinecap="round" />
                  <path d="M 245,150 C 235,152 220,158 212,162" strokeLinecap="round" />
                </g>

                {/* Intersecting tangent projection coordinates */}
                <circle cx="200" cy="70" r="4" fill="#C5A059" />
                <circle cx="290" cy="180" r="4" fill="#A3B18A" />
                <circle cx="110" cy="180" r="4" fill="#A3B18A" />
                <circle cx="200" cy="330" r="4" fill="#C5A059" />
              </svg>

              {/* Floating math label tags for premium scholastic vibe */}
              <div className="absolute top-12 left-4 px-2.5 py-1 bg-[#0A192F]/90 border border-[#A3B18A]/20 rounded text-[10px] font-mono text-sage tracking-wider">
                f(x) = ax² + bx + c
              </div>
              <div className="absolute bottom-16 right-0 px-2.5 py-1 bg-[#0A192F]/90 border border-[#C5A059]/20 rounded text-[10px] font-mono text-gold tracking-wider">
                r = a(1 - cos θ)
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
