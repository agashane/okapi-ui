import { sva, type RecipeVariantProps } from "#styled-system/css";

export const bannerRecipe = sva({
  slots: ["root", "container", "title", "description", "close", "slider"],
  base: {},
  variants: {
    variant: {
      default: {
        root: {},
      },
      floating: {
        root: {
          bg: "colorPalette.solid",
          color: "colorPalette.contrast",
          w: "calc(100%-2rem",
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type BannerVariants = RecipeVariantProps<typeof bannerRecipe>;
