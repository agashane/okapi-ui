import type { SlotRecipeConfig } from "@pandacss/types";

import { cardSlotRecipe } from "./card";
import { navbarSlotRecipe } from "./navbar";
import { breadcrumbSlotRecipe } from "./breadcrumb";
import { bannerSlotRecipe } from "./banner";
import { emptyStateSlotRecipe } from "./empty-state";

export const slotRecipes: Record<string, SlotRecipeConfig> = {
  banner: bannerSlotRecipe,
  breadcrumb: breadcrumbSlotRecipe,
  card: cardSlotRecipe,
  emptyState: emptyStateSlotRecipe,
  navbar: navbarSlotRecipe,
};
