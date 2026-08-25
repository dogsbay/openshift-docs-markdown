{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a vTPM device to a virtual machine {id="virt-adding-vtpm-to-vm_{{ context }}"}

Adding a virtual Trusted Platform Module (vTPM) device to a virtual machine (VM) allows you to run a VM created from a Windows 11 image without a physical TPM device. A vTPM device also stores secrets for that VM. {._abstract}


:::important

When you add a virtual Trusted Platform Module (vTPM) device to a Windows VM, it is important to make the vTPM device persistent. The BitLocker Drive is encrypted successfully and the encryption system check passes even if the vTPM device is not persistent. If the vTPM device is not persistent, it is discarded on shutdown.

:::


**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Run the following command to update the VM configuration:
    ```terminal
    $ oc edit vm <vm_name> -n <namespace>
    ```
1.  Edit the VM specification to add the vTPM device. For example:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
        name: example-vm
    spec:
      template:
        spec:
          domain:
            devices:
              tpm:  (1)
                persistent: true (2)
    # ...
    ```
    *   `spec.template.spec.domain.devices.tpm` specifies the vTPM device to add to the VM.
    *   `spec.template.spec.domain.devices.tpm.persistent` specifies that the vTPM device state persists after the VM is shut down. The default value is `false`.
1.  To apply your changes, save and exit the editor.
1.  Optional: If you edited a running virtual machine, you must restart it for
the changes to take effect.