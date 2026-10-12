import { defineSlotRecipe } from "@pandacss/dev";
import type { SlotRecipeConfig } from "@pandacss/types";

export const breadcrumbSlotRecipe: SlotRecipeConfig = defineSlotRecipe({
  className: "breadcrumb",
  slots: [
    "root",
    "item",
    "link",
    "separator",
    "currentLink",
    "list",
    "ellipsis",
  ],
  base: {
    root: {
      px: "1",
      fontSize: "sm",
      color: "colorPalette.600",
      colorPalette: "grayscale",
    },
    list: {
      display: "flex",
      flexDir: "row",
      alignItems: "center",
      gap: "1.5",
      flexWrap: "wrap",
      wordBreak: "break-word",
      sm: { gap: "2.5" },
    },
    item: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1.5",
    },
    link: {
      _hover: {
        colorPalette: "primary",
        color: "colorPalette.fg",
        transition: "colors",
      },
    },
    separator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& > svg": {
        boxSize: "4",
      },
    },
    ellipsis: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& > svg": {
        boxSize: "4",
      },
    },
    currentLink: { fontWeight: "semibold" },
  },
});
