# OpenShift docs — `enterprise-4.22` as Dogsbay MD

Generated. Do not edit by hand; the next sync overwrites everything.

| | |
|---|---|
| Upstream | [openshift/openshift-docs@`e017097`](https://github.com/openshift/openshift-docs/commit/e0170978b980bb8a2c061894e81d33a6a9c98131) |
| Upstream branch | `enterprise-4.22` |
| Upstream commit date | 2026-08-31T10:46:14+01:00 |
| Distro filter | `openshift-enterprise` |
| Product version | 4.22 |
| Pages | 11912 |
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
