"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Adventure Enthusiast",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Absolutely incredible experience! The instructors were professional and made me feel completely safe throughout the entire flight. The views were breathtaking!",
    location: "Swiss Alps Experience",
  },
  {
    name: "Maria Rodriguez",
    role: "First-time Flyer",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "I was terrified at first, but the team made me feel so comfortable. Now I'm planning my next paragliding adventure! Highly recommend SkyGlide.",
    location: "Coastal Cliffs Adventure",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-orange-950 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-orange-100/10 text-white hover:bg-orange-100/20 border-orange-200/20">
            Testimonials
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Our Adventurers Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real experiences from real people who chose to soar with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: [0.6, 0.05, -0.01, 0.9],
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2, y: -10 }}
              className="will-change-transform"
            >
              <Card className="bg-white/5 border-orange-200/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Quote className="w-8 h-8 text-orange-400 mr-4" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{testimonial.text}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-orange-400 text-sm font-medium">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">4.9/5</div>
              <p className="text-gray-400">Average Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <p className="text-gray-400">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <p className="text-gray-400">Safety Record</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
