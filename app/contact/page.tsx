'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const { language } = useI18n()
  const isCzech = language === 'cs'

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const labels = {
    title: isCzech ? 'Kontaktujte nás' : 'Contact Us',
    subtitle: isCzech
      ? 'Máte dotaz? Napište nám a ozveme se vám co nejdříve.'
      : 'Have a question? Send us a message and we\'ll get back to you.',
    name: isCzech ? 'Vaše jméno' : 'Your name',
    email: isCzech ? 'E-mailová adresa' : 'Email address',
    message: isCzech ? 'Zpráva' : 'Message',
    send: isCzech ? 'Odeslat zprávu' : 'Send message',
    sending: isCzech ? 'Odesílám...' : 'Sending...',
    success: isCzech
      ? 'Zpráva byla odeslána! Ozveme se vám brzy.'
      : 'Message sent! We\'ll get back to you soon.',
    error: isCzech
      ? 'Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.'
      : 'Failed to send message. Please try again.',
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-2xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{labels.title}</h1>
            <p className="text-gray-600">{labels.subtitle}</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-10">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <p className="text-gray-700 text-lg">{labels.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {labels.name} *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {labels.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {labels.message} *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-600 text-sm">{labels.error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-primary-600 text-white py-3 rounded font-semibold hover:bg-primary-700 transition disabled:opacity-50"
                >
                  {status === 'sending' ? labels.sending : labels.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
