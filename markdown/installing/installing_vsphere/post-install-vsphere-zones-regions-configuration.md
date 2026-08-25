---
title: Multiple regions and zones configuration for a cluster on VMware vSphere
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "post-install-vsphere-zones-regions-configuration" %}
# Multiple regions and zones configuration for a cluster on VMware vSphere {id="post-install-vsphere-zones-regions-configuration"}
{% include "./_attributes/common-attributes.md" %}

As an administrator, you can specify multiple regions and zones for your {{ product_title }} cluster that runs on a VMware vSphere instance. This configuration reduces the risk of a hardware failure or network outage causing your cluster to fail.

A failure domain configuration lists parameters that create a topology. The following list states some of these parameters:

*   `computeCluster`
*   `datacenter`
*   `datastore`
*   `networks`
*   `resourcePool`

After you define multiple regions and zones for your {{ product_title }} cluster, you can create or migrate nodes to another failure domain.


:::important

If you want to migrate pre-existing {{ product_title }} cluster compute nodes to a failure domain, you must define a new compute machine set for the compute node. This new machine set can scale up a compute node according to the topology of the failure domain, and scale down the pre-existing compute node.

The cloud provider adds `topology.kubernetes.io/zone` and `topology.kubernetes.io/region` labels to any compute node provisioned by a machine set resource.

:::


{% leveloffset +1 %}{% include "./modules/specifying-regions-zones-infrastructure-vsphere.md" %}{% endleveloffset %}

**Additional resources**

*   [Parameters for the cluster-wide infrastructure CRD](/installing/installing_vsphere/post-install-vsphere-zones-regions-configuration#references-regions-zones-infrastructure-vsphere_post-install-vsphere-zones-regions-configuration)

{% leveloffset +1 %}{% include "./modules/vsphere-enabling-multiple-layer2-networks.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing a cluster on vSphere with network customizations](/installing/installing_vsphere/upi/installing-vsphere-network-customizations#installing-vsphere-network-customizations)
*   [Creating a compute machine set](/machine_management/creating_machinesets/creating-machineset-vsphere#machineset-creating_creating-machineset-vsphere)

{% leveloffset +1 %}{% include "./modules/references-regions-zones-infrastructure-vsphere.md" %}{% endleveloffset %}

**Additional resources**

*   [Specifying multiple regions and zones for your cluster on vSphere](/installing/installing_vsphere/post-install-vsphere-zones-regions-configuration#specifying-regions-zones-infrastructure-vsphere_post-install-vsphere-zones-regions-configuration)

{% leveloffset +1 %}{% include "./modules/specifying-host-groups-vsphere.md" %}{% endleveloffset %}