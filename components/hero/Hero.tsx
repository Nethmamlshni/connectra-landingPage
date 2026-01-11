"use client"
import { motion } from "framer-motion"
import AnimatedButton from "../../components/ui/AnimatedButton"
import GradientText from "../../components/animations/GradientText"

import { Variants } from "framer-motion"

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1], // ✅ FIXED
    },
  },
}


/* ===========================
   Hero Component
=========================== */

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* --------------------------
         Background Glow Effects
      -------------------------- */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-purple-400/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-blue-400/30 rounded-full blur-[120px]" />
      </div>

      {/* --------------------------
         Content Container
      -------------------------- */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-5xl px-6 text-center"
      >
        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mb-4 text-sm md:text-base font-medium text-blue-600"
        >
          The Digital Campus Platform
        </motion.p>

        {/* Animated Gradient Title */}
        <motion.div variants={item}>
          <GradientText text="The Digital Campus, Reimagined." />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Connect a modern university learning environment with smart
          interactions, analytics, and personalized virtual experiences —
          designed for students and educators.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <AnimatedButton label="Get Connected for Windows" />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl font-semibold border border-gray-300
            text-gray-700 hover:bg-gray-100 transition"
          >
            See How It Works
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
