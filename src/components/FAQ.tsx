"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "هل حضور اللقاء مجاني؟",
    answer: "نعم، التسجيل والحضور مجانيان بالكامل.",
  },
  {
    question: "هل يمكنني الحضور أونلاين؟",
    answer: "نعم، يمكنك اختيار الحضور أونلاين عند التسجيل، وستصلك تفاصيل الدخول عبر البريد الإلكتروني وواتساب.",
  },
  {
    question: "أين يُقام الحضور المباشر؟",
    answer: "يُقام الحضور المباشر في مدينة الرياض، وستصل تفاصيل الموقع للمسجلين قبل موعد اللقاء.",
  },
  {
    question: "هل يناسب اللقاء المبتدئين؟",
    answer: "نعم، اللقاء مناسب لمن يرغب في فهم المجال ومعرفة المهارات والأدوات والمسار التدريبي المناسب للبدء.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-navy text-center mb-10">
          أسئلة متكررة
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border-color rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-right hover:bg-light-background transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="text-deep-navy font-bold text-sm sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-muted-text transition-transform duration-200 flex-shrink-0 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`accordion-content ${openIndex === i ? "open" : ""}`}
              >
                <p className="px-5 pb-5 text-muted-text text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
