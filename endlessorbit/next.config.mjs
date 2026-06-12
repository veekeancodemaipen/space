/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow remote cover images coming from Notion / Unsplash / GitHub avatars.
    remotePatterns: [
      { protocol: "https", hostname: "**.notion.so" },
      { protocol: "https", hostname: "**.amazonaws.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "**.githubusercontent.com" },
    ],
  },
  // three / drei ship ESM that benefits from transpilation in Next 14.
  transpilePackages: ["three"],
};

export default nextConfig;
