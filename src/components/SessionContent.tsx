"use client";

import {
  Lightbulb,
  Palette,
  Layers,
  Monitor,
  Route,
  Sparkles,
} from "lucide-react";

const cards = [
  {
    icon: Lightbulb,
    title: "مفهوم التصميم الداخلي",
    description: "فهم دور المصمم والفرق بين التصميم الداخلي والديكور.",
  },
  {
    icon: Palette,
    title: "مهارات المصمم الناجح",
    description: "أهم المهارات الفنية والإبداعية المطلوبة للعمل في المجال.",
  },
  {
    icon: Layers,
    title: "مراحل تنفيذ المشروع",
    description: "كيف ينتقل المشروع من الفكرة الأولى إلى التنفيذ النهائي.",
  },
  {
    icon: Monitor,
    title: "برامج التصميم الأساسية",
    description: "التعرّف على أهم البرامج المستخدمة في التصميم والإظهار.",
  },
  {
    icon: Route,
    title: "اختيار المسار المناسب",
    description: "كيف تختار التدريب الذي يناسب مستواك وهدفك المهني.",
  },
  {
    icon: Sparkles,
    title: "الذكاء الاصطناعي والمشروعات الواقعية",
    description: "نماذج عملية لكيفية استخدام التقنيات الحديثة في التصميم.",
  },
];

export default function SessionContent() {
  return (
    <section id="content" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-primary-blue font-bold text-sm mb-2">
            ماذا ستناقش خلال اللقاء؟
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-navy mb-4">
            صورة واضحة عن المجال قبل أن تبدأ
          </h2>
          <p className="text-muted-text text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            تعرّف على أساسيات التصميم الداخلي، والأدوات المستخدمة، والخطوات العملية التي تساعدك على اختيار المسار المناسب.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white border border-border-color rounded-[20px] p-6 hover:shadow-md hover:border-primary-blue/20 transition-all"
              >
                <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={22} className="text-primary-blue" />
                </div>
                <h3 className="text-deep-navy font-bold text-base mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
