'use client'

import { useState } from 'react'
import { FiPlay, FiX } from 'react-icons/fi'
import { useI18n } from '@/lib/i18n'

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const { t } = useI18n()

  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{t('video.title')}</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {t('video.subtitle')}
            </p>
          </div>

          {/* Video Thumbnail/Player */}
          <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
            {!isVideoOpen ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="bg-primary-600 hover:bg-primary-700 text-white rounded-full w-20 h-20 flex items-center justify-center mb-4 transition transform hover:scale-110 shadow-lg"
                  >
                    <FiPlay className="text-3xl ml-1" />
                  </button>
                  <p className="text-white text-lg font-semibold">{t('video.watch')}</p>
                </div>
                {/* Placeholder background - replace with actual video thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800" />
                <img
                  src="https://placehold.co/1280x720/8B4513/FFFFFF?text=Video+Thumbnail"
                  alt="Video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
              </div>
            ) : (
              <div className="relative w-full h-full">
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75"
                >
                  <FiX className="text-xl" />
                </button>
                <iframe
                  width="100%"
                  height="100%"
                  src={
                    process.env.NEXT_PUBLIC_VIDEO_URL ||
                    'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
                  }
                  title="ShitGift Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>
            )}
          </div>

          {/* Video Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">📦</div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{t('video.packaging.title')}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                {t('video.packaging.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🎁</div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{t('video.presentation.title')}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                {t('video.presentation.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">😄</div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{t('video.reactions.title')}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                {t('video.reactions.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
