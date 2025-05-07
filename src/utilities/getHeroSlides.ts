export async function getHeroSlides() {
  const res = await fetch(`${process.env.PAYLOAD_PUBLIC_URL}/api/globals/hero-slider`, {
    cache: 'no-store',
  })
  const data = await res.json()

  return data.slides.map((slide: any) => ({
    title: slide.title,
    motto: slide.motto,
    ctaText: slide.ctaText,
    ctaLink: slide.ctaLink,
    image: {
      url: slide.image.url || slide.image?.filename || '',
    },
  }))
}
