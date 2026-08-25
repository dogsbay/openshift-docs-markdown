# OpenShift docs — `enterprise-4.22` as Dogsbay MD

Generated. Do not edit by hand; the next sync overwrites everything.

| | |
|---|---|
| Upstream | [openshift/openshift-docs@`99cc637`](https://github.com/openshift/openshift-docs/commit/99cc6370b787d95e006821fe745c35c33bca9087) |
| Upstream branch | `enterprise-4.22` |
| Upstream commit date | 2026-08-25T12:45:25-04:00 |
| Distro filter | `openshift-enterprise` |
| Product version | 4.22 |
| Pages | 11884 |
| Converted by | dogsbay 0.2.0-beta.101 |

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
