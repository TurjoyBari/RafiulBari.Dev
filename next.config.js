/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      }
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["@gravity-ui/icons", "@heroui/react", "framer-motion"],
  },
};

module.exports = nextConfig;
