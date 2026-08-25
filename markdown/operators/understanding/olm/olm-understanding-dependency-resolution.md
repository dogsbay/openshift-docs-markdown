---
title: Operator Lifecycle Manager dependency resolution
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Operator Lifecycle Manager dependency resolution {id="olm-understanding-dependency-resolution"}
{%- set context = "olm-understanding-dependency-resolution" %}

To keep installed Operators compatible with each other, Operator Lifecycle Manager (OLM) resolves dependencies and manages custom resource definition (CRD) upgrades in {{ product_title }}. {._abstract}

{% leveloffset +1 %}{% include "./modules/olm-dependency-resolution-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-properties.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Common Expression Language (CEL) constraints](/operators/understanding/olm/olm-understanding-dependency-resolution#olm-cel_olm-understanding-dependency-resolution)

{% leveloffset +1 %}{% include "./modules/olm-dependencies.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-generic-constraints.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Common Expression Language (CEL)](https://github.com/google/cel-go)

{% leveloffset +1 %}{% include "./modules/olm-dependency-resolution-preferences.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Catalog health requirements](/operators/understanding/olm/olm-understanding-olm#olm-cs-health_olm-understanding-olm)

{% leveloffset +1 %}{% include "./modules/olm-dependency-resolution-crd-upgrades.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-dependencies-best-practices.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Changing the API (Kubernetes documentation)](https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api_changes.md#readme)

{% leveloffset +1 %}{% include "./modules/olm-dependencies-caveats.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-dependency-resolution-examples.md" %}{% endleveloffset %}