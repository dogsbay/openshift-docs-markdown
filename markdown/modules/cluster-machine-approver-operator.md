{%- set _mod_docs_content_type = "REFERENCE" %}
# Cluster Machine Approver Operator {id="cluster-machine-approver-operator_{{ context }}"}

The Cluster Machine Approver Operator automatically approves the CSRs requested for a new worker node after cluster installation. {._abstract}


:::note

For the control plane node, the `approve-csr` service on the bootstrap node automatically approves all CSRs during the cluster bootstrapping phase.

:::