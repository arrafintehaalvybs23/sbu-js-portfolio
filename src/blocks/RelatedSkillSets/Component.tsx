import clsx from 'clsx'
import React from 'react'
import RichText from '@/components/RichText'

import type { Post } from '@/payload-types'

import { Card } from '../../components/Card'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export type RelatedSkillSetsProps = {
  className?: string
  docs?: Post[]
  introContent?: SerializedEditorState
  relationTo?: string
}

export const RelatedSkillSets: React.FC<RelatedSkillSetsProps> = (props) => {
  const { className, docs, introContent, relationTo } = props
  console.log('🚀 ~ docs:', docs)

  return (
    <div className={clsx('lg:container', className)}>
      {introContent && <RichText data={introContent} enableGutter={false} />}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-stretch mt-6">
        {docs?.map((doc, index) => {
          if (typeof doc === 'string') return null

          return (
            <Card
              key={index}
              doc={doc}
              relationTo={relationTo}
              showCategories
              title={doc?.['skill-set']?.title}
            />
          )
        })}
      </div>
    </div>
  )
}
