{%- set _mod_docs_content_type = "PROCEDURE" %}
# Gathering Operator logs {id="gathering-operator-logs_{{ context }}"}

If you experience Operator issues, you can gather detailed diagnostic information from Operator pod logs. {._abstract}

**Prerequisites**

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   Your API service is still functional.
*   You have installed the OpenShift CLI (`oc`).
*   You have the fully qualified domain names of the control plane or control plane machines.

**Procedure**

1.  List the Operator pods that are running in the Operator’s namespace, plus the pod status, restarts, and age:
    ```terminal
    $ oc get pods -n <operator_namespace>
    ```
1.  Review logs for an Operator pod:
    ```terminal
    $ oc logs pod/<pod_name> -n <operator_namespace>
    ```

    If an Operator pod has multiple containers, the preceding command will produce an error that includes the name of each container. Query logs from an individual container:
    ```terminal
    $ oc logs pod/<operator_pod_name> -c <container_name> -n <operator_namespace>
    ```
{%- if not openshift_rosa_hcp %}
1.  If the API is not functional, review Operator pod and container logs on each control plane node by using SSH instead. Replace `<master-node>.<cluster_name>.<base_domain>` with appropriate values.
    1.  List pods on each control plane node:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> sudo crictl pods
        ```
    1.  For any Operator pods not showing a `Ready` status, inspect the pod’s status in detail. Replace `<operator_pod_id>` with the Operator pod’s ID listed in the output of the preceding command:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> sudo crictl inspectp <operator_pod_id>
        ```
    1.  List containers related to an Operator pod:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> sudo crictl ps --pod=<operator_pod_id>
        ```
    1.  For any Operator container not showing a `Ready` status, inspect the container’s status in detail. Replace `<container_id>` with a container ID listed in the output of the preceding command:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> sudo crictl inspect <container_id>
        ```
    1.  Review the logs for any Operator containers not showing a `Ready` status. Replace `<container_id>` with a container ID listed in the output of the preceding command:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> sudo crictl logs -f <container_id>
        ```

        :::note

        {{ product_title }} {{ product_version }} cluster nodes running {{ op_system_first }} are immutable and rely on Operators to apply cluster changes. Accessing cluster nodes by using SSH is not recommended. Before attempting to collect diagnostic data over SSH, review whether the data collected by running `oc adm must gather` and other `oc` commands is sufficient instead. However, if the {{ product_title }} API is not available, or the kubelet is not properly functioning on the target node, `oc` operations will be impacted. In such situations, it is possible to access nodes using `ssh core@<node>.<cluster_name>.<base_domain>`.
        
        :::

{% endif %}