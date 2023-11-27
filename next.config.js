// FIX: I changed .mjs to .js 
// More info: https://github.com/shadcn-ui/taxonomy/issues/100#issuecomment-1605867844

const { createContentlayerPlugin } = require("next-contentlayer");

import("./env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'www.finn.no',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'files.edgestore.dev',
        port: '',
        pathname: '**',
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
  },
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

module.exports = withContentlayer(nextConfig);
