import { sva } from "#styled-system/css";

// TODO: Add animation
// TODO: Make bordered variant

export const accordionRecipe = sva({
  slots: ["root", "item", "content", "trigger", "triggerBody", "indicator"],
  base: {
    root: {
      display: "flex",
      flexDir: "column",
      w: "full",
      alignItems: "stretch",
    },
    item: {
      display: "flex",
      flexDir: "column",
      w: "full",
      alignItems: "stretch",

      "&[data-state=open] [data-slot=accordion-trigger-icon]": {
        transform: "rotate(45deg)",
      },
    },
    content: {
      overflow: "hidden",
    },
    trigger: {
      w: "full",
      display: "flex",
      flexDir: "row",
      gap: "2",
    },
    triggerBody: {
      flex: "1",
    },
    indicator: {
      "&[data-state=open]": {
        rotate: "45deg",
      },
    },
  },
});
