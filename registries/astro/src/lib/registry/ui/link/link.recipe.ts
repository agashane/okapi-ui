import { cva, type RecipeVariantProps } from "#styled-system/css";

export const linkVariants = cva({
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

export type LinkVariants = RecipeVariantProps<typeof linkVariants>;
