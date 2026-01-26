'use client'

import { useParams } from 'next/navigation'
import { products } from '@/data/products'
import { useCart } from '@/components/CartProvider'
import { useState } from 'react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function ProductPage() {
  const params = useParams()
  const product = products.find((p) => p.id === params.id as string)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0])
  const [comment, setComment] = useState('')
  const { addToCart } = useCart()
  const { t } = useI18n()

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product not found</h1>
        <Link href="/" className="text-primary-600 hover:underline">
          Return to home
        </Link>
      </div>
    )
  }

  // Get translated product name and description
  // Map product IDs to translation keys
  const productKeyMap: Record<string, string> = {
    'the-good-shit': 'theGoodShit',
    'horse-power': 'horsePower',
    'the-golden-poo': 'theGoldenPoo',
    'double-dung': 'doubleDung',
  }
  const productKey = productKeyMap[product.id] || product.id
  const translatedName = t(`productItems.${productKey}.name`) || product.name
  const translatedDescription = t(`productItems.${productKey}.description`) || product.description

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCart({
        id: product.id,
        name: translatedName,
        price: selectedVariant.price,
        quantity: 1,
        variant: t(`productItems.variants.${selectedVariant.id}`) || selectedVariant.name,
        comment: comment || undefined,
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-primary-600 hover:underline mb-4 inline-block text-sm sm:text-base">
          {t('productPage.back')}
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{translatedName}</h1>
          <p className="text-xl sm:text-2xl text-primary-600 font-bold mb-4 sm:mb-6">
            €{selectedVariant?.price.toFixed(2)}
          </p>
          <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg">{translatedDescription}</p>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('productPage.choosePackaging')}
              </label>
              <select
                value={selectedVariant?.id}
                onChange={(e) => {
                  const variant = product.variants.find((v) => v.id === e.target.value)
                  if (variant) setSelectedVariant(variant)
                }}
                className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-base sm:text-lg"
              >
                {product.variants.map((variant) => (
                  <option key={variant.id} value={variant.id}>
                    {t(`productItems.variants.${variant.id}`) || variant.name} - €{variant.price.toFixed(2)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('productPage.writeComment')}
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={t('productPage.commentPlaceholder')}
                className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 h-24 sm:h-32 resize-none text-sm sm:text-base"
              />
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-primary-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-700 transition"
            >
              {t('products.addToCart')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
