---
title: Running background tasks on nodes automatically with daemon sets
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-pods-daemonsets" %}
{% include "./_attributes/common-attributes.md" %}
# Running background tasks on nodes automatically with daemon sets {id="nodes-pods-daemonsets"}

Daemon sets ensure that pods run on all or specific nodes in a cluster, enabling cluster-wide services such as logging agents, monitoring tools, and shared storage that must be present on every node. {._abstract}

As an administrator, you can create and use daemon sets to run replicas of a pod on specific or all nodes in
{%- if not (openshift_rosa or openshift_rosa_hcp) %}
an {{ product_title }} cluster.
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp %}
a {{ product_title }} cluster.
{%- endif %}

A daemon set ensures that all (or some) nodes run a copy of a pod. As nodes are added to the cluster, pods are added to the cluster.
As nodes are removed from the cluster, those pods are removed through garbage collection. Deleting a daemon set cleans up the pods it created.

You can use daemon sets to create shared storage, run a logging pod on every node in
your cluster, or deploy a monitoring agent on every node.

For security reasons, the cluster administrators and the project administrators can create daemon sets.


:::important

Daemon set scheduling is incompatible with the project’s default node selector.
If you fail to disable it, the daemon set gets restricted by merging with the default node selector.
This results in frequent pod recreates on the nodes that got unselected by the merged node selector, which in turn puts unwanted load on the cluster.

:::


{% leveloffset +1 %}{% include "./modules/nodes-pods-daemonsets-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-daemonsets-creating.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Kubernetes documentation about daemon sets](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)