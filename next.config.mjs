/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // images: {
  //   unoptimized: true,
  // },
  images: {
    formats: ["image/avif", "image/webp"], // ✅ Use optimized formats  
    qualities: [75, 80, 85, 90, 95, 100],
  },
  // output: 'export',
  compress: true,
  // Reduce bundle size
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Enable tree shaking
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }
    return config;
  },
}

export default nextConfig
