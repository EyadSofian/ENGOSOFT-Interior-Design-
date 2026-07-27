import { NextRequest, NextResponse } from "next/server";

interface RegistrationPayload {
  fullName: string;
  country: string;
  whatsapp: string;
  email: string;
  attendanceType: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  pageUrl: string;
}

export async function POST(request: NextRequest) {
  const webhookUrl = process.env.REGISTRATION_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error(
      "[REGISTRATION] REGISTRATION_WEBHOOK_URL is not set in environment variables."
    );
    return NextResponse.json(
      { error: "خدمة التسجيل غير مُعدّة حاليًا. يرجى المحاولة لاحقًا." },
      { status: 500 }
    );
  }

  let body: RegistrationPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "بيانات غير صالحة." },
      { status: 400 }
    );
  }

  const { fullName, country, whatsapp, email, attendanceType } = body;

  if (!fullName || !country || !whatsapp || !email || !attendanceType) {
    return NextResponse.json(
      { error: "يرجى تعبئة جميع الحقول المطلوبة." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "البريد الإلكتروني غير صالح." },
      { status: 400 }
    );
  }

  if (attendanceType !== "online" && attendanceType !== "riyadh") {
    return NextResponse.json(
      { error: "نوع الحضور غير صالح." },
      { status: 400 }
    );
  }

  const payload = {
    fullName: fullName.trim(),
    country,
    whatsapp,
    email: email.trim(),
    attendanceType,
    eventName: "Interior Design Introductory Session",
    eventSlug: "interior-design-webinar-august",
    source: "landing-page",
    pageUrl: body.pageUrl || "",
    utmSource: body.utmSource || "",
    utmMedium: body.utmMedium || "",
    utmCampaign: body.utmCampaign || "",
    utmContent: body.utmContent || "",
    submittedAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(
        `[REGISTRATION] Webhook returned status ${response.status}: ${response.statusText}`
      );
      return NextResponse.json(
        { error: "حدث خطأ أثناء التسجيل. يرجى المحاولة لاحقًا." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[REGISTRATION] Webhook request failed:", error);
    return NextResponse.json(
      { error: "تعذّر الاتصال بخدمة التسجيل. يرجى المحاولة لاحقًا." },
      { status: 502 }
    );
  }
}
