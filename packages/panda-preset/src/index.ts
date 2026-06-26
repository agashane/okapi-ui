import { definePreset } from "@pandacss/dev";
import { colors, radii } from "./semantic-tokens";

export const okapiUiPreset = definePreset({
  name: "@okapi-ui/panda-preset",
  theme: {
    extend: {
      semanticTokens: {
        colors,
        radii,
      },
    },
  },
});
