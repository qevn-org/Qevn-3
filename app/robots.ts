import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/legal/'],
      },
    ],
    sitemap: 'https://www.qevn.in/sitemap.xml',
    host: 'https://www.qevn.in',
  }
}
