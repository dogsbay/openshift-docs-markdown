---
title: opm CLI reference
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# opm CLI reference {id="cli-opm-ref"}
{%- set context = "cli-opm-ref" %}

The `opm` command-line interface (CLI) is a tool for creating and maintaining Operator catalogs.

```terminal title="opm CLI syntax"
$ opm <command> [<subcommand>] [<argument>] [<flags>]
```


:::warning

The `opm` CLI is not forward compatible. The version of the `opm` CLI used to generate catalog content must be earlier than or equal to the version used to serve the content on a cluster.

:::


**Global flags**

| Flag | Description |
| --- | --- |
| `-skip-tls-verify` | Skip TLS certificate verification for container image registries while pulling bundles or indexes. |
| `--use-http` | When you pull bundles, use plain HTTP for container image registries. |

{%- set FeatureName = "The SQLite-based catalog format, including the related CLI commands," %}
{% include "./snippets/deprecated-feature.md" %}

{% leveloffset +1 %}{% include "./modules/opm-cli-ref-generate.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/opm-cli-ref-index.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

**Additional resources**
{._additional-resources}

*   [Operator Framework packaging format](/operators/understanding/olm-packaging-format#olm-file-based-catalogs_olm-packaging-format)
*   [Managing custom catalogs](/operators/admin/olm-managing-custom-catalogs#olm-managing-custom-catalogs-fb)
*   [Mirroring images for a disconnected installation using the oc-mirror plugin](/disconnected/installing-mirroring-disconnected#installing-mirroring-disconnected)
{% endif %}

{% leveloffset +1 %}{% include "./modules/opm-cli-ref-init.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/opm-cli-ref-migrate.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/opm-cli-ref-render.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/opm-cli-ref-serve.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/opm-cli-ref-validate.md" %}{% endleveloffset %}