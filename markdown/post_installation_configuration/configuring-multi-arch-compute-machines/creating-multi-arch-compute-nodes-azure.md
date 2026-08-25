---
title: Creating a cluster with multi-architecture compute machines on Azure
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "creating-multi-arch-compute-nodes-azure" %}
# Creating a cluster with multi-architecture compute machines on Azure {id="creating-multi-arch-compute-nodes-azure"}
{% include "./_attributes/common-attributes.md" %}

To deploy a cluster on {{ azure_full }} with multi-architecture compute machines, you must first create a single-architecture installer-provisioned cluster that uses the multi-architecture installer binary. 

You can also migrate your current cluster with single-architecture compute machines to a cluster with multi-architecture compute machines. After creating a multi-architecture cluster, you can add nodes with different architectures to the cluster. 

{% leveloffset +1 %}{% include "./modules/multi-architecture-creating-bootimage.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/multi-architecture-modify-machine-set-azure.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Installing a cluster on Azure with customizations](/installing/installing_azure/ipi/installing-azure-customizations#installing-azure-customizations) 
*   [Migrating to a cluster with multi-architecture compute machines](/updating/updating_a_cluster/migrating-to-multi-payload#migrating-to-multi-payload)
*   [Creating a compute machine set on Azure](/machine_management/creating_machinesets/creating-machineset-azure#creating-machineset-azure)
*   [Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator](/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multiarch-tuning-operator)