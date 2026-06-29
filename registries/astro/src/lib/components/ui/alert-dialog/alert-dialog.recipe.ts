import { sva } from "#styled-system/css";

export const alertDialogRecipe = sva({
  slots: ["root", "overlay", "content", "title", "description", "header", "footer", "portal"],
  base: {},
});
