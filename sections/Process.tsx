"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, ClipboardCheck, Wrench, Headphones } from "lucide-react";
import Reveal, { RevealStagger } from "@/components/Reveal";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We discuss your architectural vision and material requirements.",
    icon: MessageSquare,
  },
  {
    num: "02",
    title: "Design",
    desc: "Our design experts align hardware selections with your interior aesthetics.",
    icon: PenTool,
  },
  {
    num: "03",
    title: "Selection",
    desc: "Choose from our high-end curated range of luxury doors, wood veneers, and locks.",
    icon: ClipboardCheck,
  },
  {
    num: "04",
    title: "Installation",
    desc: "Flawless engineering and installation support from certified experts.",
    icon: Wrench,
  },
  {
    num: "05",
    title: "Support",
    desc: "Dedicated post-purchase assistance and product warranties.",
    icon: Headphones,
  },
];

export default function Process() {
  return (
    <section className="relative py-24 bg-white overflow-hidden px-6 md:px-12 lg:px-24">
      {/* Background Subtle grid lines */}
      <div className="absolute inset-0 grid-bg opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="flex flex-col mb-20 max-w-xl">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-primary mb-2.5 inline-block">
            Methodology
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-secondary tracking-tight">
            Our seamless process
          </h2>
          <p className="text-sm md:text-base text-text-custom/60 mt-3 font-sans">
            Crafting luxury from concept to complete execution.
          </p>
        </div>

        {/* Process Steps for Desktop (Horizontal) */}
        <div className="hidden lg:block relative py-12">
          {/* Animated Connecting Timeline Line */}
          <div className="absolute top-[68px] left-[5%] right-[5%] h-[2px] bg-secondary/5 z-0">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "90%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-gradient-to-r from-primary via-[#b57a22] to-primary"
            />
          </div>

          <RevealStagger delay={0.2} staggerChildren={0.15}>
            <div className="grid grid-cols-5 gap-6 relative z-10">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
                    }}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Circle Dot Icon */}
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-border-custom flex items-center justify-center text-secondary group-hover:text-primary group-hover:border-primary transition-all duration-500 shadow-md mb-6 relative">
                      <Icon className="w-5 h-5" />
                      {/* Step Number Badge */}
                      <span className="absolute -top-2.5 -right-2.5 bg-primary text-white text-[9px] font-sans font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-secondary mb-3 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-xs font-sans text-text-custom/60 max-w-[180px] leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </RevealStagger>
        </div>

        {/* Process Steps for Mobile & Tablet (Vertical) */}
        <div className="block lg:hidden relative pl-8 py-4">
          {/* Vertical line indicator */}
          <div className="absolute top-0 left-3 w-[2px] h-full bg-secondary/5">
            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="w-full bg-primary"
            />
          </div>

          <div className="flex flex-col gap-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.num} xOffset={-20} yOffset={0} delay={idx * 0.1}>
                  <div className="relative flex items-start gap-5">
                    {/* Floating Icon badge */}
                    <div className="absolute -left-10 w-6 h-6 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center border border-white shadow-md z-10">
                      {step.num}
                    </div>

                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex flex-col">
                      <h3 className="text-lg font-heading font-bold text-secondary tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-sans text-text-custom/60 mt-1 leading-relaxed max-w-md">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
