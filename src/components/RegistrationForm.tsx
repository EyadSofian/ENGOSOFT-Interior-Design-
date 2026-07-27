"use client";

import { useState, type FormEvent } from "react";

interface FormData {
  fullName: string;
  country: string;
  whatsapp: string;
  email: string;
  attendanceType: "online" | "riyadh" | "";
}

interface FormErrors {
  fullName?: string;
  country?: string;
  whatsapp?: string;
  email?: string;
  attendanceType?: string;
  general?: string;
}

const countries = [
  { code: "+966", name: "المملكة العربية السعودية" },
  { code: "+971", name: "الإمارات العربية المتحدة" },
  { code: "+973", name: "البحرين" },
  { code: "+974", name: "قطر" },
  { code: "+968", name: "عُمان" },
  { code: "+965", name: "الكويت" },
  { code: "+20", name: "مصر" },
  { code: "+962", name: "الأردن" },
  { code: "+961", name: "لبنان" },
  { code: "+963", name: "سوريا" },
  { code: "+964", name: "العراق" },
  { code: "+212", name: "المغرب" },
  { code: "+216", name: "تونس" },
  { code: "+213", name: "الجزائر" },
  { code: "+249", name: "السودان" },
  { code: "+252", name: "الصومال" },
  { code: "+967", name: "اليمن" },
  { code: "+218", name: "ليبيا" },
  { code: "+960", name: "المالديف" },
  { code: "+92", name: "باكستان" },
  { code: "+91", name: "الهند" },
  { code: "+90", name: "تركيا" },
  { code: "+44", name: "المملكة المتحدة" },
  { code: "+1", name: "الولايات المتحدة" },
  { code: "+49", name: "ألمانيا" },
  { code: "+33", name: "فرنسا" },
];

