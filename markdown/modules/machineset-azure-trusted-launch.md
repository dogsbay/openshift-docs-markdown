{% if context == "cpmso-supported-features-azure" %}
{%- set cpmso = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring trusted launch for {{ azure_short }} virtual machines by using machine sets {id="machineset-azure-trusted-launch_{{ context }}"}

By editing the machine set YAML file, you can configure the trusted launch for {{ azure_full }} virtual machines (VMs) options that a machine set uses for machines that it deploys.  {._abstract}

For example, you can configure these machines to use UEFI security features such as Secure Boot or a dedicated virtual Trusted Platform Module (vTPM) instance.


:::note

Some feature combinations result in an invalid configuration.

:::


**UEFI feature combination compatibility**

| Secure Boot^[1]^ | vTPM^[2]^ | Valid configuration |
| --- | --- | --- |
| Enabled | Enabled | Yes |
| Enabled | Disabled | Yes |
| Enabled | Omitted | Yes |
| Disabled | Enabled | Yes |
| Omitted | Enabled | Yes |
| Disabled | Disabled | No |
| Omitted | Disabled | No |
| Omitted | Omitted | No |
1.  Using the `secureBoot` field.
1.  Using the `virtualizedTrustedPlatformModule` field.

For more information about related features and functionality, see the {{ azure_full }} documentation about [Trusted launch for {{ azure_short }} virtual machines](https://learn.microsoft.com/en-us/azure/virtual-machines/trusted-launch).

**Procedure**

1.  In a text editor, open the YAML file for an existing machine set or create a new one.
1.  Edit the following section under the `providerSpec` field to provide a valid configuration:
    ```yaml title="Sample valid configuration with UEFI Secure Boot and vTPM enabled"
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
        machines_v1beta1_machine_openshift_io:
          spec:
            providerSpec:
              value:
                securityProfile:
                  settings:
                    securityType: TrustedLaunch
                    trustedLaunch:
                      uefiSettings:
                        secureBoot: Enabled
                        virtualizedTrustedPlatformModule: Enabled
    # ...
    ```

    where:

    `spec.template.machines_v1beta1_machine_openshift_io.spec.providerSpec.value.securityProfile.settings.securityType`
    :   Enables the use of trusted launch for {{ azure_short }} virtual machines. This value is required for all valid configurations.

    `spec.template.machines_v1beta1_machine_openshift_io.spec.providerSpec.value.securityProfile.settings.trustedLaunch.uefiSettings`
    :   Specifies which UEFI security features to use. This section is required for all valid configurations.

    `spec.template.machines_v1beta1_machine_openshift_io.spec.providerSpec.value.securityProfile.settings.trustedLaunch.uefiSettings.secureBoot`
    :   Enables UEFI Secure Boot.

    `spec.template.machines_v1beta1_machine_openshift_io.spec.providerSpec.value.securityProfile.settings.trustedLaunch.uefiSettings.virtualizedTrustedPlatformModule`
    :   Enables the use of a vTPM.

**Verification**

*   On the {{ azure_full }} portal, review the details for a machine deployed by the machine set and verify that the trusted launch options match the values that you configured.

{% if context == "cpmso-supported-features-azure" %}
{%- set cpmso = false -%}
{% endif %}