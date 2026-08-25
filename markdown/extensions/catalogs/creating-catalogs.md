---
title: Creating catalogs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating catalogs {id="creating-catalogs"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "creating-catalogs" %}

Catalog maintainers can create new catalogs in the file-based catalog format for use with {{ olmv1_first }} on {{ product_title }}.

{% leveloffset +1 %}{% include "./modules/olm-creating-fb-catalog-image.md" %}{% endleveloffset %}

**Additional resources**

*   [`opm` CLI reference](/cli_reference/opm/cli-opm-ref#cli-opm-ref)

{% leveloffset +1 %}{% include "./modules/olm-filtering-fbc.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}

**Additional resources**

*   [Packaging format -> Schemas -> olm.deprecations schema](/operators/understanding/olm-packaging-format#olm-deprecations-schema_olm-packaging-format)
*   [Mirroring images for a disconnected installation using the oc-mirror plugin -> Keeping your mirror registry content updated](/disconnected/installing-mirroring-disconnected#updating-mirror-registry-content)
*   [Adding a catalog source to a cluster](/disconnected/using-olm#olm-creating-catalog-from-index_olm-restricted-networks)

{% endif %}