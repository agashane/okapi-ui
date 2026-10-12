import { defineSemanticTokens } from "@pandacss/dev";

export const colors = defineSemanticTokens.colors({
  bg: {
    DEFAULT: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.black}",
      },
    },
    subtle: {
      value: {
        base: "{colors.slate.50}",
        _dark: "{colors.slate.950}",
      },
    },
    muted: {
      value: {
        base: "{colors.slate.100}",
        _dark: "{colors.slate.900}",
      },
    },
    inverted: {
      value: {
        base: "{colors.black}",
        _dark: "{colors.white}",
      },
    },
    panel: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.slate.950}",
      },
    },
    error: {
      value: {
        base: "{colors.red.50}",
        _dark: "{colors.red.950}",
      },
    },
    warning: {
      value: {
        base: "{colors.orange.50}",
        _dark: "{colors.orange.950}",
      },
    },
    success: {
      value: {
        base: "{colors.green.50}",
        _dark: "{colors.green.950}",
      },
    },
    info: {
      value: {
        base: "{colors.blue.50}",
        _dark: "{colors.blue.950}",
      },
    },
  },
  fg: {
    DEFAULT: {
      value: {
        base: "{colors.black}",
        _dark: "{colors.slate.50}",
      },
    },
    muted: {
      value: {
        base: "{colors.slate.600}",
        _dark: "{colors.slate.400}",
      },
    },
    subtle: {
      value: {
        base: "{colors.slate.400}",
        _dark: "{colors.slate.500}",
      },
    },
    inverted: {
      value: {
        base: "{colors.slate.50}",
        _dark: "{colors.black}",
      },
    },
    error: {
      value: {
        base: "{colors.red.500}",
        _dark: "{colors.red.400}",
      },
    },
    warning: {
      value: {
        base: "{colors.orange.600}",
        _dark: "{colors.orange.300}",
      },
    },
    success: {
      value: {
        base: "{colors.green.600}",
        _dark: "{colors.green.300}",
      },
    },
    info: {
      value: {
        base: "{colors.blue.600}",
        _dark: "{colors.blue.300}",
      },
    },
  },
  border: {
    DEFAULT: {
      value: {
        base: "{colors.slate.200}",
        _dark: "{colors.slate.800}",
      },
    },
    muted: {
      value: {
        base: "{colors.slate.100}",
        _dark: "{colors.slate.900}",
      },
    },
    subtle: {
      value: {
        base: "{colors.slate.50}",
        _dark: "{colors.slate.950}",
      },
    },
    inverted: {
      value: {
        base: "{colors.slate.800}",
        _dark: "{colors.slate.200}",
      },
    },
    error: {
      value: {
        base: "{colors.red.500}",
        _dark: "{colors.red.400}",
      },
    },
    warning: {
      value: {
        base: "{colors.orange.500}",
        _dark: "{colors.orange.400}",
      },
    },
    success: {
      value: {
        base: "{colors.green.500}",
        _dark: "{colors.green.400}",
      },
    },
    info: {
      value: {
        base: "{colors.blue.500}",
        _dark: "{colors.blue.400}",
      },
    },
  },

  // Default PandaCSS colors
  gray: {
    contrast: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.black}",
      },
    },
    fg: {
      value: {
        base: "{colors.gray.800}",
        _dark: "{colors.gray.200}",
      },
    },
    subtle: {
      value: {
        base: "{colors.gray.100}",
        _dark: "{colors.gray.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.gray.200}",
        _dark: "{colors.gray.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.gray.900}",
        _dark: "{colors.white}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.gray.400}",
        _dark: "{colors.gray.400}",
      },
    },
    border: {
      value: {
        base: "{colors.gray.200}",
        _dark: "{colors.gray.800}",
      },
    },
  },
  neutral: {
    contrast: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.black}",
      },
    },
    fg: {
      value: {
        base: "{colors.neutral.800}",
        _dark: "{colors.neutral.200}",
      },
    },
    subtle: {
      value: {
        base: "{colors.neutral.100}",
        _dark: "{colors.neutral.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.neutral.200}",
        _dark: "{colors.neutral.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.neutral.900}",
        _dark: "{colors.white}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.neutral.400}",
        _dark: "{colors.neutral.400}",
      },
    },
    border: {
      value: {
        base: "{colors.neutral.200}",
        _dark: "{colors.neutral.800}",
      },
    },
  },
  stone: {
    contrast: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.black}",
      },
    },
    fg: {
      value: {
        base: "{colors.stone.800}",
        _dark: "{colors.stone.200}",
      },
    },
    subtle: {
      value: {
        base: "{colors.stone.100}",
        _dark: "{colors.stone.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.stone.200}",
        _dark: "{colors.stone.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.stone.900}",
        _dark: "{colors.white}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.stone.400}",
        _dark: "{colors.stone.400}",
      },
    },
    border: {
      value: {
        base: "{colors.stone.200}",
        _dark: "{colors.stone.800}",
      },
    },
  },
  zinc: {
    contrast: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.black}",
      },
    },
    fg: {
      value: {
        base: "{colors.zinc.800}",
        _dark: "{colors.zinc.200}",
      },
    },
    subtle: {
      value: {
        base: "{colors.zinc.100}",
        _dark: "{colors.zinc.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.zinc.200}",
        _dark: "{colors.zinc.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.zinc.900}",
        _dark: "{colors.white}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.zinc.400}",
        _dark: "{colors.zinc.400}",
      },
    },
    border: {
      value: {
        base: "{colors.zinc.200}",
        _dark: "{colors.zinc.800}",
      },
    },
  },
  slate: {
    contrast: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.black}",
      },
    },
    fg: {
      value: {
        base: "{colors.slate.800}",
        _dark: "{colors.slate.200}",
      },
    },
    subtle: {
      value: {
        base: "{colors.slate.100}",
        _dark: "{colors.slate.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.slate.200}",
        _dark: "{colors.slate.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.slate.900}",
        _dark: "{colors.white}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.slate.400}",
        _dark: "{colors.slate.400}",
      },
    },
    border: {
      value: {
        base: "{colors.slate.200}",
        _dark: "{colors.slate.800}",
      },
    },
  },
  red: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.red.700}",
        _dark: "{colors.red.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.red.100}",
        _dark: "{colors.red.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.red.200}",
        _dark: "{colors.red.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.red.600}",
        _dark: "{colors.red.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.red.500}",
        _dark: "{colors.red.500}",
      },
    },
    border: {
      value: {
        base: "{colors.red.500}",
        _dark: "{colors.red.400}",
      },
    },
  },
  orange: {
    contrast: {
      value: {
        base: "white",
        _dark: "black",
      },
    },
    fg: {
      value: {
        base: "{colors.orange.700}",
        _dark: "{colors.orange.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.orange.100}",
        _dark: "{colors.orange.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.orange.200}",
        _dark: "{colors.orange.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.orange.600}",
        _dark: "{colors.orange.500}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.orange.500}",
        _dark: "{colors.orange.500}",
      },
    },
    border: {
      value: {
        base: "{colors.orange.500}",
        _dark: "{colors.orange.400}",
      },
    },
  },
  amber: {
    contrast: {
      value: {
        base: "white",
        _dark: "black",
      },
    },
    fg: {
      value: {
        base: "{colors.amber.700}",
        _dark: "{colors.amber.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.amber.100}",
        _dark: "{colors.amber.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.amber.200}",
        _dark: "{colors.amber.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.amber.600}",
        _dark: "{colors.amber.500}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.amber.500}",
        _dark: "{colors.amber.500}",
      },
    },
    border: {
      value: {
        base: "{colors.amber.500}",
        _dark: "{colors.amber.400}",
      },
    },
  },
  green: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.green.700}",
        _dark: "{colors.green.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.green.100}",
        _dark: "{colors.green.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.green.200}",
        _dark: "{colors.green.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.green.600}",
        _dark: "{colors.green.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.green.500}",
        _dark: "{colors.green.500}",
      },
    },
    border: {
      value: {
        base: "{colors.green.500}",
        _dark: "{colors.green.400}",
      },
    },
  },
  lime: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.lime.700}",
        _dark: "{colors.lime.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.lime.100}",
        _dark: "{colors.lime.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.lime.200}",
        _dark: "{colors.lime.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.lime.600}",
        _dark: "{colors.lime.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.lime.500}",
        _dark: "{colors.lime.500}",
      },
    },
    border: {
      value: {
        base: "{colors.lime.500}",
        _dark: "{colors.lime.400}",
      },
    },
  },
  blue: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.blue.700}",
        _dark: "{colors.blue.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.blue.100}",
        _dark: "{colors.blue.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.blue.200}",
        _dark: "{colors.blue.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.blue.600}",
        _dark: "{colors.blue.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.blue.500}",
        _dark: "{colors.blue.500}",
      },
    },
    border: {
      value: {
        base: "{colors.blue.500}",
        _dark: "{colors.blue.400}",
      },
    },
  },
  indigo: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.indigo.700}",
        _dark: "{colors.indigo.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.indigo.100}",
        _dark: "{colors.indigo.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.indigo.200}",
        _dark: "{colors.indigo.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.indigo.600}",
        _dark: "{colors.indigo.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.indigo.500}",
        _dark: "{colors.indigo.500}",
      },
    },
    border: {
      value: {
        base: "{colors.indigo.500}",
        _dark: "{colors.indigo.400}",
      },
    },
  },
  yellow: {
    contrast: {
      value: {
        base: "black",
        _dark: "black",
      },
    },
    fg: {
      value: {
        base: "{colors.yellow.800}",
        _dark: "{colors.yellow.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.yellow.100}",
        _dark: "{colors.yellow.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.yellow.200}",
        _dark: "{colors.yellow.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.yellow.300}",
        _dark: "{colors.yellow.300}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.yellow.500}",
        _dark: "{colors.yellow.500}",
      },
    },
    border: {
      value: {
        base: "{colors.yellow.500}",
        _dark: "{colors.yellow.500}",
      },
    },
  },
  teal: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.teal.700}",
        _dark: "{colors.teal.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.teal.100}",
        _dark: "{colors.teal.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.teal.200}",
        _dark: "{colors.teal.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.teal.600}",
        _dark: "{colors.teal.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.teal.500}",
        _dark: "{colors.teal.500}",
      },
    },
    border: {
      value: {
        base: "{colors.teal.500}",
        _dark: "{colors.teal.400}",
      },
    },
  },
  emerald: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.emerald.700}",
        _dark: "{colors.emerald.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.emerald.100}",
        _dark: "{colors.emerald.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.emerald.200}",
        _dark: "{colors.emerald.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.emerald.600}",
        _dark: "{colors.emerald.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.emerald.500}",
        _dark: "{colors.emerald.500}",
      },
    },
    border: {
      value: {
        base: "{colors.emerald.500}",
        _dark: "{colors.emerald.400}",
      },
    },
  },
  purple: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.purple.700}",
        _dark: "{colors.purple.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.purple.100}",
        _dark: "{colors.purple.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.purple.200}",
        _dark: "{colors.purple.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.purple.600}",
        _dark: "{colors.purple.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.purple.500}",
        _dark: "{colors.purple.500}",
      },
    },
    border: {
      value: {
        base: "{colors.purple.500}",
        _dark: "{colors.purple.400}",
      },
    },
  },
  fuchsia: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.fuchsia.700}",
        _dark: "{colors.fuchsia.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.fuchsia.100}",
        _dark: "{colors.fuchsia.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.fuchsia.200}",
        _dark: "{colors.fuchsia.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.fuchsia.600}",
        _dark: "{colors.fuchsia.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.fuchsia.500}",
        _dark: "{colors.fuchsia.500}",
      },
    },
    border: {
      value: {
        base: "{colors.fuchsia.500}",
        _dark: "{colors.fuchsia.400}",
      },
    },
  },
  violet: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.violet.700}",
        _dark: "{colors.violet.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.violet.100}",
        _dark: "{colors.violet.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.violet.200}",
        _dark: "{colors.violet.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.violet.600}",
        _dark: "{colors.violet.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.violet.500}",
        _dark: "{colors.violet.500}",
      },
    },
    border: {
      value: {
        base: "{colors.violet.500}",
        _dark: "{colors.violet.400}",
      },
    },
  },
  pink: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.pink.700}",
        _dark: "{colors.pink.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.pink.100}",
        _dark: "{colors.pink.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.pink.200}",
        _dark: "{colors.pink.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.pink.600}",
        _dark: "{colors.pink.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.pink.500}",
        _dark: "{colors.pink.500}",
      },
    },
    border: {
      value: {
        base: "{colors.pink.500}",
        _dark: "{colors.pink.400}",
      },
    },
  },
  rose: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.rose.700}",
        _dark: "{colors.rose.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.rose.100}",
        _dark: "{colors.rose.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.rose.200}",
        _dark: "{colors.rose.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.rose.600}",
        _dark: "{colors.rose.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.rose.500}",
        _dark: "{colors.rose.500}",
      },
    },
    border: {
      value: {
        base: "{colors.rose.500}",
        _dark: "{colors.rose.400}",
      },
    },
  },
  sky: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.sky.700}",
        _dark: "{colors.sky.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.sky.100}",
        _dark: "{colors.sky.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.sky.200}",
        _dark: "{colors.sky.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.sky.600}",
        _dark: "{colors.sky.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.sky.500}",
        _dark: "{colors.sky.500}",
      },
    },
    border: {
      value: {
        base: "{colors.sky.500}",
        _dark: "{colors.sky.400}",
      },
    },
  },
  cyan: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.cyan.700}",
        _dark: "{colors.cyan.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.cyan.100}",
        _dark: "{colors.cyan.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.cyan.200}",
        _dark: "{colors.cyan.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.cyan.600}",
        _dark: "{colors.cyan.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.cyan.500}",
        _dark: "{colors.cyan.500}",
      },
    },
    border: {
      value: {
        base: "{colors.cyan.500}",
        _dark: "{colors.cyan.400}",
      },
    },
  },

  // Abstract colors
  primary: {
    contrast: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.black}",
      },
    },
    fg: {
      value: {
        base: "{colors.slate.800}",
        _dark: "{colors.slate.200}",
      },
    },
    subtle: {
      value: {
        base: "{colors.slate.100}",
        _dark: "{colors.slate.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.slate.200}",
        _dark: "{colors.slate.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.slate.900}",
        _dark: "{colors.white}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.slate.400}",
        _dark: "{colors.slate.400}",
      },
    },
    border: {
      value: {
        base: "{colors.slate.200}",
        _dark: "{colors.slate.800}",
      },
    },
  },
  success: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.emerald.700}",
        _dark: "{colors.emerald.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.emerald.100}",
        _dark: "{colors.emerald.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.emerald.200}",
        _dark: "{colors.emerald.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.emerald.600}",
        _dark: "{colors.emerald.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.emerald.500}",
        _dark: "{colors.emerald.500}",
      },
    },
    border: {
      value: {
        base: "{colors.emerald.500}",
        _dark: "{colors.emerald.400}",
      },
    },
  },
  error: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.red.700}",
        _dark: "{colors.red.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.red.100}",
        _dark: "{colors.red.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.red.200}",
        _dark: "{colors.red.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.red.600}",
        _dark: "{colors.red.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.red.500}",
        _dark: "{colors.red.500}",
      },
    },
    border: {
      value: {
        base: "{colors.red.500}",
        _dark: "{colors.red.400}",
      },
    },
  },
  warning: {
    contrast: {
      value: {
        base: "white",
        _dark: "black",
      },
    },
    fg: {
      value: {
        base: "{colors.orange.700}",
        _dark: "{colors.orange.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.orange.100}",
        _dark: "{colors.orange.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.orange.200}",
        _dark: "{colors.orange.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.orange.600}",
        _dark: "{colors.orange.500}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.orange.500}",
        _dark: "{colors.orange.500}",
      },
    },
    border: {
      value: {
        base: "{colors.orange.500}",
        _dark: "{colors.orange.400}",
      },
    },
  },
  info: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.blue.700}",
        _dark: "{colors.blue.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.blue.100}",
        _dark: "{colors.blue.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.blue.200}",
        _dark: "{colors.blue.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.blue.600}",
        _dark: "{colors.blue.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.blue.500}",
        _dark: "{colors.blue.500}",
      },
    },
    border: {
      value: {
        base: "{colors.blue.500}",
        _dark: "{colors.blue.400}",
      },
    },
  },
  grayscale: {
    contrast: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.black}",
      },
    },
    fg: {
      value: {
        base: "{colors.gray.800}",
        _dark: "{colors.gray.200}",
      },
    },
    subtle: {
      value: {
        base: "{colors.gray.100}",
        _dark: "{colors.gray.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.gray.200}",
        _dark: "{colors.gray.800}",
      },
    },
    solid: {
      value: {
        base: "{colors.gray.900}",
        _dark: "{colors.white}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.gray.400}",
        _dark: "{colors.gray.400}",
      },
    },
    border: {
      value: {
        base: "{colors.gray.200}",
        _dark: "{colors.gray.800}",
      },
    },
  },
});
