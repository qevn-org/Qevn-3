import { industries } from '@/lib/data'

export function getIndustryHeroMedia(slug: string, industryTitle: string) {
  // Map slug to static background assets in /public/heroes/
  const posterSrc = `/heroes/industry-${slug}.png`
  const fallbackSrc = `/heroes/default-hero.png`
  
  return {
    posterSrc,
    fallbackSrc,
    ariaLabel: `Visual representation of AI automation for ${industryTitle}`
  }
}
