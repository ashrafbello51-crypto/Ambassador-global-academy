'use client'

import Image, { type ImageProps } from 'next/image'

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string
}

/**
 * Drop-in replacement for next/image that handles onError in a Client Component.
 * Use whenever the parent is a Server Component but you need image fallback behaviour.
 */
export default function SafeImage({ fallbackSrc, ...props }: SafeImageProps) {
  return (
    <Image
      {...props}
      onError={(e) => {
        const img = e.target as HTMLImageElement
        const fallback = fallbackSrc ?? `https://placehold.co/800x600/0a1526/e8a01a?text=${encodeURIComponent(String(props.alt ?? ''))}`
        if (img.src !== fallback) img.src = fallback
      }}
    />
  )
}
