{% if context == "creating-machineset-vsphere" %}
{%- set vsphere = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Obtaining the infrastructure ID {id="machineset-upi-reqs-infra-id_{{ context }}"}

To ensure the Machine API correctly identifies and manages virtual machines (VMs) that belong to a specific cluster, you must add the unique infrastructure ID to the `MachineSet` YAML file to label and link resources. To create compute machine sets, you must be able to supply the infrastructure ID for your cluster. {._abstract}

**Procedure**

*   To obtain the infrastructure ID for your cluster, run the following command:
    ```terminal
    $ oc get infrastructure cluster -o jsonpath='{.status.infrastructureName}'
    ```

{% if context == "creating-machineset-vsphere" %}
{%- set vsphere = false -%}
{% endif %}