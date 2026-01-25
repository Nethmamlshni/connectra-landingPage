"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-teal-700 border-t border-teal-600  text-white pt-20">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6">
        
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-semibold text-white mb-2">
            UniPlatform
          </h3>
          <p className="text-teal-200 text-sm max-w-md">
            The next generation online mentoring platform for modern
            university education.
          </p>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm md:text-right"
        >
          <p className="uppercase tracking-wide text-xs text-teal-300">
            Developed in collaboration with
          </p>
          <p className="font-medium text-teal-100">
            Uva Wellassa University
          </p>
          <p className="text-xs text-teal-300">
            Badulla, Sri Lanka
          </p>
        </motion.div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-teal-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          
          <span className="text-teal-100">
            © {new Date().getFullYear()} UniPlatform. All rights reserved.
          </span>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-teal-100 hover:text-teal-300 transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-teal-100 hover:text-teal-300 transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
