/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei", "@splinetool/react-spline", "@splinetool/runtime"],
};

export default nextConfig;
