/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["books.google.com", "www.giulianisgrupo.com"],
  },
  optimizeFonts: false,
  staticPageGenerationTimeout: 1000,
};

module.exports = nextConfig;
