import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ArrowLeft, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { QuizData } from '../types';

export default function Quiz() {
  const [step, setStep] = useState<number>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<QuizData>({
    step1Selection: '',
    step2Selection: '',
    name: '',
    phone: '',
    email: ''
  });

  // Steps data definitions
  const step1Options = [
    { value: 'В Україні', label: 'В Україні', desc: 'Учень навчається у вітчизняній школі, плануємо майбутнє' },
    { value: 'За кордоном', label: 'За кордоном', desc: 'Навчання в місцевій школі іншої країни, важка адаптація' },
    { value: 'У міжнародній школі', label: 'У міжнародній шкоді', desc: 'Навчання за системою IB, Cambridge чи GCSE англійською' }
  ];

  const step2Options = [
    { value: '12–14 років (Середня школа)', label: '12–14 років', desc: 'Середні класи (Middle School), формування фундаментальних понять' },
    { value: '15–17 років (Старша школа)', label: '15–17 років', desc: 'Старші класи (High School), цільовий інтенсив до SAT/IB та іспитів' }
  ];

  const handleStep1Choose = (val: string) => {
    setFormData(prev => ({ ...prev, step1Selection: val }));
    setStep(2);
  };

  const handleStep2Choose = (val: string) => {
    setFormData(prev => ({ ...prev, step2Selection: val }));
    setStep(3);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Будь ласка, вкажіть ім'я";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Необхідно вказати телефон";
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      newErrors.phone = "Введіть повний номер із кодом країни";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Будь ласка, вкажіть email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Введіть коректну адресу пошти";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Compile deep link text for messenger routing
  const getSubmissionText = (): string => {
    return `Вітання! Мій підліток навчається: ${formData.step1Selection}. Вік: ${formData.step2Selection}. Мене звати ${formData.name}. Номер телефону: ${formData.phone}, Email: ${formData.email}. Хочемо записатися на безкоштовне заняття-адаптацію Mentor Math!`;
  };

  const handleSubmitChannel = (channel: 'telegram' | 'whatsapp' | 'email') => {
    if (!validateForm()) return;

    const messageText = getSubmissionText();

    if (channel === 'telegram') {
      const tgLink = `https://t.me/mentor_math?text=${encodeURIComponent(messageText)}`;
      window.open(tgLink, '_blank');
      setIsSubmitted(true);
    } else if (channel === 'whatsapp') {
      const waLink = `https://wa.me/380990000000?text=${encodeURIComponent(messageText)}`;
      window.open(waLink, '_blank');
      setIsSubmitted(true);
    } else if (channel === 'email') {
      setIsSubmitted(true);
    }
  };

  // Progress percentage
  const progressPercent = step === 1 ? 33 : step === 2 ? 66 : 100;

  return (
    <section className="py-20 lg:py-28 bg-[#0A192F] relative" id="quiz-section">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D2240] border border-white/[0.04] rounded-sm p-6 sm:p-10 lg:p-12 shadow-2xl relative">
          
          {/* Header element of form card */}
          <div className="space-y-4 mb-8 text-center sm:text-left">
            <span className="text-xs font-sans uppercase font-semibold text-gold tracking-[0.25em] flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4" />
              Швидкий запуск
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight">
              Інвестуйте в міжнародний капітал дитини вже сьогодні
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-light font-sans max-w-2xl">
              Пройдіть 3 простих кроки, щоб зарезервувати заняття-адаптацію, на якому ми розробимо персональну схему навчання дитини.
            </p>
          </div>

          {/* Progress Indicator Component */}
          {!isSubmitted && (
            <div className="space-y-2 mb-10">
              <div className="flex justify-between items-center text-xs font-sans text-sage font-medium uppercase tracking-widest">
                <span>Крок {step} з 3</span>
                <span>{progressPercent}% Організовано</span>
              </div>
              <div className="h-1 w-full bg-white/[0.04] rounded-sm overflow-hidden">
                <div
                  className="h-full bg-gold transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Custom State Machine Layout containing AnimatePresence */}
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              // Success Thank You State
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12 space-y-6"
                id="thank-you-card"
              >
                <div className="w-16 h-16 rounded-sm bg-gold/10 border border-gold flex items-center justify-center mx-auto text-gold animate-[bounce_1s]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-4xl font-semibold text-white tracking-tight leading-tight">
                    Дякуємо! Місце зарезервовано
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-white/70 max-w-lg mx-auto font-light leading-relaxed">
                    Ми отримали ваші дані. Менеджер турботи зв'яжеться з вами протягом 15 хвилин у вказаному месенджері, щоб підібрати ідеальний час для зустрічі з ментором.
                  </p>
                </div>

                {/* Show summary parameters saved */}
                <div className="max-w-md mx-auto p-5 bg-white/[0.01] border border-white/[0.04] rounded-sm text-left space-y-2 text-xs font-sans text-white/50">
                  <p><strong>Учень навчається:</strong> {formData.step1Selection}</p>
                  <p><strong>Вік / клас:</strong> {formData.step2Selection}</p>
                  <p><strong>Ім'я для звернення:</strong> {formData.name}</p>
                  <p><strong>Пошта:</strong> {formData.email}</p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setStep(1);
                      setIsSubmitted(false);
                      setFormData({
                        step1Selection: '',
                        step2Selection: '',
                        name: '',
                        phone: '',
                        email: ''
                      });
                    }}
                    className="text-xs uppercase tracking-widest text-[#EBF0F6]/70 hover:text-gold transition-colors font-sans pointer"
                  >
                    Заповнити форму знову
                  </button>
                </div>
              </motion.div>
            ) : step === 1 ? (
              // Step 1: Location selection
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="font-serif text-lg sm:text-xl font-medium text-white">
                  Дераз навчається підліток?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {step1Options.map(option => (
                    <button
                      key={option.value}
                      onClick={() => handleStep1Choose(option.value)}
                      className="text-left p-6 rounded-sm bg-white/[0.01] border border-white/[0.06] hover:border-gold/60 focus:border-gold/80 transition-all duration-300 group cursor-pointer"
                    >
                      <span className="font-serif text-lg sm:text-xl font-semibold text-white block mb-2 group-hover:text-gold transition-colors">
                        {option.label}
                      </span>
                      <span className="font-sans text-xs sm:text-sm text-white/50 leading-relaxed font-light block">
                        {option.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : step === 2 ? (
              // Step 2: Age group selection
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-white">
                    Який вік / клас дитини?
                  </h3>
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1.5 text-xs text-white/50 hover:text-gold transition-colors font-sans font-medium hover:underline pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Назад
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {step2Options.map(option => (
                    <button
                      key={option.value}
                      onClick={() => handleStep2Choose(option.value)}
                      className="text-left p-6 rounded-sm bg-white/[0.01] border border-white/[0.06] hover:border-gold/60 focus:border-gold/80 transition-all duration-300 group cursor-pointer"
                    >
                      <span className="font-serif text-lg sm:text-xl font-semibold text-white block mb-2 group-hover:text-gold transition-colors">
                        {option.label}
                      </span>
                      <span className="font-sans text-xs sm:text-sm text-white/50 leading-relaxed font-light block">
                        {option.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              // Step 3: Contact details fields
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-white">
                    Вкажіть контакти для зв'язку
                  </h3>
                  <button
                    onClick={() => setStep(2)}
                    className="flex items-center gap-1.5 text-xs text-white/50 hover:text-gold transition-colors font-sans font-medium hover:underline pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Назад
                  </button>
                </div>

                {/* Form fields layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Name input */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-sage font-medium font-sans">
                      Ваше ім'я
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Наприклад, Олена"
                      className={`w-full bg-midnight/80 border ${errors.name ? 'border-red-500' : 'border-white/[0.08] focus:border-gold'} rounded-sm px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400 font-sans flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone input */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-sage font-medium font-sans">
                      Телефон (з кодом країни)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+380 / +44 (номер)"
                      className={`w-full bg-midnight/80 border ${errors.phone ? 'border-red-500' : 'border-white/[0.08] focus:border-gold'} rounded-sm px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500 font-sans flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Email input */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-[#A3B18A] font-medium font-sans">
                      Email пошта
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="hello@example.com"
                      className={`w-full bg-midnight/80 border ${errors.email ? 'border-red-500' : 'border-white/[0.08] focus:border-gold'} rounded-sm px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 font-sans flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Grid 3 distinctive channel submission action buttons */}
                <div className="pt-6 border-t border-white/[0.05] space-y-4">
                  <span className="text-xs text-white/50 font-sans text-center block uppercase tracking-[0.2em]">
                    Оберіть зручний спосіб надсилання
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Channel 1: Telegram bot link */}
                    <button
                      type="button"
                      onClick={() => handleSubmitChannel('telegram')}
                      className="flex items-center justify-center gap-3 py-3.5 bg-sky-600 hover:bg-sky-500 text-white rounded-sm font-sans font-medium text-xs tracking-wider uppercase shadow-lg transition-colors duration-300 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Надіслати у Telegram-бот
                    </button>

                    {/* Channel 2: WhatsApp link */}
                    <button
                      type="button"
                      onClick={() => handleSubmitChannel('whatsapp')}
                      className="flex items-center justify-center gap-3 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-sm font-sans font-medium text-xs tracking-wider uppercase shadow-lg transition-colors duration-300 cursor-pointer"
                    >
                      <Send className="w-4 h-4 transform rotate-12" />
                      Зв'язатися у WhatsApp
                    </button>

                    {/* Channel 3: Register phone and show Success card */}
                    <button
                      type="button"
                      onClick={() => handleSubmitChannel('email')}
                      className="flex items-center justify-center gap-3 py-3.5 bg-gold hover:bg-[#D4AF37] text-midnight rounded-sm font-sans font-bold text-xs tracking-wider uppercase shadow-md transition-colors duration-300 cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Залишити телефон / Email
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
