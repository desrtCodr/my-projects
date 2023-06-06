/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/projects/taskManager',
        destination: 'https://task-manager-alpha-seven.vercel.app/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
