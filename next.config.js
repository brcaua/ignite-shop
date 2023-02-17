/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  // this property allos us to get images from "unknown" hosts
  images: {
    domains: ["files.stripe.com"],
  },
};

module.exports = nextConfig;
