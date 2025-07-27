"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"
import Image from "next/image"

const destinations = [
  {
    name: "Swiss Alps",
    location: "Switzerland",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    price: "$299",
  },
  {
    name: "Himalayas",
    location: "Nepal",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5.0,
    price: "$399",
  },
  {
    name: "Coastal Cliffs",
    location: "Portugal",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    price: "$199",
  },
  {
    name: "Desert Dunes",
    location: "Morocco",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    price: "$249",
  },
]

export default function DestinationsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-cream-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">Popular Destinations</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Fly Over Stunning Landscapes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover breathtaking locations around the world perfect for paragliding adventures
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    width={300}
                    height={300}
                    className="w-full h-80 object-cover transition-transform duration-500 will-change-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-2">{destination.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-white/90">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{destination.location}</span>
                      </div>
                      <div className="text-orange-500 font-bold">From {destination.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            View All Destinations
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
