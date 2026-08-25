---
title: Extending the Kubernetes API with custom resource definitions
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Extending the Kubernetes API with custom resource definitions {id="crd-extending-api-with-crds"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "crd-extending-api-with-crds" %}

To extend the Kubernetes API with custom object types that behave like built-in Kubernetes objects, cluster administrators can create and manage custom resource definitions (CRDs) on their {{ product_title }} cluster.

{% leveloffset +1 %}{% include "./modules/crd-custom-resource-definitions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/crd-creating-crds.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/crd-creating-aggregated-cluster-roles.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/crd-creating-custom-resources-from-file.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/crd-inspecting-custom-resources.md" %}{% endleveloffset %}