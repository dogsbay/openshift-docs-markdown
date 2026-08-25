{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connecting to a VM exposed by a service by using SSH {id="virt-connecting-service-ssh_{{ context }}"}

You can connect to a virtual machine (VM) that a service exposes by using SSH. {._abstract}

**Prerequisites**

*   You created a service to expose the VM.
*   You have an SSH client installed.
*   You are logged in to the cluster.

**Procedure**

*   Run the following command to access the VM:
    ```terminal
    $ ssh <user_name>@<ip_address> -p <port>
    ```

    where:

    `<ip_address>`
    :   Specifies the cluster IP for a cluster IP service, the node IP for a node port service, or the external IP address for a load balancer service.