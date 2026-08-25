---
title: Configuring an RDMA subsystem for SR-IOV
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring an RDMA subsystem for SR-IOV {id="configuring-sriov-rdma-cni"}
{%- set context = "configuring-sriov-rdma-cni" %}

Remote Direct Memory Access (RDMA) allows direct memory access between two systems without involving the operating system of either system.
You can configure an RDMA Container Network Interface (CNI) on Single Root I/O Virtualization (SR-IOV) to enable high-performance, low-latency communication between containers.
When you combine RDMA with SR-IOV, you provide a mechanism to expose hardware counters of Mellanox Ethernet devices for use inside  Data Plane Development Kit (DPDK)    applications. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-configuring-sriov-rdma-cni.md" %}{% endleveloffset %}