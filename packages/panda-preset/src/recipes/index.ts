import { badgeRecipe } from "./badge";
import { buttonRecipe } from "./button";

import type { RecipeConfig } from "@pandacss/types";

export const recipes: Record<string, RecipeConfig> = {
  button: buttonRecipe,
  badge: badgeRecipe,
};
