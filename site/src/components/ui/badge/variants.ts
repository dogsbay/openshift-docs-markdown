/**
 * Badge classes, shared by Badge.astro, ContentRenderer and @dogsbay/render-html
 * (which copies this file with scripts/sync-sources.mjs), so a badge
 * looks the same however a page is produced.
 */
export const BADGE_BASE =
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors";

export const BADGE_VARIANTS = {
  default: "border-transparent bg-primary text-primary-foreground",
  secondary: "border-transparent bg-secondary text-secondary-foreground",
  destructive: "border-transparent bg-destructive text-destructive-foreground",
  outline: "text-foreground",
  // Status colours, from the callout palette (`:badge[Beta]{variant="warning"}`).
  // The TEXT is the accent mixed 60% toward --foreground; the tint keeps the
  // accent at full strength. The accent used raw measured 1.85-2.6:1 in light
  // mode (danger 3.3-3.9:1 in dark too), from painted pixels. --foreground is
  // near-black in light and near-white in dark, so one rule serves both themes
  // (worst case 4.95:1); a fixed dark colour would fail dark mode. The same
  // rule as the in-cell admonitions in format-astro's theme-css.ts.
  // The `color:` hint is required: tailwind-merge 2.x (Badge.astro's tv())
  // reads a bare text-[... 60% ...] as a FONT SIZE and drops text-xs.
  // Checked per preset by @dogsbay/render-html tests/contrast.test.ts, and
  // through tv() by ui tests/badge.test.ts.
  info: "border-transparent bg-info/15 text-[color:color-mix(in_oklab,var(--info)_60%,var(--foreground))]",
  success: "border-transparent bg-success/15 text-[color:color-mix(in_oklab,var(--success)_60%,var(--foreground))]",
  warning: "border-transparent bg-warning/15 text-[color:color-mix(in_oklab,var(--warning)_60%,var(--foreground))]",
  danger: "border-transparent bg-danger/15 text-[color:color-mix(in_oklab,var(--danger)_60%,var(--foreground))]",
} as const;

export type BadgeVariant = keyof typeof BADGE_VARIANTS;

/** The class list for a variant; an unknown variant gets the base classes only. */
export function badgeClass(variant: string | undefined): string {
  // Own keys only: `toString` or `__proto__` must not read Object.prototype
  const key = variant ?? "default";
  const v = Object.prototype.hasOwnProperty.call(BADGE_VARIANTS, key) ? BADGE_VARIANTS[key as BadgeVariant] : undefined;
  return v ? `${BADGE_BASE} ${v}` : BADGE_BASE;
}
