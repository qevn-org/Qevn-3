import { services } from '@/lib/data'

/** Distinct sample MP4s per slot — swap for production CDN URLs in one place. */
const HERO_VIDEOS = [
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolvoShortFlips.mp4',
]

export function getServiceHeroMedia(slug: string, serviceTitle: string) {
  const i = Math.max(0, services.findIndex((s) => s.slug === slug))
  const videoSrc = HERO_VIDEOS[i % HERO_VIDEOS.length]
  const posterSrc = `https://picsum.photos/seed/qevn-${encodeURIComponent(slug)}/1920/1080`
  const videoAriaLabel = `Explainer video for QEVN ${serviceTitle} service`
  return { videoSrc, posterSrc, videoAriaLabel }
}
