'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n'

const showcaseImages = [
  {
    id: 1,
    src: '/images/showcase-1.jpg',
    alt: 'Multiple product packages display',
    categoryKey: 'Packaging Options',
  },
  {
    id: 2,
    src: '/images/showcase-2.jpg',
    alt: 'Gift box with container',
    categoryKey: 'Premium Boxes',
  },
  {
    id: 3,
    src: '/images/showcase-3.jpg',
    alt: 'Custom label messages',
    categoryKey: 'Custom Labels',
  },
  {
    id: 4,
    src: '/images/showcase-4.jpg',
    alt: 'Product close-up',
    categoryKey: 'Product Details',
  },
]

export default function ImageShowcase() {
  const { t } = useI18n()
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const categories = [
    { key: 'All', label: t('showcase.all') },
    { key: 'Packaging Options', label: t('showcase.packagingOptions') },
    { key: 'Premium Boxes', label: t('showcase.premiumBoxes') },
    { key: 'Custom Labels', label: t('showcase.customLabels') },
    { key: 'Product Details', label: t('showcase.productDetails') },
  ]

  const filteredImages =
    activeCategory === 'All'
      ? showcaseImages
      : showcaseImages.filter((img) => img.categoryKey === activeCategory)

  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-primary-50 to-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{t('showcase.title')}</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('showcase.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-3 sm:px-6 py-1.5 sm:py-2 rounded-full transition text-xs sm:text-sm ${
                activeCategory === category.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-7xl mx-auto">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative h-48 sm:h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2 sm:h-full' : ''
              }`}
            >
              <img
                src={`https://placehold.co/800x600/8B4513/FFFFFF?text=${encodeURIComponent(categories.find(c => c.key === image.categoryKey)?.label || image.categoryKey)}`}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-semibold">{categories.find(c => c.key === image.categoryKey)?.label || image.categoryKey}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-8 sm:mt-12 text-center px-4">
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
            {t('showcase.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
            <span>{t('showcase.features.multipleSizes')}</span>
            <span>{t('showcase.features.customLabels')}</span>
            <span>{t('showcase.features.premiumBoxes')}</span>
            <span>{t('showcase.features.ecoFriendly')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
