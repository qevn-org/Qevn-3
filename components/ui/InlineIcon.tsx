'use client'

import type { SVGProps } from 'react'

type IconName = string

const base = 'shrink-0 block'

function strokeProps(color = 'currentColor'): SVGProps<SVGSVGElement> {
  return {
    fill: 'none',
    stroke: color,
    strokeWidth: 1.75,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    vectorEffect: 'non-scaling-stroke',
  }
}

export default function InlineIcon({
  name,
  size = 18,
  className = '',
  color = 'currentColor',
}: {
  name: IconName
  size?: number
  className?: string
  color?: string
}) {
  const s = strokeProps(color)
  const dim = { width: size, height: size, className: `${base} ${className}` }

  switch (name) {
    case 'zap':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      )
    case 'refresh':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M21 12a9 9 0 00-9-9 9.75 9.75 0 00-6.74 2.74L3 8" />
          <path d="M3 3v5h5M3 12a9 9 0 009 9 9.75 9.75 0 006.74-2.74L21 16" />
          <path d="M21 21v-5h-5" />
        </svg>
      )
    case 'brain':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M12 5a3 3 0 00-3 3v1a3 3 0 106 0V8a3 3 0 00-3-3z" />
          <path d="M5 10a2.5 2.5 0 012.45-2h1.1A4 4 0 0112 6v12a4 4 0 01-3.45-2H7.5A2.5 2.5 0 015 13.5V10z" />
          <path d="M19 10a2.5 2.5 0 00-2.45-2h-1.1A4 4 0 0012 6v12a4 4 0 003.45-2h1.05A2.5 2.5 0 0019 13.5V10z" />
        </svg>
      )
    case 'link':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M10 13a5 5 0 007.07 0l1.41-1.41a5 5 0 00-7.07-7.07L9 6" />
          <path d="M14 11a5 5 0 00-7.07 0L5.52 12.41a5 5 0 007.07 7.07L15 18" />
        </svg>
      )
    case 'chart':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M3 3v18h18" />
          <path d="M7 16l4-4 3 3 5-6" />
        </svg>
      )
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    case 'mic':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M12 14a3 3 0 003-3V5a3 3 0 10-6 0v6a3 3 0 003 3z" />
          <path d="M19 10v1a7 7 0 01-14 0v-1M12 18v4M8 22h8" />
        </svg>
      )
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      )
    case 'file-text':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      )
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
        </svg>
      )
    case 'pen':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M12 20h9M16.5 3.5l4 4L7 21l-4 1 1-4L16.5 3.5z" />
        </svg>
      )
    case 'target':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    case 'mail':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      )
    case 'flask':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M9 3h6M10 9v11a2 2 0 002 2h0a2 2 0 002-2V9l4-4H6l4 4z" />
        </svg>
      )
    case 'funnel':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M22 3H2l8 9v8l4 2v-10l8-9z" />
        </svg>
      )
    case 'phone':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.44 12.44 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 10.9a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.44 12.44 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      )
    case 'clipboard':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" />
        </svg>
      )
    case 'bell':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
        </svg>
      )
    case 'users':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      )
    case 'smartphone':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      )
    case 'plug':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M12 22v-5M9 8V2M15 8V2M5 8h14v5a7 7 0 01-14 0V8z" />
        </svg>
      )
    case 'wrench':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      )
    case 'cloud':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
        </svg>
      )
    case 'lock':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      )
    case 'message':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      )
    case 'network':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <circle cx="12" cy="5" r="2" />
          <circle cx="5" cy="15" r="2" />
          <circle cx="19" cy="15" r="2" />
          <path d="M12 7v4M7 15h10M8.5 13.5l3-2.5M15.5 13.5l-3-2.5" />
        </svg>
      )
    case 'radio':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <circle cx="12" cy="12" r="2" />
          <path d="M16.24 7.76l-.01.01M19.07 4.93l-.01.01M4.93 19.07l.01-.01M7.76 16.24l.01-.01" />
          <path d="M6.34 17.66l-.01.01M4.93 4.93l.01.01M19.07 19.07l-.01-.01" />
        </svg>
      )
    case 'file':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9l-7-7z" />
          <path d="M13 2v7h7" />
        </svg>
      )
    case 'clock':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      )
    case 'alert':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" />
        </svg>
      )
    case 'cog':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      )
    case 'shuffle':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
        </svg>
      )
    case 'trending':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M23 6l-9.5 9.5-5-5L1 18" />
          <path d="M17 6h6v6" />
        </svg>
      )
    case 'credit-card':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <rect x="1" y="4" width="22" height="16" rx="2" />
          <path d="M1 10h22" />
        </svg>
      )
    case 'building':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M3 21h18M6 21V7a2 2 0 012-2h8a2 2 0 012 2v14M9 21v-4h2v4M13 21v-4h2v4" />
        </svg>
      )
    case 'heart-pulse':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          <path d="M3 12h4l2-4 4 8 2-4h6" />
        </svg>
      )
    case 'shopping-bag':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
        </svg>
      )
    case 'truck':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5 18a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0z" />
        </svg>
      )
    case 'landmark':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
        </svg>
      )
    case 'layers':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    case 'hotel':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M3 21V8l9-5 9 5v13M9 21v-4h6v4M10 9h4" />
        </svg>
      )
    case 'scale':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M12 3v18M5 7l-3 5h8M19 7l3 5h-8M5 7h5M19 7h-5" />
        </svg>
      )
    case 'user-check':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M19 8l2 2 4-4" />
        </svg>
      )
    case 'shopping-cart':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
        </svg>
      )
    case 'graduation-cap':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
        </svg>
      )
    case 'factory':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M2 20h20M4 20V10l4 4V10l4 4V6h8v14M9 6V4h2v2M6 20v-4h4v4M14 20v-4h4v4" />
        </svg>
      )
    case 'plane':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M17.8 19.2L16 11l3.5-3.5a2.12 2.12 0 00-3-3L13 8l-8.8-1.8a2 2 0 00-1.4 3.4L7 14l-4 4 2 2 4-4 2.4 4.2a2 2 0 003.4-1.4z" />
        </svg>
      )
    case 'utensils':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 002-2V2M12 2v20M17 2v7c0 1.1.9 2 2 2h0a2 2 0 002-2V2" />
        </svg>
      )
    case 'briefcase':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M2 13h20" />
        </svg>
      )
    case 'heart':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      )
    case 'bank':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M3 21h18M3 10h18M12 3v7M6 10V7M18 10V7M9 14v7M15 14v7" />
        </svg>
      )
    case 'car':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M5 17h14l-1-7H6l-1 7zM5 17a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0zM5 17H3m16 0h2M15 6l-2-3H11L9 6" />
        </svg>
      )
    case 'film':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M6 16h.01M10 16h.01M14 16h.01M18 16h.01" />
        </svg>
      )
    case 'hammer':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M15 12l-8.5 8.5a2.12 2.12 0 01-3-3L12 9M17.64 6.36a2 2 0 010 2.83l-1.42 1.42a2 2 0 01-2.83 0L9 5.64a2 2 0 010-2.83l1.42-1.42a2 2 0 012.83 0z" />
        </svg>
      )
    case 'sprout':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M12 22v-6M12 8c-2-4-6-4-6-4s0 4 4 4M12 8c2-4 6-4 6-4s0 4-4 4" />
          <path d="M12 16s-3-2-3-6 3-6 3-6 3 2 3 6-3 6-3 6z" />
        </svg>
      )
    case 'sparkles':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M9.5 2L11 7l5 1.5L11 10 9.5 15 8 10 3 8.5 8 7 9.5 2zM19 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" />
        </svg>
      )
    case 'gift':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zm0 0h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
        </svg>
      )
    case 'check':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <path d="M20 6L9 17l-5-5" />
        </svg>
      )
    case 'layout-grid':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...dim} {...s}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      )
  }
}

export const serviceSlugIcon: Record<string, string> = {
  'multi-agent-ai-systems': 'zap',
  'ai-calling-agents': 'mic',
  'ai-business-auto-pilot': 'layers',
  'ai-marketing-sales-ops': 'trending',
  'leads-to-closure': 'funnel',
  'custom-software-development': 'layout-grid',
  'ai-chatbots': 'message',
  'ai-appointment-booking': 'calendar',
  'lead-generation-systems': 'target',
  'workflow-automation': 'shuffle',
}

export const industrySlugIcon: Record<string, string> = {
  'real-estate': 'building',
  healthcare: 'heart-pulse',
  retail: 'shopping-bag',
  logistics: 'truck',
  finance: 'landmark',
  saas: 'layers',
  hospitality: 'hotel',
  legal: 'scale',
  recruitment: 'user-check',
  'e-commerce': 'shopping-cart',
  education: 'graduation-cap',
  manufacturing: 'factory',
  insurance: 'shield',
  'media-entertainment': 'film',
  construction: 'hammer',
  agriculture: 'sprout',
  automotive: 'car',
  'travel-tourism': 'plane',
  'food-beverage': 'utensils',
  'professional-services': 'briefcase',
  nonprofits: 'heart',
  government: 'bank',
}
