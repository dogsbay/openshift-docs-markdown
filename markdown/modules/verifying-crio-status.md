{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying CRI-O runtime engine status {id="verifying-crio-status_{{ context }}"}

You can verify CRI-O container runtime engine status on each cluster node. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Review CRI-O status by querying the `crio` systemd service on a node, within a debug pod.
    1.  Start a debug pod for a node:
        ```terminal
        $ oc debug node/my-node
        ```
    1.  Set `/host` as the root directory within the debug shell. The debug pod mounts the host’s root file system in `/host` within the pod. By changing the root directory to `/host`, you can run binaries contained in the host’s executable paths:
        ```terminal
        # chroot /host
        ```

        :::note

        {{ product_title }} {{ product_version }} cluster nodes running {{ op_system_first }} are immutable and rely on Operators to apply cluster changes. Accessing cluster nodes by using SSH is not recommended. However, if the {{ product_title }} API is not available, or the kubelet is not properly functioning on the target node, `oc` operations will be impacted. In such situations, it is possible to access nodes using `ssh core@<node>.<cluster_name>.<base_domain>` instead.
        
        :::

    1.  Check whether the `crio` systemd service is active on the node:
        ```terminal
        # systemctl is-active crio
        ```
    1.  Output a more detailed `crio.service` status summary:
        ```terminal
        # systemctl status crio.service
        ```