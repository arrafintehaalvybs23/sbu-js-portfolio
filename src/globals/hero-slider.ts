// src/globals/hero-slider.ts
import { GlobalConfig } from 'payload'

const HeroSlider: GlobalConfig = {
  slug: 'hero-slider',
  fields: [
    {
      name: 'slides',
      type: 'array',
      label: 'Slides',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'motto',
          type: 'text',
        },
        {
          name: 'ctaText',
          type: 'text',
        },
        {
          name: 'ctaLink',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}

export default HeroSlider
