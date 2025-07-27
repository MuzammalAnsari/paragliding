"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Gift, Calendar } from "lucide-react"

export default function CTASections() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* First CTA - Gift Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-orange-600 p-8 text-white"
          >
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Gift className="w-8 h-8 mr-3" />
                <span className="text-lg font-semibold">Perfect Gift</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Give the Gift of Flight</h3>
              <p className="text-orange-100 mb-6">
                Surprise someone special with an unforgettable paragliding experience. Gift cards available for all our
                services.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                  Buy Gift Card
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>

            {/* Background Pattern */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -360, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Second CTA - Book Now */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-400 via-orange-500 to-red-600 p-8 text-white"
          >
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 mr-3" />
                <span className="text-lg font-semibold">Limited Time</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Early Bird Special</h3>
              <p className="text-orange-100 mb-6">
                Book your paragliding adventure now and save 20% on all tandem flights. Valid until end of month.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                  Book Now & Save
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>

            {/* Background Pattern */}
            <motion.div
              className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full -translate-y-14 translate-x-14"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 9,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 -translate-x-10"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -360, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
