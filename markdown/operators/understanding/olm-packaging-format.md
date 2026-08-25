---
title: Operator Framework packaging format
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Operator Framework packaging format {id="olm-packaging-format"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "olm-packaging-format" %}

You can use the Operator Framework packaging format to bundle and publish Operator metadata for Operator Lifecycle Manager (OLM) in {{ product_title }}. The format covers bundle images, dependencies, and file-based catalog schemas.

{% leveloffset +1 %}{% include "./modules/olm-bundle-format.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-bundle-format-manifests.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/olm-bundle-format-manifests-optional.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-bundle-format-annotations.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-dependencies.md" %}{% endleveloffset %}

**Additional resources**

*   [Operator Lifecycle Manager dependency resolution](/operators/understanding/olm/olm-understanding-dependency-resolution#olm-understanding-dependency-resolution)

{% leveloffset +2 %}{% include "./modules/olm-about-opm.md" %}{% endleveloffset %}
*   See [CLI tools](/cli_reference/opm/cli-opm-install#cli-opm-install) for steps on installing the `opm` CLI.

{% if openshift_origin %}
## Additional resources {id="olm-packaging-format-addtl-resources"}

*   [Operator Bundle Overview](https://github.com/operator-framework/operator-registry/blob/master/docs/design/operator-bundle.md)
*   [Operator Registry README](https://github.com/operator-framework/operator-registry/blob/master/README.md)
*   [Operator Registry Releases](https://github.com/operator-framework/operator-registry/releases)
{% endif %}

{% leveloffset +1 %}{% include "./modules/olm-fb-catalogs.md" %}{% endleveloffset %}

**Additional resources**

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Managing custom catalogs](/operators/admin/olm-managing-custom-catalogs#olm-managing-custom-catalogs-fb)
*   [Mirroring images for a disconnected installation using the oc-mirror plugin](/disconnected/installing-mirroring-disconnected#installing-mirroring-disconnected)
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   [Managing custom catalogs](/operators/admin/olm-managing-custom-catalogs#olm-managing-custom-catalogs-fb)
{% endif %}

{% leveloffset +2 %}{% include "./modules/olm-fb-catalogs-structure.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-fb-catalogs-schemas.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/olm-package-schema.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/olm-channel-schema.md" %}{% endleveloffset %}

**Additional resources**

*   [CUE language specification](https://cuelang.org/docs/references/spec/)

{% leveloffset +3 %}{% include "./modules/olm-bundle-schema.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/olm-deprecations-schema.md" %}{% endleveloffset %}

**Additional resources**

*   [Updating or filtering a file-based catalog image](/operators/admin/olm-managing-custom-catalogs#olm-filtering-fbc_olm-managing-custom-catalogs)

{% leveloffset +2 %}{% include "./modules/olm-fb-catalogs-prop.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-fb-catalogs-example.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-fb-catalogs-guidelines.md" %}{% endleveloffset %}

**Additional resources**

*   [Managing custom catalogs](/operators/admin/olm-managing-custom-catalogs#olm-creating-fb-catalog-image_olm-managing-custom-catalogs)
*   [CLI tools](/cli_reference/opm/cli-opm-ref#cli-opm-ref)

{% leveloffset +2 %}{% include "./modules/olm-fb-catalogs-automation.md" %}{% endleveloffset %}