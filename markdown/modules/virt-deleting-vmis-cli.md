{%- set _mod_docs_content_type = "PROCEDURE" %}

# Deleting a standalone virtual machine instance using the CLI {id="virt-deleting-vmis-cli_{{ context }}"}

You can delete a standalone virtual machine instance (VMI) by using the `oc` command-line interface (CLI). {._abstract}

**Prerequisites**

*   Identify the name of the VMI that you want to delete.
*   You have installed the {{ oc_first }}.

**Procedure**

*   Delete the VMI by running the following command:
    ```terminal
    $ oc delete vmi <vmi_name>
    ```