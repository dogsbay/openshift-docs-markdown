---
title: "Sizing guidance for {{ hcp }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Sizing guidance for {{ hcp }} {id="hcp-sizing-guidance"}
{%- set context = "hcp-sizing-guidance" %}

Many factors, including hosted cluster workload and worker node count, affect how many hosted control planes can fit within a certain number of worker nodes. 

Use this sizing guide to help with hosted cluster capacity planning. 

This guidance assumes a highly available {{ hcp }} topology. The load-based sizing examples were measured on a bare-metal cluster. Cloud-based instances might have different limiting factors, such as memory size.

You can override the following resource utilization sizing measurements and disable the metric service monitoring.

See the following highly available {{ hcp }} requirements, which were tested with {{ product_title }} version 4.12.9 and later:

*   78 pods
*   Three 8 GiB PVs for etcd
*   Minimum vCPU: approximately 5.5 cores
*   Minimum memory: approximately 19 GiB

**Additional resources**

*   [Overriding resource utilization measurements](/hosted_control_planes/hcp-prepare/hcp-override-resource-util#hcp-override-resource-util)
*   [Distributing hosted cluster workloads](/hosted_control_planes/hcp-prepare/hcp-distribute-workloads#hcp-distribute-workloads)

{% leveloffset +1 %}{% include "./modules/hcp-pod-limits.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring the maximum number of pods per node](/nodes/nodes/nodes-nodes-managing-max-pods#nodes-nodes-managing-max-pods-proc_nodes-nodes-managing-max-pods)

{% leveloffset +1 %}{% include "./modules/hcp-resource-limit.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-load-based-limit.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-sizing-calculation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-shared-infra.md" %}{% endleveloffset %}

**Additional resources**

*   [Sizing guidance for {{ hcp }}](/hosted_control_planes/hcp-prepare/hcp-sizing-guidance#hcp-sizing-guidance)