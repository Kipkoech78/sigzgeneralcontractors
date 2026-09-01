import { Hammer, Wrench, Zap, Ruler, PaintRoller, Flame, TreePine } from "lucide-react";
import { services } from "@/config";
import { useReveal } from "@/hooks/useReveal";

const icons = [Hammer, Wrench, Zap, Ruler, PaintRoller, Flame, TreePine];

function ServiceCard({ s, i }) {
  const [ref, visible] = useReveal();
  const Icon = icons[i % icons.length];
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(i % 4) + 1} ${visible ? "reveal-visible" : ""} group relative overflow-hidden bg-[#F3F1EC] px-7 pt-9 pb-8 cut-corner hover:-translate-y-1 transition-transform duration-300`}
    >
      <div className="absolute inset-0 bg-[#17191D] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <Icon className="w-9 h-9 text-[#E8571F] group-hover:text-[#F2B705] transition-colors duration-500" strokeWidth={1.8} />
          <span className="font-mono text-xs text-[#45505B] group-hover:text-white/50 transition-colors duration-500">
            {s.code}
          </span>
        </div>
        <h3 className="font-bold text-lg mb-3 text-[#17191D] group-hover:text-white transition-colors duration-500">
          {s.title}
        </h3>
        <p className="text-sm text-[#45505B] group-hover:text-white/70 transition-colors duration-500 leading-relaxed">
          {s.text}
        </p>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-mono text-xs tracking-[0.25em] text-[#E8571F] uppercase mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#17191D] uppercase">Our Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 lg:max-w-[75%] lg:mx-auto">
          {services.slice(4).map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i + 4} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;