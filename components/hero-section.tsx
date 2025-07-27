"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin, Users, Search, Play } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{
          opacity: 0.1,
          scale: 1,
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          opacity: { duration: 2 },
          scale: { duration: 2 },
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{
          opacity: 0.15,
          scale: 1,
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          opacity: { duration: 2, delay: 0.5 },
          scale: { duration: 2, delay: 0.5 },
        }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-amber-200 rounded-full blur-3xl"
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-orange-300 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-20" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="inline-block bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-sm font-medium shadow-lg"
            >
              <motion.span
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                ✨ Experience the Ultimate Freedom
              </motion.span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                className="bg-gradient-to-r from-gray-800 via-orange-600 to-gray-800 bg-clip-text text-transparent bg-300%"
              >
                Discover Your
              </motion.span>
              <motion.span
                className="text-orange-500 block"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(249, 115, 22, 0)",
                    "0 0 20px rgba(249, 115, 22, 0.5)",
                    "0 0 0px rgba(249, 115, 22, 0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                Next GO!
              </motion.span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-gray-600 leading-relaxed">
              Experience the thrill of paragliding with certified instructors. From beginner courses to advanced
              flights, discover the sky like never before.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Book Your Flight
                  </motion.span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 bg-transparent border-orange-200 text-gray-700 hover:bg-orange-50 hover:border-orange-300 shadow-lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Video
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div variants={floatingVariants} animate="animate" className="relative z-10">
              <motion.div
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Paragliding+Adventure"
                  alt="Paragliding Adventure"
                  width={600}
                  height={600}
                  className="rounded-3xl"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
            </motion.div>

            {/* Enhanced Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1, duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-orange-100"
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <span className="text-sm font-medium">Perfect Weather</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-orange-100"
            >
              <div className="text-center">
                <motion.div
                  className="text-2xl font-bold text-orange-600"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                >
                  500+
                </motion.div>
                <div className="text-sm text-gray-600">Happy Flyers</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Search/Booking Widget */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 100 }}
          whileHover={{
            y: -5,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
          }}
          className="mt-20 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto border border-orange-100"
        >
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: MapPin, label: "Location", placeholder: "Choose location" },
              { icon: Calendar, label: "Date", type: "date" },
              { icon: Users, label: "Participants", placeholder: "1 Person" },
            ].map((field, index) => (
              <motion.div
                key={field.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ y: -2 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <field.icon className="w-4 h-4 mr-2 text-orange-500" />
                  {field.label}
                </label>
                <Input
                  type={field.type || "text"}
                  placeholder={field.placeholder}
                  className="border-orange-200 focus:border-orange-400 focus:ring-orange-200"
                />
              </motion.div>
            ))}
            <div className="flex items-end">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 15px 30px rgba(249, 115, 22, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <Button className="w-full bg-orange-500 hover:bg-orange-600 h-12 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Search className="w-4 h-4 mr-2" />
                  <motion.span
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Search Flights
                  </motion.span>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
