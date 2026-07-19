"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const faqItems = [
  {
    question: "What types of products does NARVO specialize in?",
    answer: "NARVO specializes in premium architectural hardware, luxury door handles, solid-brass cabinet pulls, bespoke doors, decorative wood veneers, and custom home textiles tailored for high-end residential and commercial interiors."
  },
  {
    question: "Do you offer custom wholesale or B2B pricing?",
    answer: "Yes, we work closely with architects, builders, and interior designers, providing volume-based wholesale pricing, dedicated accounts, custom manufacturing specifications, and early access to new collections."
  },
  {
    question: "How can I request catalog samples or material swatches?",
    answer: "You can submit an inquiry through our contact form above, call/WhatsApp our showroom directly, or visit our Jaipur office to inspect physical samples, catalog swatches, and material details in person."
  },
  {
    question: "Where is your showroom located, and what are the timings?",
    answer: "Our showroom is located at A-1, Basement, Triveni Nagar Mod, Gopalpura Bypass, Jaipur, Rajasthan - 302018. We are open Monday to Saturday from 10:00 AM to 7:30 PM, but you can contact our B2B helpdesk 24/7."
  },
  {
    question: "Can I customize hardware designs or textile weaves?",
    answer: "Absolutely. We specialize in custom designs. For hardware, we can manufacture custom shapes and sizes in solid brass. For textiles, we collaborate on custom colors, patterns, and fabric weights to match your design guidelines."
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    category: "Hardware Products",
    message: ""
  });
  const [waConsent, setWaConsent] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }
    if (!waConsent) {
      alert("Please agree to communicate with us on WhatsApp to proceed.");
      return;
    }

    const formattedText = `Hi NARVO Textile & Hardware,%0A%0A*New Website Inquiry*:%0A*Name*: ${encodeURIComponent(formData.name)}%0A*Company*: ${encodeURIComponent(formData.company || "N/A")}%0A*Phone*: ${encodeURIComponent(formData.phone)}%0A*Email*: ${encodeURIComponent(formData.email || "N/A")}%0A*Inquiry Category*: ${encodeURIComponent(formData.category)}%0A*Message*: ${encodeURIComponent(formData.message || "General Inquiry")}`;
    const waUrl = `https://wa.me/918875341190?text=${formattedText}`;
    
    window.open(waUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
      
      {/* Top Banner space */}
      <div className="relative pt-32 pb-16 bg-gradient-to-b from-secondary/5 to-transparent overflow-hidden px-6 md:px-12 lg:px-24">
        {/* Luxury Glow Blurs */}
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute right-0 top-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2.5 text-xs font-sans text-text-custom/50 mb-8">
            <Link href="/" className="hover:text-primary transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-secondary font-semibold">Contact</span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-3 max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-primary"
            >
              Get In Touch
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-secondary tracking-tight"
            >
              Connect With Our Experts
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base font-sans text-text-custom/60 leading-relaxed max-w-2xl"
            >
              Have a project in mind or need custom wholesale pricing? Fill out our form to coordinate directly with our team over WhatsApp.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="px-6 md:px-12 lg:px-24 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Cards & Info (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-[#111111] text-white rounded-[32px] p-8 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
              <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
              
              <h2 className="text-xl font-heading font-extrabold text-white tracking-wide mb-8 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                Showroom Details
              </h2>

              <div className="flex flex-col gap-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="font-sans text-sm text-white/70 leading-relaxed">
                    <p className="font-bold text-white mb-1">Showroom Address</p>
                    <p>A-1, Basement, Triveni Nagar Mod,</p>
                    <p>Gopalpura Bypass, Jaipur,</p>
                    <p>Rajasthan - 302018</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="font-sans text-sm text-white/70">
                    <p className="font-bold text-white mb-1">Call / WhatsApp</p>
                    <a href="tel:+918875341190" className="hover:text-primary transition-colors font-semibold">
                      +91 8875341190
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="font-sans text-sm text-white/70">
                    <p className="font-bold text-white mb-1">Email Address</p>
                    <a href="mailto:info@narvohardware.com" className="hover:text-primary transition-colors font-semibold">
                      info@narvohardware.com
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4 border-t border-white/5 pt-6 mt-2">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="font-sans text-sm text-white/70">
                    <p className="font-bold text-white mb-1">Business Hours</p>
                    <p>Open 24 Hours / 7 Days</p>
                    <p className="font-medium text-white">24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white border border-border-custom p-8 md:p-10 rounded-[32px] shadow-sm">
            <h2 className="text-xl font-heading font-extrabold text-secondary tracking-wide mb-6">
              Send Enquiry
            </h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary/60">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full text-xs font-sans border border-border-custom focus:border-primary focus:outline-none p-3.5 rounded-xl bg-lightgray transition-colors"
                  />
                </div>

                {/* Company Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary/60">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your firm name"
                    className="w-full text-xs font-sans border border-border-custom focus:border-primary focus:outline-none p-3.5 rounded-xl bg-lightgray transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary/60">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 9999999999"
                    className="w-full text-xs font-sans border border-border-custom focus:border-primary focus:outline-none p-3.5 rounded-xl bg-lightgray transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary/60">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. contact@firm.com"
                    className="w-full text-xs font-sans border border-border-custom focus:border-primary focus:outline-none p-3.5 rounded-xl bg-lightgray transition-colors"
                  />
                </div>
              </div>

              {/* Inquiry Category */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary/60">
                  Inquiry Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full text-xs font-sans border border-border-custom focus:border-primary focus:outline-none p-3.5 rounded-xl bg-lightgray transition-colors"
                >
                  <option value="Hardware Products">🛠️ Architectural Hardware</option>
                  <option value="Textile Customization">🧵 Premium Textiles</option>
                  <option value="Wholesale B2B Quote">📦 Wholesale & Plywood</option>
                  <option value="Showroom Visit">📍 Book Showroom Appointment</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary/60">
                  Inquiry Message / Requirement details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share details of your B2B requirements..."
                  rows={4}
                  className="w-full text-xs font-sans border border-border-custom focus:border-primary focus:outline-none p-3.5 rounded-xl bg-lightgray resize-none transition-colors"
                />
              </div>

              {/* WhatsApp Consent Checkbox */}
              <div className="flex items-start gap-3 py-1 text-xs text-secondary/70 font-sans cursor-pointer select-none">
                <input
                  type="checkbox"
                  id="waConsent"
                  name="waConsent"
                  required
                  checked={waConsent}
                  onChange={(e) => setWaConsent(e.target.checked)}
                  className="mt-0.5 h-4.5 w-4.5 rounded border-border-custom text-primary focus:ring-primary cursor-pointer transition-colors"
                />
                <label htmlFor="waConsent" className="cursor-pointer leading-relaxed text-secondary/80 text-[11px] sm:text-xs">
                  Yes, I am ready to communicate with the Narvo team on WhatsApp.
                </label>
              </div>

              {/* Submit to WhatsApp */}
              <button
                type="submit"
                className="w-full py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-sans font-bold tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg active:scale-98 text-center mt-2 cursor-pointer"
              >
                <FaWhatsapp className="w-5 h-5" />
                SUBMIT VIA WHATSAPP
              </button>
            </form>
          </div>

        </div>

        {/* Full-width Map Section */}
        <div className="mt-16 flex flex-col gap-6">
          <h2 className="text-xl font-heading font-extrabold text-secondary tracking-wide">
            Location Map
          </h2>
          <div className="w-full rounded-[32px] overflow-hidden border border-border-custom shadow-2xl bg-lightgray relative aspect-[4/3] sm:aspect-video h-[350px] sm:h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2961.3006852964804!2d75.78214057543791!3d26.867862976673937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUyJzA0LjMiTiA3NcKwNDcnMDUuMCJF!5e1!3m2!1sen!2sin!4v1783865193826!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              title="NARVO Showroom Location Map"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 border-t border-border-custom pt-16 flex flex-col gap-10">
          <div className="flex flex-col">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-primary mb-2.5 inline-block">
              Common Queries
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-secondary tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-text-custom/60 mt-2 font-sans">
              Everything you need to know about our premium products and B2B ordering process.
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-4xl">
            {faqItems.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-border-custom rounded-2xl bg-lightgray/30 overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 cursor-pointer"
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-secondary hover:text-primary transition-colors">
                      {item.question}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center text-secondary hover:bg-primary/10 hover:text-primary transition-colors">
                      {isOpen ? (
                        <span className="text-lg font-bold leading-none">-</span>
                      ) : (
                        <span className="text-lg font-bold leading-none">+</span>
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm font-sans text-text-custom/75 leading-relaxed border-t border-border-custom/50 pt-4 bg-white/40">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}
