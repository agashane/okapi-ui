import { defineConfig, fs, jsrepo, repository } from "jsrepo";

export default defineConfig({
  registry: {
    name: "@okapiui/astro",
    version: "0.0.1",
    items: [
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
    ],
    outputs: [repository()],

    excludeDeps: ["@pandacss/dev"],

    defaultPaths: {
      component: "src/lib/components",
      block: "src/lib/components/block",
      ui: "src/lib/components/ui",
    },
  },
  providers: [fs(), jsrepo()],

  // configure where stuff comes from here
  registries: ["fs://./"],
  paths: {
    component: "src/lib/components",
    block: "src/lib/components/block",
    ui: "src/lib/components/ui",
  },
  // configure where stuff goes here
});
