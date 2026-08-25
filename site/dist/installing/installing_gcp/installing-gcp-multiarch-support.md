---
title: Installing a cluster with the support for configuring multi-architecture compute machines
---

# Installing a cluster with the support for configuring multi-architecture compute machines {#installing-gcp-multiarch-support}

You can install an OpenShift Container Platform cluster on {{ gcp_first }} with multi-architecture support to run workloads on compute machines with different CPU architectures.

> [!NOTE]
> When you have nodes with different architectures in your cluster, the architecture of your image must be consistent with the architecture of the node. You must verify that the pod is assigned to the node with the appropriate architecture and that it matches the image architecture. For more information about assigning pods to nodes, see "Scheduling workloads on clusters with multi-architecture compute machines".

You can install a {{ gcp_first }} cluster with the support for configuring multi-architecture compute machines. After installing the {{ gcp_short }} cluster, you can add multi-architecture compute machines to the cluster in the following ways:

- Adding 64-bit x86 compute machines to a cluster that uses 64-bit ARM control plane machines and already includes 64-bit ARM compute machines. In this case, 64-bit x86 is considered the secondary architecture.
- Adding 64-bit ARM compute machines to a cluster that uses 64-bit x86 control plane machines and already includes 64-bit x86 compute machines. In this case, 64-bit ARM is considered the secondary architecture.

## Additional resources {#additional-resources_installing-gcp-multiarch-support}

- [Deploying the cluster](/openshift-docs-markdown/installing/installing_gcp/installing-gcp-customizations#installation-launching-installer_installing-gcp-customizations)
- [Scheduling workloads on clusters with multi-architecture compute machines](/openshift-docs-markdown/post_installation_configuration/configuring-multi-arch-compute-machines/multi-architecture-compute-managing#scheduling-workloads-on-clusters-with-multi-architecture-compute-machines)
- [Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator](/openshift-docs-markdown/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multiarch-tuning-operator)
