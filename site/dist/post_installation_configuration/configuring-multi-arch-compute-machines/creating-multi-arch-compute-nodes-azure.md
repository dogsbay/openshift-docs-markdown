---
title: Creating a cluster with multi-architecture compute machines on Azure
---

# Creating a cluster with multi-architecture compute machines on Azure {#creating-multi-arch-compute-nodes-azure}

To deploy a cluster on {{ azure_full }} with multi-architecture compute machines, you must first create a single-architecture installer-provisioned cluster that uses the multi-architecture installer binary.

You can also migrate your current cluster with single-architecture compute machines to a cluster with multi-architecture compute machines. After creating a multi-architecture cluster, you can add nodes with different architectures to the cluster.

## Additional resources {#additional-resources_creating-multi-arch-compute-nodes-azure}

- [Installing a cluster on Azure with customizations](/installing/installing_azure/ipi/installing-azure-customizations#installing-azure-customizations)
- [Migrating to a cluster with multi-architecture compute machines](/updating/updating_a_cluster/migrating-to-multi-payload#migrating-to-multi-payload)
- [Creating a compute machine set on Azure](/machine_management/creating_machinesets/creating-machineset-azure#creating-machineset-azure)
- [Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator](/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multiarch-tuning-operator)
