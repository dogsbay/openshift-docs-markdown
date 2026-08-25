{%- set _mod_docs_content_type = "PROCEDURE" %}

# List virtual machines by using the CLI {id="virt-listing-vms-cli_{{ context }}"}

You can either list all of the virtual machines (VMs) in your cluster or limit the list to VMs in a specified namespace by using the {{ oc_first }}. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

*   List all of the VMs in your cluster by running the following command:
    ```terminal
    $ oc get vms -A
    ```
*   List all of the VMs in a specific namespace by running the following command:
    ```terminal
    $ oc get vms -n <namespace>
    ```