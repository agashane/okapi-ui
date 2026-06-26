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
      rounded: "xl",
      py: "6",
      textStyle: "sm",
      boxShadow: "xs",
      ring: "1px",
      ringColor: "colorPalette.fg/10",
      bg: "colorPalette.muted",
      color: "colorPalette.fg",
    },
    header: {
      display: "grid",
      gridAutoRows: "min",
      alignItems: "start",
      gap: "1",
      roundedTop: "xl",
      px: "6",
    },
    body: {
      px: "6",
      flex: "1",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      roundedBottom: "xl",
      px: "6",
    },
  },
  variants: {
    size: {
      sm: {
        root: { gap: "4", py: "4" },
        header: { px: "4" },
        body: { px: "4" },
        footer: { px: "4" },
      },
      md: {
        root: { gap: "6", py: "6" },
        header: { px: "6" },
        body: { px: "6" },
        footer: { px: "6" },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type CardVariants = RecipeVariantProps<typeof card>;
