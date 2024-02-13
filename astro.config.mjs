import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://dazeyawn-astro-content-collections.netlify.app/",
  integrations: [mdx()],
  image: {
    domains: ["astro.build"],
    remotePatterns: [{ protocol: "https" }],
  },
});
