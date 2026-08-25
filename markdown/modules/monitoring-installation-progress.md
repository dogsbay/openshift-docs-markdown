{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitoring installation progress {id="monitoring-installation-progress_{{ context }}"}

You can monitor high-level installation, bootstrap, and control plane logs as an {{ product_title }} installation progresses. This provides greater visibility into how an installation progresses and helps identify the stage at which an installation failure occurs. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have installed the {{ oc_first }}.
*   You have SSH access to your hosts.
*   You have the fully qualified domain names of the bootstrap and control plane nodes.

    :::note

    The initial `kubeadmin` password can be found in `<install_directory>/auth/kubeadmin-password` on the installation host.
    
    :::


**Procedure**

1.  Watch the installation log as the installation progresses:
    ```terminal
    $ tail -f ~/<installation_directory>/.openshift_install.log
    ```
1.  Monitor the `bootkube.service` journald unit log on the bootstrap node, after it has booted. This provides visibility into the bootstrapping of the first control plane. Replace `<bootstrap_fqdn>` with the bootstrap node’s fully qualified domain name:
    ```terminal
    $ ssh core@<bootstrap_fqdn> journalctl -b -f -u bootkube.service
    ```

    :::note

    The `bootkube.service` log on the bootstrap node outputs etcd `connection refused` errors, indicating that the bootstrap server is unable to connect to etcd on control plane nodes. After etcd has started on each control plane node and the nodes have joined the cluster, the errors should stop.
    
    :::

1.  Monitor `kubelet.service` journald unit logs on control plane nodes, after they have booted. This provides visibility into control plane node agent activity.
    1.  Monitor the logs using `oc`:
        ```terminal
        $ oc adm node-logs --role=master -u kubelet
        ```
    1.  If the API is not functional, review the logs using SSH instead. Replace `<master-node>.<cluster_name>.<base_domain>` with appropriate values:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> journalctl -b -f -u kubelet.service
        ```
1.  Monitor `crio.service` journald unit logs on control plane nodes, after they have booted. This provides visibility into control plane node CRI-O container runtime activity.
    1.  Monitor the logs using `oc`:
        ```terminal
        $ oc adm node-logs --role=master -u crio
        ```
    1.  If the API is not functional, review the logs using SSH instead. Replace `<master-node>.<cluster_name>.<base_domain>` with appropriate values:
        ```terminal
        $ ssh core@master-N.cluster_name.sub_domain.domain journalctl -b -f -u crio.service
        ```