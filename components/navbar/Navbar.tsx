"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-8 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg">
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold text-gray-900"
        >
          UniPlatform
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <Link href="#features" className="hover:text-black transition">
            Features
          </Link>
          <Link href="#team" className="hover:text-black transition">
            Team
          </Link>
        </div>

        {/* Button */}
        <Link
          href="#download"
          className="ml-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-sm font-medium hover:bg-blue-600 transition"
        >
          Download
        </Link>
      </div>
    </motion.nav>
  )
}
