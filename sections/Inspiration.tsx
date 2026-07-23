"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal, { RevealStagger } from "@/components/Reveal";

const inspirations = [
  {
    title: "Minimalist Home",
    desc: "Clean lines and warm tones create a perfect balance.",
    image: "/hero_interior.png",
    href: "#inspiration-1",
  },
  {
    title: "Modern Office",
    desc: "Functional spaces that inspire productivity and focus.",
    image: "/modular_cat.png",
    href: "#inspiration-2",
  },
  {
    title: "Luxury Living",
    desc: "Sophisticated materials tailored for elegant interiors.",
    image: "/veneer_cat.png",
    href: "#inspiration-3",
  },
  {
    title: "Wooden Wonders",
    desc: "Timeless beauty and durability of natural wood veneers.",
    image: "/door_cat.png",
    href: "#inspiration-4",
  },
];

export default function Inspiration() {
  return (
    <section id="inspiration" className="relative py-24 bg-lightgray overflow-hidden px-6 md:px-12 lg:px-24">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-primary mb-2.5 inline-block">
              Inspiration
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-secondary tracking-tight">
              Find inspiration
            </h2>
            <p className="text-sm md:text-base text-text-custom/60 mt-3 font-sans">
              Real spaces. Real stories. Real design craft.
            </p>
          </div>

          <Link
            href="#all-stories"
            className="group inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-300"
          >
            View all stories
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Pinterest-style Cards Grid */}
        <RevealStagger delay={0.1} staggerChildren={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspirations.map((item) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 85 } },
                }}
                className="group flex flex-col bg-white rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-border-custom cursor-pointer"
              >
                {/* Image Header with scale-zoom effect */}
                <div className="relative h-[240px] overflow-hidden bg-secondary">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108"
                  />
                  {/* Thin dark glow overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Text Content Box */}
                <div className="p-6 flex flex-col justify-between flex-grow gap-4 relative">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-secondary tracking-wide mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs font-sans text-text-custom/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Gold arrow hover indicator */}
                  <div className="flex justify-end pt-2">
                    <div className="w-8 h-8 rounded-full bg-lightgray group-hover:bg-primary/10 flex items-center justify-center text-text-custom group-hover:text-primary transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealStagger>
      </div>
    </section>
  );
}
