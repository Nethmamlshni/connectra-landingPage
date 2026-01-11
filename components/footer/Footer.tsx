"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-24">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6">
        
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-semibold text-gray-900 mb-2">
            UniPlatform
          </h3>
          <p className="text-gray-500 text-sm max-w-md">
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
          className="text-sm text-gray-500 md:text-right"
        >
          <p className="uppercase tracking-wide text-xs text-gray-400">
            Developed in collaboration with
          </p>
          <p className="font-medium text-gray-700">
            Uva Wellassa University
          </p>
          <p className="text-xs text-gray-400">
            Badulla, Sri Lanka
          </p>
        </motion.div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          
          <span>
            © {new Date().getFullYear()} UniPlatform. All rights reserved.
          </span>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-gray-900 transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-gray-900 transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
