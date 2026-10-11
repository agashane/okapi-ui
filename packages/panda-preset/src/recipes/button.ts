import { defineRecipe } from "@pandacss/dev";
import type { RecipeConfig } from "@pandacss/types";

export const buttonRecipe: RecipeConfig = defineRecipe({
  className: "button",
  base: {
    display: "inline-flex",
    gap: "2",
    rounded: "radius",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "medium",
    lineHeight: "1",
    whiteSpace: "nowrap",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.2s ease-in-out",
    _focusVisible: {
      outline: "none",
      ring: "2xp",
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
      solid: {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast",
        "& svg": {
          color: "colorPalette.contrast",
        },
      },
      outline: {
        borderWidth: "1px",
        borderColor: "colorPalette.border",
        color: "colorPalette.fg",
        "& svg": {
          color: "colorPalette.fg",
        },
        _hover: { bg: "colorPalette.subtle", opacity: 1 },
      },
      ghost: {
        color: "colorPalette.fg",
        "& svg": {
          color: "colorPalette.fg",
        },
        _hover: {
          bg: "colorPalette.subtle",
          "& svg": {
            color: "colorPalette.solid",
          },
        },
      },
      link: {
        color: "colorPalette.fg",
        textUnderlineOffset: "4px",
        "& svg": {
          color: "colorPalette.fg",
        },
        _hover: { textDecoration: "underline", opacity: 1 },
      },
      subtle: {
        bg: "colorPalette.muted",
        color: "colorPalette.fg",
        "& svg": {
          color: "colorPalette.fg",
        },
        _hover: {
          bg: "colorPalette.subtle",
          opacity: 1,
        },
      },
    },
    size: {
      xs: {
        h: "7",
        px: "2.5",
        gap: "1.5",
        textStyle: "xs",
        "& svg": { w: "3", h: "3" },
      },
      sm: {
        h: "8",
        px: "3",
        gap: "1.5",
        textStyle: "xs",
        "& svg": { w: "3.5", h: "3.5" },
      },
      md: {
        h: "9",
        px: "4",
        gap: "2",
        textStyle: "sm",
        "& svg": { w: "4", h: "4" },
      },
      lg: {
        h: "10",
        px: "6",
        gap: "2.5",
        textStyle: "base",
        "& svg": { w: "5", h: "5" },
      },
      xl: {
        h: "11",
        px: "8",
        gap: "3",
        textStyle: "lg",
        "& svg": { w: "5", h: "5" },
      },
    },
    iconOnly: {
      true: { px: "0" },
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
    size: "md",
    variant: "solid",
  },
});
