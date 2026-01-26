'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'
import { useCart } from './CartProvider'
import { useI18n } from '@/lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartItems, toggleCart } = useCart()
  const { t } = useI18n()
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl sm:text-2xl font-bold text-primary-600">
            💩 <span className="hidden sm:inline">ShitGift</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition">
              {t('nav.home')}
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition">
              {t('nav.howItWorks')}
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-primary-600 transition">
              {t('nav.products')}
            </Link>
            <Link href="#reviews" className="text-gray-700 hover:text-primary-600 transition">
              {t('nav.reviews')}
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Cart Button */}
          <button
            onClick={toggleCart}
            className="relative flex items-center space-x-1 sm:space-x-2 bg-primary-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-primary-700 transition"
          >
            <FiShoppingCart className="text-lg sm:text-xl" />
            <span className="hidden xs:inline sm:inline">{t('nav.cart')}</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-[10px] sm:text-xs">
                {cartCount}
              </span>
            )}
            {cartCount > 0 && (
              <span className="hidden md:inline">€{cartTotal.toFixed(2)}</span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="#how-it-works"
              className="block py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.howItWorks')}
            </Link>
            <Link
              href="#products"
              className="block py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.products')}
            </Link>
            <Link
              href="#reviews"
              className="block py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.reviews')}
            </Link>
            <div className="pt-2 border-t">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
