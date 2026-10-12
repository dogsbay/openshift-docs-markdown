# OpenShift docs — `enterprise-4.22` as Dogsbay MD

Generated. Do not edit by hand; the next sync overwrites everything.

| | |
|---|---|
| Upstream | [openshift/openshift-docs@`7f3d60a`](https://github.com/openshift/openshift-docs/commit/7f3d60ac533e96179c089fd1fd92a78dde34a696) |
| Upstream branch | `enterprise-4.22` |
| Upstream commit date | 2026-10-12T16:35:21+05:30 |
| Distro filter | `openshift-enterprise` |
| Product version | 4.22 |
| Pages | 12977 |
| Converted by | dogsbay 0.2.0-beta.115 |

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
