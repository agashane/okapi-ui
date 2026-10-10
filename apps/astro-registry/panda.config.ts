import { defineConfig } from "@pandacss/dev";
import { preset as okapiUiPreset } from "@okapi-ui/panda-preset";

export default defineConfig({
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda", okapiUiPreset],
  preflight: true,
  include: ["./src/**/*.{astro,js,ts}"],
  exclude: [],
  theme: {
    extend: {},
  },
  staticCss: {
    recipes: "*",
  },
  optimize: {
    removeUnusedTokens: true,
  },
  outdir: "styled-system",
});
