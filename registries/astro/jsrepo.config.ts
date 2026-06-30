import { defineConfig, fs, jsrepo, repository, type RegistryItem } from "jsrepo";
import { bun } from "@jsrepo/bun";

export default defineConfig({
  registry: {
    name: "@okapi-ui/astro",
    version: "package",
    authors: ["Antoine-Glorieux Lukama"],
    bugs: "https://github.com/agashane/okapi-ui/issues",
    description: "",
    repository: "https://github.com/agashane/okapi-ui",
    homepage: "https://okapi-ui.pages.dev",
    tags: ["astro", "typescript", "okapi-ui", "components", "utilities", "pandacss"],
    items: [
      // Utils
      ...([
        {
          name: "utils",
          description: "",
          type: "lib",
          add: "on-init",
          files: [{ path: "src/lib/registry/utils/utils.ts" }],
        },
      ] satisfies RegistryItem[]),

      // Components
      ...([
        {
          name: "accordion",
          type: "ui",
          files: [{ path: "src/lib/registry/ui/accordion" }],
        },
        {
          name: "alert-dialog",
          type: "ui",
          files: [{ path: "src/lib/registry/ui/alert-dialog" }],
        },
        {
          name: "alert",
          type: "ui",
          files: [{ path: "src/lib/registry/ui/alert" }],
        },
        {
          name: "badge",
          type: "ui",
          files: [{ path: "src/lib/registry/ui/badge" }],
        },
        {
          name: "button",
          type: "ui",
          files: [{ path: "src/lib/registry/ui/button" }],
        },
        {
          name: "card",
          type: "ui",
          files: [{ path: "src/lib/registry/ui/card" }],
        },
        {
          name: "empty",
          type: "ui",
          files: [{ path: "src/lib/registry/ui/empty" }],
        },
        {
          name: "heading",
          type: "ui",
          files: [{ path: "src/lib/registry/ui/heading" }],
        },
        {
          name: "link",
          type: "ui",
          files: [{ path: "src/lib/registry/ui/link" }],
        },
        {
          name: "typography",
          type: "ui",
          files: [{ path: "src/lib/registry/ui/typography" }],
        },
      ] satisfies RegistryItem[]),

      // Blocks
      ...([] satisfies RegistryItem[]),
    ],
    outputs: [repository()],

    excludeDeps: ["@pandacss/dev", "astro"],

    defaultPaths: {
      component: "src/lib/components",
      block: "src/lib/components/block",
      ui: "src/lib/components/ui",
      lib: "src/lib",
      utils: "src/lib/utils",
    },
  },
  providers: [fs(), jsrepo()],

  // configure where stuff comes from here
  registries: ["fs://./"],
  paths: {
    component: 'src/lib/components',
    block: 'src/lib/components/block',
    ui: 'src/lib/components/ui',
    lib: 'src/lib',
    utils: 'src/lib/utils',
  },

  build: {
    remoteDependencyResolver: bun(),
  },
  // configure where stuff goes here
});
