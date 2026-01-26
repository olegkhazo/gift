'use client'

import { useState } from 'react'
import { useCart } from '@/components/CartProvider'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart()
  const router = useRouter()
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientAddress: '',
    recipientCity: '',
    recipientZip: '',
    recipientCountry: '',
    senderName: '',
    senderEmail: '',
    senderPhone: '',
    paymentMethod: 'card',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">{t('checkout.empty')}</h1>
        <Link href="/" className="text-primary-600 hover:underline">
          {t('checkout.continueShopping')}
        </Link>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Clear cart and redirect
    clearCart()
    router.push('/order-success')
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">{t('checkout.title')}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4 sm:p-6 space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{t('checkout.recipientInfo')}</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('checkout.fullName')} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.recipientName}
                  onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('checkout.streetAddress')} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.recipientAddress}
                  onChange={(e) => setFormData({ ...formData, recipientAddress: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-sm sm:text-base"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('checkout.city')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.recipientCity}
                    onChange={(e) => setFormData({ ...formData, recipientCity: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('checkout.zipCode')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.recipientZip}
                    onChange={(e) => setFormData({ ...formData, recipientZip: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('checkout.country')} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.recipientCountry}
                  onChange={(e) => setFormData({ ...formData, recipientCountry: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-sm sm:text-base"
                />
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">{t('checkout.yourInfo')}</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('checkout.yourName')} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.senderName}
                  onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-sm sm:text-base"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {t('checkout.confidential')}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('checkout.email')} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.senderEmail}
                  onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('checkout.phone')} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.senderPhone}
                  onChange={(e) => setFormData({ ...formData, senderPhone: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-700 transition disabled:opacity-50"
              >
                {isSubmitting ? t('checkout.processing') : t('checkout.placeOrder')}
              </button>
            </form>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:sticky md:top-20">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{t('checkout.orderSummary')}</h2>
              <div className="space-y-3 mb-4 sm:mb-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex justify-between text-xs sm:text-sm">
                    <div className="flex-1 pr-2">
                      <p className="font-medium">{item.name}</p>
                      {item.variant && <p className="text-gray-500 text-xs">{item.variant}</p>}
                      <p className="text-gray-500 text-xs">{t('checkout.quantity')} {item.quantity}</p>
                    </div>
                    <p className="font-medium flex-shrink-0">€{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t pt-3 sm:pt-4">
                <div className="flex justify-between text-lg sm:text-xl font-bold">
                  <span>{t('cart.total')}</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
