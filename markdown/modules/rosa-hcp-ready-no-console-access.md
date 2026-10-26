{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verify access to {{ product_title }} web console for {{ product_title }} cluster in ready state {id="rosa-hcp-ready-no-console-access_{{ context }}"}

Even when a {{ product_title }} cluster returns a `ready` status, the web console is not accessible until the worker nodes have joined the cluster and the console workloads are running. {._abstract}

{{ product_title }} clusters return a `ready` status when the control plane hosted in the {{ product_title }} service account becomes ready. Cluster console workloads are deployed on the cluster’s worker nodes.

**Procedure**

*   If your {{ product_title }} cluster is ready but you are unable to access the {{ product_title }} web console for the cluster, wait for the worker nodes to join the cluster and retry accessing the console.

    You can either log in to the {{ product_title }} cluster or use the `rosa describe machinepool` command in the `rosa` CLI watch the nodes.