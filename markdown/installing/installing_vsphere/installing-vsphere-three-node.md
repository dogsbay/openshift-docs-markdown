---
title: Installing a three-node cluster on vSphere
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a three-node cluster on vSphere {id="installing-vsphere-three-node"}
{%- set context = "installing-vsphere-three-node" %}

In {{ product_title }} version {{ product_version }}, you can install a three-node cluster on VMware vSphere. A three-node cluster consists of three control plane machines, which also act as compute machines. This type of cluster provides a smaller, more resource efficient cluster, for cluster administrators and developers to use for testing, development, and production. {._abstract}

You can install a three-node cluster using either installer-provisioned or user-provisioned infrastructure.

{% leveloffset +1 %}{% include "./modules/installation-three-node-cluster-cloud-provider.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}
*   [Installing a cluster on vSphere with customizations](/installing/installing_vsphere/ipi/installing-vsphere-installer-provisioned-customizations#installing-vsphere-installer-provisioned-customizations)
*   [Installing a cluster on vSphere with user-provisioned infrastructure](/installing/installing_vsphere/upi/installing-vsphere#installing-vsphere)