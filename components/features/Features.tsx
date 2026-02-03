"use client"

import { motion, Variants } from "framer-motion"
import {
  AcademicCapIcon,
  ChartBarIcon,
  UserGroupIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline"

/* =========================
   Framer Motion Variants
========================= */

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

/* =========================
   Feature Data – Connectra
========================= */

const features = [
  {
    title: "Smart Attendance",
    description:
      "Automatically tracks student attendance based on join and leave time, ensuring accurate and fair participation records.",
    icon: AcademicCapIcon,
  },
  {
    title: "Engagement Monitoring",
    description:
      "Interactive quizzes and attention checks help lecturers monitor student engagement during live lectures.",
    icon: ChartBarIcon,
  },
  {
    title: "Role-Based Dashboards",
    description:
      "Dedicated dashboards for administrators, lecturers, and students with university-specific access and controls.",
    icon: UserGroupIcon,
  },
  {
    title: "Lecture Management",
    description:
      "Schedule classes, share and download lecture materials, and manage online sessions efficiently.",
    icon: CalendarIcon,
  },
]

/* =========================
   Features Component
========================= */

export default function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background band */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-teal-100/70 -z-10" />

      {/* Section Title */}
      <div className="max-w-3xl mx-auto text-center mb-16 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Key Features of Connectra
        </h1>
        <p className="text-gray-600">
          Discover how Connectra enhances online learning with smart attendance, engagement tracking, and lecture management.
        </p>
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              className={`relative bg-white rounded-2xl shadow-xl p-8 text-center transition-transform hover:-translate-y-2 ${
                index % 2 === 1 ? "lg:mt-16" : ""
              }`}
            >
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500">
                <feature.icon className="h-7 w-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold tracking-wide mb-3 uppercase text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* More link */}
              <button className="text-sm font-semibold tracking-widest uppercase underline underline-offset-4 text-teal-600 hover:text-teal-700 transition">
                More
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
