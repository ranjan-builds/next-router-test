/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/next-router-test/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/next-router-test' : '',
};

export default nextConfig;
