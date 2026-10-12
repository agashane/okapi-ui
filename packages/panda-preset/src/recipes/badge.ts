import { defineRecipe } from "@pandacss/dev";
import type { RecipeConfig } from "@pandacss/types";

export const badgeRecipe: RecipeConfig = defineRecipe({
  className: "badge",
  base: {
    display: "inline-flex",
    alignItems: "center",
    fontWeight: "medium",
    lineHeight: "1",
    whiteSpace: "nowrap",
    rounded: "{radii.xl}",
    userSelect: "none",
  },
  variants: {
    variant: {
      solid: { bg: "colorPalette.solid", color: "colorPalette.contrast" },
      subtle: { bg: "colorPalette.muted", color: "colorPalette.fg" },
      outline: {
        borderWidth: "1px",
        borderColor: "colorPalette.border",
        color: "colorPalette.fg",
      },
      ghost: {
        color: "colorPalette.fg",
        _hover: { bg: "colorPalette.subtle", opacity: 1 },
      },
    },
    size: {
      sm: { h: "5", px: "1.5", gap: "1", textStyle: "xs" },
      md: { h: "6", px: "2", gap: "1", textStyle: "xs" },
      lg: { h: "7", px: "2.5", gap: "1.5", textStyle: "sm" },
    },
    pill: {
      true: { rounded: "full" },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});
