'use client'

import { useI18n } from '@/lib/i18n'

export default function Reviews() {
  const { t } = useI18n()
  
  const reviews = [
    { id: 1, key: 'review1' },
    { id: 2, key: 'review2' },
    { id: 3, key: 'review3' },
    { id: 4, key: 'review4' },
    { id: 5, key: 'review5' },
  ]
  
  return (
    <section id="reviews" className="py-12 sm:py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 px-4">{t('reviews.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-primary-600"
            >
              <p className="text-sm sm:text-base text-gray-700 italic">&ldquo;{t(`reviews.${review.key}`)}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
