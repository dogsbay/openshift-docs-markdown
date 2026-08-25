{%- set _mod_docs_content_type = "PROCEDURE" %}
# Reviewing node status, resource usage, and configuration {id="reviewing-node-status-use-and-configuration_{{ context }}"}

Review cluster node health status, resource consumption statistics, and node logs. Additionally, query `kubelet` status on individual nodes. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

*   List the name, status, and role for all nodes in the cluster:
    ```terminal
    $ oc get nodes
    ```
*   Summarize CPU and memory usage for each node within the cluster:
    ```terminal
    $ oc adm top nodes
    ```
*   Summarize CPU and memory usage for a specific node:
    ```terminal
    $ oc adm top node my-node
    ```