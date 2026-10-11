import { definePreset } from "@pandacss/dev";
import type { Preset } from "@pandacss/types";

import { recipes } from "./recipes";
import { slotRecipes } from "./slot-recipes";
import { semanticTokens } from "./semantic-tokens";
import { globalCss } from "./global-css";
import { keyframes } from "./keyframes";

export const preset: Preset = definePreset({
  name: "@okapi-ui/panda-preset",
  theme: {
    recipes,
    slotRecipes,
    semanticTokens,
    keyframes,
  },
  globalCss,
  staticCss: {
    recipes: "*",
  },
});
