import { MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function Concierge() {
  return (
    <section className="py-16 bg-[#0D2240] relative border-b border-white/[0.02]" id="concierge-section">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A192F]/60 border border-white/[0.05] rounded-sm p-8 lg:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sage/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Premium Care Manager Portrait Placeholder */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-gold to-sage rounded-sm blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative w-36 h-36 rounded-sm overflow-hidden border-2 border-gold/40 bg-midnight flex items-center justify-center">
                  {/* Clean professional geometric vector avatar rendering representing our caretaker Maryna */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-gold/80 p-2"
                    fill="currentColor"
                  >
                    {/* Head, shoulders, hair outline stylized elegantly */}
                    <path d="M50,15 C40,15 32,23 32,33 C32,45 42,55 50,55 C58,55 68,45 68,33 C68,23 60,15 50,15 Z" fill="#C5A059" className="opacity-20" stroke="#C5A059" strokeWidth="1" />
                    <circle cx="50" cy="31" r="14" fill="#C5A059" />
                    <path d="M50,48 C35,48 20,58 20,75 L80,75 C80,58 65,48 50,48 Z" fill="#C5A059" />
                    {/* Tiny glasses representing intellect */}
                    <path d="M38,31 Q44,28 50,31 Q56,28 62,31" stroke="#0A192F" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
                {/* Active Support Status dot */}
                <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 border-2 border-[#0A192F] rounded-full animate-pulse"></span>
              </div>

              <div className="mt-4 space-y-1">
                <h4 className="font-serif text-lg font-semibold text-white">Марина</h4>
                <p className="text-xs text-sage font-sans uppercase tracking-widest">Керівник турботи про клієнтів</p>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-sm text-[10px] font-sans text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" /> На зв’язку
                </span>
              </div>
            </div>

            {/* Right Column: Reassuring Support Messaging & Actions */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-sans uppercase font-semibold text-gold tracking-[0.2em] block">
                  Освітній консьєрж-сервіс
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight">
                  Кожна родина та школа унікальні. Даруємо спокій.
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-white/70 font-light leading-relaxed">
                Знаємо, наскільки складно буває розібратися в тонкощах закордонної освіти: GCSE чи A-Levels у Лондоні, IB в Мюнхені, чи складні американські тексти SAT. Наша служба турботи завжди готова вислухати вашу історію індивідуально. 
              </p>
              
              <p className="font-sans text-sm sm:text-base text-white/70 font-light leading-relaxed">
                Якщо у вас є особливий запит, нестандартний розклад, або ви хочете просто поспілкуватися з живою людиною перед записом — ми чекаємо на вас у будь-корисному месенджері.
              </p>

              {/* Directly Accessible Chat CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* WhatsApp button with WhatsApp brand tone colors */}
                <a
                  href="https://wa.me/380990000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-medium text-xs tracking-wider uppercase rounded-sm shadow-lg transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Написати у WhatsApp
                </a>

                {/* Telegram button with Telegram brand tone */}
                <a
                  href="https://t.me/mentor_math"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-sans font-medium text-xs tracking-wider uppercase rounded-sm shadow-lg transition-colors duration-300"
                >
                  <Send className="w-4 h-4" />
                  Написати в Telegram
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
