/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",
      "encrypted-tbn0.gstatic.com",
      "encrypted-tbn2.gstatic.com",
    ],
  },
};

module.exports = nextConfig;
