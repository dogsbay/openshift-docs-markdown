{%- set _mod_docs_content_type = "PROCEDURE" %}
# Reviewing the cluster status from {{ cluster_manager_first }} {id="reviewing-cluster-status-from-the-openshift-cluster-manager_{{ context }}"}

From the {{ product_title }} web console, you can review detailed information about the status of your cluster on {{ cluster_manager }}. {._abstract}

**Prerequisites**

*   You have logged in to {{ cluster_manager_url }}.
*   You have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Go to the **Cluster List** in {{ cluster_manager_url }} and locate your {{ product_title }} cluster.
1.  Click the **Overview** tab for your cluster.
1.  Review the following information about your cluster:
    *   vCPU and memory availability and resource usage
    *   The cluster ID, status, type, region, and the provider name
    *   Node counts by node type
    *   Cluster version details, the creation date of the cluster, and the name of the cluster owner
    *   The life cycle support status of the cluster
    *   Subscription information, including the service level agreement (SLA) status, the subscription unit type, the production status of the cluster, the subscription obligation, and the service level

        :::tip

        To view the history for your cluster, click the **Cluster history** tab.
        
        :::

1.  Go to the **Monitoring** page to review the following information:
    *   A list of any issues that have been detected
    *   A list of alerts that are firing
    *   The cluster Operator status and version
    *   The cluster’s resource usage
1.  Optional: Go to the **Overview** menu to view information that {{ red_hat_lightspeed }} collects about your cluster:
    *   Potential issues that your cluster might be exposed to, categorized by risk level
    *   Health-check status by category