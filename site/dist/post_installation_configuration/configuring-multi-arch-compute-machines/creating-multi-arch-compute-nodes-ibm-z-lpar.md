---
title: Creating a cluster with multi-architecture compute machines on {{ ibm_z_title }} and {{ ibm_linuxone_title }} in an LPAR
---

# Creating a cluster with multi-architecture compute machines on {{ ibm_z_title }} and {{ ibm_linuxone_title }} in an LPAR {#creating-multi-arch-compute-nodes-ibm-z-lpar}

To create a cluster with multi-architecture compute machines on {{ ibm_z_name }} and {{ ibm_linuxone_name }} (`s390x`) in a logical partition (LPAR), you must have an existing single-architecture `x86_64` cluster. You can then add `s390x` compute machines to your OpenShift Container Platform cluster.

Before you can add `s390x` nodes to your cluster, you must upgrade your cluster to one that uses the multi-architecture payload. For more information about migrating to the multi-architecture payload, see "Migrating to a cluster with multi-architecture compute machines".

You can create a {{ op_system }} compute machine by using an LPAR instance. By using an LPAR instance, you can add `s390x` nodes to your cluster and deploy a cluster with multi-architecture compute machines.

> [!NOTE]
> To create an {{ ibm_z_name }} or {{ ibm_linuxone_name }} (`s390x`) cluster with multi-architecture compute machines on `x86_64`, follow the instructions for "Installing a cluster on {{ ibm_z_name }} and {{ ibm_linuxone_name }}". You can then add `x86_64` compute machines as described in "Creating a cluster with multi-architecture compute machines on bare metal, {{ ibm_power_title }}, or {{ ibm_z_title }}".

**Additional resources**

- [Migrating to a cluster with multi-architecture compute machines](/updating/updating_a_cluster/migrating-to-multi-payload#migrating-to-multi-payload)
- [Installing a cluster on {{ ibm_z_name }} and {{ ibm_linuxone_name }}](/installing/installing_ibm_z/preparing-to-install-on-ibm-z#preparing-to-install-on-ibm-z)
- [Creating a cluster with multi-architecture compute machines on bare metal, {{ ibm_power_title }}, or {{ ibm_z_title }}](/post_installation_configuration/configuring-multi-arch-compute-machines/creating-multi-arch-compute-nodes-bare-metal#creating-multi-arch-compute-nodes-bare-metal)
