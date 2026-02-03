"use client"

import { motion } from "framer-motion"
import { Download, Monitor, ShieldCheck, Zap } from "lucide-react"

export default function GetConnectedWindows() {
  return (
    <section
      id="get-connected"
      className="min-h-screen py-24 px-6 mt-25 bg-gradient-to-br from-teal-50 via-teal-100 to-emerald-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Get Connected for Windows
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Download our Windows application to experience fast, secure, and
          seamless connectivity designed for modern users.
        </p>

        <div className="space-x-3">
              {/* WINDOWS DOWNLOAD */}
              <motion.a
                href="https://github.com/subhani-herath/connectra-frontend/releases/download/v1.0.0/Connectra-1.0.0-Windows-x64.exe"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
               className="inline-flex items-center gap-3 bg-gradient-to-r bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-xl shadow-lg  transition"
              >
                Download for Windows
              </motion.a>

              {/* MAC DOWNLOAD */}
              <motion.a
                href="https://github.com/subhani-herath/connectra-frontend/releases/download/v2.0.0/Connectra-1.0.0-macOS-x64.dmg"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-xl shadow-lg  transition"
              >
                Download for macOS
              </motion.a>


            </div>
      </motion.div>

      {/* Features */}
      <div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            icon: <Monitor />,
            title: "Optimized for Windows",
            desc: "Built specifically for Windows OS with smooth performance.",
          },
          {
            icon: <ShieldCheck />,
            title: "Secure Connection",
            desc: "End-to-end encrypted connection for maximum security.",
          },
          {
            icon: <Zap />,
            title: "Fast & Reliable",
            desc: "Low latency and high-speed connectivity anytime.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-gradient-to-br from-white/80 via-white/70 to-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center border border-gray-200"
          >
            <div className="flex justify-center mb-4 text-teal-600">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
