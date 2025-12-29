"use client"

import { motion } from "framer-motion"
import FadeIn from "../animations/FadeIn"
import { Linkedin, Twitter, Link as LinkIcon } from "lucide-react"
import { Variants } from "framer-motion"

const team = [
  {
    name: "Subani Herath",
    role: "Backend Developer",
    img: "/team/Subhani.png",
    bio: "Specialized in server-side logic, APIs, and database optimization."
  },
  {
    name: "Theekshana Nirmal",
    role: "Backend Developer",
    img: "/team/Theekshana.jpeg",
    bio: "Experienced in scalable backend systems and secure authentication."
  },
  {
    name: "Nethma Malshani",
    role: "Frontend Developer",
    img: "/team/Nethma.png",
    bio: "Focused on modern UI development and smooth user experiences."
  },
  {
    name: "Thujani Sachinika",
    role: "UI/UX Designer",
    img: "/team/Sachinika.png",
    bio: "Designs intuitive interfaces with user-centered thinking."
  },
  {
    name: "Dasun Yapa",
    role: "UI/UX Designer",
    img: "/team/Yapa.png",
    bio: "Passionate about visual design systems and accessibility."
  }
]

/* Variants */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const avatar: Variants = {
  hidden: { scale: 0.6, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-gray-50 overflow-hidden">
      <FadeIn>
        <h2 className="text-3xl font-bold text-center mb-16">
          Meet Our Team
        </h2>
      </FadeIn>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6"
      >
        {/* Connecting line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden md:block absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600origin-left rounded-full"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 relative">
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={card}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-md px-6 pb-6 pt-16 text-center relative hover:shadow-xl transition-shadow"
            >
              {/* Avatar */}
              <motion.div
                variants={avatar}
                className="absolute -top-12 left-1/2 -translate-x-1/2"
              >
                <div className="bg-white p-2 rounded-2xl shadow">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <h4 className="mt-6 font-semibold text-lg">
                {member.name}
              </h4>
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
                {member.role}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {member.bio}
              </p>

              {/* Icons */}
              <div className="flex justify-center gap-4 mt-6">
                {[Linkedin, Twitter, LinkIcon].map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-5 h-5 text-gray-600 cursor-pointer" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
