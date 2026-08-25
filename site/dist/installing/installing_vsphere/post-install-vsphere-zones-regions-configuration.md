---
title: Multiple regions and zones configuration for a cluster on VMware vSphere
---

# Multiple regions and zones configuration for a cluster on VMware vSphere {#post-install-vsphere-zones-regions-configuration}

As an administrator, you can specify multiple regions and zones for your OpenShift Container Platform cluster that runs on a VMware vSphere instance. This configuration reduces the risk of a hardware failure or network outage causing your cluster to fail.

A failure domain configuration lists parameters that create a topology. The following list states some of these parameters:

- `computeCluster`
- `datacenter`
- `datastore`
- `networks`
- `resourcePool`

After you define multiple regions and zones for your OpenShift Container Platform cluster, you can create or migrate nodes to another failure domain.

> [!IMPORTANT]
> If you want to migrate pre-existing OpenShift Container Platform cluster compute nodes to a failure domain, you must define a new compute machine set for the compute node. This new machine set can scale up a compute node according to the topology of the failure domain, and scale down the pre-existing compute node.
>
> The cloud provider adds `topology.kubernetes.io/zone` and `topology.kubernetes.io/region` labels to any compute node provisioned by a machine set resource.

**Additional resources**

- [Parameters for the cluster-wide infrastructure CRD](/openshift-docs-markdown/installing/installing_vsphere/post-install-vsphere-zones-regions-configuration#references-regions-zones-infrastructure-vsphere_post-install-vsphere-zones-regions-configuration)

**Additional resources**

- [Installing a cluster on vSphere with network customizations](/openshift-docs-markdown/installing/installing_vsphere/upi/installing-vsphere-network-customizations#installing-vsphere-network-customizations)
- [Creating a compute machine set](/openshift-docs-markdown/machine_management/creating_machinesets/creating-machineset-vsphere#machineset-creating_creating-machineset-vsphere)

**Additional resources**

- [Specifying multiple regions and zones for your cluster on vSphere](/openshift-docs-markdown/installing/installing_vsphere/post-install-vsphere-zones-regions-configuration#specifying-regions-zones-infrastructure-vsphere_post-install-vsphere-zones-regions-configuration)
