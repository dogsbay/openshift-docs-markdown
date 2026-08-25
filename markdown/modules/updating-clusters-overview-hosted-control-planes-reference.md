{%- set _mod_docs_content_type = "REFERENCE" %}
# Updating {{ hcp }} {id="updating-clusters-overview-hosted-control-planes_{{ context }}"}

Updates for {{ hcp }} are decoupled between the control plane and the nodes. {._abstract}

[Updating {{ hcp }}](/hosted_control_planes/hcp-updating#hcp-updating_hcp-updating): On {{ hcp }} for {{ product_title }}, updates are decoupled between the control plane and the nodes. Your service cluster provider, which is the user that hosts the cluster control planes, can manage the updates as needed. The hosted cluster handles control plane updates, and node pools handle node updates. For more information, see the following information:

*   [Updates for the hosted cluster](/hosted_control_planes/hcp-updating#hcp-updates-hosted-cluster_hcp-updating)
*   [Updating node pools in a hosted cluster](/hosted_control_planes/hcp-updating#hcp-update-node-pools_hcp-updating)