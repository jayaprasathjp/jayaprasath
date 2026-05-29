/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false; // Disable caching in development to bypass Windows file-lock/ENOENT failures
    }
    return config;
  },
};

export default nextConfig;
