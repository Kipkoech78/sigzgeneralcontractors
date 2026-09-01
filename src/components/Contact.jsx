const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_OWNER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID
const EMAILJS_CLIENT_TEMPLATE_ID =import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY 

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { COMPANY, services } from "@/config";


function Contact() {
  const [formStatus, setFormStatus] = useState(null); // null | "sending" | "sent" | "error"
  const [contactRef, contactVisible] = useReveal();

  // Alternate numbers available to both the UI and the client email template
  const altPhones = {
    primary: COMPANY.phone,
    alt: "+254 746928507", 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const form = e.target;
    const data = {
      from_name: form.fullName.value,
      phone: form.phone.value,
      from_email: form.email.value || "Not provided",
      to_email: form.email.value, // used by the client auto-reply template
      service: form.service.value,
      message: form.details.value,
      phone_primary: altPhones.primary,
      phone_alt: altPhones.alt,
    };

    try {
      // 1) Notify the business inbox
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_OWNER_TEMPLATE_ID,
        data,
        EMAILJS_PUBLIC_KEY
      );

      // 2) Auto-reply to the client, only if they gave an email
      if (data.to_email) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_CLIENT_TEMPLATE_ID,
          data,
          EMAILJS_PUBLIC_KEY
        );
      }

      setFormStatus("sent");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setFormStatus("error");
    } finally {
      setTimeout(() => setFormStatus(null), 6000);
    }
  };

  return (
    <div
      id="contact"
      ref={contactRef}
      className={`reveal ${contactVisible ? "reveal-visible" : ""} py-20 bg-[#F3F1EC]`}
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="font-mono text-xs tracking-[0.25em] text-[#E8571F] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase mb-6">
            Request A Free Quote
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white cut-corner-lg shadow-sm p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="fullName"
                required
                placeholder="Full Name *"
                className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#E8571F] w-full"
              />
              <input
                name="phone"
                required
                placeholder="Phone Number *"
                className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#E8571F] w-full"
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#E8571F] w-full"
            />
            <select
              name="service"
              defaultValue=""
              className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#E8571F] w-full text-[#17191D]/60"
            >
              <option value="" disabled>
                Which service do you need?
              </option>
              {services.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
            </select>
            <textarea
              name="details"
              rows={4}
              placeholder="Describe the job you like us to help  — location, scope, and timeline *"
              required
              className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#E8571F] w-full resize-none"
            />
            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="w-full bg-[#17191D] text-white font-bold py-3.5 uppercase tracking-wide hover:bg-[#E8571F] transition cut-corner disabled:opacity-60"
            >
              {formStatus === "sending" ? "Sending..." : "Request Quote"}
            </button>

            {formStatus === "sent" && (
              <p className="text-sm text-green-600 font-medium pt-1">
                Thanks! Your request has been sent — check your inbox for a confirmation.
              </p>
            )}
            {formStatus === "error" && (
              <p className="text-sm text-red-600 font-medium pt-1">
                Something went wrong sending your request. Please call us directly instead.
              </p>
            )}
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-white cut-corner-lg shadow-sm p-8 space-y-5">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 w-9 h-9 flex-shrink-0 bg-[#F3F1EC] flex items-center justify-center cut-corner text-[#E8571F]">
                <MapPin className="w-4 h-4" />
              </span>
              <div>
                <p className="font-semibold">Office Address</p>
                <p className="text-sm text-[#17191D]/60">{COMPANY.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-0.5 w-9 h-9 flex-shrink-0 bg-[#F3F1EC] flex items-center justify-center cut-corner text-[#E8571F]">
                <Phone className="w-4 h-4" />
              </span>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm text-[#17191D]/60">
                  {altPhones.primary}{" "}
                  <span className="block text-[#17191D]/40">
                    Alt: {altPhones.alt}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-0.5 w-9 h-9 flex-shrink-0 bg-[#F3F1EC] flex items-center justify-center cut-corner text-[#E8571F]">
                <Mail className="w-4 h-4" />
              </span>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-[#17191D]/60">{COMPANY.email}</p>
              </div>
            </div>
            <div className="pt-2 border-t border-gray-100 text-sm text-[#17191D]/60">
              Site Visits: Monday – Saturday, 8:00 AM – 6:00 PM
            </div>
          </div>

          <div className="bg-[#17191D] cut-corner-lg p-8 text-white">
            <p className="font-bold mb-2">{COMPANY.tagline}</p>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Most enquiries get a call back within the hour during business hours. For urgent
              repairs, calling directly is fastest.
            </p>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 bg-[#E8571F] hover:bg-[#F2B705] hover:text-[#17191D] text-white font-bold px-6 py-3 uppercase text-sm tracking-wide transition cut-corner"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;