/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
      // Add rule for SVG files
      config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"],
      });

      return config;
  },
  images: {
    unoptimized: true,
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.unspalsh.com',
      port: '',
      pathname: '/**',
      search: '',
    }],
  },
  reactStrictMode: false,
  experimental: {
      turbo: {
          rules: {
              "*.svg": {
                  loaders: ["@svgr/webpack"],
                  as: "*.js",
              },
          },
      },
  },
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;