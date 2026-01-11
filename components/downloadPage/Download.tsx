"use client"

import { motion } from "framer-motion"

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Get Started with <span className="text-blue-600">Connectra</span>
          </h1>

          <p className="text-gray-600 mb-8">
            Ensure your device meets the minimum requirements for the best
            experience.
          </p>

          <ul className="space-y-5">
            <Requirement
              title="Operating System"
              value="Windows 10 or Windows 11 (64-bit)"
            />
            <Requirement
              title="Memory & Storage"
              value="4GB RAM minimum, 500MB free disk space"
            />
            <Requirement
              title="Internet Connection"
              value="Stable broadband connection (5 Mbps recommended)"
            />
          </ul>
        </motion.div>

        {/* RIGHT DOWNLOAD CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* MAIN CARD */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-blue-100 flex items-center justify-center">
              ⬇️
            </div>

            <h2 className="text-xl font-semibold">Connectra Desktop</h2>
            <p className="text-sm text-gray-500 mb-6">
              v1.0.0 · Build 145 MB
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-xl font-semibold text-white
              bg-gradient-to-r from-blue-500 to-purple-600"
            >
              Download Now
            </motion.button>

            <p className="text-xs text-gray-400 mt-4">
              ✔ Virus scanned · ✔ Digital signature
            </p>
          </div>

          {/* COMING SOON CARD */}
          <div className="bg-white rounded-2xl shadow p-6 border">
            <h3 className="font-semibold mb-3">Mac & Linux Coming Soon</h3>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 rounded-lg text-white text-sm bg-black hover:bg-gray-800">
                Notify Me
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

/* 🔹 Reusable Requirement Item */
function Requirement({ title, value }: { title: string; value: string }) {
  return (
    <li className="flex gap-4">
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
        ✔
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-600">{value}</p>
      </div>
    </li>
  )
}
