"use client"

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"

const partners = [
  { name: "Mountain Adventures", logo: "/placeholder.svg?height=60&width=120&text=Mountain+Adventures" },
  { name: "Sky Sports", logo: "/placeholder.svg?height=60&width=120&text=Sky+Sports" },
  { name: "Adventure Club", logo: "/placeholder.svg?height=60&width=120&text=Adventure+Club" },
  { name: "Extreme Sports", logo: "/placeholder.svg?height=60&width=120&text=Extreme+Sports" },
  { name: "Flight Academy", logo: "/placeholder.svg?height=60&width=120&text=Flight+Academy" },
]

const stats = [
  { number: 1000, suffix: "+", label: "Successful Flights" },
  { number: 50, suffix: "+", label: "Certified Instructors" },
  { number: 15, suffix: "", label: "Years Experience" },
  { number: 98, suffix: "%", label: "Safety Record" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000 })
  const displayed = useTransform(springValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  return (
    <span ref={ref}>
      <motion.span>{displayed}</motion.span>
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            className="text-gray-500 mb-8"
            animate={isInView ? { opacity: [0.5, 1, 0.5] } : {}}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            Trusted by leading adventure companies
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                animate={
                  isInView
                    ? {
                        opacity: 0.6,
                        scale: 1,
                        rotateY: 0,
                      }
                    : {
                        opacity: 0,
                        scale: 0.5,
                        rotateY: -90,
                      }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.2,
                  opacity: 1,
                  rotateY: 10,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="transition-all duration-300 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      y: 50,
                      scale: 0.8,
                    }
              }
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.1,
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="text-center group cursor-pointer"
            >
              <motion.div
                className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2"
                whileHover={{
                  textShadow: "0 0 20px rgba(249, 115, 22, 0.5)",
                  scale: 1.1,
                }}
              >
                <AnimatedCounter value={stat.number} suffix={stat.suffix} />
              </motion.div>
              <motion.p
                className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors"
                whileHover={{ y: -2 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
