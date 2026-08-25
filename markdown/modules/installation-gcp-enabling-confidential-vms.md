{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling Confidential VMs {id="installation-gcp-enabling-confidential-vms_{{ context }}"}

You can use Confidential VMs when installing your cluster. Confidential VMs encrypt data while it is being processed. For more information, see Google’s documentation on [Confidential Computing](https://cloud.google.com/confidential-computing). You can enable Confidential VMs and Shielded VMs at the same time, although they are not dependent on each other.


:::note

Confidential VMs are currently not supported on 64-bit ARM architectures.

:::


**Procedure**

*   Use a text editor to edit the `install-config.yaml` file prior to deploying your cluster and add one of the following stanzas:
    1.  To use confidential VMs for only control plane machines:
        ```yaml
        controlPlane:
          platform:
            gcp:
               confidentialCompute: AMDEncryptedVirtualizationNestedPaging (1)
               type: n2d-standard-8 (2)
               onHostMaintenance: Terminate (3)
        ```
        1.  Enable confidential VMs with AMD Secure Encrypted Virtualization Secure Nested Paging (AMD SEV-SNP). For more information about available options, see "Additional {{ gcp_first }} configuration parameters".
        1.  Specify a machine type that supports Confidential VMs. Confidential VMs require the N2D, C2D, C3D, or C3 series of machine types. For more information on supported machine types, see [Supported operating systems and machine types](https://cloud.google.com/compute/confidential-vm/docs/os-and-machine-type#machine-type).
        1.  Specify the behavior of the VM during a host maintenance event, such as a hardware or software update. For a machine that uses Confidential VM, this value must be set to `Terminate`, which stops the VM. Confidential VMs do not support live VM migration.
    1.  To use confidential VMs for only compute machines:
        ```yaml
        compute:
        - platform:
            gcp:
               confidentialCompute: AMDEncryptedVirtualizationNestedPaging
               type: n2d-standard-8
               onHostMaintenance: Terminate
        ```
    1.  To use confidential VMs for all machines:
        ```yaml
        platform:
          gcp:
            defaultMachinePlatform:
               confidentialCompute: AMDEncryptedVirtualizationNestedPaging
               type: n2d-standard-8
               onHostMaintenance: Terminate
        ```