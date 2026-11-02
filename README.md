# OpenShift docs — `enterprise-4.22` as Dogsbay MD

Generated. Do not edit by hand; the next sync overwrites everything.

| | |
|---|---|
| Upstream | [openshift/openshift-docs@`ddc50703`](https://github.com/openshift/openshift-docs/commit/ddc507039aa71e6c2a878208d5792e1534460261) |
| Upstream branch | `enterprise-4.22` |
| Upstream commit date | 2026-10-30T13:42:29-04:00 |
| Distro filter | `openshift-enterprise` |
| Product version | 4.22 |
| Pages | 13631 |
| Converted by | dogsbay 0.2.0-beta.156 |

`MIGRATION.md` reports what survived conversion and what did not.

## Layout

| | |
|---|---|
| `markdown/` | the Dogsbay MD, plus `nav.yml` and `_assets/images/` |
| `site/` | generated Astro project — built by **Build Astro site** |
| `dogsbay.config.yml` | points at `./markdown`, outputs to `./site` |

Regenerate from the [`main`](../../tree/main) branch:
Actions → **1. Convert AsciiDoc → Markdown**, then
**2. Build HTML site**. Both take this branch as an input.
