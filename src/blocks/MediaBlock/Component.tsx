import type { StaticImageData } from 'next/image'
import React from 'react'

import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

import type { MediaBlock as MediaBlockProps } from '@/payload-types'

type Props = MediaBlockProps & {
  staticImage?: StaticImageData
  className?: string
}

export const MediaBlock: React.FC<Props> = ({
  media,
  caption,
  size = 'full',
  staticImage,
  className,
  enableGutter,
}) => {
  const sizeClasses: Record<string, string> = {
    oneThird: 'w-full md:w-1/3',
    half: 'w-full md:w-1/2',
    twoThirds: 'w-full md:w-2/3',
    full: 'w-full',
  }

  return (
    <div
      className={cn(
        'container',
        {
          container: enableGutter,
        },
        className,
      )}
    >
      {media && <Media resource={media} src={staticImage} imgClassName="w-2/3" />}

      {caption && (
        <div className="mt-2">
          <p>{caption}</p>
        </div>
      )}
    </div>
  )
}
