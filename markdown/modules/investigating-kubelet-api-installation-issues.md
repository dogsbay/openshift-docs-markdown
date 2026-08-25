{%- set _mod_docs_content_type = "PROCEDURE" %}
# Investigating control plane node kubelet and API server issues {id="investigating-kubelet-api-installation-issues_{{ context }}"}

To investigate control plane node kubelet and API server issues during installation, check DNS, DHCP, and load balancer functionality. Also, verify that certificates have not expired. {._abstract}

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

1.  Verify that the API server’s DNS record directs the kubelet on control plane nodes to `https://api-int.<cluster_name>.<base_domain>:6443`. Ensure that the record references the load balancer.
1.  Ensure that the load balancer’s port 6443 definition references each control plane node.
1.  Check that unique control plane node hostnames have been provided by DHCP.
1.  Inspect the `kubelet.service` journald unit logs on each control plane node.
    1.  Retrieve the logs using `oc`:
        ```terminal
        $ oc adm node-logs --role=master -u kubelet
        ```
    1.  If the API is not functional, review the logs using SSH instead. Replace `<master-node>.<cluster_name>.<base_domain>` with appropriate values:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> journalctl -b -f -u kubelet.service
        ```

        :::note

        {{ product_title }} {{ product_version }} cluster nodes running {{ op_system_first }} are immutable and rely on Operators to apply cluster changes. Accessing cluster nodes by using SSH is not recommended. Before attempting to collect diagnostic data over SSH, review whether the data collected by running `oc adm must gather` and other `oc` commands is sufficient instead. However, if the {{ product_title }} API is not available, or the kubelet is not properly functioning on the target node, `oc` operations will be impacted. In such situations, it is possible to access nodes using `ssh core@<node>.<cluster_name>.<base_domain>`.
        
        :::

1.  Check for certificate expiration messages in the control plane node kubelet logs.
    1.  Retrieve the log using `oc`:
        ```terminal
        $ oc adm node-logs --role=master -u kubelet | grep -is 'x509: certificate has expired'
        ```
    1.  If the API is not functional, review the logs using SSH instead. Replace `<master-node>.<cluster_name>.<base_domain>` with appropriate values:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> journalctl -b -f -u kubelet.service  | grep -is 'x509: certificate has expired'
        ```