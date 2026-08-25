---
title: Managing catalogs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing catalogs {id="managing-catalogs"}
{%- set context = "managing-catalogs" %}

Cluster administrators can add _catalogs_, or curated collections of Operators and Kubernetes extensions, to their clusters. Operator authors publish their products to these catalogs. {._abstract}

When you add a catalog to your cluster, you have access to the versions, patches, and over-the-air updates of the Operators and extensions that are published to the catalog.

You can manage catalogs and extensions declaratively from the CLI by using custom resources (CRs).

_File-based catalogs_ are the latest iteration of the catalog format in Operator Lifecycle Manager (OLM). It is a plain text-based (JSON or YAML) and declarative config evolution of the earlier SQLite database format, and it is fully compatible with earlier versions.


:::important

Kubernetes periodically deprecates certain APIs that are removed in subsequent releases. As a result, Operators are unable to use removed APIs starting with the version of {{ product_title }} that uses the Kubernetes version that removed the API.

:::


{% leveloffset +1 %}{% include "./modules/olmv1-about-catalogs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [File-based catalogs](/extensions/catalogs/fbc#fbc)

{% leveloffset +1 %}{% include "./modules/olmv1-red-hat-catalogs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-adding-a-catalog.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-deleting-catalog.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-disabling-a-default-catalog.md" %}{% endleveloffset %}