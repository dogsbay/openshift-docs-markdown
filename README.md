# openshift-docs-markdown

OpenShift's documentation, converted from AsciiDoc to **Dogsbay MD**, one
branch per upstream version.

This branch (`main`) holds only the workflow. **The content lives on version
branches.**

| Branch | Upstream | Distro |
|---|---|---|
| [`enterprise-4.22`](../../tree/enterprise-4.22) | [openshift/openshift-docs@enterprise-4.22](https://github.com/openshift/openshift-docs/tree/enterprise-4.22) | `openshift-enterprise` |

More versions later — the workflow takes the upstream branch as an input, and
every `enterprise-*` ref works today.

## What this is for

A real corpus, converted repeatedly, with history. Three things fall out of
that which a one-shot conversion cannot give you:

- **`git log content/` is a changelog** of what upstream changed and what the
  converter did with it — the input a docs diff or a version-to-version
  summary needs.
- **Regressions are visible.** A converter change that quietly drops a
  construct shows up as a deletion diff across thousands of files rather than
  as nothing at all.
- **It is a migration people can read** without running anything.

## How it runs

Two workflows, both on `main`, both taking the branch as an input.

**1. Sync upstream AsciiDoc → Dogsbay MD** — shallow-clones upstream,
converts, and commits `markdown/` to the branch of the same name here,
preserving that branch's history. Also weekly, Mondays 05:00 UTC, for
`enterprise-4.22`.

**2. Build Astro site** — reads that branch's `markdown/` and commits the
generated Astro project as `site/`.

They are separate so the two halves fail independently: a converter problem
and a site-generation problem have different causes and different fixes, and
folding them into one job makes the markdown hostage to the site building.

Both share a concurrency group keyed on the branch, because both push to it.

They are dispatch-only rather than chained. A `push` trigger would need this
file on every content branch — GitHub reads workflows from the branch that
was pushed — and one workflow per version is worse than one input.

```
dogsbay migrate-asciidoc <upstream> -o out --force \
  --distro openshift-enterprise \
  -a product_title="OpenShift Container Platform" \
  -a product_version=4.22 \
  -a openshift_enterprise=true
```

The attributes are not decoration. OpenShift's AsciiDoc is dense with
`ifdef::openshift-enterprise[]` conditionals and `{product-version}`
references; without them the conditionals survive unresolved into the output
instead of being baked. This is also why the pipeline uses `migrate-asciidoc`
rather than `dogsbay convert` — `convert` has no `--attribute`.

## What lands on a content branch

```
markdown/            the Dogsbay MD, plus nav.yml and _assets/images/
site/                generated Astro project (.astro sources)
  dist/              gitignored — derived, and not built here yet
dogsbay.config.yml   sources: ./markdown, output: ./site
MIGRATION.md         what survived conversion and what did not
README.md            the upstream commit this was built from
```

`site/` is the Astro **project**, not a built site. Nothing here runs `astro
build`, so nothing here proves the pages compile — that check arrives with
the GitHub Pages deploy, which is deliberately not wired up yet. Until then
the only claim being made is "the project generated".

The generated project is committed on purpose, so the output is readable on
GitHub and a converter or generator change shows up as a diff. `dist/` is
not: it is fully derived and would not diff usefully.

## Measured on `enterprise-4.22`

From a full local run before the workflow was written:

| | |
|---|---|
| Markdown files | 11,819 (1,796 pages + 10,023 include fragments) |
| Upstream `.adoc` | 20,797 files, 77.3 MB |
| Converted `.md` | **40.7 MB** — about half the source |
| Images (`_assets`) | 677 files, 62.6 MB |
| Remote includes inlined | 33 fragments, 72 URLs |
| Largest file | 4.4 MB — well inside GitHub's limits |

Sizes are real byte counts. `du` rounds every file up to a 4 KB block,
which across 11,819 files reports the markdown as 68 MB — nearly
double. Measure this corpus with `find -printf '%s'`, not `du`.

Markdown coming out smaller than the AsciiDoc going in is expected:
markdown is terser, and the distro filter drops the ~9,000 source files
belonging to `osd` / `rosa` / `ms`. Nothing is duplicated — includes are
preserved as references (13,475 of them), so each module's content is
stored once and the assemblies point at it rather than inlining it.

Images are 60% of the repo and are binary, so they do not diff. That is
a one-time cost on a branch's first commit; unchanged images are the
same blob on every later sync.

### Two things the workflow handles deliberately

**Symlinks are stripped.** AsciiBinder plants self-referential links
(`modules/modules -> ../../../modules/`) so `include::` resolves at any depth,
plus per-directory `images` links. After conversion, 335 dangle and 3 resolve
*outside* the content root. Includes are already realized into the markdown
and images moved to `_assets/images/`, so nothing references them — verified:
every image ref in the output is content-rooted and no file uses a relative
`images/` path.

**Upstream deletions propagate.** Each sync removes `content/` before copying,
so a page deleted upstream disappears here. Copying over the top would leave
removed pages behind forever, and a mirror that only ever grows is not a
mirror.

A run producing fewer than 2,000 pages fails instead of committing what would
look like a mass deletion.

## Caveats

- Conversion is lossy at the edges. `MIGRATION.md` on each content branch is
  the report; read it before treating the output as complete.
- `include::` directives with `lines=` or `indent=` are not supported and warn
  during conversion.
- One distro (`openshift-enterprise`) and one version so far. The other
  `_topic_maps/` distros (`osd`, `rosa`, `rosa_hcp`, `ms`) are untried here.
