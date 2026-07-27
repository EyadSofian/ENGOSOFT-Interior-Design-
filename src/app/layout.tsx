import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://engosoft-landing.vercel.app"
  ),
  title: "لقاء مجاني عن التصميم الداخلي والديكور | ENGOSOFT",
  description:
    "سجّل مجانًا في لقاء ENGOSOFT التعريفي عن التصميم الداخلي والديكور، وتعرّف على المهارات والبرامج ومراحل تنفيذ المشروعات.",
  openGraph: {
    title: "لقاء مجاني عن التصميم الداخلي والديكور | ENGOSOFT",
    description:
      "سجّل مجانًا في لقاء ENGOSOFT التعريفي عن التصميم الداخلي والديكور، وتعرّف على المهارات والبرامج ومراحل تنفيذ المشروعات.",
    images: ["/assets/interior-design-webinar.png"],
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
