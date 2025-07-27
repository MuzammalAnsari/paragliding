"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import StatsSection from "@/components/stats-section"
import DestinationsSection from "@/components/destinations-section"
import JourneySection from "@/components/journey-section"
import BlogSection from "@/components/blog-section"
import CTASections from "@/components/cta-sections"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <DestinationsSection />
      <JourneySection />
      <BlogSection />
      <CTASections />
      <GallerySection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}
