import { GlobalConfig } from 'payload'

const Hero: GlobalConfig = {
  slug: 'hero',
  label: 'Hero Section',
  access: {
    read: () => true,
  },
  admin: {
    description: 'Manage the main hero section on the homepage.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Headline',
      admin: {
        placeholder: 'Your big headline goes here...',
      },
    },
    {
      name: 'motto',
      type: 'textarea',
      label: 'Subheading or Motto',
      admin: {
        placeholder: 'A brief, catchy phrase or supporting text.',
        rows: 2,
      },
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'CTA Button Text',
      admin: {
        placeholder: 'Get Started',
      },
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'CTA Link',
      admin: {
        placeholder: '/get-started',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Background Image',
    },
  ],
}

export default Hero
