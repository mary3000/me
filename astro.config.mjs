import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://mary3000.github.io",
  base: "/me",
  integrations: [tailwind()],
});
