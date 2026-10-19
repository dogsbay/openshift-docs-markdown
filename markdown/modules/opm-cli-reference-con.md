{%- set _mod_docs_content_type = "CONCEPT" %}
# Use the opm CLI {id="opm-cli-reference_{{ context }}"}

The `opm` command-line interface (CLI) is a tool for creating and maintaining Operator catalogs. {._abstract}

```terminal title="opm CLI syntax"
$ opm <command> [<subcommand>] [<argument>] [<flags>]
```


:::warning

The `opm` CLI is not compatible with later versions. The version of the `opm` CLI used to generate catalog content must be earlier than or equal to the version used to serve the content on a cluster.

:::


**Global flags**

| Flag | Description |
| --- | --- |
| `-skip-tls-verify` | Skip TLS certificate verification for container image registries while pulling bundles or indexes. |
| `--use-http` | When you pull bundles, use plain HTTP for container image registries. |

{%- set FeatureName = "The SQLite-based catalog format, including the related CLI commands," %}
{% include "./snippets/deprecated-feature.md" %}
{%- set FeatureName = "" -%}