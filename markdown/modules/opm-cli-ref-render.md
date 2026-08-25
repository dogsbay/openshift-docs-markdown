{%- set _mod_docs_content_type = "REFERENCE" %}
# render {id="opm-cli-ref-render_{{ context }}"}

Generate a declarative config blob from the provided index images, bundle images, and SQLite database files.

```terminal title="Command syntax"
$ opm render <index_image | bundle_image | sqlite_file> [<flags>]
```

**`render` flags**

| Flag | Description |
| --- | --- |
| `-o`, `--output` (string) | Output format: `json` (the default value) or `yaml`. |