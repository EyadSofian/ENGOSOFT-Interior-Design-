"use client";

import Image from "next/image";

const highlights = [
  "خبرة تتجاوز 15 عامًا",
  "خبرة عملية في التصميم والتنفيذ",
  "نماذج من مشروعات حقيقية",
];

export default function Speaker() {
  return (
    <section id="speaker" className="py-14 md:py-20 lg:py-24 bg-light-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="speaker-spotlight rounded-[28px] lg:rounded-[36px] overflow-hidden relative">
          {/* Subtle radial glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary-blue/15 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent-green/5 blur-[80px]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_0.8fr] lg:grid-cols-[1fr_0.75fr] gap-0 items-center">
            {/* Text Content — Left (55%) */}
            <div className="order-2 md:order-1 p-8 sm:p-10 md:p-12 lg:p-14 xl:p-16">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent-green/15 rounded-full text-accent-green text-xs font-bold mb-5 tracking-wide">
                <span className="w-1.5 h-1.5 bg-accent-green rounded-full" />
                محاضر اللقاء
              </span>

              <h2 className="text-white text-[26px] sm:text-[30px] lg:text-[34px] font-extrabold leading-tight mb-4 max-w-lg">
                المهندس محمد إبراهيم عثمان
              </h2>

              <p className="text-white/60 text-[15px] sm:text-base leading-[1.8] mb-8 max-w-md">
                مهندس تصميم داخلي بخبرة تتجاوز 15 عامًا في مجال التصميم الداخلي وتنفيذ المشروعات.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3"
                  >
                    <span className="w-7 h-7 bg-accent-green/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#4CFA76"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-white/85 text-sm font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Speaker Image — Right (45%) */}
            <div className="order-1 md:order-2 flex items-center justify-center relative py-8 md:py-0">
              {/* Soft glow behind image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full bg-primary-blue/30 blur-[60px]" />
              </div>
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[380px]">
                <Image
                  src="/assets/mohamed-ibrahim-othman.png"
                  alt="المهندس محمد إبراهيم عثمان، محاضر لقاء التصميم الداخلي"
                  width={750}
                  height={850}
                  priority
                  className="w-full h-auto object-contain object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
