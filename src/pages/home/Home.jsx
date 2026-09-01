import AboutStats from "@/components/AboutStats";
import Category from "@/components/Category";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import WhatsAppFloat from "@/components/Whatsapp";
import { COMPANY, NAV_LINKS, services, testimonials, whyChooseUs } from "@/config";
import { Phone, Mail, MapPin, Star, MessageCircle } from "lucide-react";
import React, { useState, useEffect } from "react";
import "../../App.css";
import { useReveal } from "@/hooks/useReveal";
import Contact from "@/components/Contact";

export default function SigzContractors() {
  const [testIndex, setTestIndex] = useState(0);
  

  useEffect(() => {
    const t = setInterval(() => setTestIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

 

  const [ctaRef, ctaVisible] = useReveal();
  const [testRef, testVisible] = useReveal();
  

  return (
    <div className="font-sans text-[#17191D] bg-[#F3F1EC]">
      <section>
        <Header />
      </section>

      <section id="home" className="relative">
        <Hero />
      </section>

      <section id="about">
        <AboutStats />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <Trust />
      </section>

      <section>
        <Category />
      </section>

      {/* Why choose us — marquee strip */}
      <section id="why-us" className="bg-white py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-10">
          <p className="font-mono text-xs tracking-[0.25em] text-[#E8571F] uppercase mb-3">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#17191D]">
            Why Clients Choose {COMPANY.short}
          </h2>
        </div>
        <div className="marquee-wrap relative">
          <div className="marquee-track flex gap-6 w-max">
            {[...whyChooseUs, ...whyChooseUs].map((w, i) => (
              <div
                key={`${w.title}-${i}`}
                className="w-80 flex-shrink-0 p-6 bg-[#F3F1EC] cut-corner hover:bg-[#17191D] group transition-colors duration-300"
              >
                <p className="font-bold mb-2 text-[#17191D] group-hover:text-[#F2B705] transition-colors">
                  {w.title}
                </p>
                <p className="text-sm text-[#45505B] group-hover:text-white/70 transition-colors leading-relaxed">
                  {w.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" ref={testRef} className={`reveal ${testVisible ? "reveal-visible" : ""} py-20 max-w-5xl mx-auto px-4`}>
        <div className="text-center mb-12">
          <p className="font-mono text-xs tracking-[0.25em] text-[#E8571F] uppercase mb-3">Client Feedback</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase">What Our Clients Say</h2>
        </div>
        <div className="relative bg-white cut-corner-lg shadow-sm p-10 sm:p-12 text-center">
          <div className="flex justify-center gap-1 mb-4 text-[#F2B705]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#F2B705]" />
            ))}
          </div>
          <p className="text-[#17191D]/80 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            "{testimonials[testIndex].text}"
          </p>
          <p className="font-bold">{testimonials[testIndex].name}</p>
          <p className="text-sm text-[#17191D]/50">{testimonials[testIndex].route}</p>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === testIndex ? "w-8 bg-[#E8571F]" : "w-2 bg-gray-200"}`}
              />
            ))}
          </div>
        </div>
        <p className="text-xs text-center text-[#17191D]/40 mt-4">
          Testimonials from our Certified CLients       </p>
      </section>

      {/* CTA banner */}
      <section ref={ctaRef} className={`reveal ${ctaVisible ? "reveal-visible" : ""} bg-[#17191D] py-16 relative overflow-hidden`}>
        <div className="hazard-stripe absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-white pt-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase mb-2">Get A Free Site Inspection</h3>
            <p className="text-white/70">Tell us what needs fixing, built, or repaired — we'll quote it within 6 hours.</p>
          </div>
          <a
            href={COMPANY.phoneHref}
            className="pulse-cta bg-[#E8571F] text-white font-bold px-8 py-4 uppercase tracking-wide hover:bg-[#F2B705] hover:text-[#17191D] transition whitespace-nowrap cut-corner"
          >
            Call {COMPANY.phone}
          </a>
        </div>
        <div className="hazard-stripe absolute bottom-0 left-0 right-0" />
      </section>

      {/* Contact form */}
   <Contact />

      {/* Footer */}
      <footer className="bg-[#17191D] text-white/70 pt-16 pb-8">
        <div className="hazard-stripe" />
        <div className="max-w-7xl mx-auto px-4 pt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#F2B705] flex items-center justify-center text-[#17191D] font-black text-lg cut-corner">
                {COMPANY.short[0]}
              </div>
              <span className="font-black text-xl text-white uppercase">{COMPANY.short}</span>
            </div>
            <p className="text-sm leading-relaxed">
              {COMPANY.tagline} — professional construction, maintenance, and repair solutions for
              residential and commercial properties.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wide">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="hover:text-[#E8571F] transition">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-[#E8571F] transition">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> {COMPANY.phone}</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> {COMPANY.email}</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> {COMPANY.address}</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-white/10 text-xs text-center text-white/50">
          © {new Date().getFullYear()} {COMPANY.name}. {COMPANY.tagline}
          
        </div>
      </footer>

      {/* Floating sticky call button */}
      <a
        href={COMPANY.phoneHref}
        aria-label="Call Sigz General Contractors"
        className="pulse-cta fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#E8571F] hover:bg-[#F2B705] hover:text-[#17191D] text-white rounded-full flex items-center justify-center shadow-xl transition-colors"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Floating WhatsApp button with quick-message bubble menu */}
      <WhatsAppFloat />
    </div>
  );
}