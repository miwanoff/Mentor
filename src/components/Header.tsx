import { Mail, MessageCircle, Send } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-midnight/80 border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Text Logo with Athenian Owl Emblem */}
        <a href="#" className="flex items-center gap-3 group transition-transform duration-300">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-sm border border-gold/30 bg-midnight group-hover:border-gold/60 transition-colors">
            {/* Elegant Golden Athenian Owl SVG Inside Logo */}
            <svg
              viewBox="0 0 100 100"
              className="w-6 h-6 text-gold transition-transform duration-500 group-hover:rotate-12"
              fill="currentColor"
            >
              <path d="M50,15 C40,15 32,23 32,33 C32,41 38,48 45,50 L45,65 C40,66 35,69 32,73 C30,76 32,80 36,80 L64,80 C68,80 70,76 68,73 C65,69 60,66 55,65 L55,50 C62,48 68,41 68,33 C68,23 60,15 50,15 Z M42,33 C42,30 44,28 47,28 C50,28 52,30 52,33 C52,36 50,38 47,38 C44,38 42,36 42,33 Z M58,33 C58,30 60,28 63,28 C66,28 68,30 68,33 C68,36 66,38 63,38 C60,38 58,36 58,33 Z" />
              <path d="M50,45 L46,51 L54,51 Z" fill="#0A192F" />
              <circle cx="47" cy="33" r="3" fill="#C5A059" />
              <circle cx="63" cy="33" r="3" fill="#C5A059" />
              <path d="M40,24 C44,26 46,29 48,31" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M70,24 C66,26 64,29 62,31" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
            <div className="absolute inset-0 rounded-sm border border-gold/10 scale-110 animate-ping opacity-10"></div>
          </div>
          <span className="font-serif text-2xl font-semibold tracking-wide text-white group-hover:text-gold transition-colors">
            Mentor Math
          </span>
        </a>

        {/* Right: Email contact link & messenger icons */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:hello@mentor-math.com"
            className="hidden sm:flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#EBF0F6]/80 hover:text-gold transition-colors"
          >
            <Mail className="w-4 h-4 text-gold/80" />
            hello@mentor-math.com
          </a>

          <div className="flex items-center gap-3">
            {/* Telegram Link */}
            <a
              href="https://t.me/mentor_math"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex items-center justify-center w-10 h-10 rounded-sm border border-white/[0.06] bg-white/[0.02] text-white hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
            >
              <Send className="w-4 h-4" />
            </a>

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/380990000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center justify-center w-10 h-10 rounded-sm border border-white/[0.06] bg-white/[0.02] text-white hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
