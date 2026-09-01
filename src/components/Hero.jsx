import { heroSlides } from "@/config";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Hero() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % heroSlides.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-[560px] sm:h-[620px] lg:h-[720px] overflow-hidden bg-[#17191D]">
      {heroSlides.map((slide, i) => {
        const isActive = i === heroIndex;
        // Only the very first slide should ever render as an <h1> — search engines
        // read the full DOM regardless of opacity/visibility, so every other
        // slide (even hidden ones) must use <h2> to avoid duplicate <h1> tags.
        const HeadingTag = i === 0 ? "h1" : "h2";

        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isActive ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.img}
              alt={slide.alt || `${slide.title} — Sigz General Contractors, Nairobi`}
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              fetchpriority={i === 0 ? "high" : "auto"}
              decoding={i === 0 ? "sync" : "async"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#17191D]/90 via-[#17191D]/60 to-[#17191D]/20" />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
                <div key={isActive ? "active" : "inactive"} className="relative max-w-xl text-white">
                  <div
                    key={isActive ? `active-${heroIndex}` : `inactive-${i}`}
                    className="relative w-fit pl-8 pt-8 pb-14"
                  >
                    <span className="hero-line-top absolute top-0 left-0 h-[6px] w-full bg-[#F2B705]" />
                    <span className="hero-line-left absolute top-0 left-0 w-[6px] h-full bg-[#F2B705]" />

                    <p className="hero-tag font-mono text-xs tracking-[0.25em] text-[#F2B705] mb-4 uppercase">
                      {slide.tag}
                    </p>
                    <HeadingTag className="hero-title uppercase text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-5">
                      {slide.title}
                    </HeadingTag>
                    <p className="hero-text max-w-lg text-base sm:text-lg text-white/80 leading-relaxed mb-8">
                      {slide.text}
                    </p>
                    <a
                      href="#contact"
                      className="hero-cta pulse-cta inline-block bg-[#E8571F] hover:bg-white hover:text-[#17191D] px-8 py-4 font-bold uppercase tracking-wider text-white transition-colors cut-corner"
                    >
                      {slide.cta}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <button
        onClick={() => setHeroIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => setHeroIndex((i) => (i + 1) % heroSlides.length)}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setHeroIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === heroIndex ? "w-8 bg-[#E8571F]" : "w-2 bg-white/50"}`}
          />
        ))}
      </div>

      <div className="hazard-stripe absolute bottom-0 left-0 right-0" />
    </div>
  );
}

export default Hero;