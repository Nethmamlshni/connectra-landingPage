"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Download() {
  const [notifyEmail, setNotifyEmail] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleNotify = async () => {
    if (!notifyEmail) return alert("Please enter your email")
    setLoading(true)
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: notifyEmail }),
      })

      if (res.ok) {
        setSuccess(true)
        setNotifyEmail("")
        setTimeout(() => setSuccess(false), 3000)
      } else {
        alert("Something went wrong. Try again later.")
      }
    } catch (err) {
      console.error(err)
      alert("Something went wrong. Try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="download" className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Get Started with <span className="text-teal-600">Connectra</span>
          </h1>

          <p className="text-gray-600 mb-8 max-w-md">
            Ensure your device meets the minimum requirements for the best
            experience.
          </p>

          <ul className="space-y-5">
            <Requirement
              title="Operating System"
              value="Windows 11 (64-bit)/ macOS (64-bit)/ Linux (64-bit)"
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
            <h2 className="text-xl font-semibold text-gray-900">Connectra Desktop</h2>
            <p className="text-sm text-gray-500 mb-6">
              v1.0.0 · Build 97.0 MB Windows / 120.0 MB macOS
            </p>

            <div className="space-y-3">
              {/* WINDOWS DOWNLOAD */}
              <motion.a
                href="https://github.com/subhani-herath/connectra-frontend/releases/download/v1.0.0/Connectra-1.0.0-Windows-x64.exe"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full py-3 rounded-lg text-white text-sm 
                  bg-gradient-to-r from-teal-600 to-emerald-600 
                  hover:from-teal-700 hover:to-emerald-700 transition"
              >
                Download for Windows
              </motion.a>

              {/* MAC DOWNLOAD */}
              <motion.a
                href="https://github.com/subhani-herath/connectra-frontend/releases/download/v2.0.0/Connectra-1.0.0-macOS-x64.dmg"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full py-3 rounded-lg text-white text-sm 
                  bg-gradient-to-r from-teal-600 to-emerald-600 
                  hover:from-teal-700 hover:to-emerald-700 transition"
              >
                Download for macOS
              </motion.a>


            </div>

            

            <p className="text-xs text-gray-400 mt-4">
              ✔ Virus scanned · ✔ Digital signature
            </p>
          </div>

          {/* COMING SOON CARD */}
          <div className="bg-white rounded-2xl shadow p-6 border">
            <h3 className="font-semibold mb-3 text-gray-900">Mac & Linux Coming Soon</h3>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                onClick={handleNotify}
                disabled={loading}
                className="px-4 py-2 rounded-lg text-white text-sm bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 transition"
              >
                {loading ? "Sending..." : "Notify Me"}
              </button>
            </div>

            {success && (
              <p className="mt-2 text-green-600 text-sm font-medium">
                Thank you! We will notify you when it's available.
              </p>
            )}
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
      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-green-600 font-bold">
        ✔
      </div>
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-600">{value}</p>
      </div>
    </li>
  )
}
