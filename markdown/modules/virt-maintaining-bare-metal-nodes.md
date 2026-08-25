{%- set _mod_docs_content_type = "CONCEPT" %}
# Maintaining bare-metal nodes {id="virt-maintaining-bare-metal-nodes_{{ context }}"}

When you deploy {{ product_title }} on bare metal infrastructure, there are additional considerations that must be taken into account compared to deploying on cloud infrastructure. {._abstract}

Unlike in cloud environments where the cluster nodes are considered ephemeral, re-provisioning a bare-metal node requires significantly more time and effort for maintenance tasks.

When a bare-metal node fails, for example, if a an unrecoverable kernel error happens or a NIC card hardware failure occurs, workloads on the failed node need to be restarted elsewhere else on the cluster while the problem node is repaired or replaced. Node maintenance mode allows cluster administrators to gracefully power down nodes, moving workloads to other parts of the cluster and ensuring workloads do not get interrupted. Detailed progress and node status details are provided during maintenance.