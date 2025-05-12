import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "X-Frame-Options", value: "DENY" },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
        {
          key: "Content-Security-Policy",
          value: [
            `default-src 'self'`,
            `script-src 'self' 'unsafe-inline' blob:`,
            `worker-src 'self' blob:`,
            `img-src 'self' data: https://images.unsplash.com`,
            `font-src 'self' data:`,
            `style-src 'self' 'unsafe-inline'`,
            `connect-src 'self' https://*.mapbox.com https://*.tiles.mapbox.com https://cdnjs.cloudflare.com`,
          ].join("; "),
        },
      ],
    },
  ],
  bundlePagesRouterDependencies: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons", "justd-icons"],
  },
};

export default nextConfig;
