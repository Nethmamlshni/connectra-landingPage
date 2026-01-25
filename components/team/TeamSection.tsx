"use client"

import { motion, Variants } from "framer-motion"
import FadeIn from "../animations/FadeIn"
import { Linkedin, Twitter, Link as LinkIcon } from "lucide-react"

const team = [
  {
    name: "Subani Herath",
    role: "Backend Developer",
    img: "/team/Subhani.png",
    bio: "Specialized in server-side logic, APIs, and database optimization.",
  },
  {
    name: "Theekshana Nirmal",
    role: "Backend Developer",
    img: "/team/Theekshana.jpeg",
    bio: "Experienced in scalable backend systems and secure authentication.",
  },
  {
    name: "Nethma Malshani",
    role: "Frontend Developer",
    img: "/team/Nethma.png",
    bio: "Focused on modern UI development and smooth user experiences.",
  },
  {
    name: "Thujani Sachinika",
    role: "UI/UX Designer",
    img: "/team/Sachinika.png",
    bio: "Designs intuitive interfaces with user-centered thinking.",
  },
  {
    name: "Dasun Yapa",
    role: "UI/UX Designer",
    img: "/team/Yapa.png",
    bio: "Passionate about visual design systems and accessibility.",
  },
]

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
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

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-24  overflow-hidden bg-gradient-to-br from-teal-50 via-teal-100 to-emerald-50"
    >
      <FadeIn>
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
          Meet Our Team
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Our dedicated team of professionals is here to bring your vision to life.
        </p>
      </FadeIn>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={card}
              className="flex justify-center"
            >
              {/* 3D FLIP CARD */}
              <div className="relative w-[260px] h-[260px] perspective">
                <motion.div
                  whileHover={{ rotateX: 180 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-full transform-style-preserve-3d"
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 backface-hidden rotate-x-180 rounded-xl p-6 flex flex-col items-center justify-center text-center
                                  bg-gradient-to-br from-teal-600 to-emerald-600 text-white shadow-lg border border-teal-700">
                    <h4 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm uppercase tracking-wide text-teal-200 mb-4">
                      {member.role}
                    </p>
                    <p className="text-sm text-teal-100 mb-6">
                      {member.bio}
                    </p>

                    <div className="flex gap-4">
                      {[Linkedin, Twitter, LinkIcon].map((Icon, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.2, y: -2 }}
                          className="p-2 bg-white/20 rounded-md cursor-pointer hover:bg-white/30 transition"
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
