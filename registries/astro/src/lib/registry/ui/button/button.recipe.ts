import { cva, type RecipeVariantProps } from "#styled-system/css";

export const buttonVariants = cva({
  base: {
    colorPalette: "primary",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    fontWeight: "medium",
    lineHeight: "1",
    whiteSpace: "nowrap",
    cursor: "pointer",
    textDecoration: "none",
    rounded: "{radii.xl}",
    transition: "background-color 0.2s, color 0.2s",
    _focusVisible: {
      outline: "none",
      ring: "2px",
      ringColor: "colorPalette.fg",
      ringOffset: "2px",
    },
    _disabled: {
      opacity: "0.5",
      pointerEvents: "none",
      cursor: "not-allowed",
    },
    "& svg": {
      pointerEvents: "none",
      flexShrink: "0",
    },
  },
  variants: {
    variant: {
      solid: { bg: "colorPalette.solid", color: "colorPalette.contrast" },
      outline: {
        borderWidth: "1px",
        borderColor: "colorPalette.border",
        color: "colorPalette.fg",
        _hover: { bg: "colorPalette.subtle", opacity: 1 },
      },
      ghost: {
        color: "colorPalette.fg",
        _hover: { bg: "colorPalette.subtle", opacity: 1 },
      },
      link: {
        color: "colorPalette.fg",
        textUnderlineOffset: "4px",
        _hover: { textDecoration: "underline", opacity: 1 },
      },
      subtle: {
        bg: "colorPalette.muted",
        color: "colorPalette.fg",
        _hover: { bg: "colorPalette.subtle", opacity: 1 },
      },
    },
    size: {
      xs: { h: "7", px: "2.5", gap: "1.5", textStyle: "xs" },
      sm: { h: "8", px: "3", gap: "1.5", textStyle: "xs" },
      md: { h: "9", px: "4", gap: "2", textStyle: "sm" },
      lg: { h: "10", px: "6", gap: "2.5", textStyle: "base" },
      xl: { h: "11", px: "8", gap: "3", textStyle: "lg" },
    },
    iconOnly: {
      true: { px: "0" },
    },
    pill: {
      true: { rounded: "full" },
    },
  },
  compoundVariants: [
    { size: "xs", iconOnly: true, css: { w: "7" } },
    { size: "sm", iconOnly: true, css: { w: "8" } },
    { size: "md", iconOnly: true, css: { w: "9" } },
    { size: "lg", iconOnly: true, css: { w: "10" } },
    { size: "xl", iconOnly: true, css: { w: "11" } },
  ],
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonVariants>;
