import type { ArchiveBlock as ArchiveBlockProps } from '@/payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/RichText'
import { CollectionArchive } from '@/components/CollectionArchive'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = async (props) => {
  const {
    id,
    categories,
    introContent,
    limit: limitFromProps,
    populateBy,
    selectedDocs,
    relationTo = 'posts',
  } = props

  const limit = limitFromProps || 3
  let docs: any[] = []

  const payload = await getPayload({ config: configPromise })

  if (populateBy === 'collection') {
    const flattenedCategories = categories?.map((category) =>
      typeof category === 'object' ? category.id : category,
    )

    const fetched = await payload.find({
      collection: relationTo,
      depth: 1,
      limit,
      ...(flattenedCategories?.length
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    })

    docs = fetched.docs
  } else if (populateBy === 'selection' && selectedDocs?.length) {
    docs = await Promise.all(
      selectedDocs.map(async (docRef) => {
        const { relationTo, value } = docRef
        if (typeof value === 'object') return value
        return await payload.findByID({ collection: relationTo, id: value })
      }),
    )
  }

  return (
    <div className="my-4" id={`block-${id}`}>
      {introContent && (
        <div className="container mb-16">
          <RichText className="ms-0 max-w-[48rem]" data={introContent} enableGutter={false} />
        </div>
      )}

      {/* ✅ Pass relationTo here */}
      <CollectionArchive posts={docs} relationTo={relationTo} />
    </div>
  )
}
