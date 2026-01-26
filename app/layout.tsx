import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import CartProvider from '@/components/CartProvider'
import { I18nProvider } from '@/lib/i18n'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShitGift - Give Your Ill-Wishers a Crappy Surprise',
  description: 'Eco-friendly manure delivery straight to your offender\'s doorstep! Anonymous prank gifts that are unforgettable and fragrant.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nProvider>
          <CartProvider>
            <Header />
            {children}
          </CartProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
