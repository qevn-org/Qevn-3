/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', '@react-three/fiber', '@react-three/drei'],
  },
  transpilePackages: ['three'],
  async redirects() {
    return [
      {
        source: '/the-anatomy',
        destination: '/how-it-works',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
