{%- set _mod_docs_content_type = "CONCEPT" %}
# Node labeling for {{ hcp }} {id="hcp-node-labeling_{{ context }}"}

Before you get started with {{ hcp }}, you must properly label nodes so that the pods of hosted clusters can be scheduled into infrastructure nodes.  {._abstract}

Node labeling is also important for the following reasons:

*   To ensure high availability and proper workload deployment. For example, to avoid having the control plane workload count toward your {{ product_title }} subscription, you can set the `node-role.kubernetes.io/infra` label.
*   To ensure that control plane workloads are separate from other workloads in the management cluster.
*   To ensure that control plane workloads are configured at the correct multi-tenancy distribution level for your deployment. The distribution levels are as follows:
    *   Everything shared: Control planes for hosted clusters can run on any node that is designated for control planes.
    *   Nothing shared: Every control plane has its own dedicated nodes.

For more information about dedicating a node to a single hosted cluster, see "Labeling management cluster nodes".