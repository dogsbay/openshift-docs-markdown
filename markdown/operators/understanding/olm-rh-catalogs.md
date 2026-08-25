---
title: Red Hat-provided Operator catalogs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Red Hat-provided Operator catalogs {id="olm-rh-catalogs"}
{%- set context = "olm-rh-catalogs" %}

Red Hat provides several Operator catalogs that are included with {{ product_title }} by default. {._abstract}


:::important

As of {{ product_title }} 4.11, the default Red Hat-provided Operator catalog releases in the file-based catalog format. The default Red Hat-provided Operator catalogs for {{ product_title }} 4.6 through 4.10 released in the deprecated SQLite database format.

The `opm` subcommands, flags, and functionality related to the SQLite database format are also deprecated and will be removed in a future release. The features are still supported and must be used for catalogs that use the deprecated SQLite database format.

Many of the `opm` subcommands and flags for working with the SQLite database format, such as `opm index prune`, do not work with the file-based catalog format.
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
For more information about working with file-based catalogs, see "Managing custom catalogs", "Operator Framework packaging format", and "Mirroring images for a disconnected installation using the oc-mirror plugin".
{%- endif %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
For more information about working with file-based catalogs, see "Managing custom catalogs" and "Operator Framework packaging format documentation".
{%- endif %}

:::


{% leveloffset +1 %}{% include "./modules/olm-about-catalogs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Managing custom catalogs](/operators/admin/olm-managing-custom-catalogs#olm-managing-custom-catalogs)
*   [Packaging format](/operators/understanding/olm-packaging-format#olm-file-based-catalogs_olm-packaging-format)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Mirroring images for a disconnected installation using the oc-mirror plugin](/disconnected/installing-mirroring-disconnected#installing-mirroring-disconnected)
*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
{%- endif %}

{% leveloffset +1 %}{% include "./modules/olm-rh-catalogs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Community Operators (GitHub)](https://github.com/redhat-openshift-ecosystem/community-operators-prod/tree/main/operators)