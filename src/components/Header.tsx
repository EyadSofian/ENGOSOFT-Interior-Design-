"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "عن اللقاء", href: "#content" },
  { label: "المحاضر", href: "#speaker" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-color" style={{ height: "76px" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <a href="#registration" className="flex-shrink-0">
          <Image
            src="/assets/engosoft-logo.png"
            alt="شعار إنجوسوفت"
            width={165}
            height={65}
            priority
            className="w-[105px] h-auto sm:w-[150px] md:w-[155px] lg:w-[165px]"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-text hover:text-deep-navy transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#registration"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-green text-deep-navy text-sm font-bold rounded-xl hover:brightness-95 transition-all"
          >
            احجز مقعدك مجانًا
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#registration"
            className="inline-flex items-center justify-center px-4 py-2 bg-accent-green text-deep-navy text-xs font-bold rounded-xl hover:brightness-95 transition-all"
          >
            احجز مقعدك مجانًا
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-deep-navy"
            aria-label="القائمة"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border-color px-4 py-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-muted-text hover:text-deep-navy"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
