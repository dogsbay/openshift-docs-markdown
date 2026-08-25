---
title: Installing a three-node cluster on OpenStack
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a three-node cluster on OpenStack {id="installing-openstack-three-node"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-openstack-three-node" %}

In {{ product_title }} version {{ product_version }}, you can install a three-node cluster on {{ rh_openstack_first }}. A three-node cluster consists of three control plane machines, which also act as compute machines. 

This type of cluster provides a smaller, more resource efficient cluster, for cluster administrators and developers to use for testing, development, and production.

You can install a three-node cluster on installer-provisioned infrastructure only. After you install a three-node cluster on {{ rh_openstack }}, you can apply customizations to the cluster. For more information, see "Installing a cluster on {{ rh_openstack }} with customizations".

{% leveloffset +1 %}{% include "./modules/installation-three-node-cluster-cloud-provider.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Installing a cluster on {{ rh_openstack }} with customizations](/installing/installing_openstack/installing-openstack-installer-custom#installing-openstack-installer-custom)