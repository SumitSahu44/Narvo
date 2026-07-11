"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918875341190?text=Hi%20NARVO%20Textile%20%26%20Hardware%2C%20I%20am%20interested%20in%20inquiring%20about%20your%20products%20for%20a%20B2B%20wholesale%20requirement."
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 active:scale-95 group interactive"
      aria-label="Enquire on WhatsApp"
    >
      {/* Pulsing glow ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:animate-none pointer-events-none" />
      <FaWhatsapp className="w-8 h-8 relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-[#111111] text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap border border-white/10 pointer-events-none">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
