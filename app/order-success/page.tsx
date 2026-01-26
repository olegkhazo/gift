'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function OrderSuccessPage() {
  const { t } = useI18n()
  
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-12">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-4xl font-bold mb-4">{t('orderSuccess.title')}</h1>
        <p className="text-xl text-gray-700 mb-8">
          {t('orderSuccess.message')}
        </p>
        <p className="text-gray-600 mb-8">
          {t('orderSuccess.confirmation')}
        </p>
        <Link
          href="/"
          className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition"
        >
          {t('orderSuccess.continueShopping')}
        </Link>
      </div>
    </div>
  )
}
