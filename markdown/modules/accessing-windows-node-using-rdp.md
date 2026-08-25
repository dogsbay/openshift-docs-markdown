{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing a Windows node using RDP {id="accessing-windows-node-using-rdp_{{ context }}"}

You can access a Windows node by using a Remote Desktop Protocol (RDP). {._abstract}

**Prerequisites**

*   You installed the Windows Machine Config Operator (WMCO) using Operator Lifecycle Manager (OLM).
*   You have created a Windows compute machine set.
*   You have added the key used in the `cloud-private-key` secret and the key used when creating the cluster to the ssh-agent. For security reasons, remember to remove the keys from the ssh-agent after use.
*   You have connected to the Windows node [using an `ssh-bastion` pod](https://access.redhat.com/solutions/4073041).

**Procedure**

1.  Run the following command to set up an SSH tunnel:
    ```terminal
    $ ssh -L 2020:<windows_node_internal_ip>:3389 \
        core@$(oc get service --all-namespaces -l run=ssh-bastion -o go-template="{{ with (index (index .items 0).status.loadBalancer.ingress 0) }}{{ or .hostname .ip }}{{end}}")
    ```

    where:

    `<windows_node_internal_ip>`
    :   Specifies the internal IP address of the node, which can be discovered by running the following command:
    ```terminal
    $ oc get nodes <node_name> -o jsonpath={.status.addresses[?\(@.type==\"InternalIP\"\)].address}
    ```

1.  From within the resulting shell, SSH into the Windows node and run the following command to create a password for the user:
    ```terminal
    C:\> net user <username> *
    ```

    Specify the cloud provider user name, such as `Administrator` for AWS or `capi` for Azure. You can now remotely access the Windows node at `localhost:2020` using an RDP client.