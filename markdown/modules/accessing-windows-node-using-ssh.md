{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing a Windows node using SSH {id="accessing-windows-node-using-ssh_{{ context }}"}

You can access a Windows node by using a secure shell (SSH). {._abstract}

**Prerequisites**

*   You have installed the Windows Machine Config Operator (WMCO) using Operator Lifecycle Manager (OLM).
*   You have created a Windows compute machine set.
*   You have added the key used in the `cloud-private-key` secret and the key used when creating the cluster to the ssh-agent. For security reasons, remember to remove the keys from the ssh-agent after use.
*   You have connected to the Windows node [using an `ssh-bastion` pod](https://access.redhat.com/solutions/4073041).

**Procedure**

*   Access the Windows node by running the following command:
    ```terminal
    $ ssh -t -o StrictHostKeyChecking=no -o ProxyCommand='ssh -A -o StrictHostKeyChecking=no \
        -o ServerAliveInterval=30 -W %h:%p core@$(oc get service --all-namespaces -l run=ssh-bastion \
        -o go-template="{{ with (index (index .items 0).status.loadBalancer.ingress 0) }}{{ or .hostname .ip }}{{end}}")' <username>@<windows_node_internal_ip>
    ```

    where:

    `<username>`
    :   Specifies the cloud provider username, such as `Administrator` for Amazon Web Services (AWS) or `capi` for Microsoft Azure.

    `<windows_node_internal_ip>`
    :   Specifies the internal IP address of the node, which can be discovered by running the following command:
    ```terminal
    $ oc get nodes <node_name> -o jsonpath={.status.addresses[?\(@.type==\"InternalIP\"\)].address}
    ```