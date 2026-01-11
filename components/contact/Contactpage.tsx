"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function ContactPage() {
  const [flipped, setFlipped] = useState(false)
  const [sent, setSent] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-gray-50">
      <div className="relative w-[420px] bg-white rounded-2xl shadow-2xl pt-56 px-8 pb-8">

        {/* ✅ Confirmation */}
        <AnimatePresence>
          {sent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-24 left-0 right-0 text-center"
            >
              <SuccessCheck />
              <p className="mt-4 text-gray-600 text-lg font-semibold">
                Right on! Send another?
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ✅ Card */}
        <motion.div
          className="absolute -top-15 left-1/2 -translate-x-1/2 w-[400px] h-[250px] perspective"
        >
          <motion.div
            animate={{
              rotateY: flipped ? 180 : 0,
              y: sent ? -600 : 0,
              x: sent ? 600 : 0,
            }}
            transition={{ duration: 1 }}
            className="relative w-full h-full transform-style-preserve-3d"
          >
            {/* Front */}
            <div className="absolute inset-0 border border-gray-300 rounded-xl backface-hidden flex items-center justify-center">
              <span className="text-black text-3xl font-bold">
                Contact Us
              </span>
              <p className="absolute bottom-6 text-gray-500 text-sm">
                We&apos;d love to hear from you!
              </p>
            </div>

            {/* Back */}
            <div className="absolute inset-0 border border-gray-300 rounded-xl backface-hidden rotate-y-180 p-6 text-white">
              <form className="space-y-4">
                <input className="input" placeholder="From" />
                <input className="input" placeholder="To" />
                <textarea className="input h-20" placeholder="Message" />
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* ✅ Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          {!flipped && (
            <button
              onClick={() => setFlipped(true)}
              className="px-8 py-4 bg-gradient-to-br from-blue-500 to-purple-600 text-black rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Send a Message
            </button>
          )}

          {flipped && (
            <>
              <button
                onClick={() => {
                  setSent(true)
                  setTimeout(() => setSent(false), 1600)
                  setTimeout(() => setFlipped(false), 2400)
                }}
                className="px-8 py-4 bg-gradient-to-br from-blue-500 to-purple-600 text-black rounded-xl shadow-lg hover:scale-105 transition"
              >
                Send
              </button>

              <button
                onClick={() => setFlipped(false)}
                className="px-8 py-4 bg-gradient-to-br  text-black rounded-xl hover:bg-gray-100 transition border border-gray-300"
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
        stroke="#777"
        strokeWidth="6"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <polyline
        fill="none"
        stroke="#777"
        strokeWidth="6"
        strokeLinecap="round"
        points="100.2,40.2 51.5,88.8 29.8,67.5"
      />
    </svg>
  )
}
