import React, { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, HardHat } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/config";
import logo from "../../public/logo.webp"

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full font-sans sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-[#17191D] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-1">
          <p className="text-center md:text-left tracking-wide">
            {COMPANY.tagline} — {COMPANY.name}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2 font-semibold hover:text-[#E8571F] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E8571F]" />
              <span>{COMPANY.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="hidden sm:flex items-center gap-2 font-semibold hover:text-[#E8571F] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#E8571F]" />
              <span>{COMPANY.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`bg-white border-b border-gray-200 transition-shadow ${scrolled ? "shadow-md" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 lg:py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 shrink-0">
            {/* <div className="w-11 h-11 bg-[#17191D] flex items-center justify-center text-[#F2B705] cut-corner">

              <HardHat className="w-6 h-6" strokeWidth={2.2} />
            </div> */}
            <div className="flex items-center justify-center">
              <img
                // src={logo}
                src="/logo.webp"
                alt="Sigz General Contractors Logo"
                className="h-14 w-auto object-contain"
                width="56"
                height="56"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="leading-tight">
              <p className="font-black text-[#17191D] text-lg tracking-tight font-[Barlow_Condensed,sans-serif] uppercase">
                {COMPANY.short}
              </p>
              <p className="text-[10px] text-[#45505B] tracking-[0.15em] uppercase">
                General Contractors
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-semibold text-[#17191D] hover:text-[#E8571F] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="bg-[#E8571F] hover:bg-[#17191D] text-white font-bold text-sm px-6 py-3 uppercase tracking-wide transition-colors cut-corner"
            >
              Get A Quote
            </a>
          </div>

          <button
            className="lg:hidden text-[#17191D]"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden px-4 pb-4 flex flex-col gap-4 border-t border-gray-100 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] font-semibold text-[#17191D]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-[#E8571F] text-white font-bold text-sm px-6 py-3 text-center uppercase tracking-wide"
            >
              Get A Quote
            </a>
          </nav>
        )}
      </div>
      <div className="hazard-stripe" />
    </header>
  );
}

export default Header;