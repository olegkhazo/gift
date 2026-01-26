import Image from 'next/image'

interface ImagePlaceholderProps {
  src: string
  alt: string
  fallbackText?: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
}

export default function ImagePlaceholder({
  src,
  alt,
  fallbackText,
  className = '',
  fill = false,
  width,
  height,
}: ImagePlaceholderProps) {
  const placeholderUrl = `https://placehold.co/${width || 800}x${height || 600}/8B4513/FFFFFF?text=${encodeURIComponent(fallbackText || alt)}`

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.src = placeholderUrl
        }}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      onError={(e) => {
        const target = e.target as HTMLImageElement
        target.src = placeholderUrl
      }}
    />
  )
}
