import { cva, type RecipeVariantProps } from "#styled-system/css";

export const buttonVariants = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    fontWeight: "semibold",
    lineHeight: "1",
    borderRadius: "lg",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.2s",
    _hover: { opacity: 0.9 },
    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
      _hover: { opacity: 0.5 },
    },
  },
  variants: {
    variant: {
      solid: { bg: "blue.600", color: "white", _hover: { bg: "blue.700" } },
      outline: { borderWidth: "1px", borderColor: "blue.600", color: "blue.600", _hover: { bg: "blue.50" } },
      ghost: { color: "blue.600", _hover: { bg: "blue.50" } },
      link: { color: "blue.600", _hover: { textDecoration: "underline" } },
    },
    size: {
      sm: { px: "3", py: "1.5", textStyle: "sm" },
      md: { px: "4", py: "2", textStyle: "sm" },
      lg: { px: "6", py: "3", textStyle: "md" },
      xl: { px: "8", py: "4", textStyle: "lg" },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonVariants>;
