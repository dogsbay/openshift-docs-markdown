# OpenShift docs — `enterprise-4.22` as Dogsbay MD

Generated. Do not edit by hand; the next sync overwrites everything.

| | |
|---|---|
| Upstream | [openshift/openshift-docs@`03c70dd`](https://github.com/openshift/openshift-docs/commit/03c70dd9efc47350ccf2758d4ffc3bbef929552d) |
| Upstream branch | `enterprise-4.22` |
| Upstream commit date | 2026-08-25T13:11:25+01:00 |
| Distro filter | `openshift-enterprise` |
| Product version | 4.22 |
| Pages | 11854 |
| Converted by | dogsbay 0.2.0-beta.93 |

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
