import { default as Banner } from "./banner.astro";
import { default as BannerTitle } from "./banner-title.astro";
import { default as BannerAction } from "./banner-action.astro";
import { default as BannerContent } from "./banner-content.astro";
import { banner, type BannerVariantProps } from "#styled-system/recipes/banner";

export {
  Banner,
  BannerTitle,
  BannerAction,
  BannerContent,
  banner,
  type BannerVariantProps,

  //
  Banner as Root,
  BannerTitle as Title,
  BannerAction as Action,
  BannerContent as Content,
};
