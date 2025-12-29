"use client"

import { useEffect, useState } from "react"

export default function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const interval = setInterval(() => {
      start += Math.ceil(value / 30)
      if (start >= value) {
        setCount(value)
        clearInterval(interval)
      } else {
        setCount(start)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [value])

  return <span className="text-3xl font-bold">{count}+</span>
}
