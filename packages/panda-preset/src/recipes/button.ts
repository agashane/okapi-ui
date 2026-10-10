import { defineRecipe } from "@pandacss/dev";
import type { RecipeConfig } from "@pandacss/types";

export const buttonRecipe: RecipeConfig = defineRecipe({
  className: "button",
  base: {
    display: "inline-flex",
    gap: "2",
    colorPalette: "indigo",
    rounded: "radius",
  },
  variants: {
    variant: {
      solid: {
        bgColor: "colorPalette.solid",
        color: "colorPalette.contrast",
      },
      ghost: {
        _hover: {
          color: "colorPalette.fg",
          bgColor: "colorPalette.subtle",
        },
      },
      outline: {
        borderWidth: "1px",
        borderColor: "colorPalette.border",
      },
      subtle: {
        bgColor: "colorPalette.subtle",
        color: "colorPalette.fg",
        _hover: {
          bgColor: "colorPalette.400",
        },
      },
    },
    size: {
      sm: {
        py: "2",
        px: "2",
        fontSize: "sm",
      },
      md: {
        px: "4",
        py: "3",
        fontSize: "md",
      },
      lg: {
        px: "5",
        py: "4",
        fontSize: "lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
  },
});
