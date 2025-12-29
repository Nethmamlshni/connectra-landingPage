"use client"

import FadeIn from "../animations/FadeIn"

const team = [
  { name: "R.M. Nethma Malshani", role: "Frontend Developer", img: "/team/placeholder.png" },
]

export default function TeamSection() {
  return (
    <section className="py-20">
      <FadeIn>
        <h2 className="text-3xl font-bold text-center mb-10">Meet the Developers</h2>
      </FadeIn>

      <div className="flex justify-center">
        {team.map((member) => (
          <FadeIn key={member.name}>
            <div className="text-center">
              <img
                src={member.img}
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
              <h4 className="mt-4 font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
