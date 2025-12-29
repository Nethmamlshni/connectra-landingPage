"use client"

import { motion } from "framer-motion"

interface Props {
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ title, description, icon }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl border p-6 shadow-sm hover:shadow-lg transition"
    >
      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
        {icon}
      </div>

      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </motion.div>
  )
}
