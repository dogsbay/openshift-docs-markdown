---
title: "Creating a compute machine set on {{ gcp_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating a compute machine set on {{ gcp_short }} {id="creating-machineset-gcp"}
{%- set context = "creating-machineset-gcp" %}

You can create a different compute machine set to serve a specific purpose in your {{ product_title }} cluster on {{ gcp_first }}. For example, you might create infrastructure machine sets and related machines so that you can move supporting workloads to the new machines. {._abstract}

{% leveloffset +1 %}{% include "./snippets/machine-user-provisioned-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-yaml-gcp.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Manually updating the boot image](/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)

{% leveloffset +1 %}{% include "./modules/machineset-creating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-label-gpu-autoscaler.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Cluster autoscaler resource definition](/machine_management/applying-autoscaling#cluster-autoscaler-cr_applying-autoscaling)

{% leveloffset +1 %}{% include "./modules/machineset-gcp-pd-disk-types.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-gcp-confidential-vm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-non-guaranteed-instance.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-creating-non-guaranteed-instances.md" %}{% endleveloffset %}

{%- set context = "legacy-preempt" %}
{% leveloffset +1 %}{% include "./modules/machineset-non-guaranteed-instance.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-creating-non-guaranteed-instances.md" %}{% endleveloffset %}
{%- set context = "creating-machineset-gcp" %}

{% leveloffset +1 %}{% include "./modules/machineset-gcp-shielded-vms.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [What is Shielded VM?](https://cloud.google.com/compute/shielded-vm/docs/shielded-vm)
*   [Secure Boot](https://cloud.google.com/compute/shielded-vm/docs/shielded-vm#secure-boot)
*   [Virtual Trusted Platform Module (vTPM)](https://cloud.google.com/compute/shielded-vm/docs/shielded-vm#vtpm)
*   [Integrity monitoring](https://cloud.google.com/compute/shielded-vm/docs/shielded-vm#integrity-monitoring)

{% leveloffset +1 %}{% include "./modules/machineset-gcp-enabling-customer-managed-encryption.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-gcp-enabling-gpu-support.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nvidia-gpu-gcp-adding-a-gpu-node.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nvidia-gpu-aws-deploying-the-node-feature-discovery-operator.md" %}{% endleveloffset %}