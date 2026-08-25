---
title: "Creating a cluster with multi-architecture compute machines on bare metal, {{ ibm_power_title }}, or {{ ibm_z_title }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "creating-multi-arch-compute-nodes-bare-metal" %}
{% include "./_attributes/common-attributes.md" %}
# Creating a cluster with multi-architecture compute machines on bare metal, {{ ibm_power_title }}, or {{ ibm_z_title }} {id="creating-multi-arch-compute-nodes-bare-metal"}

You can create a cluster with multi-architecture compute machines on bare metal (`x86_64` or `aarch64`), {{ ibm_power_name }} (`ppc64le`), or {{ ibm_z_name }} (`s390x`). To do this, you must have an existing single-architecture cluster on one of these platforms. 

See the following installation procedures for your platform:

*   Bare metal with user-provisioned infrastructure: See "Installing a user-provisioned cluster on bare metal". You can then add 64-bit ARM compute machines to your {{ product_title }} cluster on bare metal.
*   {{ ibm_power_name }}: See "Installing on {{ ibm_power_name }}". You can then add `x86_64` compute machines to your {{ product_title }} cluster on {{ ibm_power_name }}.
*   {{ ibm_z_name }} and {{ ibm_linuxone_name }}: See "Installing on {{ ibm_z_name }} and {{ ibm_linuxone_name }}". You can then add `x86_64` compute machines to your {{ product_title }} cluster on {{ ibm_z_name }} and {{ ibm_linuxone_name }}.


:::important

The bare metal installer-provisioned infrastructure and the Bare Metal Operator do not support adding secondary architecture nodes during the initial cluster setup. You can add secondary architecture nodes manually only after the initial cluster setup.

:::


Before you can add additional compute nodes to your cluster, you must upgrade your cluster to one that uses the multi-architecture payload. For more information about migrating to the multi-architecture payload, see "Migrating to a cluster with multi-architecture compute machines".

The following procedures explain how to create a {{ op_system }} compute machine by using an ISO image or network PXE booting. This allows you to add additional nodes to your cluster and deploy a cluster with multi-architecture compute machines.


:::note

Before adding a secondary architecture node to your cluster, you must install the Multiarch Tuning Operator, and deploy a `ClusterPodPlacementConfig` object. For more information, see "Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator".

:::


{% leveloffset +1 %}{% include "./modules/machine-user-infra-machines-iso.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-user-infra-machines-pxe.md" %}{% endleveloffset %}

**Additional resources**

*   [How does one set up a serial terminal and/or console in Red Hat Enterprise Linux? (Red&#160;Hat Knowledgebase article)](https://access.redhat.com/articles/7212)
*   [`IMAGE_GZIP` option in iPXE (iPXE documentation)](https://ipxe.org/buildcfg/image_gzip)

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Installing a user provisioned cluster on bare metal](/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal)
*   [Installing a cluster on {{ ibm_power_name }}](/installing/installing_ibm_power/preparing-to-install-on-ibm-power#preparing-to-install-on-ibm-power)
*   [Installing a cluster on {{ ibm_z_name }} and {{ ibm_linuxone_name }}](/installing/installing_ibm_z/preparing-to-install-on-ibm-z#preparing-to-install-on-ibm-z)
*   [Migrating to a cluster with multi-architecture compute machines](/updating/updating_a_cluster/migrating-to-multi-payload#migrating-to-multi-payload)
*   [Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator](/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multiarch-tuning-operator)