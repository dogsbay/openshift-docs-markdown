{%- set _mod_docs_content_type = "CONCEPT" %}
# Topology-aware scheduler scalability {id="cnf-topology-aware-scheduler-scalability_{{ context }}"}

You can scale the NUMA-aware secondary scheduler to support clusters with up to 500 nodes.
Understanding how the scheduler consumes resources at scale helps you size your control plane correctly and avoid resource exhaustion during cluster growth. {._abstract}

The NUMA-aware secondary scheduler relies on the `NodeResourceTopology` custom resource (CR) to track per-node NUMA zone availability.
As the number of nodes in a cluster increases, the scheduler must process a larger set of `NodeResourceTopology` objects during each scheduling cycle.
This relationship between node count, cache refresh interval, and scheduling latency determines the scalability profile of the scheduler.

From {{ product_title }} 4.22, the NUMA-aware scheduler pod defaults to `Burstable` quality of service (QoS), which reduces baseline resource consumption while allowing the scheduler to scale up in larger clusters. Switching to `Guaranteed` QoS is generally not recommended because it mandates a higher resource commitment that can unnecessarily constrain the control plane.

When high availability (HA) mode is enabled, the NUMA Resources Operator deploys multiple scheduler replicas across the control plane nodes to ensure redundancy.