---
title: Creating a compute machine set on Nutanix
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating a compute machine set on Nutanix {id="creating-machineset-nutanix"}
{%- set context = "creating-machineset-nutanix" %}

You can create a different compute machine set to serve a specific purpose in your {{ product_title }} cluster on Nutanix. For example, you might create infrastructure machine sets and related machines so that you can move supporting workloads to the new machines, which helps ensure efficient resource allocation. {._abstract}

{% leveloffset +1 %}{% include "./snippets/machine-user-provisioned-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-yaml-nutanix.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Manually updating the boot image](/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)

{% leveloffset +1 %}{% include "./modules/machineset-creating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-label-gpu-autoscaler.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/mapi-failure-domain-nutanix.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cpmso-ts-nutanix-multiple-subnet.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Cluster autoscaler resource definition](/machine_management/applying-autoscaling#cluster-autoscaler-cr_applying-autoscaling)
*   [Adding failure domains to an existing Nutanix cluster](/installing/installing_nutanix/nutanix-failure-domains#nutanix-failure-domains-adding-to-existing-cluster_nutanix-failure-domains)