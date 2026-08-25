---
title: Creating a compute machine set on bare metal
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating a compute machine set on bare metal {id="creating-machineset-bare-metal"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "creating-machineset-bare-metal" %}

You can create a different compute machine set to serve a specific purpose in your {{ product_title }} cluster on bare metal. For example, you might create infrastructure machine sets and related machines so that you can move supporting workloads to the new machines.

{% leveloffset +1 %}{% include "./snippets/machine-user-provisioned-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-yaml-baremetal.md" %}{% endleveloffset %}

**Additional resources**

*   [Manually updating the boot image](/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)

{% leveloffset +1 %}{% include "./modules/machineset-creating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-label-gpu-autoscaler.md" %}{% endleveloffset %}

**Additional resources**

*   [Cluster autoscaler resource definition](/machine_management/applying-autoscaling#cluster-autoscaler-cr_applying-autoscaling)