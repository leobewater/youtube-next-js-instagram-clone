/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // add own custom domain names for image src
  images: {
    domains: [
      "links.papareact.com",
      "firebasestorage.googleapis.com"
    ]
  }
}

module.exports = nextConfig
