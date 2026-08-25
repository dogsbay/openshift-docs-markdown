---
title: "Installing a three-node cluster on {{ gcp_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a three-node cluster on {{ gcp_short }} {id="installing-gcp-three-node"}
{%- set context = "installing-gcp-three-node" %}

In {{ product_title }} version {{ product_version }}, you can install a three-node cluster on {{ gcp_first }}. A three-node cluster consists of three control plane machines, which also act as compute machines. This type of cluster provides a smaller, more resource efficient cluster, for cluster administrators and developers to use for testing, development, and production. {._abstract}

You can install a three-node cluster by using either installer-provisioned or user-provisioned infrastructure.

{% leveloffset +1 %}{% include "./modules/installation-three-node-cluster-cloud-provider.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Installing a cluster on {{ gcp_short }} with customizations](/installing/installing_gcp/installing-gcp-customizations#installing-gcp-customizations)
*   [Installing a cluster on user-provisioned infrastructure in {{ gcp_short }} by using Infrastructure Manager templates](/installing/installing_gcp/installing-gcp-user-infra#installing-gcp-user-infra)