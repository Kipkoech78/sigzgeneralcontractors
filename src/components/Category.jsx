import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Compass } from "lucide-react";
import { projectCategories } from "@/config";

function Category() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, projectCategories.length - perView);
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <div id="projects" className="relative">
      <div className="bg-[#17191D] pt-16 pb-28 lg:ml-10 lg:mr-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-12">
            <div className="max-w-md">
              <p className="font-mono text-white/60 uppercase tracking-[0.25em] text-xs mb-3">
                Where We Work
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-white uppercase leading-tight mb-3">
                Every Job, Every Property Type
              </h2>
              <span className="block w-16 h-[3px] bg-[#F2B705]" />
            </div>

            <div className="flex items-start gap-6 max-w-lg">
              <p className="text-white/60 text-sm leading-relaxed">
                From single apartments to full commercial fit-outs, we run residential, commercial,
                renovation, and outdoor projects with the same crew, the same standards, and one
                point of contact throughout.
              </p>
              <div className="flex items-center gap-3 flex-shrink-0 pt-1">
                <button
                  onClick={prev}
                  disabled={index === 0}
                  aria-label="Previous"
                  className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-[#17191D] transition disabled:opacity-30"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  disabled={index === maxIndex}
                  aria-label="Next"
                  className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-[#17191D] transition disabled:opacity-30"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
            >
              {projectCategories.map((c, i) => (
                <div key={c.title} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                  <div className="overflow-hidden mb-4">
                    <img
                      src={c.img}
                      alt={c.alt || `${c.title} services by Sigz General Contractors in Nairobi`}
                      className="w-full h-44 sm:h-48 object-cover hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {c.tag && (
                    <p className="font-mono text-xs text-[#F2B705] uppercase tracking-widest mb-1">
                      {c.tag}
                    </p>
                  )}
                  <h3 className="font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-3">{c.text}</p>
                  <a
                    href="#contact"
                    className="text-xs font-bold uppercase tracking-wide text-[#E8571F] hover:text-white transition inline-flex items-center gap-1"
                  >
                    Get A Quote <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 -mt-16 relative z-10">
        <div className="bg-[#E8571F] cut-corner-lg px-8 sm:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <Compass className="w-8 h-8 text-white flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase mb-1">
                Ready To Start Your Project?
              </h3>
              <p className="text-white/85 text-sm">
                Book a free site inspection and get a written quote within 48 hours.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-white text-[#17191D] font-bold px-8 py-3 hover:bg-[#17191D] hover:text-white transition whitespace-nowrap uppercase tracking-wide cut-corner"
          >
            Get A Quote
          </a>
        </div>
      </div>

      <div className="bg-white h-16" />
    </div>
  );
}

export default Category;