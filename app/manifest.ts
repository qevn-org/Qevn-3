import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'QEVN | AI Agent Provider & AI Automation Company',
    short_name: 'QEVN',
    description:
      'QEVN builds custom AI agents, AI employees, AI voice calling agents, and workflow automation systems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#08090A',
    theme_color: '#08090A',
    icons: [
      {
        src: '/favicon-48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/favicon-96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
