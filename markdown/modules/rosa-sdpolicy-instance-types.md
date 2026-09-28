{%- set _mod_docs_content_type = "CONCEPT" %}
# Instance types {id="rosa-sdpolicy-instance-types_{{ context }}"}

{% if openshift_rosa_hcp %}
All {{ product_title }} clusters require a minimum of two worker nodes. Shutting down the underlying (EC2 instance) infrastructure through the cloud provider console is unsupported and can lead to data loss and other risks.
{% endif %}
{% if not openshift_rosa_hcp %}
Single availability zone clusters require a minimum of three control plane nodes, two infrastructure nodes, and two worker nodes deployed to a single availability zone.

Multiple availability zone clusters require a minimum of three control plane nodes, three infrastructure nodes, and three worker nodes.

Consider the following limitations when deploying and managing workloads:

*   You must deploy workloads on worker nodes that exist in the cluster by using {{ product_title }} machine pools.
*   Run workloads that you consider essential on the control plane and infrastructure nodes as daemonsets.
*   You must ensure that any workloads running on these nodes are secure, scalable, and compatible with a version of {{ product_title }}, so that the Service Level Agreement (SLA) for API server availability is not impacted.

Red&#160;Hat might notify you and resize the control plane or infrastructure nodes if the {{ product_title }} components are impacted.

Control plane and infrastructure nodes are deployed and managed by Red&#160;Hat. These nodes are automatically resized based on the resource use. If you need to resize these nodes to meet cluster demands, open a support case.


:::warning

Shutting down the underlying infrastructure through the cloud provider console is unsupported and can lead to data loss.

:::


See the following Red&#160;Hat Operator support section for more information about Red&#160;Hat workloads that must be deployed on worker nodes.
{% endif %}


:::note

Approximately one vCPU core and 1 GiB of memory are reserved on each worker node and removed from allocatable resources. This reservation of resources is necessary to run processes required by the underlying platform. These processes include system daemons such as udev, kubelet, and container runtime among others. The reserved resources also account for kernel reservations.

{{ product_title }} core systems such as audit log aggregation, metrics collection, DNS, image registry, CNI/OVN-Kubernetes, and others might consume additional allocatable resources to maintain the stability and maintainability of the cluster. The additional resources consumed might vary based on usage.

For additional information, see the [Kubernetes documentation](https://kubernetes.io/docs/tasks/administer-cluster/reserve-compute-resources/#system-reserved).

:::