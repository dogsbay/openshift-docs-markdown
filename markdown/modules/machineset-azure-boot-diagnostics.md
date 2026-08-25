{% if context == "creating-machineset-azure-stack-hub" %}
{%- set ash = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling {{ azure_first }} boot diagnostics {id="machineset-azure-boot-diagnostics_{{ context }}"}

You can enable boot diagnostics on {{ azure_full }} machines that your machine set creates. Use this to store console logs that you can use to troubleshoot why a node fails to boot. {._abstract}

**Prerequisites**

*   Have an existing {{ azure_short }}
{% if ash %}
Stack Hub
{% endif %}
cluster.

**Procedure**

*   Add the `diagnostics` configuration that is applicable to your storage type to the `providerSpec` field in your machine set YAML file:
    *   For an {{ azure_short }} Managed storage account:
        ```yaml
        providerSpec:
          value:
            diagnostics:
              boot:
                storageAccountType: <azure_managed>
        ```

        where:

        `<azure_managed>`
        :   Specifies an {{ azure_short }} Managed storage account.
    *   For an {{ azure_short }} Unmanaged storage account:
        ```yaml
        providerSpec:
          value:
            diagnostics:
              boot:
                storageAccountType: <customer_managed>
                customerManaged:
                  storageAccountURI: <https://<storage_account>.blob.core.windows.net>
        ```

        where:

        `<customer_managed>`
        :   Specifies an {{ azure_short }} Unmanaged storage account.

        `https://<storage_account>.blob.core.windows.net`
        :   Specifies the storage account URL. Replace `<storage_account>` with the name of your storage account.

        :::note

        Only the {{ azure_short }} Blob Storage data service is supported.
        
        :::


**Verification**

*   On the {{ azure_short }} portal, review the **Boot diagnostics** page for a machine deployed by the machine set, and verify that you can see the serial logs for the machine.

{% if context == "creating-machineset-azure-stack-hub" %}
{%- set ash = false -%}
{% endif %}