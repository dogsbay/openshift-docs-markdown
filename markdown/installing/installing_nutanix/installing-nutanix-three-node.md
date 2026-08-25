---
title: Installing a three-node cluster on Nutanix
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a three-node cluster on Nutanix {id="installing-nutanix-three-node"}
{%- set context = "installing-nutanix-three-node" %}

In {{ product_title }} version {{ product_version }}, you can install a three-node cluster on Nutanix. A three-node cluster consists of three control plane machines, which also act as compute machines. This type of cluster provides a smaller, more resource efficient cluster, for cluster administrators and developers to use for testing, development, and production. {._abstract}

{% leveloffset +1 %}{% include "./modules/installation-three-node-cluster-cloud-provider.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Installing a cluster on Nutanix](/installing/installing_nutanix/installing-nutanix-installer-provisioned#installing-nutanix-installer-provisioned)