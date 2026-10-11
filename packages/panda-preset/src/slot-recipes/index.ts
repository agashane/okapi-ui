import type { SlotRecipeConfig } from "@pandacss/types";
import { cardRecipe } from "./card";

export const slotRecipes: Record<string, SlotRecipeConfig> = {
  card: cardRecipe,
};
