"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  const [treeCount, setTreeCount] = useState(90000185);

  // Soft ticking counter to show active tracking
  useEffect(() => {
    const interval = setInterval(() => {
      setTreeCount((prev) => prev + Math.floor(Math.random() * 2) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Format number to have spaced groups or individual digit styling
  const formattedCount = treeCount.toString();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-between bg-secondary overflow-hidden pt-28 pb-20 px-6 md:px-12 lg:px-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_interior.png"
          alt="Luxury Modern Interior"
          fill
          priority
          className="object-cover object-center brightness-90 transform scale-105 animate-[zoom-out_20s_ease-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        {/* Subtle grid mesh overlay */}
        <div className="absolute inset-0 grid-bg opacity-15 z-10 pointer-events-none" />
      </div>

      {/* Hero Content Wrapper */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        {/* Left Typography Block */}
        <div className="lg:col-span-7 flex flex-col items-start text-white">
          <Reveal yOffset={25} delay={0.2} blur>
            <span className="text-[11px] md:text-xs font-sans font-bold uppercase tracking-[0.3em] text-primary mb-5 inline-block">
              Textile & Hardware
            </span>
          </Reveal>

          <Reveal yOffset={35} delay={0.35} blur>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.1] font-heading font-extrabold tracking-tight mb-6">
              Designed for <br />
              Every <span className="text-primary italic font-serif font-light">Detail.</span>
            </h1>
          </Reveal>

          <Reveal yOffset={30} delay={0.5} blur>
            <p className="text-base sm:text-lg text-white/70 max-w-lg leading-relaxed font-sans mb-10">
              Elevate your interiors with our handcrafted range of luxury textiles, premium plywood, designer doors, and smart hardware solutions.
            </p>
          </Reveal>

          {/* Action CTAs */}
          <Reveal yOffset={20} delay={0.65} blur={false}>
            <div className="flex flex-wrap items-center gap-5">
              <Magnetic>
                <Link
                  href="#products"
                  className="group px-7 py-4 bg-primary hover:bg-[#b57a22] text-white text-sm font-sans font-semibold tracking-wider rounded-full shadow-gold-glow flex items-center gap-3 transition-all duration-300 transform active:scale-95"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Magnetic>

              <Magnetic>
                <Link
                  href="#stores"
                  className="px-7 py-4 border border-white/20 hover:border-primary/60 hover:bg-white/5 text-white text-sm font-sans font-semibold tracking-wider rounded-full flex items-center gap-3 transition-all duration-300 transform active:scale-95"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  Find a Store
                </Link>
              </Magnetic>
            </div>
          </Reveal>

          {/* Slide Indicator */}
          <div className="mt-16 flex items-center gap-4 text-xs font-sans font-bold tracking-widest text-white/40">
            <span className="text-primary">01</span>
            <span className="w-16 h-[1px] bg-white/20 relative">
              <span className="absolute top-0 left-0 w-1/3 h-full bg-primary" />
            </span>
            <span>03</span>
          </div>
        </div>

        {/* Right Floating Eco-Widget Block */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <Reveal yOffset={40} delay={0.8} scale={0.9} rotate={-1}>
            <div className="glass-panel-dark p-8 rounded-[28px] max-w-[380px] w-full border border-white/10 shadow-2xl flex flex-col relative overflow-hidden group">
              {/* Background gradient radial glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-700" />
              
              <div className="flex items-center gap-3 text-[10px] font-sans font-bold uppercase tracking-widest text-white/50 mb-6">
                <Leaf className="w-4 h-4 text-primary animate-pulse" />
                <span>Trees Planted Till Date</span>
              </div>

              {/* Ticking number widget */}
              <div className="flex items-center gap-1.5 mb-6">
                {formattedCount.split("").map((digit, index) => {
                  const isHighlight = index >= formattedCount.length - 3;
                  return (
                    <motion.span
                      key={index}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: index * 0.03 }}
                      className={`text-2xl sm:text-3xl font-heading font-extrabold px-2 py-1.5 rounded-md ${
                        isHighlight 
                          ? "bg-primary text-white" 
                          : "bg-white/5 text-white/95 border border-white/5"
                      }`}
                    >
                      {digit}
                    </motion.span>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-xs font-sans font-bold tracking-widest text-white/40 mb-4">
                <span>11 JULY</span>
                <span className="text-white/60">2026</span>
              </div>

              {/* Progress Slider */}
              <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden mb-6 relative">
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "75%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-[#b57a22] rounded-full"
                />
              </div>

              <p className="text-[12px] text-white/60 font-sans leading-relaxed flex items-start gap-2">
                <span>Join us in building a greener tomorrow. Every hardware purchase helps restore forests.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
