{%- set _mod_docs_content_type = "CONCEPT" %}
# Potential points of failure {id="rosa-policy-failure-points_{{ context }}"}

{{ product_title }} protects workloads at multiple infrastructure levels and can further protect you against many common Kubernetes issues given Red&#160;Hat Site Reliability Engineering (SRE) support and the option to deploy machine pools into more than one availability zone. {._abstract}

But outages can still occur at the container, worker node, cluster, zone, or storage level. By understanding potential points of failure, you can assess risks and appropriately architect your applications and clusters to handle each failure type.

{% if openshift_rosa or openshift_rosa_hcp %}
{% include "./snippets/rosa-node-lifecycle.md" %}
{% endif %}

## Container or pod failure {id="rosa-policy-container-pod-failure_{{ context }}"}
By design, pods are meant to exist for a short time. Appropriately scaling services so that multiple instances of your application pods are running can protect against issues with any individual pod or container. The {{ OCP_short }} node scheduler can also make sure these workloads are distributed across different worker nodes to further improve resiliency.

When accounting for possible pod failures, it is also important to understand how storage is attached to your applications. Single persistent volumes attached to single pods cannot leverage the full benefits of pod scaling, whereas replicated databases, database services, or shared storage can.

To avoid disruption to your applications during planned maintenance, such as upgrades, it is important to define a Pod Disruption Budget. These are part of the Kubernetes API and can be managed with `oc` commands such as other object types. They allow for the specification of safety constraints on pods during operations, such as draining a node for maintenance.

## Worker node failure {id="rosa-policy-worker-node-failure_{{ context }}"}
Worker nodes are the virtual machines (VMs) that contain your application pods. By default, a {{ product_title }} cluster has a minimum of two worker nodes for a cluster. In case of a worker node failure, pods are relocated to functioning worker nodes, if there is enough capacity, until any issue with an existing node is resolved or the node is replaced. More worker nodes means more protection against single-node outages, and ensures proper cluster capacity for rescheduled pods in case of a node failure.


:::note

When accounting for possible node failures, it is also important to understand how storage is affected. Amazon Elastic File System (EFS) volumes are not affected by node failure. However, Amazon Elastic Block Store (EBS) volumes are not accessible if they are connected to a node that fails.

:::


{% if not openshift_rosa_hcp %}
## Cluster failure {id="rosa-policy-container-cluster-failure_{{ context }}"}
Single-AZ {{ product_title }} clusters have three control plane nodes and two infrastructure nodes in the same availability zone (AZ) in the private subnet.

Multi-AZ {{ product_title }} clusters have three control plane nodes and three infrastructure nodes that are preconfigured for high availability, one in each AZ. Control plane and infrastructure nodes have the same resiliency as worker nodes, with the added benefit of being managed completely by Red&#160;Hat.

If a complete control plane outage occurs, the {{ OCP_short }} APIs will not function, and existing worker node pods are unaffected. However, if there is also a pod or node outage at the same time, the control planes must recover before new pods or nodes can be added or scheduled.

All services running on infrastructure nodes are configured by Red&#160;Hat to be highly available and distributed across infrastructure nodes. In case of a complete infrastructure outage, these services are unavailable until these nodes have been recovered.
{% endif %}

## Zone failure {id="rosa-policy-container-zone-failure_{{ context }}"}
A zone failure from AWS affects all virtual components, such as worker nodes, block or shared storage, and load balancers that are specific to a single availability zone. To protect against a zone failure, {{ product_title }} provides the option for machine pools that are deployed across three availability zones. Existing stateless workloads are then redistributed to unaffected zones in case of an outage if there is enough capacity.

## Storage failure {id="rosa-policy-container-storage-failure_{{ context }}"}
If you have deployed a stateful application, then storage is a critical component and must be accounted for when thinking about high availability. A single block storage PV is unable to withstand outages even at the pod level. The best ways to maintain availability of storage are to use replicated storage solutions, shared storage that is unaffected by outages, or a database service that is independent of the cluster.