---
title: Creating a cluster with multi-architecture compute machines on {{ ibm_z_title }} and {{ ibm_linuxone_title }} with {{ op_system_base }} KVM
---

# Creating a cluster with multi-architecture compute machines on {{ ibm_z_title }} and {{ ibm_linuxone_title }} with {{ op_system_base }} KVM {#creating-multi-arch-compute-nodes-ibm-z-kvm}

To create a cluster with multi-architecture compute machines on {{ ibm_z_name }} and {{ ibm_linuxone_name }} (`s390x`) with {{ op_system_base }} KVM, you must have an existing single-architecture `x86_64` cluster. You can then add `s390x` compute machines to your OpenShift Container Platform cluster.

Before you can add `s390x` nodes to your cluster, you must upgrade your cluster to one that uses the multi-architecture payload. For more information on migrating to the multi-architecture payload, see "Migrating to a cluster with multi-architecture compute machines".

The following procedures explain how to create a {{ op_system }} compute machine using a {{ op_system_base }} KVM instance. This will allow you to add `s390x` nodes to your cluster and deploy a cluster with multi-architecture compute machines.

To create an {{ ibm_z_name }} or {{ ibm_linuxone_name }} (`s390x`) cluster with multi-architecture compute machines on `x86_64`, follow the instructions for "Installing a cluster on {{ ibm_z_name }} and {{ ibm_linuxone_name }}". You can then add `x86_64` compute machines as described in "Creating a cluster with multi-architecture compute machines on bare metal, {{ ibm_power_title }}, or {{ ibm_z_title }}".

> [!NOTE]
> Before adding a secondary architecture node to your cluster, install the Multiarch Tuning Operator and then deploy a `ClusterPodPlacementConfig` object. For more information, see "Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator".

## Additional resources {#additional-resources_creating-multi-arch-compute-nodes-ibm-z-kvm}

- [Migrating to a cluster with multi-architecture compute machines](/openshift-docs-markdown/updating/updating_a_cluster/migrating-to-multi-payload#migrating-to-multi-payload)
- [Installing a cluster on {{ ibm_z_name }} and {{ ibm_linuxone_name }}](/openshift-docs-markdown/installing/installing_ibm_z/preparing-to-install-on-ibm-z#preparing-to-install-on-ibm-z)
- [Creating a cluster with multi-architecture compute machines on bare metal, {{ ibm_power_title }}, or {{ ibm_z_title }}](/openshift-docs-markdown/post_installation_configuration/configuring-multi-arch-compute-machines/creating-multi-arch-compute-nodes-bare-metal#creating-multi-arch-compute-nodes-bare-metal)
- [Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator](/openshift-docs-markdown/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multiarch-tuning-operator)
