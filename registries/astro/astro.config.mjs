// @ts-check
import { defineConfig } from "astro/config";
import icon from "@dallay/astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
});
