"use client"

import { motion } from "framer-motion"

export default function AnimatedButton({ label }: { label: string}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent bg-[length:200%_100%] animate-shimmer" />
      <span className="relative">{label}</span>
    </motion.button>
  )
}
