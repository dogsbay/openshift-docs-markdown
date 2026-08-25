{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting HostedCluster resource stuck in a partial state {id="hcp-ts-hc-stuck_{{ context }}"}

If a hosted control plane is not coming fully online because a `HostedCluster` resource is pending, identify the problem by checking prerequisites, resource conditions, and node and Operator status. {._abstract}

**Procedure**

*   Ensure that you meet all of the prerequisites for a hosted cluster on {{ VirtProductName }}.
*   View the conditions on the `HostedCluster` and `NodePool` resources for validation errors that prevent progress.
*   By using the `kubeconfig` file of the hosted cluster, inspect the status of the hosted cluster:
    *   View the output of the `oc get clusteroperators` command to see which cluster Operators are pending.
    *   View the output of the `oc get nodes` command to ensure that worker nodes are ready.