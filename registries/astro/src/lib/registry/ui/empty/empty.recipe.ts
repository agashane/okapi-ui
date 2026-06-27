import { sva, type RecipeVariantProps } from "#styled-system/css";

export const emptyVariants = sva({
  slots: ["root", "header", "content", "title", "description", "media"],
  base: {
    root: {
      display: "flex",
      flex: "1",
      w: "full",
      flexDir: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "4",
      py: "8",
      px: "4",
      textAlign: "center",
    },
    header: {
      display: "flex",
      flexDir: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "2",
    },
    content: {
      display: "flex",
      flexDir: { base: "column", sm: "row" },
      alignItems: "center",
      justifyContent: "center",
      gap: "2",
    },
    title: {},
    description: {},
    media: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
});

export type EmptyVariants = RecipeVariantProps<typeof emptyVariants>;
