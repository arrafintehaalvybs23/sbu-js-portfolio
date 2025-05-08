'use client'

import { cn } from '@/utilities/ui'
import React, { useEffect, useRef } from 'react'

import type { Props as MediaProps } from '../types'

import { getClientSideURL } from '@/utilities/getURL'

export const VideoMedia: React.FC<MediaProps> = ({ onClick, resource, videoClassName }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener('suspend', () => {
        // console.warn('Video was suspended, rendering fallback image.')
      })
    }
  }, [])

  if (!resource || typeof resource !== 'object') return null

  // Handle external video (e.g. YouTube)
  if (resource.isExternal && resource.externalURL) {
    let embedURL = resource.externalURL

    // Transform YouTube link into embed format
    if (resource.externalURL.includes('youtube.com') || resource.externalURL.includes('youtu.be')) {
      const youtubeId = resource.externalURL.includes('youtu.be')
        ? resource.externalURL.split('youtu.be/')[1]
        : new URL(resource.externalURL).searchParams.get('v')

      embedURL = `https://www.youtube.com/embed/${youtubeId}`
    }

    return (
      <div className={cn('aspect-video w-full', videoClassName)}>
        <iframe src={embedURL} title="Embedded Video" allowFullScreen className="w-full h-full" />
      </div>
    )
  }

  // Handle local video file
  const { filename } = resource
  return (
    <video
      autoPlay={false}
      className={cn(videoClassName)}
      controls
      loop
      muted
      onClick={onClick}
      playsInline
      ref={videoRef}
    >
      <source src={`${getClientSideURL()}/media/${filename}`} />
    </video>
  )
}
