import { defineConfig } from "@pandacss/dev";
import { okapiUiPreset } from "@okapi-ui/panda-preset";
import pandaPreset from "@pandacss/preset-panda";

export default defineConfig({
  presets: [pandaPreset, okapiUiPreset],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,ts,astro}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
