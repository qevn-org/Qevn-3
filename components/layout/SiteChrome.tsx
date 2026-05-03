'use client'

import { useEffect } from 'react'
import SaleBanner from '@/components/ui/SaleBanner'

const NAV_BAR_PX = 64

function syncChromeTop() {
  const banner = document.getElementById('sale-banner')
  const bannerH = banner ? banner.offsetHeight : 0
  const total = bannerH + NAV_BAR_PX
  document.documentElement.style.setProperty('--layout-chrome-top', `${total}px`)
}

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const run = () => requestAnimationFrame(syncChromeTop)
    run()
    const banner = document.getElementById('sale-banner')
    const ro = new ResizeObserver(run)
    if (banner) ro.observe(banner)

    window.addEventListener('resize', run, { passive: true })
    window.addEventListener('qevn-chrome-top', run)
    return () => {
      ro.disconnect()
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
