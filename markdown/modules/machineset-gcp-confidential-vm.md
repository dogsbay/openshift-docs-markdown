{% if context == "cpmso-supported-features-gcp" %}
{%- set cpmso = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Confidential VM by using machine sets {id="machineset-gcp-confidential-vm_{{ context }}"}

You create machine sets to scale clusters on {{ gcp_first }}. By editing the machine set YAML file, you can configure the Confidential VM options that a machine set uses for machines that it deploys. {._abstract}

For more information about Confidential VM features, functions, and compatibility, see the {{ gcp_short }} Compute Engine documentation about [Confidential VM](https://cloud.google.com/confidential-computing/confidential-vm/docs/about-cvm#confidential-vm).


:::note

Confidential VMs are currently not supported on 64-bit ARM architectures.
If you use Confidential VM, you must ensure that you select a supported region. For details on supported regions and configurations, see the {{ gcp_short }} Compute Engine documentation about [supported zones](https://cloud.google.com/confidential-computing/confidential-vm/docs/supported-configurations#supported-zones).

:::


**Procedure**

1.  In a text editor, open the YAML file for an existing machine set or create a new one.
1.  Edit the following section under the `providerSpec` field:
    ```yaml
{%- if not cpmso %}
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
    # ...
    spec:
      template:
        spec:
          providerSpec:
            value:
              confidentialCompute: Enabled
              onHostMaintenance: Terminate
              machineType: n2d-standard-8
{% endif %}
{% if cpmso %}
    apiVersion: machine.openshift.io/v1
    kind: ControlPlaneMachineSet
    # ...
        machines_v1beta1_machine_openshift_io:
          spec:
            providerSpec:
              value:
                confidentialCompute: Enabled
                onHostMaintenance: Terminate
                machineType: n2d-standard-8
{%- endif %}
    # ...
    ```

    where:
{%- if not cpmso %}

    `spec.template.spec.providerSpec.value.confidentialCompute`
    :   Specifies whether Confidential VM is enabled.
        The following values are valid:

    `Enabled`
    :   Enables Confidential VM with a default selection of Confidential VM technology. The default selection is AMD Secure Encrypted Virtualization (AMD SEV).

    :::important

    The `Enabled` value selects Confidential Computing with AMD Secure Encrypted Virtualization (AMD SEV), which is deprecated.
    
    :::


    `Disabled`
    :   Disables Confidential VM.

    `AMDEncryptedVirtualizationNestedPaging`
    :   Enables Confidential VM using AMD Secure Encrypted Virtualization Secure Nested Paging (AMD SEV-SNP). AMD SEV-SNP supports n2d machines.

    `AMDEncryptedVirtualization`
    :   Enables Confidential VM using AMD SEV. AMD SEV supports c2d, n2d, and c3d machines.

    :::important

    The use of Confidential Computing with AMD Secure Encrypted Virtualization (AMD SEV) has been deprecated and will be removed in a future release.
    
    :::



`IntelTrustedDomainExtensions`
:   Enables Confidential VM using Intel Trusted Domain Extensions (Intel TDX). Intel TDX supports n2d machines.


`spec.template.spec.providerSpec.value.onHostMaintenance`
:   Specifies the behavior of the VM during a host maintenance event, such as a hardware or software update. For a machine that uses Confidential VM, this value must be set to `Terminate`, which stops the VM. Confidential VM does not support live VM migration.

`spec.template.spec.providerSpec.value.machineType`
:   Specifies a machine type that supports the Confidential VM option that you specified in the `confidentialCompute` field.
{% endif %}

{% if cpmso %}

`spec.template.machines_v1beta1_machine_openshift_io.spec.providerSpec.value.confidentialCompute`
:   Specifies whether Confidential VM is enabled.
    The following values are valid:

`Enabled`
:   Enables Confidential VM with a default selection of Confidential VM technology. The default selection is AMD Secure Encrypted Virtualization (AMD SEV).

    :::important

    The `Enabled` value selects Confidential Computing with AMD Secure Encrypted Virtualization (AMD SEV), which is deprecated.
    
    :::


    `Disabled`
    :   Disables Confidential VM.

    `AMDEncryptedVirtualizationNestedPaging`
    :   Enables Confidential VM using AMD Secure Encrypted Virtualization Secure Nested Paging (AMD SEV-SNP). AMD SEV-SNP supports n2d machines.

    `AMDEncryptedVirtualization`
    :   Enables Confidential VM using AMD SEV. AMD SEV supports c2d, n2d, and c3d machines.

    :::important

    The use of Confidential Computing with AMD Secure Encrypted Virtualization (AMD SEV) has been deprecated and will be removed in a future release.
    
    :::



`IntelTrustedDomainExtensions`
:   Enables Confidential VM using Intel Trusted Domain Extensions (Intel TDX). Intel TDX supports n2d machines.


`spec.template.machines_v1beta1_machine_openshift_io.spec.providerSpec.value.onHostMaintenance`
:   Specifies the behavior of the VM during a host maintenance event, such as a hardware or software update. For a machine that uses Confidential VM, this value must be set to `Terminate`, which stops the VM. Confidential VM does not support live VM migration.

`spec.template.machines_v1beta1_machine_openshift_io.spec.providerSpec.value.machineType`
:   Specifies a machine type that supports the Confidential VM option that you specified in the `confidentialCompute` field.
{% endif %}

**Verification**

*   On the {{ gcp_full }} console, review the details for a machine deployed by the machine set and verify that the Confidential VM options match the values that you configured.

{% if context == "cpmso-supported-features-gcp" %}
{%- set cpmso = false -%}
{% endif %}