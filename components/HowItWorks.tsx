'use client'

import { useI18n } from '@/lib/i18n'

export default function HowItWorks() {
  const { t } = useI18n()
  
  const steps = [
    {
      number: '1',
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
    },
    {
      number: '2',
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
    },
    {
      number: '3',
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
    },
    {
      number: '4',
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.description'),
    },
  ]

  return (
    <section id="how-it-works" className="py-12 sm:py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{t('howItWorks.title')}</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                {step.number}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
