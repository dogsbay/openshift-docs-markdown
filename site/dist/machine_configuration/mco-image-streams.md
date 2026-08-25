---
title: Setting the {{ op_system }} version in a cluster
---

# Setting the {{ op_system }} version in a cluster {#mco-image-streams}

You can create an OpenShift Container Platform cluster that uses {{ op_system_first }} 10.x or update an existing cluster to {{ op_system }} 10.x, which is available as a Technology Preview feature in OpenShift Container Platform 4.21.2 and greater. By running {{ op_system_first }} 10.x as a Technology Preview feature, you can test how the operating system works with your cluster and your hardware, anticipate changes, and report bugs to Red Hat.

By default, {{ op_system }} 9.x is installed on OpenShift Container Platform clusters starting with 4.13.

At any time, you can revert the cluster back to {{ op_system }} 9.x, if needed.

{{ op_system }} is a purpose-designed operating system for use with containers that is deployed by default on all OpenShift Container Platform nodes. Each version of {{ op_system }} is based on a specific version of {{ op_system_base_full }}. For OpenShift Container Platform 4.13 and greater, the {{ op_system }} version is based on RHEL 9.x.

Running a cluster with {{ op_system }} 10.x is for **testing purposes only** on test clusters, and should not be used on production clusters. For example, by testing your cluster with {{ op_system }} 10.x, you can ensure that any existing hardware operates as expected with the new operating system.

You can use one of the following methods to run the nodes in a cluster on {{ op_system }} 10.x:

- Upgrading an existing 4.21.2 or later cluster to {{ op_system }} 10.x. For more information, see "Updating the nodes in an existing cluster from {{ op_system }} 9 to {{ op_system }} 10".
- Deploying {{ op_system }} 10.x on a new OpenShift Container Platform cluster. For more information, see "Installation configuration parameters".

## Additional resources {#additional-resources_mco-image-streams}

- [Enabling features using feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
- [Manually updating the boot image](/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)
