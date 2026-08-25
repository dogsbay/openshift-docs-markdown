---
title: Creating a cluster with multi-architecture compute machines on {{ ibm_power_title }}
---

# Creating a cluster with multi-architecture compute machines on {{ ibm_power_title }} {#creating-multi-arch-compute-nodes-ibm-power}

To create a cluster with multi-architecture compute machines on {{ ibm_power_name }} (`ppc64le`), you must have an existing single-architecture (`x86_64`) cluster. You can then add `ppc64le` compute machines to your OpenShift Container Platform cluster.

> [!IMPORTANT]
> Before you can add `ppc64le` nodes to your cluster, you must upgrade your cluster to one that uses the multi-architecture payload. For more information on migrating to the multi-architecture payload, see "Migrating to a cluster with multi-architecture compute machines".

The following procedures explain how to complete the following tasks:

- Create a {{ op_system }} compute machine by using an ISO image or network PXE booting.
- Add `ppc64le` nodes to your cluster and deploy a cluster with multi-architecture compute machines.

To create an {{ ibm_power_name }} (`ppc64le`) cluster with multi-architecture compute machines on `x86_64`, follow the instructions for "Installing a cluster on {{ ibm_power_name }}". You can then add `x86_64` compute machines as described in "Creating a cluster with multi-architecture compute machines on bare metal, {{ ibm_power_title }}, or {{ ibm_z_title }}".

> [!NOTE]
> Before adding a secondary architecture node to your cluster, Red Hat recommends that you install the Multiarch Tuning Operator, and deploy a `ClusterPodPlacementConfig` object. For more information, see "Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator".

**Additional resources**

- [Migrating to a cluster with multi-architecture compute machines](/updating/updating_a_cluster/migrating-to-multi-payload#migrating-to-multi-payload)
- [Installing a cluster on {{ ibm_power_name }}](/installing/installing_ibm_power/preparing-to-install-on-ibm-power#preparing-to-install-on-ibm-power)
- [Creating a cluster with multi-architecture compute machines on bare metal, {{ ibm_power_title }}, or {{ ibm_z_title }}](/post_installation_configuration/configuring-multi-arch-compute-machines/creating-multi-arch-compute-nodes-bare-metal#creating-multi-arch-compute-nodes-bare-metal)
- [Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator](/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multiarch-tuning-operator)
