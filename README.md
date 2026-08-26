# OpenShift docs — `enterprise-4.22` as Dogsbay MD

Generated. Do not edit by hand; the next sync overwrites everything.

| | |
|---|---|
| Upstream | [openshift/openshift-docs@`9ae174f`](https://github.com/openshift/openshift-docs/commit/9ae174f8eb6b0b36a3415116f27add4475b4c7b7) |
| Upstream branch | `enterprise-4.22` |
| Upstream commit date | 2026-08-26T11:19:27+01:00 |
| Distro filter | `openshift-enterprise` |
| Product version | 4.22 |
| Pages | 11885 |
| Converted by | dogsbay 0.2.0-beta.102 |

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
