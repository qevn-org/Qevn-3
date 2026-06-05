import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      colors: {
        'bg-base': '#08090A',
        'bg-surface': '#0F1012',
        'bg-elevated': '#16181C',
        'accent-primary': '#C8F04B',
        'accent-secondary': '#4B8BF0',
        'text-primary': '#F2F2F0',
        'text-muted': '#6B7280',
        'border-subtle': 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        display: ['var(--font-cabinet)', 'system-ui', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(200,240,75,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(200,240,75,0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200,240,75,0.08) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}

export default config
