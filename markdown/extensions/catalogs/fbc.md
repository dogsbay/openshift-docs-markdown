---
title: File-based catalogs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# File-based catalogs {id="fbc"}
{%- set context = "fbc" %}

{{ olmv1_first }} in {{ product_title }} supports _file-based catalogs_ for discovering and sourcing cluster extensions, including Operators, on a cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/olm-fb-catalogs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-fb-catalogs-structure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-fb-catalogs-schemas.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [CUE language specification](https://cuelang.org/docs/references/spec/)

{% leveloffset +2 %}{% include "./modules/olm-package-schema.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-channel-schema.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-bundle-schema.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-deprecations-schema.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Updating or filtering a file-based catalog image](/operators/admin/olm-managing-custom-catalogs#olm-filtering-fbc_olm-managing-custom-catalogs)

{% leveloffset +1 %}{% include "./modules/olm-fb-catalogs-prop.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-fb-catalogs-example.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-fb-catalogs-guidelines.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-fbc-cli.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Creating a file-based catalog image](/operators/admin/olm-managing-custom-catalogs#olm-creating-fb-catalog-image_olm-managing-custom-catalogs)
*   [opm CLI reference](/cli_reference/opm/cli-opm-ref#cli-opm-ref)

{% leveloffset +1 %}{% include "./modules/olm-fb-catalogs-automation.md" %}{% endleveloffset %}