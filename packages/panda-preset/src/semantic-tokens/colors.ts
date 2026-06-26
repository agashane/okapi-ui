import { defineSemanticTokens } from "@pandacss/dev";

const w = { value: "{colors.white}" };
const d = { value: "{colors.gray.950}" };

function color(hue: string, shade: 500 | 600) {
  const isLight = shade === 500;
  return {
    DEFAULT: { value: { base: `{colors.${hue}.${shade}}`, _dark: `{colors.${hue}.400}` } },
    solid: { value: `{colors.${hue}.${shade}}` },
    contrast: isLight ? d : w,
    subtle: { value: { base: `{colors.${hue}.200}`, _dark: `{colors.${hue}.800}` } },
    muted: { value: { base: `{colors.${hue}.100}`, _dark: `{colors.${hue}.900}` } },
    fg: { value: { base: `{colors.${hue}.${shade}}`, _dark: `{colors.${hue}.400}` } },
    border: { value: { base: `{colors.${hue}.300}`, _dark: `{colors.${hue}.700}` } },
  };
}

export const colors = defineSemanticTokens.colors({
  // --- Abstract families ---
  primary: color("blue", 600),
  success: color("green", 600),
  warning: color("amber", 500),
  error: color("red", 600),
  info: color("sky", 500),
  surface: {
    DEFAULT: { value: { base: "{colors.gray.700}", _dark: "{colors.gray.300}" } },
    solid: { value: { base: "{colors.gray.900}", _dark: "{colors.gray.100}" } },
    contrast: { value: { base: w.value, _dark: d.value } },
    subtle: { value: { base: "{colors.gray.200}", _dark: "{colors.gray.800}" } },
    muted: { value: { base: "{colors.gray.100}", _dark: "{colors.gray.900}" } },
    fg: { value: { base: "{colors.gray.700}", _dark: "{colors.gray.300}" } },
    border: { value: { base: "{colors.gray.300}", _dark: "{colors.gray.700}" } },
  },

  // --- Raw palette — 600-family (contrast = white) ---
  rose: color("rose", 600),
  pink: color("pink", 600),
  fuchsia: color("fuchsia", 600),
  purple: color("purple", 600),
  violet: color("violet", 600),
  indigo: color("indigo", 600),
  blue: color("blue", 600),
  teal: color("teal", 600),
  emerald: color("emerald", 600),
  green: color("green", 600),
  orange: color("orange", 600),
  red: color("red", 600),
  neutral: color("neutral", 600),
  stone: color("stone", 600),
  zinc: color("zinc", 600),
  gray: color("gray", 600),
  slate: color("slate", 600),

  // --- Raw palette — 500-family (contrast = gray.950) ---
  sky: color("sky", 500),
  cyan: color("cyan", 500),
  lime: color("lime", 500),
  yellow: color("yellow", 500),
  amber: color("amber", 500),
});
