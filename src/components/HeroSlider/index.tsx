'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Slide = {
  title: string
  motto?: string
  ctaText?: string
  ctaLink?: string
  image: {
    url: string
  }
}

type HeroSliderProps = {
  slides: Slide[]
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  return (
    <div className="container w-full h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-no-repeat bg-center lg:bg-right flex items-center text-white text-center px-6"
              style={{ backgroundImage: `url(${slide.image.url})` }}
            >
              <div className="p-6 rounded w-full h-full lg:w-1/2 text-center flex-col flex justify-center items-center bg-blue-950 bg-opacity-50 lg:bg-opacity-100">
                <h1 className="text-2xl font-bold mb-4">{slide.title}</h1>
                {slide.motto && <p className="mb-4 text-lg">{slide.motto}</p>}
                {slide.ctaLink && (
                  <a
                    href={slide.ctaLink}
                    className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
                  >
                    {slide.ctaText || 'Explore Product'}
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider
