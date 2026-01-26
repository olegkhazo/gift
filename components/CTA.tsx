'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function CTA() {
  const { t } = useI18n()
  
  return (
    <section className="py-12 sm:py-16 px-4 bg-primary-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
          {t('cta.title')} <span className="text-xl sm:text-2xl">🎁💩</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-3xl mx-auto px-2">
          {t('cta.description')}
        </p>
        <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
          {t('cta.subtitle')} <span className="text-lg sm:text-xl">😏🌬️</span>
        </p>
        <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8 max-w-3xl mx-auto italic px-2">
          {t('cta.ps')} <span className="text-base sm:text-lg">🌱💩😉</span>
        </p>
        <Link
          href="#products"
          className="inline-block bg-white text-primary-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
        >
          {t('cta.button')}
        </Link>
      </div>
    </section>
  )
}
