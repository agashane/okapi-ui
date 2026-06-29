import { sva, type RecipeVariantProps } from "#styled-system/css";

export const alertVariants = sva({
  slots: ["root", "content", "indicator", "title", "description"],
  base: {
    root: {
      colorPalette: "neutral",
      w: "full",
      display: "flex",
      flexDirection: "row",
      gap: "2",
      px: "4",
      py: "4",
      rounded: "radius",
      alignItems: "flex-start",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5",
    },
    indicator: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      "& > svg": {
        boxSize: "full",
        textStyle: "xl",
      },
    },
    title: {},
    description: {
      textStyle: "sm",
    },
  },
  variants: {
    variant: {
      solid: {
        root: {
          bg: "colorPalette.solid",
          color: "colorPalette.contrast",
        },
      },
      outline: {
        root: {
          borderWidth: "1",
          borderColor: "colorPalette.border",
          color: "colorPalette.fg",
        },
      },
      subtle: {
        root: {
          bg: "colorPalette.muted",
          color: "colorPalette.fg",
        },
      },
    },
  },
});

export type AlertVariants = RecipeVariantProps<typeof alertVariants>;
