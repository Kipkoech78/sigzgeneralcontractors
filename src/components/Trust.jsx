import { Check } from "lucide-react";
import { COMPANY } from "@/config";
import { useReveal } from "@/hooks/useReveal";

const POINTS = [
  { bold: "Skilled, Vetted Tradespeople", rest: " on every job — plumbing, electrical, carpentry, and more." },
  { bold: "Clear, Written Quotes", rest: " before work starts, with no costs added midway through." },
  { bold: "Safety-First Site Practice", rest: " on every project, protecting your property and our crew." },
  { bold: "One Point of Contact", rest: " from first inspection through to final walkthrough and sign-off." },
  { bold: `Based at ${COMPANY.address}`, rest: " — reach us anytime for a site visit or quote." },
];

function Trust() {
  const [imgRef, imgVisible] = useReveal();
  const [textRef, textVisible] = useReveal();

  return (
    <div className="relative bg-white">
      <div className="grid lg:grid-cols-2">
        <div
          ref={imgRef}
          className={`reveal ${imgVisible ? "reveal-visible" : ""} relative h-[420px] lg:h-auto overflow-hidden`}
        >
          <img
            src="/Construction.webp"
            alt="SGC construction site"
            className="absolute inset-0 w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
          />
        </div>

        <div
          ref={textRef}
          className={`reveal ${textVisible ? "reveal-visible" : ""} flex items-center px-6 sm:px-12 lg:px-16 py-14 lg:py-20`}
        >
          <div className="max-w-xl">
            <p className="font-mono text-xs tracking-[0.25em] text-[#E8571F] uppercase mb-3">
              We Are {COMPANY.name}
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#17191D] uppercase leading-tight mb-4">
              Reliable Construction &amp; Property Maintenance
            </h2>
            <span className="block w-14 h-[3px] bg-[#E8571F] mb-6" />

            <p className="text-[#45505B] mb-6 leading-relaxed text-sm sm:text-base">
              Whether it's a single leaking pipe or a full property repair run, we bring the same
              standard of workmanship, safety, and communication to every job across Nairobi and beyond.
            </p>

            <div className="space-y-4 mb-6">
              {POINTS.map((item) => (
                <div key={item.bold} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 bg-[#E8571F] flex items-center justify-center cut-corner">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  </span>
                  <p className="text-sm text-[#17191D]/80 leading-relaxed">
                    <span className="font-bold text-[#17191D]">{item.bold}</span>
                    {item.rest}
                  </p>
                </div>
              ))}
            </div>

            <p className="italic font-semibold text-[#17191D] text-sm">— {COMPANY.short} Management Team</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trust;