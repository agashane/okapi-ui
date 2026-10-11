import Navbar from "./navbar.astro";
import NavbarStart from "./navbar-start.astro";
import NavbarContent from "./navbar-content.astro";
import NavbarEnd from "./navbar-end.astro";
import { navbar, type NavbarVariantProps } from "#styled-system/recipes/navbar";

export {
  Navbar,
  NavbarStart,
  NavbarContent,
  NavbarEnd,
  navbar,
  type NavbarVariantProps,

  //
  Navbar as Root,
  NavbarStart as Start,
  NavbarContent as Content,
  NavbarEnd as End,
};
