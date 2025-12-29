"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const tabs = ["For Lecturers", "For Students", "For Admins"]

export default function TailoredExperiencePage() {
  const [active, setActive] = useState("For Lecturers")

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <h1 className="text-4xl font-bold text-center">
          Tailored Experience
        </h1>
        <p className="text-center text-gray-600 mt-3 mb-10">
          Interfaces designed specifically for your role in the university.
        </p>

        {/* TABS */}
        <div className="flex justify-center gap-3 mb-12">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${active === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white border text-gray-600"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* DASHBOARD CARD */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg border p-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-lg">
              {active} Dashboard
            </h3>

            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm">
              Create Session
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Active Session */}
            <div className="border rounded-xl p-5">
              <h4 className="font-medium mb-2">Active Sessions</h4>
              <div className="flex items-center justify-between text-sm">
                <span>Advanced Algorithms</span>
                <span className="text-green-600">● Live</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="border rounded-xl p-5">
              <h4 className="font-medium mb-2">Quick Actions</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>View Quiz Results</li>
                <li>Attendance Report</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
