import { defineSlotRecipe } from "@pandacss/dev";
import type { SlotRecipeConfig } from "@pandacss/types";

export const cardRecipe: SlotRecipeConfig = defineSlotRecipe({
  className: "card",
  slots: ["root", "header", "body", "footer"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "4",
      overflow: "hidden",
      rounded: "radius",
      py: "6",
      color: "fg",
      wordWrap: "break-word",
      textAlign: "start",
    },
    header: {
      display: "grid",
      gridAutoRows: "min",
      alignItems: "start",
      gap: "1",
      roundedTop: "radius",
      px: "8",
    },
    body: {
      px: "8",
      flex: "1",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      roundedBottom: "radius",
      px: "8",
      gap: "2",
    },
  },
  variants: {
    variant: {
      outline: {
        root: {
          borderWidth: "1",
          borderColor: "colorPalette.border",
        },
      },
      subtle: {
        root: {
          bg: "colorPalette.subtle",
        },
      },
      plain: {
        root: {
          _hover: {
            bgColor: "colorPalette.subtle",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "subtle",
  },
});
