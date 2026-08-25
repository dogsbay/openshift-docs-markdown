---
title: Working with different Kubernetes API versions on the same cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Working with different Kubernetes API versions on the same cluster {id="oadp-different-kubernetes-api-versions"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "oadp-different-kubernetes-api-versions" %}

Manage different Kubernetes API versions on your cluster during backup and restore operations. Enabling Velero to back up all supported API group versions helps you maintain compatibility when moving resources to a new destination cluster.

{% leveloffset +1 %}{% include "./modules/oadp-checking-api-group-versions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-about-enable-api-group-versions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-using-enable-api-group-versions.md" %}{% endleveloffset %}

{%- set oadp_different_kubernetes_api_versions = false -%}