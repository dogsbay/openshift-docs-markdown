{%- set _mod_docs_content_type = "PROCEDURE" %}
# Querying the kubelet’s status on a node {id="querying-kubelet-status-on-a-node_{{ context }}"}

You can review cluster node health status, resource consumption statistics, and node logs. Additionally, you can query `kubelet` status on individual nodes. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   Your API service is still functional.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  The kubelet is managed using a systemd service on each node. Review the kubelet’s status by querying the `kubelet` systemd service within a debug pod.
    1.  Start a debug pod for a node:
        ```terminal
        $ oc debug node/my-node
        ```

        :::note

        If you are running `oc debug` on a control plane node, you can find administrative `kubeconfig` files in the `/etc/kubernetes/static-pod-resources/kube-apiserver-certs/secrets/node-kubeconfigs` directory.
        
        :::

    1.  Set `/host` as the root directory within the debug shell. The debug pod mounts the host’s root file system in `/host` within the pod. By changing the root directory to `/host`, you can run binaries contained in the host’s executable paths:
        ```terminal
        # chroot /host
        ```

        :::note

        {{ product_title }} {{ product_version }} cluster nodes running {{ op_system_first }} are immutable and rely on Operators to apply cluster changes. Accessing cluster nodes by using SSH is not recommended. However, if the {{ product_title }} API is not available, or `kubelet` is not properly functioning on the target node, `oc` operations will be impacted. In such situations, it is possible to access nodes using `ssh core@<node>.<cluster_name>.<base_domain>` instead.
        
        :::

    1.  Check whether the `kubelet` systemd service is active on the node:
        ```terminal
        # systemctl is-active kubelet
        ```
    1.  Output a more detailed `kubelet.service` status summary:
        ```terminal
        # systemctl status kubelet
        ```