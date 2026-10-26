# OpenShift docs — `enterprise-4.22` as Dogsbay MD

Generated. Do not edit by hand; the next sync overwrites everything.

| | |
|---|---|
| Upstream | [openshift/openshift-docs@`75eff769`](https://github.com/openshift/openshift-docs/commit/75eff7691c1e4e9b478121696fd38bdb84316855) |
| Upstream branch | `enterprise-4.22` |
| Upstream commit date | 2026-10-26T16:13:17+05:30 |
| Distro filter | `openshift-enterprise` |
| Product version | 4.22 |
| Pages | 13510 |
| Converted by | dogsbay 0.2.0-beta.136 |

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
