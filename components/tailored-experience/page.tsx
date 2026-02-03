"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

// Tabs
const tabs = ["For Lecturers", "For Students", "For Admins"]

// Role-specific data
const roleData: Record<
  string,
  {
    title: string
    buttonText: string
    sessions: { name: string; status: string }[]
    actions: string[]
  }
> = {
  "For Lecturers": {
    title: "Lecturer Dashboard",
    buttonText: "Create Session",
    sessions: [
      { name: "Advanced Algorithms", status: "Live" },
      { name: "Database Systems", status: "Upcoming" },
    ],
    actions: ["View Quiz Results", "Attendance Report", "Share Lecture Material"],
  },
  "For Students": {
    title: "Student Dashboard",
    buttonText: "Join Session",
    sessions: [
      { name: "Advanced Algorithms", status: "Live" },
      { name: "Database Systems", status: "Recorded" },
    ],
    actions: [
      "Download Lecture Materials",
      "Attempt Quizzes",
      "View Grades & Feedback",
    ],
  },
  "For Admins": {
    title: "Admin Dashboard",
    buttonText: "Manage Sessions",
    sessions: [
      { name: "Advanced Algorithms", status: "Live" },
      { name: "Database Systems", status: "Live" },
      { name: "Operating Systems", status: "Upcoming" },
    ],
    actions: ["Manage Users", "Monitor Engagement", "Generate Reports"],
  },
}

export default function TailoredExperiencePage() {
  const router = useRouter()
  const [active, setActive] = useState("For Lecturers")
  const data = roleData[active]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900">
          Tailored Experience
        </h1>
        <p className="text-center text-gray-600 mt-4 mb-12 max-w-2xl mx-auto">
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
                  ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white"
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
            <h3 className="font-semibold text-lg text-gray-900">{data.title}</h3>
            <button type="button" onClick={() => router.push('/get-connected')} className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-sm font-medium transition hover:from-teal-700 hover:to-emerald-700">
              {data.buttonText}
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Sessions */}
            <div className="border rounded-xl p-5">
              <h4 className="font-medium mb-2 text-gray-800">Sessions</h4>
              <div className="space-y-2 text-sm">
                {data.sessions.map((s, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-sm"
                  >
                    <span>{s.name}</span>
                    <span
                      className={`${
                        s.status === "Live"
                          ? "text-green-600"
                          : s.status === "Upcoming"
                          ? "text-yellow-600"
                          : "text-gray-500"
                      }`}
                    >
                      ● {s.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="border rounded-xl p-5">
              <h4 className="font-medium mb-2 text-gray-800">Quick Actions</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                {data.actions.map((action, idx) => (
                  <li key={idx}>{action}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
