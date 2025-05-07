import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  console.log('🚀 ~ richText:', richText)
  return (
    <div className="flex text-white" data-theme="dark">
      <div className="container mb-2 py-10 flex flex-col lg:flex-row items-center justify-center bg-blue-950">
        <div className="max-w-[36.5rem] text-center">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {/* {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )} */}
        </div>
        <div className="relative h-80 w-80">
          {media && typeof media === 'object' && (
            <Media fill imgClassName="" priority resource={media} />
          )}
        </div>
      </div>
    </div>
  )
}
