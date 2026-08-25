---
title: "Creating a compute machine set on {{ ibm_power_server_title }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating a compute machine set on {{ ibm_power_server_title }} {id="creating-machineset-ibm-power-vs"}
{%- set context = "creating-machineset-ibm-power-vs" %}

Create compute machine sets in your {{ product_title }} cluster on {{ ibm_power_server_name }} to perform specific tasks. For example, you might create infrastructure machine sets and related machines so that you can move supporting workloads to the new machines. Moving supporting workloads to dedicated machines helps ensure that your cluster resources are allocated efficiently. {._abstract}

{% leveloffset +1 %}{% include "./snippets/machine-user-provisioned-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-yaml-ibm-power-vs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Manually updating the boot image](/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)

{% leveloffset +1 %}{% include "./modules/machineset-creating.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Cluster autoscaler resource definition](/machine_management/applying-autoscaling#cluster-autoscaler-cr_applying-autoscaling)