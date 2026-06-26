import { cva, type RecipeVariantProps } from "#styled-system/css";

export const textVariants = cva({
  base: {
    colorPalette: "gray",
    color: "colorPalette.700",
  },
  variants: {
    size: {
      xs: { fontSize: "xs", lineHeight: "1.25" },
      sm: { fontSize: "sm", lineHeight: "1.375" },
      md: { fontSize: "md", lineHeight: "1.5" },
      lg: { fontSize: "lg", lineHeight: "1.5" },
      xl: { fontSize: "xl", lineHeight: "1.5" },
    },
    weight: {
      normal: { fontWeight: "normal" },
      medium: { fontWeight: "medium" },
      semibold: { fontWeight: "semibold" },
      bold: { fontWeight: "bold" },
    },
    muted: {
      true: { color: "colorPalette.500" },
    },
    lead: {
      true: { fontSize: "lg", lineHeight: "1.75" },
    },
  },
  defaultVariants: {
    size: "md",
    weight: "normal",
  },
});

export type TextVariants = RecipeVariantProps<typeof textVariants>;
