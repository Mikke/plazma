/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
  webpack: (config) => {
      // Add rule for SVG files
      config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack", "url-loader"],
      });

      return config;
  },
};

export default nextConfig;