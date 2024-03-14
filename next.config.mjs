/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "utfs.io",
      "i.pinimg.com",
    ],
    unoptimized: true,
  },
  api: {
    bodyParser: false,
  },
  output: 'export',
};

export default nextConfig;