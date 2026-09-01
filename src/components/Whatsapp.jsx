import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { COMPANY } from "@/config";

// Quick-message options shown in the bubble menu.
// Edit/add to this list any time — the UI adapts automatically.
export const QUICK_OPTIONS = [
  {
    label: "Plumbing Repair",
    message:
      "Hi SGC, I need assistance with a plumbing issue. My sink is leaking and I'd like to request an inspection and quotation.",
  },
  {
    label: "Electrical Repair",
    message:
      "Hi SGC, I have an electrical problem at my property. I'd like to request an electrician for inspection and repair.",
  },
  {
    label: "Painting Services",
    message:
      "Hi SGC, I'd like a quotation for interior/exterior painting of my property.",
  },
  {
    label: "Metal Fabrication",
    message:
      "Hi SGC, I'd like a quotation for metal fabrication/welding work (gate, grill or steel fabrication).",
  },
  {
    label: "Outdoor Repairs",
    message:
      "Hi SGC, I need assistance with drainage, paving or fencing at my property. Please contact me.",
  },
  {
    label: "Emergency Repair",
    message:
      "Hi SGC, I have an urgent repair that requires immediate assistance. Please call me as soon as possible.",
  },
  {
    label: "General Enquiry",
    message:
      "Hi SGC, I'd like to enquire about one of your construction or maintenance services.",
  },
];

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.7 4.61 1.902 6.478L4 29l7.71-1.87A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75c-1.95 0-3.766-.57-5.29-1.55l-.38-.24-4.573 1.11 1.13-4.46-.25-.4A9.7 9.7 0 0 1 5.25 15c0-5.93 4.82-10.75 10.754-10.75S26.75 9.07 26.75 15 21.938 24.75 16.004 24.75Zm5.918-8.05c-.324-.163-1.917-.946-2.214-1.054-.297-.108-.513-.163-.73.163-.216.325-.837 1.054-1.026 1.27-.19.217-.378.244-.702.082-.324-.163-1.367-.503-2.605-1.605-.963-.858-1.613-1.918-1.802-2.243-.19-.325-.02-.5.143-.663.146-.146.324-.38.487-.57.163-.19.216-.325.325-.542.108-.217.054-.407-.027-.57-.081-.163-.73-1.756-1-2.406-.264-.633-.532-.547-.73-.557l-.622-.01c-.216 0-.567.081-.864.407-.297.325-1.134 1.108-1.134 2.702 0 1.594 1.161 3.133 1.323 3.35.163.216 2.286 3.49 5.538 4.895.774.334 1.377.534 1.848.684.777.247 1.484.212 2.043.129.623-.093 1.917-.784 2.187-1.541.27-.758.27-1.407.19-1.542-.082-.135-.298-.216-.622-.38Z" />
  </svg>
);

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const wrapperRef = useRef(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 450);
  };

  // Close on outside click (mobile tap-away)
  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => () => cancelClose(), []);

  const sendMessage = (message) => {
    const url = `${COMPANY.whatsappHref}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      className="fixed bottom-28 right-6 z-50 flex flex-col items-end gap-3"
    >
      {/* Bubble menu */}
      <div
        className={`flex flex-col items-end gap-2.5 mb-1 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {QUICK_OPTIONS.map((opt, i) => (
          <button
            key={opt.label}
            onClick={() => sendMessage(opt.message)}
            style={{
              transitionDelay: open ? `${i * 60}ms` : "0ms",
            }}
            className={`group flex items-center gap-3 bg-white shadow-lg cut-corner pl-4 pr-3 py-3 border border-[#17191D]/10 hover:border-[#25D366] transition-all duration-300 ${
              open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
          >
            <span className="text-sm font-semibold text-[#17191D] whitespace-nowrap group-hover:text-[#128C4A] transition-colors">
              {opt.label}
            </span>
            <span className="w-8 h-8 flex-shrink-0 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
              <WhatsAppIcon className="w-4 h-4 text-[#128C4A] group-hover:text-white transition-colors" />
            </span>
          </button>
        ))}
      </div>

      {/* Main toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with SGC on WhatsApp"
        className="relative w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#128C4A] text-white shadow-xl flex items-center justify-center transition-colors duration-300"
      >
        {/* Ping ring when closed, to draw attention */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping-slow" />
        )}
        <span className="relative z-10 flex items-center justify-center">
          {open ? (
            <X className="w-7 h-7" />
          ) : (
            <WhatsAppIcon className="w-8 h-8" />
          )}
        </span>
      </button>

      <style>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(1.7); opacity: 0; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}