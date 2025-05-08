import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = ({ blocks }) => {
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (!hasBlocks) return null

  const renderedBlocks = []
  let mediaGroup: Page['layout'][0][] = []

  const flushMediaGroup = () => {
    if (mediaGroup.length > 0) {
      renderedBlocks.push(
        <div key={`media-group-${renderedBlocks.length}`} className="container mx-auto my-10">
          <div className="flex flex-wrap justify-center">
            {mediaGroup.map((block, i) => {
              const Block = blockComponents['mediaBlock']

              return (
                <div key={`media-${i}`} className="w-1/2 md:w-1/4 xl:w-1/6 mb-8 px-2">
                  <Block {...block} disableInnerContainer />
                </div>
              )
            })}
          </div>
        </div>,
      )
      mediaGroup = []
    }
  }

  blocks.forEach((block, index) => {
    const { blockType } = block

    if (blockType === 'mediaBlock') {
      mediaGroup.push(block)
    } else {
      flushMediaGroup()
      const Block = blockComponents[blockType]
      if (Block) {
        renderedBlocks.push(
          <div key={`block-${index}`} className="my-10 container">
            <Block {...block} disableInnerContainer />
          </div>,
        )
      }
    }
  })

  flushMediaGroup() // Flush any remaining media blocks

  return <Fragment>{renderedBlocks}</Fragment>
}
