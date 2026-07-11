"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  scale?: number;
  rotate?: number;
  blur?: boolean;
}

export default function Reveal({
  children,
  width = "100%",
  delay = 0,
  duration = 0.8,
  yOffset = 40,
  xOffset = 0,
  scale = 0.95,
  rotate = 2,
  blur = true,
}: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        x: xOffset,
        scale: scale,
        rotate: rotate,
        filter: blur ? "blur(8px)" : "blur(0px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}
export function RevealStagger({
  children,
  delay = 0,
  staggerChildren = 0.1,
}: {
  children: ReactNode;
  delay?: number;
  staggerChildren?: number;
}) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
