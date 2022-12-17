/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "30d1-2600-8800-620f-f600-fd42-d640-7a4d-da7b.ngrok.io"],
  }
}

module.exports = nextConfig
