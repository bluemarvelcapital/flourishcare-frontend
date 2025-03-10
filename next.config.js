/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "images.unsplash.com",
      "s3-alpha-sig.figma.com",
      "res.cloudinary.com",
    ],
  },
}

module.exports = nextConfig
