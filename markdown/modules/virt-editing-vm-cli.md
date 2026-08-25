{%- set _mod_docs_content_type = "PROCEDURE" %}
# Editing a virtual machine by using the CLI {id="virt-editing-vm-cli_{{ context }}"}

You can edit a virtual machine (VM) by using the command line. {._abstract}

**Prerequisites**

*   You installed the `oc` CLI.

**Procedure**

1.  Obtain the virtual machine configuration by running the following command:
    ```terminal
    $ oc edit vm <vm_name>
    ```
1.  Edit the YAML configuration.
1.  If you edit a running virtual machine, you need to do one of the following:
    *   Restart the virtual machine.
    *   Run the following command for the new configuration to take effect:
        ```terminal
        $ oc apply vm <vm_name> -n <namespace>
        ```