{%- set _mod_docs_content_type = "REFERENCE" %}
# Node operations {id="nodes-overview-nodes-operations-reference_{{ context }}"}

Find procedures for reading, managing, and enhancing nodes in an {{ product_title }} cluster. {._abstract}

{% if openshift_rosa %}
*   [Node lifecycle](/rosa_architecture/rosa_policy_service_definition/rosa-service-definition#rosa-sdpolicy-node-lifecycle_rosa-service-definition)
{% endif %}
{% if openshift_rosa_hcp %}
*   [Node lifecycle](/rosa_architecture/rosa_policy_service_definition/rosa-hcp-service-definition#rosa-sdpolicy-node-lifecycle_rosa-hcp-service-definition)
{% endif %}

## Read operations {id="_read_operations"}

The read operations allow an administrator or a developer to get information about nodes in an {{ product_title }} cluster.

*   [List all the nodes in a cluster](/nodes/nodes/nodes-nodes-viewing#nodes-nodes-viewing-listing_nodes-nodes-viewing).
*   Get information about a node, such as memory and CPU usage, health, status, and age.
*   [List pods running on a node](/nodes/nodes/nodes-nodes-viewing#nodes-nodes-viewing-listing-pods_nodes-nodes-viewing).

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

## Management operations {id="_management_operations"}

As an administrator, you can easily manage a node in an {{ product_title }} cluster
through several tasks:

*   [Add or update node labels](/nodes/nodes/nodes-nodes-working#nodes-nodes-working-updating_nodes-nodes-working). A label is a key-value pair applied to a `Node` object. You can control the scheduling of pods using labels.
*   Change node configuration using a custom resource definition (CRD), or the `kubeletConfig` object.
*   Configure nodes to allow or disallow the scheduling of pods. Healthy worker nodes with a `Ready` status allow pod placement by default while the control plane nodes do not; you can change this default behavior by [configuring the worker nodes to be unschedulable](/nodes/nodes/nodes-nodes-working#nodes-nodes-working-marking_nodes-nodes-working) and [the control plane nodes to be schedulable](/nodes/nodes/nodes-nodes-working#nodes-nodes-working-marking_nodes-nodes-working).
*   [Allocate resources for nodes](/nodes/nodes/nodes-nodes-resources-configuring#nodes-nodes-resources-configuring) using the `system-reserved` setting. You can allow {{ product_title }} to automatically determine the optimal `system-reserved` CPU and memory resources for your nodes, or you can manually determine and set the best resources for your nodes.
*   [Configure the number of pods that can run on a node](/nodes/nodes/nodes-nodes-managing-max-pods#nodes-nodes-managing-max-pods-proc_nodes-nodes-managing-max-pods) based on the number of processor cores on the node, a hard limit, or both.
*   Reboot a node gracefully using [pod anti-affinity](/nodes/nodes/nodes-nodes-rebooting#nodes-nodes-rebooting-affinity_nodes-nodes-rebooting).
*   [Delete a node from a cluster](/nodes/nodes/nodes-nodes-working#nodes-nodes-working-deleting_nodes-nodes-working) by scaling down the cluster using a compute machine set. To delete a node from a bare-metal cluster, you must first drain all pods on the node and then manually delete the node.
{% endif %}

## Enhancement operations {id="_enhancement_operations"}

{{ product_title }} allows you to do more than just access and manage nodes; as an administrator, you can perform the following tasks on nodes to make the cluster more efficient, application-friendly, and to provide a better environment for your developers.

*   Manage node-level tuning for high-performance applications that require some level of kernel tuning by [using the Node Tuning Operator](/nodes/nodes/nodes-node-tuning-operator#nodes-node-tuning-operator).
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   Enable TLS security profiles on the node to protect communication between the kubelet and the Kubernetes API server.
{%- endif %}
*   [Run background tasks on nodes automatically with daemon sets](/nodes/jobs/nodes-pods-daemonsets#nodes-pods-daemonsets). You can create and use daemon sets to create shared storage, run a logging pod on every node, or deploy a monitoring agent on all nodes.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Free node resources using garbage collection](/nodes/nodes/nodes-nodes-garbage-collection#nodes-nodes-garbage-collection). You can ensure that your nodes are running efficiently by removing terminated containers and the images not referenced by any running pods.
*   [Add kernel arguments to a set of nodes](/nodes/nodes/nodes-nodes-managing#nodes-nodes-kernel-arguments_nodes-nodes-managing).
*   Configure an {{ product_title }} cluster to have worker nodes at the network edge (remote worker nodes). For information on the challenges of having remote worker nodes in an {{ product_title }} cluster and some recommended approaches for managing pods on a remote worker node, see [Using remote worker nodes at the network edge](/nodes/edge/nodes-edge-remote-workers#nodes-edge-remote-workers).
{%- endif %}