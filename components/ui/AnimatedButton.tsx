"use client"

import { motion } from "framer-motion"

interface AnimatedButtonProps {
  label: string
  className?: string
}

export default function AnimatedButton({
  label,
  className = "",
}: AnimatedButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-6 py-3 rounded-xl font-semibold
        text-white overflow-hidden transition
        bg-teal-700 hover:bg-teal-800
        ${className}
      `}
    >
      {/* Shimmer Effect */}
      <span
        className="
          absolute inset-0
          bg-gradient-to-r from-transparent via-white/30 to-transparent
          bg-[length:200%_100%]
          animate-shimmer
        "
      />

      <span className="relative z-10">{label}</span>
    </motion.button>
  )
}
