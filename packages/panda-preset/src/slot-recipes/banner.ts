import { defineSlotRecipe } from "@pandacss/dev";
import type { SlotRecipeConfig } from "@pandacss/types";

export const bannerSlotRecipe: SlotRecipeConfig = defineSlotRecipe({
  className: "banner",
  slots: ["root", "content", "title", "action"],
  base: {
    root: {
      display: "flex",
      flexDir: "row",
      gap: "4",
      alignItems: "center",
      rounded: "radius",
      py: "2",
      px: "4",
      colorPalette: "info",
    },
    content: { flex: 1 },
    title: { maxW: "1/3" },
    action: {},
  },
  variants: {
    variant: {
      solid: {
        root: {
          bgColor: "colorPalette.solid",
          color: "colorPalette.contrast",
        },
      },
      outline: {
        root: {
          borderWidth: "1",
          borderColor: "colorPalette.border",
        },
      },
      subtle: {
        root: {
          bgColor: "colorPalette.muted",
          color: "colorPalette.fg",
        },
      },
    },
    size: {
      full: {
        root: {
          pos: "fixed",
          rounded: "none",
          left: "0",
          top: "0",
          w: "100dvw",
        },
      },
      container: {
        root: {
          w: "full",
        },
      },
    },
    floating: {
      true: {
        root: {
          rounded: "radius",
          w: "calc(100% - 1rem)",
          my: "2",
          mx: "auto",
        },
      },
    },
    // TODO: Implement stripping with content having a white background
    stripped: {
      true: {
        root: {
          bgColor: "colorPalette.solid",
          "& [data-slot=banner-content]": {
            bgColor: "surface.muted",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "full",
    floating: false,
    stripped: false,
  },
});
