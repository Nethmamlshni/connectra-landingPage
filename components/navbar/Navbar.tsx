"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedButton from "../../components/ui/AnimatedButton"
import Link from "next/link"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Team", href: "#team" },
    { name: "Upload", href: "/upload" },
  ]

  return (
    <motion.nav
      className={`fixed w-full z-50 bg-white/80 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-lg" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="font-extrabold text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            UniPlatform
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2, color: "#7f5af0" }}
              className="text-gray-700 font-medium transition-colors"
            >
              {link.name}
            </motion.a>
          ))}

          <AnimatedButton label="Get Started" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-8 h-8 flex flex-col justify-between items-center"
          >
            <span
              className={`block h-0.5 w-full bg-gray-700 rounded transition-transform ${
                menuOpen ? "rotate-45 translate-y-3.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-gray-700 rounded transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-gray-700 rounded transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 font-medium hover:text-purple-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <AnimatedButton label="Get Started" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
