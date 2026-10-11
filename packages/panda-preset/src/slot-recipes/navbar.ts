import { defineSlotRecipe } from "@pandacss/dev";
import type { SlotRecipeConfig } from "@pandacss/types";

export const navbarSlotRecipe: SlotRecipeConfig = defineSlotRecipe({
  className: "navbar",
  slots: ["root", "start", "content", "end"],
  base: {
    root: {
      display: "flex",
      flexDir: "row",
      colorPalette: "current",
      py: "4",
      px: "4",
      gap: "2",
      alignItems: "center",
    },
    start: {
      display: "flex",
      flexDir: "row",
    },
    content: {
      display: "flex",
      flexDir: "row",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
    },
    end: {
      display: "flex",
      flexDir: "row",
    },
  },
  variants: {
    position: {
      fixed: {
        root: {
          pos: "fixed",
        },
      },
      sticky: {
        root: {
          pos: "sticky",
          top: "0",
        },
      },
    },
    boxed: {
      true: {
        root: {
          mx: "2",
          my: "2",
          rounded: "radius",
        },
      },
    },
    variant: {
      solid: {
        root: {
          bgColor: "colorPalette.solid",
          color: "colorPalette.contrast",
        },
      },
      outline: {
        root: {
          borderWidth: "1px",
          borderColor: "border.solid",
        },
      },
      subtle: {
        root: {
          bgColor: "bg.muted",
        },
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    position: "sticky",
  },
});
