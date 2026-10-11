import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  html: {
    colorPalette: "slate",
    color: "fg",
    bg: "bg",
    lineHeight: "1.5",
  },
  ":root": {
    interpolateSize: "allow-keywords",
  },
});
