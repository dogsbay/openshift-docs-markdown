---
title: Creating a compute machine set on OpenStack
---

# Creating a compute machine set on OpenStack {#creating-machineset-osp}

To automate the provisioning and scaling of node virtual machines (VMs) on {{ rh_openstack_first }} for compute workloads, create a `MachineSet` YAML file that defines details, for example image and network, that are specific to {{ rh_openstack }}.

You can create a different compute machine set to serve a specific purpose in your OpenShift Container Platform cluster on {{ rh_openstack }}. For example, you might create infrastructure machine sets and related machines so that you can move supporting workloads to the new machines.

**Additional resources**

- [Manually updating the boot image](/openshift-docs-markdown/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)

**Additional resources**

- [Preparing to install a cluster that uses SR-IOV or OVS-DPDK on OpenStack](/openshift-docs-markdown/installing/installing_openstack/installing-openstack-nfv-preparing#installing-openstack-nfv-preparing)
- [Manually updating the boot image](/openshift-docs-markdown/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)

**Additional resources**

- [Cluster autoscaler resource definition](/openshift-docs-markdown/machine_management/applying-autoscaling#cluster-autoscaler-cr_applying-autoscaling)
