import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    svelte(),
  ],

  site: "https://Keshav-writes-code.github.io",
  adapter: vercel(),
});

