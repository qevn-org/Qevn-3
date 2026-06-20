'use client'

import { useEffect } from 'react'
import SaleBanner from '@/components/ui/SaleBanner'

const NAV_BAR_PX = 64

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let ro: ResizeObserver | null = null
    const run = () => {
      requestAnimationFrame(() => {
        const banner = document.getElementById('sale-banner')
        if (banner) {
          const bannerH = banner.offsetHeight
          const total = bannerH + NAV_BAR_PX
          document.documentElement.style.setProperty('--layout-chrome-top', `${total}px`)
          if (!ro) {
            ro = new ResizeObserver(run)
            ro.observe(banner)
          }
        } else {
          document.documentElement.style.setProperty('--layout-chrome-top', `${NAV_BAR_PX}px`)
        }
      })
    }
    run()

    window.addEventListener('resize', run, { passive: true })
    window.addEventListener('qevn-chrome-top', run)
    return () => {
      if (ro) ro.disconnect()
      window.removeEventListener('resize', run)
      window.removeEventListener('qevn-chrome-top', run)
    }
  }, [])

  return (
    <>
      <SaleBanner />
      {children}
    </>
  )
}
