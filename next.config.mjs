/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "utfs.io",
      "i.pinimg.com",      
    ],
    unoptimized: true
  },
  output: 'export',
};

export default nextConfig;