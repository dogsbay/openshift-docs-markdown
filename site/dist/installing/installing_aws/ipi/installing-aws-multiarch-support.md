---
title: Installing a cluster with the support for configuring multi-architecture compute machines
---

# Installing a cluster with the support for configuring multi-architecture compute machines {#ipi-aws-multiarch-support}

You can install an OpenShift Container Platform cluster on {{ aws_first }} with support for configuring multi-architecture compute machines.

> [!NOTE]
> When you have nodes with multiple architectures in your cluster, the architecture of your image must be consistent with the architecture of the node. You must ensure that the pod is assigned to the node with the appropriate architecture and that it matches the image architecture. For more information on assigning pods to nodes, [Scheduling workloads on clusters with multi-architecture compute machines](/openshift-docs-markdown/post_installation_configuration/configuring-multi-arch-compute-machines/multi-architecture-compute-managing#scheduling-workloads-on-clusters-with-multi-architecture-compute-machines).

After installing the cluster, you can add multi-architecture compute machines to the cluster in the following ways:

- Adding 64-bit x86 compute machines to a cluster that uses 64-bit ARM control plane machines and already includes 64-bit ARM compute machines. In this case, 64-bit x86 is considered the secondary architecture.
- Adding 64-bit ARM compute machines to a cluster that uses 64-bit x86 control plane machines and already includes 64-bit x86 compute machines. In this case, 64-bit ARM is considered the secondary architecture.

**Additional resources**

- [Deploying the cluster](/openshift-docs-markdown/installing/installing_aws/ipi/installing-aws-customizations#installation-launching-installer_installing-aws-customizations)
- [Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator](/openshift-docs-markdown/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multiarch-tuning-operator)
