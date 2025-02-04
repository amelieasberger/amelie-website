import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
    localeDetection: false,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
