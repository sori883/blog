/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    APOLLO_URI: process.env.SERVER_APOLLO_URI,
    GCS_URL: process.env.GCS_URL,
  },
  publicRuntimeConfig: {
    APOLLO_URI: process.env.PUBLIC_APOLLO_URI,
    GCS_URL: process.env.GCS_URL,
    TWITTER_ID: process.env.TWITTER_ID,
    FBAPP_ID: process.env.FBAPP_ID
  },
  images: {
    domains: ['storage.googleapis.com'],
  },
};

module.exports = nextConfig;
