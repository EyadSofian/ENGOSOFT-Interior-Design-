"use client";

import Image from "next/image";

const highlights = [
  "خبرة تتجاوز 15 عامًا",
  "خبرة عملية في التصميم والتنفيذ",
  "نماذج من مشروعات حقيقية",
];

export default function Speaker() {
  return (
    <section id="speaker" className="py-16 md:py-24 bg-light-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="speaker-gradient rounded-[28px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image side */}
            <div className="relative min-h-[300px] md:min-h-[400px]">
              <Image
                src="/assets/interior-design-webinar.png"
                alt="صورة المهندس محمد إبراهيم عثمان"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Text side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-accent-green font-bold text-sm mb-2">
                محاضر اللقاء
              </p>
              <h2 className="text-white text-2xl sm:text-3xl font-extrabold mb-4">
                المهندس محمد إبراهيم عثمان
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                مهندس تصميم داخلي بخبرة تتجاوز 15 عامًا في مجال التصميم الداخلي وتنفيذ المشروعات.
              </p>

              <div className="space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-accent-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4CFA76" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-white/90 text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
