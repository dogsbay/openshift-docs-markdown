---
title: Creating a compute machine set on OpenStack
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating a compute machine set on OpenStack {id="creating-machineset-osp"}
{%- set context = "creating-machineset-osp" %}

To automate the provisioning and scaling of node virtual machines (VMs) on {{ rh_openstack_first }} for compute workloads, create a `MachineSet` YAML file that defines details, for example image and network, that are specific to {{ rh_openstack }}. {._abstract}

You can create a different compute machine set to serve a specific purpose in your {{ product_title }} cluster on {{ rh_openstack }}. For example, you might create infrastructure machine sets and related machines so that you can move supporting workloads to the new machines.

{% leveloffset +1 %}{% include "./snippets/machine-user-provisioned-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-yaml-osp.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Manually updating the boot image](/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)

{% leveloffset +1 %}{% include "./modules/machineset-yaml-osp-sr-iov.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Preparing to install a cluster that uses SR-IOV or OVS-DPDK on OpenStack](/installing/installing_openstack/installing-openstack-nfv-preparing#installing-openstack-nfv-preparing)
*   [Manually updating the boot image](/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)

{% leveloffset +1 %}{% include "./modules/machineset-yaml-osp-sr-iov-port-security.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-creating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-label-gpu-autoscaler.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Cluster autoscaler resource definition](/machine_management/applying-autoscaling#cluster-autoscaler-cr_applying-autoscaling)