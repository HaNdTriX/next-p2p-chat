const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  pwa: {
    dest: "public",
    fallbacks: {
      document: "/",
    },
  },
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
