---
title: About the Cluster API
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# About the Cluster API {id="cluster-api-about"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cluster-api-about" %}

You can use the Cluster API to create and manage compute machine sets and compute machines in your {{ product_title }} cluster.

{%- set FeatureName = "Managing machines with the Cluster API" %}
{% include "./snippets/technology-preview.md" %}

The Cluster API is an upstream project that is integrated into {{ product_title }} as a Technology Preview for {{ aws_first }}, {{ gcp_first }}, {{ azure_first }}, {{ rh_openstack_first }}, {{ vmw_first }}, and bare-metal platforms.

**Additional resources**

*   [Kubernetes Cluster API (Kubernetes documentation)](https://cluster-api.sigs.k8s.io/) 

{% leveloffset +1 %}{% include "./modules/capi-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/capi-benefits.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/capi-limitations.md" %}{% endleveloffset %}

**Additional resources**

*   [Enabling features using feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features-about_nodes-cluster-enabling-features)
*   [Getting started with the Cluster API](/machine_management/cluster_api_machine_management/cluster-api-getting-started#cluster-api-getting-started)
*   [Referencing the intended objects when using the CLI](/machine_management/cluster_api_machine_management/cluster-api-troubleshooting#ts-capi-cli-reference-intended-objects_cluster-api-troubleshooting)

{% leveloffset +2 %}{% include "./modules/capi-arch-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ cluster_capi_operator }}](/operators/operator-reference#cluster-capi-operator_operator-reference)

{% leveloffset +2 %}{% include "./modules/capi-arch-resources.md" %}{% endleveloffset %}