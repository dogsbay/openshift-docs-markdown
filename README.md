# OpenShift docs — `enterprise-4.22` as Dogsbay MD

Generated. Do not edit by hand; the next sync overwrites everything.

| | |
|---|---|
| Upstream | [openshift/openshift-docs@`e68b5ad`](https://github.com/openshift/openshift-docs/commit/e68b5adb38c761190b9deaca8b3bde7d13d24a90) |
| Upstream branch | `enterprise-4.22` |
| Upstream commit date | 2026-09-07T10:24:04+01:00 |
| Distro filter | `openshift-enterprise` |
| Product version | 4.22 |
| Pages | 12046 |
| Converted by | dogsbay 0.2.0-beta.112 |

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
