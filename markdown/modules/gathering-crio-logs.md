{%- set _mod_docs_content_type = "PROCEDURE" %}
# Gathering CRI-O journald unit logs {id="gathering-crio-logs_{{ context }}"}

If you experience CRI-O issues, you can obtain CRI-O journald unit logs from a node. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   Your API service is still functional.
*   You have installed the OpenShift CLI (`oc`).
*   You have the fully qualified domain names of the control plane or control plane machines.

**Procedure**

1.  Gather CRI-O journald unit logs. The following example collects logs from all control plane nodes (within the cluster:
    ```terminal
    $ oc adm node-logs --role=master -u crio
    ```
1.  Gather CRI-O journald unit logs from a specific node:
    ```terminal
    $ oc adm node-logs <node_name> -u crio
    ```
1.  If the API is not functional, review the logs using SSH instead. Replace `<node>.<cluster_name>.<base_domain>` with appropriate values:
    ```terminal
    $ ssh core@<node>.<cluster_name>.<base_domain> journalctl -b -f -u crio.service
    ```

    :::note

    {{ product_title }} {{ product_version }} cluster nodes running {{ op_system_first }} are immutable and rely on Operators to apply cluster changes. Accessing cluster nodes by using SSH is not recommended. Before attempting to collect diagnostic data over SSH, review whether the data collected by running `oc adm must gather` and other `oc` commands is sufficient instead. However, if the {{ product_title }} API is not available, or the kubelet is not properly functioning on the target node, `oc` operations will be impacted. In such situations, it is possible to access nodes using `ssh core@<node>.<cluster_name>.<base_domain>`.
    
    :::