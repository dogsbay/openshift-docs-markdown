---
title: Using DPDK with SR-IOV
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using DPDK with SR-IOV {id="virt-using-dpdk-with-sriov"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-using-dpdk-with-sriov" %}

The Data Plane Development Kit (DPDK) provides a set of libraries and drivers for fast packet processing. You can configure clusters and virtual machines (VMs) to run ultra-low latency packet processing workloads by using DPDK drivers with SR-IOV hardware.

{% leveloffset +1 %}{% include "./modules/virt-configuring-cluster-dpdk.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-removing-custom-mcp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configuring-vm-project-dpdk.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configuring-vm-dpdk.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Using CPU Manager and Topology Manager](/scalability_and_performance/using-cpu-manager#using-cpu-manager)
*   [Optimizing memory management for workloads by using huge pages](/scalability_and_performance/what-huge-pages-do-and-how-they-are-consumed-by-apps#what-huge-pages-do-and-how-they-are-consumed)
*   [Creating a custom machine config pool](https://access.redhat.com/solutions/5688941)
{%- endif %}
*   [Working with projects](/applications/projects/working-with-projects#working-with-projects)