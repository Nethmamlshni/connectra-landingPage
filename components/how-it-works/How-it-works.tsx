"use client"

import { motion } from "framer-motion"
import { Download, Settings, PlayCircle, CheckCircle } from "lucide-react"

const steps = [
  {
    title: "Download the App",
    desc: "Install the Windows application from our official website.",
    icon: <Download />,
  },
  {
    title: "Configure Settings",
    desc: "Set your preferences and connect securely.",
    icon: <Settings />,
  },
  {
    title: "Start Using",
    desc: "Enjoy fast and reliable connectivity instantly.",
    icon: <PlayCircle />,
  },
  {
    title: "Stay Connected",
    desc: "Automatic updates and performance monitoring.",
    icon: <CheckCircle />,
  },
]

export default function HowItWorks() {
  return (
    <section className="min-h-screen py-24 px-6 mt-30 bg-gradient-to-br from-teal-100 via-white to-emerald-100">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-teal-900">
          See How It Works
        </h1>
        <p className="text-teal-700">
          Follow these simple steps to get started in minutes.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative bg-gradient-to-br from-teal-600 to-emerald-500 text-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4 text-white text-3xl">
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-teal-100 text-sm">
              {step.desc}
            </p>

            {/* Step Number */}
            <span className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-teal-600 flex items-center justify-center font-bold shadow-md">
              {i + 1}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
