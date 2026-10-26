{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connect to a VM by using the virtctl ssh command {id="virt-using-virtctl-ssh-command_{{ context }}"}

You can open an SSH session to a running virtual machine (VM) by using the `virtctl ssh` command. The command accepts a VM or a virtual machine instance (VMI) as the target. {._abstract}

**Prerequisites**

*   You installed the `virtctl` command-line tool.
*   You added a public SSH key to the VM.
*   You have an SSH client installed.
*   The environment where you installed the `virtctl` tool has the cluster permissions required to access the VM. For example, you ran `oc login` or you set the `KUBECONFIG` environment variable.

**Procedure**

1.  Run the `virtctl ssh` command:
    ```terminal
    $ virtctl -n <namespace> ssh <username>@vm/<vm_name> -i <ssh_key>
    ```

    You must specify the resource type (`vmi/` or `vm/`) before the VM name.

    For example:
    ```terminal
    $ virtctl -n my-namespace ssh cloud-user@vm/example-vm -i my-key
    ```