{%- set _mod_docs_content_type = "PROCEDURE" %}

# Deleting a virtual machine by using the CLI {id="virt-deleting-vms_{{ context }}"}

You can delete a virtual machine (VM) by using the `oc` command-line interface (CLI). The `oc` client enables you to perform actions on multiple VMs. {._abstract}

**Prerequisites**

*   You have disabled the VM’s delete protection setting.
*   You have stopped the VM. 
*   You have installed the {{ oc_first }}.

**Procedure**

*   Delete the VM by running the following command:
    ```terminal
    $ oc delete vm <vm_name>
    ```

    :::note

    This command only deletes a VM in the current project. Specify the
    `-n <project_name>` option if the VM you want to delete is in
    a different project or namespace.
    
    :::