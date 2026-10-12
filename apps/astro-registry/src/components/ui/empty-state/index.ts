import { default as Empty } from "./empty.astro";
import { default as EmptyHeader } from "./empty-header.astro";
import { default as EmptyContent } from "./empty-content.astro";
import { default as EmptyMedia } from "./empty-media.astro";
import { default as EmptyTitle } from "./empty-title.astro";
import { default as EmptyDescription } from "./empty-description.astro";
import {
  emptyState,
  type EmptyStateVariantProps,
} from "#styled-system/recipes/empty-state";

export {
  Empty,
  EmptyHeader,
  EmptyContent,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  emptyState,
  type EmptyStateVariantProps,

  //
  Empty as Root,
  EmptyHeader as Header,
  EmptyContent as Content,
  EmptyMedia as Media,
  EmptyTitle as Title,
  EmptyDescription as Description,
};
