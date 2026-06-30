import { default as Accordion } from "./accordion.astro";
import { default as AccordionItem } from "./accordion-item.astro";
import { default as AccordionTrigger } from "./accordion-trigger.astro";
import { default as AccordionContent } from "./accordion-content.astro";
import { accordionRecipe } from "./accordion.recipe";

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  accordionRecipe,

  //
  Accordion as Root,
  AccordionItem as Item,
  AccordionTrigger as Trigger,
  AccordionContent as Content,
};
