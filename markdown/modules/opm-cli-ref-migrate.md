{%- set _mod_docs_content_type = "REFERENCE" %}
# migrate {id="opm-cli-ref-migrate_{{ context }}"}

Migrate a SQLite database format index image or database file to a file-based catalog.

{%- set FeatureName = "The SQLite-based catalog format, including the related CLI commands," %}
{% include "./snippets/deprecated-feature.md" %}

```terminal title="Command syntax"
$ opm migrate <index_ref> <output_dir> [<flags>]
```

**`migrate` flags**

| Flag | Description |
| --- | --- |
| `-o`, `--output` (string) | Output format: `json` (the default value) or `yaml`. |