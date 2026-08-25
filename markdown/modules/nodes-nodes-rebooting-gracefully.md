{% if context == "nodes-nodes-rebooting" %}
{%- set nodes = true -%}
{% endif %}
{% if context == "enabling-windows-container-workloads" %}
{%- set windows = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Rebooting a node gracefully {id="nodes-nodes-rebooting-gracefully_{{ context }}"}

You can perform a graceful restart of a node, where all workloads are moved to other nodes, without data loss or service disruption.  {._abstract}

{% if windows %}
The Windows Machine Config Operator (WMCO) minimizes node reboots whenever possible. However, certain operations and updates require a reboot to ensure that changes are applied correctly and securely. To safely reboot your Windows nodes, use the graceful reboot process. For information on gracefully rebooting a standard {{ product_title }} node, see "Rebooting a node gracefully" in the Nodes documentation.
{% endif %}

Before rebooting a node, it is recommended to backup etcd data to avoid any data loss on the node.


:::note

For {{ sno }} clusters that require users to perform the `oc login` command rather than having the certificates in `kubeconfig` file to manage the cluster, the `oc adm` commands might not be available after cordoning and draining the node. This is because the `openshift-oauth-apiserver` pod is not running due to the cordon. You can use SSH to access the nodes as indicated in the following procedure.

In a {{ sno }} cluster, pods cannot be rescheduled when cordoning and draining. However, doing so gives the pods, especially your workload pods, time to properly stop and release associated resources.

:::


The following procedure demonstrates how to perform a graceful restart of a node.

**Procedure**

1.  Mark the node as unschedulable:
    ```terminal
    $ oc adm cordon <node1>
    ```
1.  Drain the node to remove all the running pods:
    ```terminal
    $ oc adm drain <node1> --ignore-daemonsets --delete-emptydir-data --force
    ```

    You might receive errors that pods associated with custom pod disruption budgets (PDB) cannot be evicted.
    ```terminal title="Example error"
    error when evicting pods/"rails-postgresql-example-1-72v2w" -n "rails" (will retry after 5s): Cannot evict pod as it would violate the pod's disruption budget.
    ```

    In this case, run the drain command again, adding the `disable-eviction` flag, which bypasses the PDB checks:
    ```terminal
    $ oc adm drain <node1> --ignore-daemonsets --delete-emptydir-data --force --disable-eviction
    ```

{% if nodes %}
1.  Access the node in debug mode:
    ```terminal
    $ oc debug node/<node1>
    ```
1.  Change your root directory to `/host`:
    ```terminal
    $ chroot /host
    ```
1.  Restart the node:
    ```terminal
    $ systemctl reboot
    ```

    In a moment, the node enters the `NotReady` state.

    :::note

    With some {{ sno }} clusters, the `oc` commands might not be available after you cordon and drain the node because the `openshift-oauth-apiserver` pod is not running. You can use SSH to connect to the node and perform the reboot.

    ```terminal
    $ ssh core@<master-node>.<cluster_name>.<base_domain>
    ```

    ```terminal
    $ sudo systemctl reboot
    ```
    
    :::

{% endif %}
{% if windows %}
1.  SSH into the Windows node and enter PowerShell by running the following command:
    ```terminal
    C:\> powershell
    ```
1.  Restart the node by running the following command:
    ```terminal
    C:\>  Restart-Computer -Force
    ```
1.  Windows nodes on Amazon Web Services (AWS) do not return to `READY` state after a graceful reboot due to an inconsistency with the EC2 instance metadata routes and the Host Network Service (HNS) networks.

    After the reboot, SSH into any Windows node on AWS and add the route by running the following command in a shell prompt:
    ```terminal
    C:\> route add 169.254.169.254 mask 255.255.255.0 <gateway_ip>
    ```

    where:

    `169.254.169.254`
    :   Specifies the address of the EC2 instance metadata endpoint.

    `255.255.255.255`
    :   Specifies the network mask of the EC2 instance metadata endpoint.

    `<gateway_ip>`
    :   Specifies the corresponding IP address of the gateway in the Windows instance, which you can find by running the following command:
        ```terminal
        C:\> ipconfig | findstr /C:"Default Gateway"
        ```
{% endif %}
1.  After the reboot is complete, mark the node as schedulable by running the following command:
    ```terminal
    $ oc adm uncordon <node1>
    ```
{%- if nodes %}

    :::note

    With some {{ sno }} clusters, the `oc` commands might not be available after you cordon and drain the node because the `openshift-oauth-apiserver` pod is not running. You can use SSH to connect to the node and uncordon it.

    ```terminal
    $ ssh core@<target_node>
    ```

    ```terminal
    $ sudo oc adm uncordon <node> --kubeconfig /etc/kubernetes/static-pod-resources/kube-apiserver-certs/secrets/node-kubeconfigs/localhost.kubeconfig
    ```
    
    :::

{% endif %}
1.  Verify that the node is ready:
    ```terminal
    $ oc get node <node1>
    ```
    ```terminal title="Example output"
    NAME    STATUS  ROLES    AGE     VERSION
    <node1> Ready   worker   6d22h   v1.18.3+b0068a8
    ```