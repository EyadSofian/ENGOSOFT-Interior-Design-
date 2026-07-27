"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="hero-circle-1" />
      <div className="hero-circle-2" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Column */}
          <div className="order-1 text-white">
            <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm font-medium mb-5">
              لقاء تعريفي مجاني
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-snug mb-5">
              ابدأ طريقك نحو احتراف التصميم الداخلي والديكور
            </h1>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              لقاء مباشر يمنحك صورة واضحة عن مجال التصميم الداخلي، ومراحل تنفيذ المشروعات، وأهم الأدوات والمهارات التي تحتاج إليها للبدء بطريقة صحيحة.
            </p>

            {/* Event Info Chips */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-green">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                الثلاثاء 4 أغسطس
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-green">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                من 7:00 إلى 8:00 مساءً
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-green">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                أونلاين أو حضوريًا بالرياض
              </span>
            </div>

            {/* Speaker */}
            <div className="mb-8">
              <p className="text-white font-bold text-base">
                مع المهندس محمد إبراهيم عثمان
              </p>
              <p className="text-white/70 text-sm">
                مهندس تصميم داخلي بخبرة تتجاوز 15 عامًا
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#registration"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-accent-green text-deep-navy text-base font-bold rounded-xl hover:brightness-95 transition-all"
              >
                احجز مقعدك مجانًا
              </a>
              <a
                href="#content"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/40 text-white text-base font-bold rounded-xl hover:bg-white/10 transition-all"
              >
                تعرّف على محتوى اللقاء
              </a>
            </div>
          </div>

          {/* Poster Image Column */}
          <div className="order-2 flex justify-center">
            <div className="relative bg-primary-blue/20 rounded-[28px] overflow-hidden shadow-2xl max-w-[380px] w-full">
              <Image
                src="/assets/interior-design-webinar.png"
                alt="بوستر لقاء التصميم الداخلي والديكور"
                width={600}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
