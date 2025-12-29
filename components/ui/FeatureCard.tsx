"use client"

import { motion } from "framer-motion"

interface Props {
  title: string
  description: string
}

export default function FeatureCard({ title, description }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
      className="p-6 rounded-2xl bg-white border"
    >
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </motion.div>
  )
}
