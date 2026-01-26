'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function Hero() {
  const { t } = useI18n()
  
  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
          {t('hero.title')}{' '}
          <span className="text-primary-600">&ldquo;{t('hero.titleHighlight')}&rdquo;</span> {t('hero.titleEnd')}{' '}
          <span className="text-2xl sm:text-3xl md:text-4xl">😏💩🌬️</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto px-2">
          {t('hero.description')}{' '}
          <span className="text-xl sm:text-2xl">💩🚛😈</span>
        </p>
        <Link
          href="#products"
          className="inline-block bg-primary-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-700 transition transform hover:scale-105"
        >
          {t('hero.cta')}
        </Link>
      </div>
    </section>
  )
}
