import { default as Banner } from "./banner.astro";
import { default as BannerContainer } from "./banner-container.astro";
import { default as BannerClose } from "./banner-close.astro";
import { default as BannerDescription } from "./banner-description.astro";
import { default as BannerSlider } from "./banner-slider.astro";
import { default as BannerTitle } from "./banner-title.astro";
import { bannerRecipe, type BannerVariants } from "./banner.recipe";

export {
  Banner,
  BannerContainer,
  BannerClose,
  BannerDescription,
  BannerSlider,
  BannerTitle,
  bannerRecipe,
  type BannerVariants,

  //
  Banner as Root,
  BannerContainer as Container,
  BannerClose as Close,
  BannerDescription as Description,
  BannerSlider as Slider,
  BannerTitle as Title,
};
