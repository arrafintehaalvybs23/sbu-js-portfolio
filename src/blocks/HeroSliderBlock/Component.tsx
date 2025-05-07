'use client'

import HeroSlider from '@/components/HeroSlider'

type BlockProps = {
  slides: {
    title: string
    motto?: string
    ctaText?: string
    ctaLink?: string
    image: {
      url?: string
      filename?: string
    }
  }[]
  disableInnerContainer?: boolean
}

export const HeroSliderBlock: React.FC<BlockProps> = ({ slides }) => {
  return (
    <HeroSlider
      slides={slides.map((s) => ({
        ...s,
        image: {
          url: s.image?.url || `/media/${s.image?.filename}`,
        },
      }))}
    />
  )
}
