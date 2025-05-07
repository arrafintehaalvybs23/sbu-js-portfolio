import type { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  labels: {
    singular: 'Media Block',
    plural: 'Media Blocks',
  },
  imageURL: '/media-icon.svg', // Optional: Add a custom icon in admin sidebar
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media', // This must match your Media collection slug
      required: true,
      label: 'Media File',
      admin: {
        description: 'Upload an image or video to display in this block.',
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption (Optional)',
      required: false,
      admin: {
        placeholder: 'Write a short caption for the media',
      },
    },
    {
      name: 'position',
      type: 'select',
      label: 'Media Alignment',
      defaultValue: 'center',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
        { label: 'Center', value: 'center' },
      ],
      required: false,
    },
    {
      name: 'size',
      type: 'select',
      label: 'Media Size',
      defaultValue: 'full',
      required: false,
      options: [
        { label: 'One Third', value: 'oneThird' },
        { label: 'Half', value: 'half' },
        { label: 'Two Thirds', value: 'twoThirds' },
        { label: 'Full', value: 'full' },
      ],
    },
  ],
}
