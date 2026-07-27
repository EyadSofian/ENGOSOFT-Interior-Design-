export default function Footer() {
  return (
    <footer className="bg-deep-navy py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/engosoft-logo.png"
          alt="شعار ENGOSOFT"
          className="h-8 w-auto opacity-80"
        />
        <p className="text-white/50 text-sm">
          © 2026 ENGOSOFT. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
