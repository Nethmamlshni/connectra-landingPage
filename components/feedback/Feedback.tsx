"use client";

import { motion } from "framer-motion";

const feedbacks = [
  {
    name: "Anuradha Perera",
    role: "Backend Developer at Zone Company",
    message:
      "UniPlatform is amazing! The Windows app is fast and reliable, and the UI is very intuitive.",
    avatar: "/team/f1.png",
  },
  {
    name: "Supuni Fernando",
    role: "Frontend Developer at Tech Company",
    message:
      "I love how smooth the platform is. The notifications for updates are super helpful!",
    avatar: "/team/f2.png",
  },
  {
    name: "Thrusha Jayasinghe",
    role: "UI/UX Designer at Creative Company",
    message:
      "The design is clean, modern, and the color palette makes it feel professional.",
    avatar: "/team/f3.png",
  },
];

export default function FeedbackPage() {
  return (
    <section className=" bg-gradient-to-br from-teal-50 via-white to-emerald-50 py-24 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          What Our Users Say
        </h1>
        <p className="text-gray-600">
          Feedback from our amazing community. See what people love about
          UniPlatform!
        </p>
      </motion.div>

      {/* Feedback Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {feedbacks.map((fb, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform border border-gray-200"
          >
            {/* Avatar + Name */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={fb.avatar}
                alt={fb.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-teal-500"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {fb.name}
                </h3>
                <p className="text-sm text-gray-500">{fb.role}</p>
              </div>
            </div>

            {/* Message */}
            <p className="text-gray-700 text-sm">{fb.message}</p>

            {/* Quote Icon */}
            <div className="mt-4 self-end text-teal-600 text-3xl font-bold">
              “
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
