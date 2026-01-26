'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function Footer() {
  const { t } = useI18n()
  
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{t('footer.customerService')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition text-sm sm:text-base">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition text-sm sm:text-base">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{t('footer.contactUs')}</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              <a
                href="mailto:support@shitgift.eu"
                className="hover:text-white transition break-all"
              >
                support@shitgift.eu
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{t('footer.about')}</h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              {t('cta.description')}
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} ShitGift. {t('footer.rights')}</p>
          <p className="mt-2">{t('footer.developed')}</p>
        </div>
      </div>
    </footer>
  )
}
