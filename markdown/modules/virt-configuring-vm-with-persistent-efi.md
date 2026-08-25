{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring VMs with persistent EFI {id="configuring-vm-with-persistent-efi_{{ context }}"}

You can configure a VM to have EFI persistence enabled by editing its manifest file. {._abstract}

**Procedure**

*   Edit the VM manifest file and save to apply settings.
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: vm
    spec:
      template:
        spec:
          domain:
            firmware:
              bootloader:
                efi:
                  persistent: true
    # ...
    ```