import type { RecipeConfig } from "@pandacss/types";

import { badgeRecipe } from "./badge";
import { buttonRecipe } from "./button";
import { headingRecipe } from "./heading";
import { textRecipe } from "./text";
import { linkRecipe } from "./link";

export const recipes: Record<string, RecipeConfig> = {
  button: buttonRecipe,
  badge: badgeRecipe,
  heading: headingRecipe,
  link: linkRecipe,
  text: textRecipe,
};
