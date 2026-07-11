"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp as WhatsAppIcon } from "react-icons/fa";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
  images: string[];
  specs: { [key: string]: string };
}

export default function ProductPageClient({ product }: { product: Product }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    quantity: "500",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.quantity) {
      alert("Please fill in your Name and Requested Quantity.");
      return;
    }

    const text = `Hi NARVO Textile & Hardware,\n\nI want to place a B2B enquiry for: *${product.name}*\n\n*Inquirer Details*:\n- *Name*: ${formData.name}\n- *Company*: ${formData.company || "N/A"}\n- *Required Quantity*: ${formData.quantity} units\n- *Message*: ${formData.message || "Please share catalogs and pricing details."}`;
    
    const url = `https://wa.me/918875341190?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col gap-16">
      {/* Dynamic Main Body Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Images & Previews (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-secondary rounded-[32px] p-8 aspect-video sm:aspect-square md:h-[500px] w-full flex items-center justify-center border border-border-custom relative overflow-hidden shadow-md group"
          >
            <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
            <div className="relative w-full h-full">
              <Image
                src={product.images[activeImageIdx]}
                alt={product.name}
                fill
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-103"
                priority
              />
            </div>
          </motion.div>

          {/* Thumbnail Selection Bar */}
          <div className="flex items-center gap-3 justify-center">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIdx(index)}
                className={`w-16 h-16 rounded-2xl border relative overflow-hidden transition-all duration-300 ${
                  activeImageIdx === index
                    ? "border-primary scale-105 shadow-md"
                    : "border-border-custom hover:border-secondary/45"
                }`}
              >
                <Image
                  src={img}
                  alt={`thumbnail-${index}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Product Details & B2B Inquiry Form (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-8 bg-white border border-border-custom p-8 rounded-[32px] shadow-sm">
          {/* Header */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-primary">
              {product.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-heading font-extrabold text-secondary tracking-wide leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-2xl font-heading font-extrabold text-secondary">
                {product.price}
              </span>
              <span className="text-[10px] font-sans font-bold bg-[#E8F8EE] text-[#25D366] px-2.5 py-1 rounded-full uppercase tracking-wider">
                Wholesale Price
              </span>
            </div>
          </div>

          <p className="text-sm font-sans text-text-custom/75 leading-relaxed border-t border-border-custom pt-6">
            {product.description}
          </p>

          {/* B2B Inquiry Form */}
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 border-t border-border-custom pt-6">
            <p className="text-xs font-sans font-bold uppercase tracking-widest text-secondary/70 mb-1">
              Send B2B Enquiry
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-secondary/60">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full text-xs font-sans border border-border-custom focus:border-primary focus:outline-none p-3 rounded-xl bg-lightgray"
                  required
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-secondary/60">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your firm name"
                  className="w-full text-xs font-sans border border-border-custom focus:border-primary focus:outline-none p-3 rounded-xl bg-lightgray"
                />
              </div>
            </div>

            {/* Quantity */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-secondary/60">
                Required Quantity (Units) *
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="500"
                min="1"
                className="w-full text-xs font-sans border border-border-custom focus:border-primary focus:outline-none p-3 rounded-xl bg-lightgray"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-secondary/60">
                Inquiry Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please share bulk catalog, pricing slabs, and lead delivery details."
                rows={3}
                className="w-full text-xs font-sans border border-border-custom focus:border-primary focus:outline-none p-3 rounded-xl bg-lightgray resize-none"
              />
            </div>

            {/* WhatsApp CTA */}
            <button
              type="submit"
              className="w-full py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-sans font-bold tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg active:scale-95 text-center mt-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5" />
              ENQUIRE ON WHATSAPP
            </button>
          </form>
        </div>
      </div>

      {/* Technical Specifications Sheet */}
      <div className="flex flex-col gap-6 border-t border-border-custom pt-12">
        <h2 className="text-xl font-heading font-extrabold text-secondary tracking-wide">
          Technical Specifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col border border-border-custom rounded-2xl overflow-hidden text-xs sm:text-sm">
            {Object.entries(product.specs).slice(0, Math.ceil(Object.entries(product.specs).length / 2)).map(([key, val], idx) => (
              <div
                key={key}
                className={`grid grid-cols-2 px-6 py-4 ${
                  idx % 2 === 0 ? "bg-lightgray" : "bg-white"
                } border-b border-border-custom last:border-b-0`}
              >
                <span className="font-sans font-bold text-secondary">{key}</span>
                <span className="font-sans text-text-custom/80">{val}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col border border-border-custom rounded-2xl overflow-hidden text-xs sm:text-sm">
            {Object.entries(product.specs).slice(Math.ceil(Object.entries(product.specs).length / 2)).map(([key, val], idx) => (
              <div
                key={key}
                className={`grid grid-cols-2 px-6 py-4 ${
                  idx % 2 === 0 ? "bg-lightgray" : "bg-white"
                } border-b border-border-custom last:border-b-0`}
              >
                <span className="font-sans font-bold text-secondary">{key}</span>
                <span className="font-sans text-text-custom/80">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="flex justify-center mt-6">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
