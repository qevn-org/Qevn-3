import { services } from '@/lib/data'

export function getServiceHeroMedia(slug: string, serviceTitle: string) {
  // Map slug to static background assets in /public/heroes/
  const posterSrc = `/heroes/service-${slug}.png`
  const fallbackSrc = `/heroes/default-hero.png`
  const videoAriaLabel = `Visual representation of QEVN ${serviceTitle} service`
  
  return { 
    posterSrc, 
    fallbackSrc,
    videoSrc: undefined as string | undefined,
    videoAriaLabel 
  }
}
