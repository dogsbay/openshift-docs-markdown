{%- set _mod_docs_content_type = "CONCEPT" %}
# Cluster data collection {id="support-gather-data-cluster_{{ context }}"}

Diagnostic tools and system logs provide the critical debugging information that the Red Hat Support team requires to troubleshoot and resolve cluster issues. {._abstract}

A cluster administrator can use the following to gather data about your cluster:

*   **must-gather tool**: Use the `must-gather` tool to collect information about your cluster and to debug the issues.
*   **sosreport**:  Use the `sosreport` tool to collect configuration details, system information, and diagnostic data for debugging purposes.
*   **Cluster ID**: Obtain the unique identifier for your cluster, when providing information to Red Hat Support.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   **Bootstrap node journal logs**: Gather `bootkube.service` `journald` unit logs and container logs from the bootstrap node to troubleshoot bootstrap-related issues.
{%- endif %}
*   **Cluster node journal logs**: Gather `journald` unit logs and logs within `/var/log` on individual cluster nodes to troubleshoot node-related issues.
*   **Network trace**: Provide a network packet trace from a specific {{ product_title }} cluster node or a container to Red Hat Support to help troubleshoot network-related issues.