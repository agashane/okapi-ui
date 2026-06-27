import { defineConfig, fs, jsrepo, repository } from "jsrepo";
import { bun } from "@jsrepo/bun";

export default defineConfig({
  registry: {
    name: "@okapi-ui/astro",
    version: "0.0.1",
    items: [
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
    component: 'src/lib/components',
    block: 'src/lib/components/block',
    ui: 'src/lib/components/ui',
  },

  build: {
    remoteDependencyResolver: bun(),
  },
  // configure where stuff goes here
});
