import { defineRecipe } from "@pandacss/dev";
import type { RecipeConfig } from "@pandacss/types";

export const headingRecipe: RecipeConfig = defineRecipe({
  className: "heading",
  base: {
    fontWeight: "700",
    lineHeight: "1.25",
    m: "0",
    textWrap: "pretty",
    colorPalette: "grayscale",
    color: "colorPalette.fg",
  },
  variants: {
    level: {
      h1: { fontSize: "4xl", fontWeight: "900", lineHeight: "1" },
      h2: { fontSize: "3xl", fontWeight: "700" },
      h3: { fontSize: "2xl", fontWeight: "700" },
      h4: { fontSize: "xl", fontWeight: "600" },
      h5: { fontSize: "lg", fontWeight: "600" },
      h6: { fontSize: "md", fontWeight: "600" },
    },
  },
  defaultVariants: {
    level: "h2",
  },
});
