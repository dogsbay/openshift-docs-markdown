{%- set _mod_docs_content_type = "PROCEDURE" %}
# List all VMIs by using the CLI {id="virt-listing-vmis-cli_{{ context }}"}

You can use the {{ oc_first }} to list all virtual machine instances (VMIs) in your cluster. The list includes standalone VMIs and VMIs that are owned by virtual machines (VMs). {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

*   List all VMIs by running the following command:
    ```terminal
    $ oc get vmis -A
    ```