import { sva, type RecipeVariantProps } from "#styled-system/css";

export const card = sva({
  slots: ["root", "header", "body", "footer"],
  base: {
    root: {
      colorPalette: "surface",
      display: "flex",
      flexDirection: "column",
      gap: "6",
      overflow: "hidden",
      rounded: "radius",
      py: "6",
      color: "colorPalette.fg",
      wordWrap: "break-word",
      textAlign: "start",
    },
    header: {
      display: "grid",
      gridAutoRows: "min",
      alignItems: "start",
      gap: "1",
      roundedTop: "radius",
      px: "6",
    },
    body: {
      px: "6",
      flex: "1",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      roundedBottom: "radius",
      px: "6",
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
          bg: "colorPalette.muted",
        },
      },
    },
  },
  defaultVariants: {
    variant: "subtle",
  },
});

export type CardVariants = RecipeVariantProps<typeof card>;
