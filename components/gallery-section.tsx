"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Play, Heart, Share2 } from "lucide-react"
import Image from "next/image"

const galleryItems = [
  {
    type: "image",
    src: "/placeholder.svg?height=400&width=300",
    title: "Sunset Flight",
    likes: 234,
  },
  {
    type: "image",
    src: "/placeholder.svg?height=300&width=400",
    title: "Coastal Adventure",
    likes: 189,
  },
  {
    type: "video",
    src: "/placeholder.svg?height=350&width=350",
    title: "Epic Flight Video",
    likes: 456,
  },
  {
    type: "image",
    src: "/placeholder.svg?height=300&width=300",
    title: "Group Experience",
    likes: 167,
  },
  {
    type: "image",
    src: "/placeholder.svg?height=400&width=350",
    title: "Alpine Views",
    likes: 298,
  },
]

export default function GallerySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">Gallery</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Captured Moments</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the beauty and thrill through the eyes of our adventurers
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 50,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Video Play Button */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm"
                    >
                      <Play className="w-6 h-6 text-gray-800 ml-1" />
                    </motion.div>
                  </div>
                )}

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center space-x-1 text-white/90 hover:text-white"
                      >
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{item.likes}</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-white/90 hover:text-white"
                      >
                        <Share2 className="w-4 h-4" />
                      </motion.button>
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
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            View Full Gallery
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
