"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery-1.jpg",
    alt: "Pre-wedding photo 1",
  },
  {
    id: 2,
    src: "/images/gallery-2.jpg",
    alt: "Pre-wedding photo 2",
  },
  {
    id: 3,
    src: "/images/gallery-3.jpg",
    alt: "Pre-wedding photo 3",
  },
  {
    id: 4,
    src: "/images/gallery-4.jpg",
    alt: "Pre-wedding photo 4",
  },
  {
    id: 5,
    src: "/images/gallery-5.jpg",
    alt: "Pre-wedding photo 5",
  },
  {
    id: 6,
    src: "/images/gallery-6.jpg",
    alt: "Pre-wedding photo 6",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="px-6 py-16 bg-card">
      <div className="max-w-md mx-auto">
        {/* Section title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-sans font-medium text-foreground mb-2">
            Galeri Kami
          </h2>
          <p className="text-sm text-muted-foreground">
            Moments we cherish together
          </p>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-primary/30" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="h-px w-12 bg-primary/30" />
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 gap-3">
          {galleryImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image.src)}
              className="relative aspect-square rounded-xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 200px"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-lg aspect-square">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  )
}
