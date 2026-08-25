{% if context == "creating-machineset-azure" %}
{%- set compute = true -%}
{% endif %}
{% if context == "cpmso-supported-features-azure" %}
{%- set cpmso = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling Accelerated Networking on an existing {{ azure_full }} cluster {id="machineset-azure-enabling-accelerated-networking-existing_{{ context }}"}

You can enable Accelerated Networking on {{ azure_full }} by adding `acceleratedNetworking` to your machine set YAML file. Accelerated Networking uses SR-IOV to help improve network performance for new nodes. {._abstract}

**Prerequisites**

*   Have an existing {{ azure_short }} cluster where the Machine API is operational.

**Procedure**

*   Add the following to the `providerSpec` field:
    ```yaml
    providerSpec:
      value:
        acceleratedNetworking: true
        vmSize: <azure-vm-size>
    ```

    where:

    `providerSpec.value.acceleratedNetworking`
    :   Enables Accelerated Networking.

    `providerSpec.value.vmSize`
    :   Specifies an {{ azure_short }} VM size that includes at least four vCPUs. For information about VM sizes, see the {{ azure_full }} documentation [Sizes for virtual machines in {{ azure_short }}](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes).

{% if compute %}

**Next steps**

*   To enable the feature on currently running nodes, you must replace each existing machine. This can be done for each machine individually, or by scaling the replicas down to zero, and then scaling back up to your desired number of replicas.
{% endif %}

**Verification**

*   On the {{ azure_full }} portal, review the **Networking** settings page for a machine provisioned by the machine set, and verify that the `Accelerated networking` field is set to `Enabled`.

{% if context == "creating-machineset-azure" %}
{%- set compute = "" -%}
{% endif %}
{% if context == "cpmso-supported-features-azure" %}
{%- set cpmso = "" -%}
{% endif %}