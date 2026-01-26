'use client'

import { useState } from 'react'
import Link from 'next/link'
import { products } from '@/data/products'
import { useCart } from './CartProvider'
import { useI18n } from '@/lib/i18n'

export default function Products() {
  const { t } = useI18n()
  
  return (
    <section id="products" className="py-12 sm:py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 px-4">{t('products.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const { addToCart } = useCart()
  const { t } = useI18n()

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
    addToCart({
      id: product.id,
      name: translatedName,
      price: selectedVariant.price,
      quantity: 1,
      variant: t(`productItems.variants.${selectedVariant.id}`) || selectedVariant.name,
    })
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">{translatedName}</h3>
        <p className="text-primary-600 text-xl sm:text-2xl font-bold mb-3 sm:mb-4">€{selectedVariant.price.toFixed(2)}</p>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm">{translatedDescription}</p>
        
        <div className="mb-3 sm:mb-4">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
            {t('products.selectPackage')}
          </label>
          <select
            value={selectedVariant.id}
            onChange={(e) => {
              const variant = product.variants.find((v) => v.id === e.target.value)
              if (variant) setSelectedVariant(variant)
            }}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          >
            {product.variants.map((variant) => (
              <option key={variant.id} value={variant.id}>
                {t(`productItems.variants.${variant.id}`) || variant.name} - €{variant.price.toFixed(2)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={handleAddToCart}
            className="w-full sm:flex-1 bg-primary-600 text-white px-4 py-2.5 sm:py-2 rounded hover:bg-primary-700 transition text-sm sm:text-base"
          >
            {t('products.addToCart')}
          </button>
          <Link
            href={`/products/${product.id}`}
            className="w-full sm:flex-1 border border-primary-600 text-primary-600 px-4 py-2.5 sm:py-2 rounded text-center hover:bg-primary-50 transition text-sm sm:text-base"
          >
            {t('products.viewDetails')}
          </Link>
        </div>
      </div>
    </div>
  )
}
