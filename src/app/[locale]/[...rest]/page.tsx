import { notFound } from "next/navigation";

/* Catch-all so any unmatched path under a valid locale renders the branded,
   localized [locale]/not-found inside the full layout (instead of Next's
   default bare 404). */
export default function CatchAllNotFound() {
  notFound();
}
