import { defineRecipe } from "@pandacss/dev";
import type { RecipeConfig } from "@pandacss/types";

export const linkRecipe: RecipeConfig = defineRecipe({
  className: "link",
  base: {
    colorPalette: "blue",
    color: "colorPalette.600",
    cursor: "pointer",
    transition: "color 0.2s",
    _hover: { color: "colorPalette.700" },
    _visited: { color: "colorPalette.800" },
  },
  variants: {
    variant: {
      plain: {
        textDecoration: "none",
        _hover: { textDecoration: "none" },
      },
      underline: {
        textDecoration: "underline",
        textUnderlineOffset: "2px",
        _hover: { textDecoration: "underline" },
      },
      dashed: {
        textDecoration: "underline",
        textUnderlineOffset: "2px",
        textDecorationStyle: "dashed",
        _hover: { textDecoration: "underline", textDecorationStyle: "dashed" },
      },
    },
  },
  defaultVariants: {
    variant: "underline",
  },
});
