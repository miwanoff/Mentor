import { Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const handleScrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A192F] text-white pt-16 pb-8 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.04]">
          
          {/* Column 1: Brand Description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              {/* Minimalist owl logo inline SVG */}
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-gold" fill="currentColor">
                <path d="M50,15 C40,15 32,23 32,33 C32,41 38,48 45,50 L45,65 L55,65 L55,50 C62,48 68,41 68,33 C68,23 60,15 50,15 Z" />
                <circle cx="47" cy="33" r="3" fill="#0A192F" />
                <circle cx="63" cy="33" r="3" fill="#0A192F" />
              </svg>
              <h3 className="font-serif text-xl font-semibold tracking-wide">Mentor Math</h3>
            </div>
            
            <p className="text-sm font-sans text-sage/80 leading-relaxed font-light">
              Міжнародна онлайн-школа математики англійською мовою за методологією CLIL. Перетворюємо складну термінологію на впевненість у майбутньому вже сьогодні.
            </p>
            
            <p className="text-xs font-sans text-white/40 pt-2">
              © 2026 Mentor Math. Усі права захищено.
            </p>
          </div>

          {/* Column 2: Navigation Bookmarks */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold font-sans">
              Навігація
            </h4>
            <ul className="space-y-2.5 text-sm font-sans font-light text-white/60">
              <li>
                <button
                  onClick={() => handleScrollToSection('tracks')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Програми навчання
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('clil-methodology')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Методологія CLIL
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('mentorship')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Філософія менторства
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('faq')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Часті питання
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Links (Stripe Compliance) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold font-sans">
              Юридична інформація
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans font-light text-white/50">
              <li>
                <a href="#offer" className="hover:text-gold transition-colors">
                  Публічна оферта
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-gold transition-colors">
                  Політика конфіденційності
                </a>
              </li>
              <li>
                <a href="#refund" className="hover:text-gold transition-colors">
                  Правила та умови повернення коштів
                </a>
              </li>
              <li className="pt-2 text-white/40 leading-relaxed text-[11px]">
                <strong>Юридичні реквізити:</strong><br />
                ФОП Коваленко М. А.<br />
                ІПН: 2847593021<br />
                м. Київ, вул. Ломоносова, 24
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Care & Contacts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold font-sans">
              Зв’язатися
            </h4>
            <div className="space-y-3 font-sans font-light text-sm text-white/70">
              <a
                href="mailto:hello@mentor-math.com"
                className="flex items-center gap-2 hover:text-gold transition-colors text-xs sm:text-sm"
              >
                <Mail className="w-4 h-4 text-gold" />
                hello@mentor-math.com
              </a>
              <p className="text-xs text-white/40 leading-relaxed">
                Турбота про кожну родину. Наші менеджери працюють щодня з 10:00 до 20:00 за київським часом.
              </p>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.02] border border-white/[0.05] rounded-sm">
                <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-[10px] uppercase text-sage font-sans tracking-wider">
                  Закодовано 256-bit SSL
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Bar */}
        <div className="mt-8 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs font-sans font-light text-white/40">
            Розроблено з повагою до логіки та підлітків.
          </span>

          {/* Monochrome Credit Card payment icons vector assets representation */}
          <div className="flex items-center gap-3 opacity-30 group hover:opacity-75 transition-opacity duration-300">
            {/* Visa */}
            <svg viewBox="0 0 48 30" className="w-10 h-7 fill-current text-white">
              <rect width="48" height="30" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
              <path d="M12,9 L15,21 L18,21 L21,9 L18,9 L16.5,16.5 L15,9 Z" />
              <rect x="23" y="9" width="3" height="12" />
              <path d="M30,9 L34,21 L38,9 L35,9 L34,14 L33,9 Z" />
            </svg>
            
            {/* Mastercard */}
            <svg viewBox="0 0 48 30" className="w-10 h-7 fill-current text-white">
              <rect width="48" height="30" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="20" cy="15" r="7" />
              <circle cx="28" cy="15" r="7" className="opacity-70" />
            </svg>

            {/* Apple Pay */}
            <svg viewBox="0 0 48 30" className="w-10 h-7 fill-current text-white">
              <rect width="48" height="30" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
              <path d="M16,13 C16,9.5 18,9.5 18,9.5 C18,9.5 18,12.5 16.5,14 Z" />
              <path d="M16,15 C13,15 11,17.5 11,19.5 C11,21.5 12.5,23 15,23 C17.5,23 19,21 19,19.5 C19,15 16,15 16,15 Z" />
              <rect x="22" y="9" width="9" height="3" />
              <rect x="25" y="14" width="3" height="9" />
            </svg>

            {/* Google Pay */}
            <svg viewBox="0 0 48 30" className="w-10 h-7 fill-current text-white">
              <rect width="48" height="30" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="18" cy="15" r="5" />
              <path d="M25,12 L35,12 L35,14 L27,14 L27,17 L33,17 L33,19 L27,19 L27,22 L25,22 Z" />
            </svg>
          </div>
        </div>

      </div>
    </footer>
  );
}
