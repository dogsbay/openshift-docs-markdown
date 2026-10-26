/**
 * Resolve an icon name for Alert and CollapsibleAlert.
 *
 * The same names as Icon.astro and dogsbay-ssg (`@dogsbay/icons` resolveIcon):
 *   - `pack:name` — e.g. "lucide:rocket", "material:check-circle", "simple:github"
 *   - a bare name — an emoji shortcode first ("rocket" → 🚀), then a Lucide icon ("compass")
 *
 * Returns an inline SVG string or a span with the emoji character. Returns
 * null when the name can't be resolved (caller should fall back to the
 * variant's default icon).
 */
import { resolveIcon as resolveName } from "@dogsbay/icons";

export function resolveIcon(shortcode: string): string | null {
  const resolved = resolveName(shortcode);
  if (!resolved) return null;

  // Emoji resolve to Unicode characters; wrap for consistent sizing/positioning
  // with the SVG icons in the Alert layout.
  if (!resolved.startsWith("<")) {
    return `<span aria-hidden="true" style="font-size:1em;line-height:1;display:inline-block;width:1em;text-align:center;">${resolved}</span>`;
  }

  return resolved;
}
