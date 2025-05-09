import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
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
        // clickjacking imp.
        { key: "X-Frame-Options", value: "DENY" },

        // HSTS
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },

        // origin isolation
        { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },

        // CSP
        {
          key: "Content-Security-Policy",
          value: [
            // base
            `default-src 'self'`,

            // scripts: allow inline (if you need it), blob workers, and your CDN
            `script-src 'self' 'unsafe-inline' blob:`,

            // allow spinning up Web Workers from blob URLs
            `worker-src 'self' blob:`,

            // images
            `img-src 'self' data: https://images.unsplash.com`,

            // fonts: your hosted fonts + data URIs
            `font-src 'self' data:`,

            // styles: (you needed unsafe-inline for Tailwind <style> injections)
            `style-src 'self' 'unsafe-inline'`,

            // XHR / fetch / websockets:
            //    - your own API (“self”)
            //    - Mapbox’s tile & style endpoints
            //    - analytics or other 3rd-party domains (add as needed)
            `connect-src 'self' https://api.mapbox.com https://events.mapbox.com https://*.tiles.mapbox.com`,
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
