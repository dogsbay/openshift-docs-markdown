{% if context == "cpmso-supported-features-azure" %}
{%- set cpmso = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring {{ azure_short }} confidential virtual machines by using machine sets {id="machineset-azure-confidential-vms_{{ context }}"}

You can enable {{ azure_full }} confidential virtual machines (VMs) to use memory encryption to improve data confidentiality. {._abstract}


:::note

Confidential VMs are currently not supported on 64-bit ARM architectures.

:::


By editing the machine set YAML file, you can configure the confidential VM options that a machine set uses for machines that it deploys. For example, you can configure these machines to use UEFI security features such as Secure Boot or a dedicated virtual Trusted Platform Module (vTPM) instance.

{% if cpmso %}

:::warning

Not all instance types support confidential VMs. Do not change the instance type for a control plane machine set that is configured to use confidential VMs to a type that is incompatible. Using an incompatible instance type can cause your cluster to become unstable.

:::

{% endif %}

For more information about related features and functionality, see the {{ azure_full }} documentation about [Confidential virtual machines](https://learn.microsoft.com/en-us/azure/confidential-computing/confidential-vm-overview).

**Procedure**

1.  In a text editor, open the YAML file for an existing machine set or create a new one.
1.  Edit the following section under the `providerSpec` field:

    **Sample configuration**

    ```yaml {minja}
    {% if not cpmso %}
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
              osDisk:
                # ...
                managedDisk:
                  securityProfile:
                    securityEncryptionType: VMGuestStateOnly
                # ...
              securityProfile:
                settings:
                    securityType: ConfidentialVM
                    confidentialVM:
                      uefiSettings:
                        secureBoot: Disabled
                        virtualizedTrustedPlatformModule: Enabled
              vmSize: Standard_DC16ads_v5
    # ...
    ```
    where:


    `spec.template.spec.providerSpec.value.osDisk.managedDisk.securityProfile`
    :   Specifies security profile settings for the managed disk when using a confidential VM.

    `spec.template.spec.providerSpec.value.osDisk.managedDisk.securityProfile.securityEncryptionType`
    :   Enables encryption of the {{ azure_full }} VM Guest State (VMGS) blob. This setting requires the use of vTPM.

    `spec.template.spec.providerSpec.value.securityProfile`
    :   Specifies security profile settings for the confidential VM.

    `spec.template.spec.providerSpec.value.securityProfile.settings.securityType`
    :   Enables the use of confidential VMs. This value is required for all valid configurations.

    `spec.template.spec.providerSpec.value.securityProfile.settings.confidentialVM.uefiSettings`
    :    Specifies which UEFI security features to use. This section is required for all valid configurations.

    `spec.template.spec.providerSpec.value.securityProfile.settings.confidentialVM.uefiSettings.secureBoot`
    :   Disables UEFI Secure Boot.

    `spec.template.spec.providerSpec.value.securityProfile.settings.confidentialVM.uefiSettings.virtualizedTrustedPlatformModule`
    :   Enables the use of a vTPM.

    `spec.template.spec.providerSpec.value.vmSize`
    :   Specifies an instance type that supports confidential VMs.

**Verification**

*   On the {{ azure_full }} portal, review the details for a machine deployed by the machine set and verify that the confidential VM options match the values that you configured.

{% if context == "cpmso-supported-features-azure" %}
{%- set cpmso = "" -%}
{% endif %}