{%- set _mod_docs_content_type = "PROCEDURE" %}

# Delete a standalone VMI by using the CLI {id="virt-deleting-vmis-cli_{{ context }}"}

You can delete a standalone virtual machine instance (VMI) by using the {{ oc_first }}. A standalone VMI has no owning VM, so no other object deletes it for you. {._abstract}

**Prerequisites**

*   Identify the name of the VMI that you want to delete.
*   You have installed the {{ oc_first }}.

**Procedure**

*   Delete the VMI by running the following command:
    ```terminal
    $ oc delete vmi <vmi_name>
    ```