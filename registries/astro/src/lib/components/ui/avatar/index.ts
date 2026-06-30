import { default as Avatar } from "./avatar.astro";
import { default as AvatarImage } from "./avatar-image.astro";
import { default as AvatarFallback } from "./avatar-fallback.astro";
import { default as AvatarGroup } from "./avatar-group.astro";
import { default as AvatarGroupCount } from "./avatar-group-count.astro";
import { avatarRecipe, type AvatarVariants } from "./avatar.recipe";

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  avatarRecipe,
  type AvatarVariants,

  //
  Avatar as Root,
  AvatarImage as Image,
  AvatarFallback as Fallback,
  AvatarGroup as Group,
  AvatarGroupCount as GroupCount,
};
