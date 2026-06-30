import { default as AlertDialog } from "./alert-dialog.astro";
import { default as AlertDialogAction } from "./alert-dialog-action.astro";
import { default as AlertDialogCancel } from "./alert-dialog-cancel.astro";
import { default as AlertDialogContent } from "./alert-dialog-content.astro";
import { default as AlertDialogDescription } from "./alert-dialog-description.astro";
import { default as AlertDialogFooter } from "./alert-dialog-footer.astro";
import { default as AlertDialogHeader } from "./alert-dialog-header.astro";
import { default as AlertDialogOverlay } from "./alert-dialog-overlay.astro";
import { default as AlertDialogPortal } from "./alert-dialog-portal.astro";
import { default as AlertDialogTitle } from "./alert-dialog-title.astro";
import { default as AlertDialogTrigger } from "./alert-dialog-trigger.astro";
import { default as AlertDialogBody } from "./alert-dialog-body.astro";
import { default as AlertDialogClose } from "./alert-dialog-close.astro";
import { alertDialogRecipe } from "./alert-dialog.recipe";

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  alertDialogRecipe,

  //
  AlertDialog as Root,
  AlertDialogTrigger as Trigger,
  AlertDialogAction as Action,
  AlertDialogBody as Body,
  AlertDialogCancel as Cancel,
  AlertDialogClose as Close,
  AlertDialogContent as Content,
  AlertDialogDescription as Description,
  AlertDialogFooter as Footer,
  AlertDialogHeader as Header,
  AlertDialogOverlay as Overlay,
  AlertDialogPortal as Portal,
  AlertDialogTitle as Title,
};
