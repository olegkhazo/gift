'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n'

const productImages = [
  {
    id: 1,
    src: '/images/product-1.jpg',
    alt: 'Clear plastic container with manure gift',
    title: 'Premium Container Package',
    description: 'Clear plastic container with personalized label',
  },
  {
    id: 2,
    src: '/images/product-2.jpg',
    alt: 'Stand-up plastic pouch with manure',
    title: 'Stand-Up Pouch Package',
    description: 'Convenient stand-up pouch design',
  },
  {
    id: 3,
    src: '/images/product-3.jpg',
    alt: 'Kraft paper pouch package',
    title: 'Eco-Friendly Kraft Package',
    description: 'Brown kraft paper pouch for eco-conscious gifting',
  },
  {
    id: 4,
    src: '/images/product-4.jpg',
    alt: 'Black gift box with container',
    title: 'Premium Gift Box',
    description: 'Elegant black gift box presentation',
  },
  {
    id: 5,
    src: '/images/product-5.jpg',
    alt: 'Cardboard box with moose sticker',
    title: 'Special Edition Box',
    description: 'Cardboard box with custom design',
  },
  {
    id: 6,
    src: '/images/product-6.jpg',
    alt: 'Container with custom message label',
    title: 'Custom Message Package',
    description: 'Personalized message labels available',
  },
]

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const { t } = useI18n()

  return (
    <section className="py-12 sm:py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{t('gallery.title')}</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {productImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <img
                  src={`https://placehold.co/800x600/8B4513/FFFFFF?text=${encodeURIComponent(image.title)}`}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onLoad={(e) => {
                    // Try to load actual image if it exists
                    const img = new Image()
                    img.onload = () => {
                      const target = e.target as HTMLImageElement
                      target.src = image.src
                    }
                    img.src = image.src
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition" />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{image.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-opacity-75 z-10 text-lg sm:text-xl"
              >
                ✕
              </button>
              <div className="relative h-[85vh] sm:h-[80vh] bg-gray-900 rounded-lg overflow-hidden">
                <img
                  src={
                    productImages.find((img) => img.id === selectedImage)?.src ||
                    '/images/product-1.jpg'
                  }
                  alt={
                    productImages.find((img) => img.id === selectedImage)?.alt || 'Product image'
                  }
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    const image = productImages.find((img) => img.id === selectedImage)
                    target.src = `https://placehold.co/1200x800/8B4513/FFFFFF?text=${encodeURIComponent(image?.title || 'Product')}`
                    target.onerror = null // Prevent infinite loop
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
