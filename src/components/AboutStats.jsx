import React from "react";
import { useReveal, useCountUp } from "@/hooks/useReveal";
import { COMPANY } from "@/config";

const STATS = [
  {
    end: 7,
    suffix: "+",
    label: "Core Services",
  },
  {
    end: 100,
    suffix: "%",
    label: "Commitment to Quality",
  },
  {
    end: 24,
    suffix: "/7",
    label: "Customer Support",
  },
  {
    end: 18,
    suffix: "",
    label: "Mission: Done Right",
  },
];

function StatCard({ stat }) {
  const [ref, visible] = useReveal();
  const value = useCountUp(stat.end, visible);
  return (
    <div ref={ref} className={`reveal ${visible ? "reveal-visible" : ""} text-center`}>
      <p className="font-mono text-4xl sm:text-5xl font-black text-[#E8571F]">
        {value}
        {stat.suffix}
      </p>
      <p className="text-sm text-white/60 mt-2 uppercase tracking-wide">{stat.label}</p>
    </div>
  );
}

function AboutStats() {
  const [textRef, textVisible] = useReveal();

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div ref={textRef} className={`reveal ${textVisible ? "reveal-visible" : ""}`}>
          <p className="font-mono text-xs tracking-[0.25em] text-[#E8571F] uppercase mb-3">
            About {COMPANY.short}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#17191D] uppercase leading-tight mb-6">
            Construction &amp; Maintenance, Done Properly
          </h2>
          <p className="text-[#45505B] leading-relaxed mb-5">{COMPANY.mission}</p>
          <div className="border-l-4 border-[#F2B705] pl-5">
            <p className="text-[#17191D] font-semibold leading-relaxed">{COMPANY.vision}</p>
          </div>
        </div>

        <div className="bg-[#17191D] cut-corner-lg p-10 sm:p-14 grid grid-cols-2 gap-10">
          {STATS.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutStats;