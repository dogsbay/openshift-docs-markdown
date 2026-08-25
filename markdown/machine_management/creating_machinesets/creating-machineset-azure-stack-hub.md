---
title: Creating a compute machine set on Azure Stack Hub
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating a compute machine set on Azure Stack Hub {id="creating-machineset-azure-stack-hub"}
{%- set context = "creating-machineset-azure-stack-hub" %}

You can create a different compute machine set to serve a specific purpose in your {{ product_title }} cluster on {{ azure_first }} Stack Hub. For example, you might create infrastructure machine sets and related machines so that you can move supporting workloads to the new machines. {._abstract}

{% leveloffset +1 %}{% include "./snippets/machine-user-provisioned-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-yaml-azure-stack-hub.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Manually updating the boot image](/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)

{% leveloffset +1 %}{% include "./modules/machineset-creating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-label-gpu-autoscaler.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Cluster autoscaler resource definition](/machine_management/applying-autoscaling#cluster-autoscaler-cr_applying-autoscaling)

{% leveloffset +1 %}{% include "./modules/machineset-azure-boot-diagnostics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-customer-managed-encryption-azure.md" %}{% endleveloffset %}