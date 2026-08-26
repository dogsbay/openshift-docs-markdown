# OpenShift docs — `enterprise-4.22` as Dogsbay MD

Generated. Do not edit by hand; the next sync overwrites everything.

| | |
|---|---|
| Upstream | [openshift/openshift-docs@`f41be2c`](https://github.com/openshift/openshift-docs/commit/f41be2cf76ed3f1477c4626948eca9bf49bdf602) |
| Upstream branch | `enterprise-4.22` |
| Upstream commit date | 2026-08-26T15:57:15-05:00 |
| Distro filter | `openshift-enterprise` |
| Product version | 4.22 |
| Pages | 11904 |
| Converted by | dogsbay 0.2.0-beta.104 |

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
