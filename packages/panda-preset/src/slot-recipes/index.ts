import type { SlotRecipeConfig } from "@pandacss/types";

import { cardRecipe } from "./card";
import { navbarSlotRecipe } from "./navbar";

export const slotRecipes: Record<string, SlotRecipeConfig> = {
  card: cardRecipe,
  navbar: navbarSlotRecipe,
};
