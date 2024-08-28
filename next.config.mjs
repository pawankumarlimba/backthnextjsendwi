/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'img.freepik.com',
      'encrypted-tbn0.gstatic.com',
      'aceternity.com',
      'res.cloudinary.com',
    ],
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);

