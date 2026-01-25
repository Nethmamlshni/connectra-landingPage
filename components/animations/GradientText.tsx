"use client"

import { motion } from "framer-motion"

interface Props {
  text: string
}

export default function GradientText({ text }: Props) {
  return (
    <motion.h1 initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className=" text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-400 via-teal-500 to-emerald-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient
      "
    >
      {text}
    </motion.h1>
  )
}
