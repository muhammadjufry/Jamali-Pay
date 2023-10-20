/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["images.unsplash.com", "images.yapily.com", "cdn.builder.io"],
  },
};

module.exports = nextConfig;
