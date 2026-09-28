{%- set _mod_docs_content_type = "CONCEPT" %}
# Discover and label hardware features on nodes {id="discover-and-label-hardware-features-on-nodes-con_{{ context }}"}

The Node Feature Discovery (NFD) Operator detects hardware features such as GPUs, SR-IOV capable network devices, and CPU instruction sets, and labels the nodes that provide them. The scheduler can then place workloads on nodes that have the hardware those workloads require.