export default function RegistrationForm() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    country: "",
    whatsapp: "",
    email: "",
    attendanceType: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [successMsg, setSuccessMsg] = useState("");

  const selectedCountry = countries.find((c) => c.name === form.country);

  function validate(): FormErrors {
    const e: FormErrors = {};

    if (!form.fullName.trim()) {
      e.fullName = "يرجى إدخال اسمك الكامل";
    }

    if (!form.country) {
      e.country = "يرجى اختيار الدولة";
    }

    if (!form.whatsapp.trim()) {
      e.whatsapp = "يرجى إدخال رقم واتساب";
    } else if (!/^\+?\d[\d\s\-]{6,15}$/.test(form.whatsapp.trim())) {
      e.whatsapp = "يرجى إدخال رقم هاتف صحيح";
    }

    if (!form.email.trim()) {
      e.email = "يرجى إدخال البريد الإلكتروني";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = "يرجى إدخال بريد إلكتروني صحيح";
    }

    if (!form.attendanceType) {
      e.attendanceType = "يرجى اختيار نوع الحضور";
    }

    return e;
  }

  function handleChange(
    field: keyof FormData,
    value: string
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (honeypot) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    const params = new URLSearchParams(window.location.search);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          country: form.country,
          whatsapp: `${selectedCountry?.code || ""} ${form.whatsapp.trim()}`,
          email: form.email.trim(),
          attendanceType: form.attendanceType,
          utmSource: params.get("utm_source") || "",
          utmMedium: params.get("utm_medium") || "",
          utmCampaign: params.get("utm_campaign") || "",
          utmContent: params.get("utm_content") || "",
          pageUrl: window.location.href,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "حدث خطأ غير متوقع");
      }

      let msg = "تم حجز مقعدك بنجاح. ستصلك تفاصيل اللقاء قريبًا عبر البريد الإلكتروني وواتساب.";
      if (form.attendanceType === "online") {
        msg += " سيصلك رابط الحضور قبل موعد اللقاء.";
      } else {
        msg += " ستصلك تفاصيل الموقع وتعليمات الحضور.";
      }

      setSuccessMsg(msg);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrors({
        general: err instanceof Error ? err.message : "حدث خطأ غير متوقع، يرجى المحاولة لاحقًا",
      });
    }
  }

  if (status === "success") {
    return (
      <section id="registration" className="bg-light-background py-16 md:py-24">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg text-center">
            <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4CFA76" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-deep-navy text-lg font-bold leading-relaxed">
              {successMsg}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="bg-light-background py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Intro text */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-navy mb-4">
              احجز مقعدك مجانًا
            </h2>
            <p className="text-muted-text text-base sm:text-lg leading-relaxed max-w-md">
              سجّل في أقل من دقيقة، وستصلك تفاصيل الحضور عبر البريد الإلكتروني وواتساب.
            </p>
          </div>

          {/* Form card */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg space-y-5">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {errors.general && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm font-medium">
                  {errors.general}
                </div>
              )}

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-bold text-deep-navy mb-1.5">
                  الاسم الكامل
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="اكتب اسمك الكامل"
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className={`w-full px-4 rounded-xl border bg-light-background text-deep-navy placeholder:text-[#9BA8BF] focus:outline-none focus:ring-2 focus:ring-primary-blue transition ${
                    errors.fullName ? "border-red-400" : "border-border-color"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-bold text-deep-navy mb-1.5">
                  الدولة
                </label>
                <select
                  id="country"
                  value={form.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                  className={`w-full px-4 rounded-xl border bg-light-background text-deep-navy focus:outline-none focus:ring-2 focus:ring-primary-blue transition appearance-none ${
                    errors.country ? "border-red-400" : "border-border-color"
                  } ${!form.country ? "text-[#9BA8BF]" : ""}`}
                >
                  <option value="">اختر الدولة</option>
                  {countries.map((c) => (
                    <option key={c.code} value={c.name}>
                      {c.name} ({c.code})
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                )}
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-bold text-deep-navy mb-1.5">
                  رقم واتساب
                </label>
                <div className="flex gap-2">
                  <span className="inline-flex items-center px-3 bg-light-background border border-border-color rounded-xl text-sm text-muted-text font-medium whitespace-nowrap">
                    {selectedCountry?.code || "+966"}
                  </span>
                  <input
                    id="whatsapp"
                    type="tel"
                    placeholder={selectedCountry?.code ? `رقم الهاتف` : "أدخل رقم الهاتف"}
                    value={form.whatsapp}
                    onChange={(e) => handleChange("whatsapp", e.target.value)}
                    className={`flex-1 px-4 rounded-xl border bg-light-background text-deep-navy placeholder:text-[#9BA8BF] focus:outline-none focus:ring-2 focus:ring-primary-blue transition ${
                      errors.whatsapp ? "border-red-400" : "border-border-color"
                    }`}
                    dir="ltr"
                  />
                </div>
                {errors.whatsapp && (
                  <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-deep-navy mb-1.5">
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  dir="ltr"
                  className={`w-full px-4 rounded-xl border bg-light-background text-deep-navy placeholder:text-[#9BA8BF] focus:outline-none focus:ring-2 focus:ring-primary-blue transition ${
                    errors.email ? "border-red-400" : "border-border-color"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Attendance Type */}
              <div>
                <label className="block text-sm font-bold text-deep-navy mb-2">
                  نوع الحضور
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleChange("attendanceType", "online")}
                    className={`py-3 px-4 rounded-xl border-2 text-sm font-bold transition-all ${
                      form.attendanceType === "online"
                        ? "border-primary-blue bg-primary-blue/5 text-primary-blue"
                        : "border-border-color bg-light-background text-muted-text hover:border-primary-blue/30"
                    }`}
                  >
                    أونلاين
                  </button>
                  <button
                    type="button"
                    onClick={() => handleChange("attendanceType", "riyadh")}
                    className={`py-3 px-4 rounded-xl border-2 text-sm font-bold transition-all ${
                      form.attendanceType === "riyadh"
                        ? "border-primary-blue bg-primary-blue/5 text-primary-blue"
                        : "border-border-color bg-light-background text-muted-text hover:border-primary-blue/30"
                    }`}
                  >
                    حضوريًا بالرياض
                  </button>
                </div>
                {errors.attendanceType && (
                  <p className="text-red-500 text-xs mt-1">{errors.attendanceType}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-accent-green text-deep-navy text-base font-bold rounded-xl hover:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              >
                {status === "loading" ? "جارٍ تسجيل بياناتك..." : "تأكيد الحجز المجاني"}
              </button>

              <p className="text-center text-muted-text text-xs leading-relaxed">
                نستخدم بياناتك فقط لإرسال تفاصيل اللقاء والتذكير بالموعد.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
