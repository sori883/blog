/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    APOLLO_URI: process.env.SERVER_APOLLO_URI,
  },
  publicRuntimeConfig: {
    APOLLO_URI: process.env.PUBLIC_APOLLO_URI,
    TWITTER_ID: process.env.TWITTER_ID,
    FBAPP_ID: process.env.FBAPP_ID
  },
};

module.exports = nextConfig;
