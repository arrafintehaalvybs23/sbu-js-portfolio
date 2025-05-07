import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, heroImage, populatedAuthors } = post
  console.log('🚀 ~ heroImage:', heroImage)

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  return (
    <div className="container py-5 px-2 sm:py-2 text-white bg-blue-950">
      <div className="w-full h-full flex items-center justify-center flex-col sm:flex-row gap-20">
        {heroImage && typeof heroImage !== 'string' && (
          <React.Fragment>
            <Media priority imgClassName="" resource={heroImage} />
            <h1 className="font-bold text-2xl max-w-[32rem]">
              {heroImage && heroImage?.caption?.root?.children?.[0]?.children?.[0]?.text}
            </h1>
          </React.Fragment>
        )}
      </div>
      <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
        <div className="uppercase text-sm mb-6">
          {categories?.map((category, index) => {
            if (typeof category === 'object' && category !== null) {
              const { title: categoryTitle } = category

              const titleToUse = categoryTitle || 'Untitled category'

              const isLast = index === categories.length - 1

              return (
                <React.Fragment key={index}>
                  {titleToUse}
                  {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                </React.Fragment>
              )
            }
            return null
          })}
        </div>
        {/* <div className="">
          <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl">{title}</h1>
        </div> */}

        {/* <div className="flex flex-col md:flex-row gap-4 md:gap-16"> */}
        {/* {hasAuthors && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-sm">Author</p>

                <p>{formatAuthors(populatedAuthors)}</p>
              </div>
            </div>
          )} */}
        {/* {publishedAt && (
            <div className="flex flex-col gap-1">
              <p className="text-sm">Date Published</p>

              <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
            </div>
          )} */}
        {/* </div> */}
      </div>
    </div>
  )
}
