import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-deep-navy py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Image
          src="/assets/engosoft-logo.png"
          alt="شعار إنجوسوفت"
          width={100}
          height={40}
          className="w-[80px] sm:w-[100px] h-auto opacity-80"
        />
        <p className="text-white/50 text-sm">
          © 2026 ENGOSOFT. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
