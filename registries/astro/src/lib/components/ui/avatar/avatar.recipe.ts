import { sva, type RecipeVariantProps } from "#styled-system/css";

export const avatarRecipe = sva({
  slots: ["root", "image", "fallback", "group"],
  base: {
    root: {
      colorPalette: "neutral",
      rounded: "full",
      overflow: "hidden",
      pos: "relative",
      display: "flex",
      flexShrink: "0",
      borderWidth: "2",
      borderColor: "colorPalette.border",
      zIndex: "-1",
    },
    fallback: {
      bg: "colorPalette.muted",
      color: "colorPalette.fg",
      display: "flex",
      h: "full",
      w: "full",
      textStyle: "sm",
      fontWeight: "medium",
      alignItems: "center",
      justifyContent: "center",
      rounded: "full",
    },
    group: {
      display: "flex",
      flexDir: "row",
      alignItems: "center",
      spaceX: "-3",
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          h: "8",
          w: "8",
        },
      },
      md: {
        root: {
          h: "10",
          w: "10",
        },
      },
      lg: {
        root: {
          h: "12",
          w: "12",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type AvatarVariants = RecipeVariantProps<typeof avatarRecipe>;
