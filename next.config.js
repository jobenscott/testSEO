/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer');
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  api: {
    // disables call to body parsing module
    bodyParser: false,
  },
  images: {
    loader: "default",
    domains: ["localhost", "30d1-2600-8800-620f-f600-fd42-d640-7a4d-da7b.ngrok.io"],
  }
}
// module.exports = (phase, nextConfig) => {
//   return withBundleAnalyzer(nextConfig)
// }

module.exports = nextConfig
