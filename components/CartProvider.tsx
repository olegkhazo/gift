'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  variant?: string
  comment?: string
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  isCartOpen: boolean
  toggleCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.variant === item.variant)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.variant === item.variant
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        toggleCart,
      }}
    >
      {children}
      <CartSidebar />
    </CartContext.Provider>
  )
}

function CartSidebar() {
  const { cartItems, isCartOpen, toggleCart, updateQuantity, removeFromCart, clearCart } =
    useCart()
  const { t } = useI18n()
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (!isCartOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={toggleCart}
      />
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 overflow-y-auto">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">{t('cart.title')}</h2>
            <button
              onClick={toggleCart}
              className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl"
            >
              ✕
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center py-8">{t('cart.empty')}</p>
          ) : (
            <>
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="border-b pb-3 sm:pb-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-2">
                        <h3 className="font-semibold text-sm sm:text-base">{item.name}</h3>
                        {item.variant && (
                          <p className="text-xs sm:text-sm text-gray-500">{item.variant}</p>
                        )}
                        <p className="text-primary-600 font-bold text-sm sm:text-base">€{item.price.toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(`${item.id}-${item.variant || ''}`)}
                        className="text-red-500 hover:text-red-700 text-lg sm:text-xl flex-shrink-0"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            `${item.id}-${item.variant || ''}`,
                            item.quantity - 1
                          )
                        }
                        className="w-7 h-7 sm:w-8 sm:h-8 border rounded flex items-center justify-center text-sm sm:text-base"
                      >
                        -
                      </button>
                      <span className="w-7 sm:w-8 text-center text-sm sm:text-base">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            `${item.id}-${item.variant || ''}`,
                            item.quantity + 1
                          )
                        }
                        className="w-7 h-7 sm:w-8 sm:h-8 border rounded flex items-center justify-center text-sm sm:text-base"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-3 sm:pt-4 mb-4">
                <div className="flex justify-between text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  <span>{t('cart.total')}</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
                <button
                  onClick={clearCart}
                  className="w-full py-2 sm:py-2.5 border border-gray-300 rounded mb-2 hover:bg-gray-50 text-sm sm:text-base"
                >
                  {t('cart.clear')}
                </button>
                <Link
                  href="/checkout"
                  onClick={toggleCart}
                  className="block w-full py-2.5 sm:py-3 bg-primary-600 text-white text-center rounded hover:bg-primary-700 transition text-sm sm:text-base"
                >
                  {t('cart.checkout')}
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
