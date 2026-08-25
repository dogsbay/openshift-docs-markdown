---
title: Using CPU Manager and Topology Manager
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using CPU Manager and Topology Manager {id="using-cpu-manager"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "using-cpu-manager-and-topology-manager" %}

CPU Manager manages groups of CPUs and constrains workloads to specific CPUs.

CPU Manager is useful for workloads that have some of these attributes:

*   Require as much CPU time as possible.
*   Are sensitive to processor cache misses.
*   Are low-latency network applications.
*   Coordinate with other processes and benefit from sharing a single processor
cache.

Topology Manager collects hints from the CPU Manager, Device Manager, and other Hint Providers to align pod resources, such as CPU, SR-IOV VFs, and other device resources, for all Quality of Service (QoS) classes on the same non-uniform memory access (NUMA) node.

Topology Manager uses topology information from the collected hints to decide if a pod can be accepted or rejected on a node, based on the configured Topology Manager policy and pod resources requested.

Topology Manager is useful for workloads that use hardware accelerators to support latency-critical execution and high throughput parallel computation.

To use Topology Manager you must configure CPU Manager with the `static` policy.

{% leveloffset +1 %}{% include "./modules/setting-up-cpu-manager.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/topology-manager-policies.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/setting-up-topology-manager.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/pod-interactions-with-topology-manager.md" %}{% endleveloffset %}

**Additional resources**

*   [Topology Manager policies](/scalability_and_performance/using-cpu-manager#topology-manager-policies_using-cpu-manager-and-topology-manager)