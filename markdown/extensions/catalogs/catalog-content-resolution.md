---
title: Catalog content resolution
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Catalog content resolution {id="catalog-content-resolution"}
{%- set context = "catalog-content-resolution" %}

When you specify the cluster extension you want to install in a custom resource (CR), {{ olmv1_first }} uses catalog selection to resolve what content is installed.

You can perform the following actions to control the selection of catalog content:

*   Specify labels to select the catalog.
*   Use match expressions to perform complex filtering across catalogs.
*   Set catalog priority.

If you do not specify any catalog selection criteria, {{ olmv1_first }} selects an extension from any available catalog on the cluster that provides the requested package.

During resolution, bundles that are not deprecated are preferred over deprecated bundles by default.

{% leveloffset +1 %}{% include "./modules/olmv1-catalog-selection-by-name.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-catalog-selection-by-labels-or-expressions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-catalog-exclusion-by-labels-or-expressions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-catalog-selection-by-priority.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-troubleshooting-catalog-selection-errors.md" %}{% endleveloffset %}