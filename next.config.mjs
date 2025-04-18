/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable TypeScript type checking for production deployment
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig; 