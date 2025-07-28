"use client"

import { motion, useInView, Variants } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Shield, Award, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

const features = [
  {
    title: "Tandem Flights",
    description: "Perfect for beginners - fly with certified instructors",
    image: "/placeholder.svg?height=300&width=400&text=Tandem+Flight",
    badge: "Popular",
    rating: 4.9,
    duration: "2-3 hours",
    icon: Shield,
    color: "orange",
  },
  {
    title: "Solo Training",
    description: "Learn to fly independently with our comprehensive courses",
    image: "/placeholder.svg?height=300&width=400&text=Solo+Training",
    badge: "Advanced",
    rating: 4.8,
    duration: "5-7 days",
    icon: Award,
    color: "amber",
  },
  {
    title: "Scenic Tours",
    description: "Explore breathtaking landscapes from above",
    image: "/placeholder.svg?height=300&width=400&text=Scenic+Tours",
    badge: "Scenic",
    rating: 5.0,
    duration: "1-2 hours",
    icon: Star,
    color: "yellow",
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50/50 to-amber-50/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} className="inline-block">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200 px-6 py-2 text-sm font-medium shadow-lg">
              Our Services
            </Badge>
          </motion.div>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
            animate={
              isInView
                ? {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }
                : {}
            }
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
            style={{
              background: "linear-gradient(90deg, #1f2937, #f97316, #1f2937)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Choose Your Sky Adventure
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            From first-time flights to advanced training, we offer experiences for every skill level
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="absolute top-4 left-4">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                      <Badge
                        className={`bg-${feature.color}-100 text-${feature.color}-800 hover:bg-${feature.color}-200 shadow-lg`}
                      >
                        {feature.badge}
                      </Badge>
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 rounded-full p-2 shadow-lg"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: "rgba(249, 115, 22, 0.1)",
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-5 h-5 text-orange-600" />
                  </motion.div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <motion.h3
                      className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <div className="flex items-center space-x-1">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                      <span className="text-sm font-medium">{feature.rating}</span>
                    </div>
                  </div>

                  <motion.p className="text-gray-600 mb-4" initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }}>
                    {feature.description}
                  </motion.p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {feature.duration}
                    </div>
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        x: 5,
                        color: "#ea580c",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="text-orange-600 font-medium hover:text-orange-700 flex items-center group"
                    >
                      Learn More
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </motion.div>
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
