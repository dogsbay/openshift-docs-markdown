---
title: Creating a compute machine set on vSphere
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating a compute machine set on vSphere {id="creating-machineset-vsphere"}
{%- set context = "creating-machineset-vsphere" %}

You can define and create a {{ product_title }} compute machine set on VMware vSphere to enable the Machine API to automatically scale and manage compute nodes in vSphere. You can create a different compute machine set to serve a specific purpose in your {{ product_title }} cluster on vSphere. For example, you might create infrastructure machine sets and related machines so that you can move supporting workloads to the new machines. {._abstract}

{% leveloffset +1 %}{% include "./snippets/machine-user-provisioned-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-yaml-vsphere.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Manually updating the boot image](/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)

{% leveloffset +1 %}{% include "./modules/machineset-vsphere-required-permissions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compute-machineset-upi-reqs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-upi-reqs-infra-id.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-upi-reqs-vsphere-creds.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-upi-reqs-ignition-config.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding the Machine Config Operator](/machine_configuration/index#machine-config-operator_machine-config-overview)
*   [Installing {{ op_system }} and starting the {{ product_title }} bootstrap process](/installing/installing_vsphere/upi/installing-vsphere#installation-vsphere-machines_installing-vsphere)

{% leveloffset +1 %}{% include "./modules/machineset-creating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-label-gpu-autoscaler.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Cluster autoscaler resource definition](/machine_management/applying-autoscaling#cluster-autoscaler-cr_applying-autoscaling)

{% leveloffset +1 %}{% include "./modules/machine-api-vmw-add-tags.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-vsphere-multiple-nics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-vsphere-data-disks.md" %}{% endleveloffset %}