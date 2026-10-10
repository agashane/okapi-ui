import { definePreset } from "@pandacss/dev";
import type { Preset } from "@pandacss/types";

import { recipes } from "./recipes";
import { semanticTokens } from "./semantic-tokens";

export const preset: Preset = definePreset({
  name: "@okapi-ui/panda-preset",
  theme: {
    extend: {
      recipes,
      semanticTokens,
    },
  },
  globalCss: {},
  globalVars: {
    "--radius": "{radii.lg}",
  },
});
