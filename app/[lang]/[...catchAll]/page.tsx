import { notFound } from "next/navigation";

/**
 * Catches any path under /[lang]/... that doesn't match a real route, so it
 * renders within the normal [lang] layout tree and correctly triggers the
 * sibling not-found.tsx — without this, an unmatched sub-path falls through
 * to Next's generic, unstyled, unlocalized default 404 instead.
 */
export default function CatchAll(): never {
  notFound();
}
