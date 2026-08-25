{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the virtctl port-forward command {id="virt-using-virtctl-port-forward-command_{{ context }}"}

You can use your local OpenSSH client and the `virtctl port-forward` command to connect to a running virtual machine (VM). You can use this method with Ansible to automate the configuration of VMs. {._abstract}

This method is recommended for low-traffic applications because port-forwarding traffic is sent over the control plane. This method is not recommended for high-traffic applications such as Rsync or Remote Desktop Protocol because it places a heavy burden on the API server.

**Prerequisites**

*   You have installed the `virtctl` client.
*   The virtual machine you want to access is running.
*   The environment where you installed the `virtctl` tool has the cluster permissions required to access the VM. For example, you ran `oc login` or you set the `KUBECONFIG` environment variable.

**Procedure**

1.  Add the following text to the `~/.ssh/config` file on your client machine:
    ```terminal
    Host vm/*
      ProxyCommand virtctl port-forward --stdio=true %h %p
    ```
1.  Connect to the VM by running the following command:
    ```terminal
    $ ssh <user>@vm/<vm_name>.<namespace>
    ```