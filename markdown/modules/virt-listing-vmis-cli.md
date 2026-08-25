{%- set _mod_docs_content_type = "PROCEDURE" %}
# Listing all virtual machine instances using the CLI {id="virt-listing-vmis-cli_{{ context }}"}

You can list all virtual machine instances (VMIs) in your cluster, including standalone VMIs and those owned by virtual machines, by using the {{ oc_first }}. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

*   List all VMIs by running the following command:
    ```terminal
    $ oc get vmis -A
    ```