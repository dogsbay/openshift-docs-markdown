---
title: About clusters with multi-architecture compute machines
---

# About clusters with multi-architecture compute machines {#post-install-multi-architecture-configuration}

An OpenShift Container Platform cluster with multi-architecture compute machines is a cluster that supports compute machines with different architectures.

Configuring multi-architecture compute machines involves some additional considerations:

- When there are nodes with multiple architectures in your cluster, the architecture of the container image that you deploy to a node must be consistent with the architecture of that node. You need to ensure that the pod is assigned to the node with the appropriate architecture and that it matches the container image architecture. For more information on assigning pods to nodes, see "Assigning pods to nodes".
- In installer-provisioned installations, you are restricted to using the infrastructure provided by a single cloud provider. Adding external nodes, regardless of their architecture, to these clusters is not supported.
- Clusters that are installed with the platform type `none` are unable to use some features, such as managing compute machines with the Machine API. This limitation applies even if the compute machines that are attached to the cluster are installed on a platform that would normally support the feature. This parameter cannot be changed after installation.

  > [!IMPORTANT]
  > See "Deploying OpenShift 4.x on non-tested platforms using the bare metal install method" before you attempt to install an OpenShift Container Platform cluster in virtualized or cloud environments.
- The Cluster Samples Operator is not supported on clusters with multi-architecture compute machines. Your cluster can be created without this capability. For more information, see "Cluster capabilities".
- For information on migrating your single-architecture cluster to a cluster that supports multi-architecture compute machines, see "Migrating to a cluster with multi-architecture compute machines".

**Additional resources**

- [Creating a cluster with multi-architecture compute machines on Azure](/post_installation_configuration/configuring-multi-arch-compute-machines/creating-multi-arch-compute-nodes-azure#creating-multi-arch-compute-nodes-azure)
- [Creating a cluster with multi-architecture compute machines on AWS](/post_installation_configuration/configuring-multi-arch-compute-machines/creating-multi-arch-compute-nodes-aws#creating-multi-arch-compute-nodes-aws)
- [Creating a cluster with multi-architecture compute machines on {{ gcp_short }}](/post_installation_configuration/configuring-multi-arch-compute-machines/creating-multi-arch-compute-nodes-google-cloud#creating-multi-arch-compute-nodes-google-cloud)
- [Creating a cluster with multi-architecture compute machines on bare metal, {{ ibm_power_title }}, or {{ ibm_z_title }}](/post_installation_configuration/configuring-multi-arch-compute-machines/creating-multi-arch-compute-nodes-bare-metal#creating-multi-arch-compute-nodes-bare-metal)
- [Creating a cluster with multi-architecture compute machines on {{ ibm_z_name }} and {{ ibm_linuxone_name }} with z/VM](/post_installation_configuration/configuring-multi-arch-compute-machines/creating-multi-arch-compute-nodes-ibm-z#creating-multi-arch-compute-nodes-ibm-z)
- [Creating a cluster with multi-architecture compute machines on {{ ibm_z_name }} and {{ ibm_linuxone_name }} with {{ op_system_base }} KVM](/post_installation_configuration/configuring-multi-arch-compute-machines/creating-multi-arch-compute-nodes-ibm-z-kvm#creating-multi-arch-compute-nodes-ibm-z-kvm)
- [Creating a cluster with multi-architecture compute machines on {{ ibm_power_name }}](/post_installation_configuration/configuring-multi-arch-compute-machines/creating-multi-arch-compute-nodes-ibm-power#creating-multi-arch-compute-nodes-ibm-power)

**Additional resources**

- [Migrating to a cluster with multi-architecture compute machines](/updating/updating_a_cluster/migrating-to-multi-payload#migrating-to-multi-payload)

## Additional resources {#additional-resources_multi-architecture-configuration}

- [Assigning pods to nodes](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/)
- [Deploying OpenShift 4.x on non-tested platforms using the bare metal install method (Red Hat Knowledgebase article)](https://access.redhat.com/articles/4207611)
- [Cluster capabilities](/installing/overview/cluster-capabilities#cluster-capabilities)
- [Migrating to a cluster with multi-architecture compute machines](/updating/updating_a_cluster/migrating-to-multi-payload#migrating-to-multi-payload)
