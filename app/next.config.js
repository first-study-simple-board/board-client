/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // distDir: "../build",

  swcMinify: true,
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
};
module.exports = nextConfig;
