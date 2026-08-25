{% if context == "cpmso-supported-features-gcp" %}
{%- set cpmso = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Shielded VM options by using machine sets {id="machineset-gcp-shielded-vms_{{ context }}"}

To help secure your cluster instances, you can configure Shielded Virtual Machine (VM) options for your machine sets on {{ gcp_first }} by editing the `MachineSet` YAML file. {._abstract}

For more information about Shielded VM features and functionality, see the {{ gcp_short }} Compute Engine documentation about [Shielded VM](https://cloud.google.com/compute/shielded-vm/docs/shielded-vm).

**Procedure**

1.  In a text editor, open the YAML file for an existing machine set or create a new one.
1.  Edit the following section under the `providerSpec` field:
    ```yaml
{%- if not cpmso %}
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
{% endif %}
{% if cpmso %}
    apiVersion: machine.openshift.io/v1
    kind: ControlPlaneMachineSet
{%- endif %}
    # ...
    spec:
      template:
        spec:
          providerSpec:
            value:
              shieldedInstanceConfig:
                integrityMonitoring: Enabled
                secureBoot: Disabled
                virtualizedTrustedPlatformModule: Enabled
    # ...
    ```

    where:
{%- if not cpmso %}

    `spec.template.spec.providerSpec.value.shieldedInstanceConfig`
    :   Specifies the Shielded VM configuration.
{% endif %}
{% if cpmso %}

    `spec.template.spec.providerSpec.value.shieldedInstanceConfig`
    :   Specifies the Shielded VM configuration.
{%- endif %}

    `spec.template.spec.providerSpec.value.shieldedInstanceConfig.integrityMonitoring`
    :   Specifies whether integrity monitoring is enabled. Valid values are `Disabled` or `Enabled`.

        :::note


        When integrity monitoring is enabled, you must not disable virtual trusted platform module (vTPM).
        
        :::


    `spec.template.spec.providerSpec.value.shieldedInstanceConfig.secureBoot`
    :   Specifies whether UEFI Secure Boot is enabled. Valid values are `Disabled` or `Enabled`.

    `spec.template.spec.providerSpec.value.shieldedInstanceConfig.virtualizedTrustedPlatformModule`
    :   Specifies whether vTPM is enabled. Valid values are `Disabled` or `Enabled`.

**Verification**

*   Using the {{ gcp_full }} console, review the details for a machine deployed by the machine set and verify that the Shielded VM options match the values that you configured.

{% if context == "cpmso-supported-features-gcp" %}
{%- set cpmso = false -%}
{% endif %}