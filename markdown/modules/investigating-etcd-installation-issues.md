{%- set _mod_docs_content_type = "PROCEDURE" %}
# Investigating etcd installation issues {id="investigating-etcd-installation-issues_{{ context }}"}

If you experience etcd issues during installation, you can check etcd pod status and collect etcd pod logs. You can also verify etcd DNS records and check DNS availability on control plane nodes. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   You have installed the OpenShift CLI (`oc`).
*   You have SSH access to your hosts.
*   You have the fully qualified domain names of the control plane nodes.

**Procedure**

1.  Check the status of etcd pods.
    1.  Review the status of pods in the `openshift-etcd` namespace:
        ```terminal
        $ oc get pods -n openshift-etcd
        ```
    1.  Review the status of pods in the `openshift-etcd-operator` namespace:
        ```terminal
        $ oc get pods -n openshift-etcd-operator
        ```
1.  If any of the pods listed by the previous commands are not showing a `Running` or a `Completed` status, gather diagnostic information for the pod.
    1.  Review events for the pod:
        ```terminal
        $ oc describe pod/<pod_name> -n <namespace>
        ```
    1.  Inspect the pod’s logs:
        ```terminal
        $ oc logs pod/<pod_name> -n <namespace>
        ```
    1.  If the pod has more than one container, the preceding command will create an error, and the container names will be provided in the error message. Inspect logs for each container:
        ```terminal
        $ oc logs pod/<pod_name> -c <container_name> -n <namespace>
        ```
1.  If the API is not functional, review etcd pod and container logs on each control plane node by using SSH instead. Replace `<master-node>.<cluster_name>.<base_domain>` with appropriate values.
    1.  List etcd pods on each control plane node:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> sudo crictl pods --name=etcd-
        ```
    1.  For any pods not showing `Ready` status, inspect pod status in detail. Replace `<pod_id>` with the pod’s ID listed in the output of the preceding command:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> sudo crictl inspectp <pod_id>
        ```
    1.  List containers related to a pod:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> sudo crictl ps | grep '<pod_id>'
        ```
    1.  For any containers not showing `Ready` status, inspect container status in detail. Replace `<container_id>` with container IDs listed in the output of the preceding command:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> sudo crictl inspect <container_id>
        ```
    1.  Review the logs for any containers not showing a `Ready` status. Replace `<container_id>` with the container IDs listed in the output of the preceding command:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> sudo crictl logs -f <container_id>
        ```

        :::note

        {{ product_title }} {{ product_version }} cluster nodes running {{ op_system_first }} are immutable and rely on Operators to apply cluster changes. Accessing cluster nodes by using SSH is not recommended. Before attempting to collect diagnostic data over SSH, review whether the data collected by running `oc adm must gather` and other `oc` commands is sufficient instead. However, if the {{ product_title }} API is not available, or the kubelet is not properly functioning on the target node, `oc` operations will be impacted. In such situations, it is possible to access nodes using `ssh core@<node>.<cluster_name>.<base_domain>`.
        
        :::

1.  Validate primary and secondary DNS server connectivity from control plane nodes.