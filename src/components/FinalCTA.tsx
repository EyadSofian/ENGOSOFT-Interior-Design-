"use client";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-primary-blue">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          ابدأ خطوتك الأولى في مجال التصميم الداخلي
        </h2>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
          احجز مقعدك الآن، وتعرّف على المجال من خلال خبرة عملية واضحة.
        </p>
        <a
          href="#registration"
          className="inline-flex items-center justify-center px-8 py-4 bg-accent-green text-deep-navy text-base font-bold rounded-xl hover:brightness-95 transition-all"
        >
          احجز مقعدك مجانًا
        </a>
      </div>
    </section>
  );
}
