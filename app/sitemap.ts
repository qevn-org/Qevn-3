import type { MetadataRoute } from 'next'
import { services, industries } from '@/lib/data'

const BASE = 'https://www.qevn.in'
const NOW = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static pages ────────────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/offer`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/the-anatomy`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/qevn-decoded`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/numbers-dont-lie`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/the-qevn-files`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ]

  // ── Service pages ────────────────────────────────────────────────────────────
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE}/services/${service.slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // ── Industry pages ───────────────────────────────────────────────────────────
  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${BASE}/industries/${industry.slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes]
}
