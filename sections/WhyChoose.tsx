"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { ShieldCheck, Calendar, CheckSquare, Award } from "lucide-react";
import Reveal, { RevealStagger } from "@/components/Reveal";

// Helper Count-Up Component
function CountUp({ target, duration = 1.5, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

const chooseCards = [
  {
    icon: ShieldCheck,
    title: "Premium Materials",
    desc: "Sourced from the best materials in the industry.",
    targetNum: 100,
    suffix: "%",
    subtext: "Premium Quality"
  },
  {
    icon: Calendar,
    title: "Innovative Design",
    desc: "Stylish solutions designed for luxury and ergonomics.",
    targetNum: 20,
    suffix: "+",
    subtext: "Years of Trust"
  },
  {
    icon: CheckSquare,
    title: "Sustainable Future",
    desc: "Eco-friendly practices and processes for a greener tomorrow.",
    targetNum: 10000,
    suffix: "+",
    subtext: "Projects Delivered"
  },
  {
    icon: Award,
    title: "Pan India Presence",
    desc: "Reliable dealer network with over 100+ stores nationwide.",
    targetNum: 500,
    suffix: "+",
    subtext: "Dealers Network"
  }
];

export default function WhyChoose() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden px-6 md:px-12 lg:px-24">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="flex flex-col mb-16 max-w-xl">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-primary mb-2.5 inline-block">
            Heritage
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-secondary tracking-tight">
            Why choose Narvo?
          </h2>
          <p className="text-sm md:text-base text-text-custom/60 mt-3 font-sans">
            We go beyond products — we deliver experience, design integrity, and premium engineering.
          </p>
        </div>

        {/* Stats Grid */}
        <RevealStagger delay={0.1} staggerChildren={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chooseCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 85 } }
                  }}
                  className="group relative glass-panel-dark p-8 rounded-[24px] border border-white/5 shadow-xl hover:border-primary/50 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between min-h-[300px]"
                >
                  {/* Subtle Background Particle Animation Placeholder */}
                  <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                  {/* Card Icon & Text */}
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-white tracking-wide group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-xs font-sans text-white/60 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* Counter Stats (Gold highlight) */}
                  <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex flex-col gap-1">
                    <div className="text-4xl font-heading font-extrabold text-primary tracking-tight">
                      <CountUp target={card.targetNum} suffix={card.suffix} />
                    </div>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/40">
                      {card.subtext}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </RevealStagger>
      </div>
    </section>
  );
}
