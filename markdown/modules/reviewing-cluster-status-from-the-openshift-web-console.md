{%- set _mod_docs_content_type = "PROCEDURE" %}
# Reviewing the cluster status from the {{ product_title }} web console {id="reviewing-cluster-status-from-the-openshift-web-console_{{ context }}"}

You can view specific information in the **Overview** page in the {{ product_title }} web console. {._abstract}

The **Overview** page displays the following information:

*   The general status of your cluster
*   The status of the control plane, cluster Operators, and storage
*   CPU, memory, file system, network transfer, and pod availability
*   The API address of the cluster, the cluster ID, and the name of the provider
*   Cluster version information
*   Cluster update status, including details of the current update channel and available updates
*   A cluster inventory detailing node, pod, storage class, and persistent volume claim (PVC) information
*   A list of ongoing cluster activities and recent events

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

*   Navigate to **Home** -> **Overview**.