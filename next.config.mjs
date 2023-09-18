/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");
import { withAxiom } from "next-axiom";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  images: {
    domains: ["images.clerk.dev", "img.clerk.com"],
  },
  // experimental: {
  //   typedRoutes: true,
  //   serverActions: true,
  // },

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
  /**
   * @param {{ module: { rules: { test: RegExp[]; sideEffects: boolean; }[]; }; }} config
   */
  webpack(config) {
    config.module.rules.push({
      test: [
        /(src|components|api|constants|utils|hooks|server|pages|hoc|types)\/index.ts/i,
      ],
      sideEffects: false,
    });
    return config;
  },
};

export default withAxiom(config);
