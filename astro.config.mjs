import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://nuvant.com",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      sourcemap: false,
      minify: "esbuild",
      cssMinify: true,
    },
  },
  integrations: [tailwind(), sitemap(), robotsTxt()],
});
