---
title: Installing a three-node cluster on Azure
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a three-node cluster on Azure {id="installing-azure-three-node"}
{%- set context = "installing-azure-three-node" %}

In {{ product_title }} version {{ product_version }}, you can install a three-node cluster on Microsoft Azure. A three-node cluster consists of three control plane machines, which also act as compute machines. {._abstract}

This type of cluster provides a smaller, more resource efficient cluster, for cluster administrators and developers to use for testing, development, and production.

You can install a three-node cluster by using either installer-provisioned or user-provisioned infrastructure.


:::note

Deploying a three-node cluster by using an Azure Marketplace image is not supported.

:::


{% leveloffset +1 %}{% include "./modules/installation-three-node-cluster-cloud-provider.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Installing a cluster on Azure with customizations](/installing/installing_azure/ipi/installing-azure-customizations#installing-azure-customizations)
*   [Installing a cluster on Azure using ARM templates](/installing/installing_azure/upi/installing-azure-user-infra#installing-azure-user-infra)