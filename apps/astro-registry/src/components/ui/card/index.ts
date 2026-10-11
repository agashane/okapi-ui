import { default as Card } from "./card.astro";
import { default as CardHeader } from "./card-header.astro";
import { default as CardBody } from "./card-body.astro";
import { default as CardFooter } from "./card-footer.astro";
import { card, type CardVariantProps } from "#styled-system/recipes/card";

export {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  card,
  type CardVariantProps,

  //
  Card as Root,
  CardHeader as Header,
  CardBody as Body,
  CardFooter as Footer,
};
