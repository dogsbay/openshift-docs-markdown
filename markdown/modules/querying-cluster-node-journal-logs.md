{%- set _mod_docs_content_type = "PROCEDURE" %}
# Querying cluster node journal logs {id="querying-cluster-node-journal-logs_{{ context }}"}

You can gather `journald` unit logs and other logs within `/var/log` on individual cluster nodes. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
{%- if openshift_dedicated %}

    :::note

    In {{ product_title }} deployments, customers who are not using the Customer Cloud Subscription (CCS) model cannot use the `oc adm node-logs` command as it requires `cluster-admin` privileges.
    
    :::

{%- endif %}
*   You have installed the OpenShift CLI (`oc`).
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   Your API service is still functional.
*   You have SSH access to your hosts.
{% endif %}

**Procedure**

{% if not openshift_rosa_hcp %}
1.  Query `kubelet` `journald` unit logs from {{ product_title }} cluster nodes. The following example queries control plane nodes only:
    {% endif %}
    {% if openshift_rosa_hcp %}
    *   Query `kubelet` `journald` unit logs from {{ product_title }} cluster nodes. The following example queries worker nodes only:
        {%- endif %}
        {%- if not openshift_rosa_hcp %}
    ```terminal
    $ oc adm node-logs --role=master -u kubelet  (1)
    ```
{% endif %}
{% if openshift_rosa_hcp %}
    ```terminal
    $ oc adm node-logs --role=worker -u kubelet
    ```
{%- endif %}

    `kubelet`
    :   Replace as appropriate to query other unit logs.

{% if not openshift_rosa_hcp %}
1.  Collect logs from specific subdirectories under `/var/log/` on cluster nodes.
    1.  Retrieve a list of logs contained within a `/var/log/` subdirectory. The following example lists files in `/var/log/openshift-apiserver/` on all control plane nodes:
        ```terminal
        $ oc adm node-logs --role=master --path=openshift-apiserver
        ```
    1.  Inspect a specific log within a `/var/log/` subdirectory. The following example outputs `/var/log/openshift-apiserver/audit.log` contents from all control plane nodes:
        ```terminal
        $ oc adm node-logs --role=master --path=openshift-apiserver/audit.log
        ```
{% endif %}
{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
    1.  If the API is not functional, review the logs on each node using SSH instead. The following example tails `/var/log/openshift-apiserver/audit.log`:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> sudo tail -f /var/log/openshift-apiserver/audit.log
        ```

        :::note

        {{ product_title }} {{ product_version }} cluster nodes running {{ op_system_first }} are immutable and rely on Operators to apply cluster changes. Accessing cluster nodes by using SSH is not recommended. Before attempting to collect diagnostic data over SSH, review whether the data collected by running `oc adm must gather` and other `oc` commands is sufficient instead. However, if the {{ product_title }} API is not available, or the kubelet is not properly functioning on the target node, `oc` operations will be impacted. In such situations, it is possible to access nodes using `ssh core@<node>.<cluster_name>.<base_domain>`.
        
        :::

{% endif %}