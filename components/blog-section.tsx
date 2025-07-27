"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    title: "Essential Paragliding Safety Tips for Beginners",
    excerpt: "Learn the fundamental safety guidelines every new paraglider should know before taking flight.",
    image: "/placeholder.svg?height=250&width=400",
    category: "Safety",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "Best Paragliding Destinations in Europe",
    excerpt: "Discover the most breathtaking locations across Europe perfect for your next paragliding adventure.",
    image: "/placeholder.svg?height=250&width=400",
    category: "Travel",
    author: "Mike Chen",
    date: "Dec 12, 2024",
    readTime: "8 min read",
  },
  {
    title: "Weather Conditions: When to Fly and When to Stay Grounded",
    excerpt: "Understanding weather patterns is crucial for safe paragliding. Here's what you need to know.",
    image: "/placeholder.svg?height=250&width=400",
    category: "Education",
    author: "Emma Davis",
    date: "Dec 10, 2024",
    readTime: "6 min read",
  },
]

export default function BlogSection() {
  return (
    <section className="py-20 bg-orange-50/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">Latest Stories</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Paragliding Insights & Tips</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, tips, and stories from the paragliding community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotate: 2 }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-100/90 text-gray-800 hover:bg-orange-100">{post.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  </div>

                  <div className="border-t pt-4 mt-4">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-blue-600 font-medium group-hover:text-blue-700"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
