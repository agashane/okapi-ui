// @ts-check
import { defineConfig } from "astro/config";
import pandacss from "@pandacss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [pandacss()],
  },
});
