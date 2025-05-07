/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Only use export, basePath, and assetPrefix for GitHub Pages
  ...(process.env.GITHUB_PAGES === 'true' ? {
    output: 'export',
    basePath: '/Portfolio',
    assetPrefix: '/Portfolio/',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  } : {
    // For Vercel deployment
    images: {
      domains: ['*'],
    },
  }),
  transpilePackages: ['@tabler/icons-react', '@react-three/fiber', '@react-three/drei', 'three'],
}

module.exports = nextConfig
