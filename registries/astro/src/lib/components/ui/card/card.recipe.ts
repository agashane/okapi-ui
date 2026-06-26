import { sva, type RecipeVariantProps } from "#styled-system/css";

export const card = sva({
  slots: ["root", "header", "body", "footer"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      borderRadius: "xl",
      borderWidth: "1px",
      borderColor: "gray.200",
      bg: "white",
      boxShadow: "sm",
      overflow: "hidden",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      gap: "1",
      borderBottomWidth: "1px",
      borderColor: "gray.200",
      px: "6",
      py: "4",
    },
    body: {
      px: "6",
      py: "4",
      flex: "1",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      borderTopWidth: "1px",
      borderColor: "gray.200",
      px: "6",
      py: "4",
    },
  },
});

export type CardVariants = RecipeVariantProps<typeof card>;
