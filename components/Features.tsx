'use client'

import { useI18n } from '@/lib/i18n'

export default function Features() {
  const { t } = useI18n()
  
  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 px-4">{t('features.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-primary-50 p-4 sm:p-6 rounded-lg">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤫</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('features.anonymity.title')}</h3>
            <p className="text-sm sm:text-base text-gray-700">
              {t('features.anonymity.description')}
            </p>
          </div>
          <div className="bg-primary-50 p-4 sm:p-6 rounded-lg">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚀💩</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('features.delivery.title')}</h3>
            <p className="text-sm sm:text-base text-gray-700">
              {t('features.delivery.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
