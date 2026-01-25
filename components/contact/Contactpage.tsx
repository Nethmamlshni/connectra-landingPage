"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function ContactPage() {
  const [flipped, setFlipped] = useState(false)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  // Send email function
  const handleSend = async () => {
    const nameInput = (document.querySelector<HTMLInputElement>('input[placeholder="Your Name"]')?.value || "").trim()
    const emailInput = (document.querySelector<HTMLInputElement>('input[placeholder="Email"]')?.value || "").trim()
    const messageInput = (document.querySelector<HTMLTextAreaElement>('textarea[placeholder="Message"]')?.value || "").trim()

    if (!nameInput || !emailInput || !messageInput) {
      alert("Please fill all fields")
      return
    }

    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nameInput, email: emailInput, message: messageInput }),
      })

      const result = await res.json()
      if (res.ok) {
        setSent(true)
        setTimeout(() => setSent(false), 1800)
        setTimeout(() => setFlipped(false), 2500)
      } else {
        alert(result.error || "Failed to send message")
      }
    } catch (err) {
      console.error(err)
      alert("Failed to send message")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className=" bg-gradient-to-br from-teal-50 via-white to-emerald-50 px-6 py-20 flex flex-col items-center">

      {/* ===== HEADER ===== */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mt-4 mb-12 max-w-2xl">
        Have questions or feedback? Send us a message!
      </p>

      {/* ===== CONTACT CARD ===== */}
      <div className="relative w-full max-w-md">

        {/* ✅ Confirmation Message */}
        <AnimatePresence>
          {sent && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-x-0 top-0 text-center mb-6 z-10"
            >
              <SuccessCheck />
              <p className="mt-4 text-gray-600 text-lg font-semibold">
                Right on! Send another?
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===== Flip Card ===== */}
        <motion.div className="relative w-full h-64 perspective">
          <motion.div
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full transform-style-preserve-3d"
          >
            {/* Front Side */}
            <div className="absolute inset-0 bg-white border border-gray-300 rounded-xl backface-hidden flex flex-col items-center justify-center p-6">
              <p className="text-gray-500 text-sm text-center">
                We&apos;d love to hear from you! Send us a message and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 bg-white border border-gray-300 rounded-xl backface-hidden rotate-y-180 p-6 flex flex-col justify-center gap-3">
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <textarea
                  placeholder="Message"
                  className="w-full h-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* ===== Buttons ===== */}
        <div className="flex justify-center gap-4 mt-6">
          {!flipped && (
            <button
              onClick={() => setFlipped(true)}
              className="px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Send a Message
            </button>
          )}

          {flipped && (
            <>
              <button
                onClick={handleSend}
                disabled={loading}
                className="px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl shadow-lg hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send"}
              </button>

              <button
                onClick={() => setFlipped(false)}
                className="px-8 py-3 bg-white text-teal-700 rounded-xl border border-teal-300 hover:bg-teal-50 transition"
              >
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

/* ===========================
   Success SVG Component
=========================== */
function SuccessCheck() {
  return (
    <svg
      className="mx-auto w-16 h-16"
      viewBox="0 0 130.2 130.2"
    >
      <circle
        fill="none"
        stroke="#14B8A6"
        strokeWidth="6"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <polyline
        fill="none"
        stroke="#14B8A6"
        strokeWidth="6"
        strokeLinecap="round"
        points="100.2,40.2 51.5,88.8 29.8,67.5"
      />
    </svg>
  )
}
