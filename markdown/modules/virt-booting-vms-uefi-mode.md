{%- set _mod_docs_content_type = "PROCEDURE" %}
# Booting virtual machines in UEFI mode {id="virt-booting-vms-uefi-mode_{{ context }}"}

You can configure a virtual machine to boot in UEFI mode by editing the `VirtualMachine` manifest. {._abstract}

**Prerequisites**

*   Install the OpenShift CLI (`oc`).

**Procedure**

1.  To boot a virtual machine (VM) in UEFI mode with secure boot active, edit or create a `VirtualMachine` manifest file. Use the `spec.firmware.bootloader` stanza to configure UEFI mode:
    ```yaml
    apiversion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      labels:
        special: vm-secureboot
      name: vm-secureboot
    spec:
      template:
        metadata:
          labels:
            special: vm-secureboot
        spec:
          domain:
            devices:
              disks:
              - disk:
                  bus: virtio
                name: containerdisk
            features:
              acpi: {}
              smm:
                enabled: true
            firmware:
              bootloader:
                efi:
                  secureBoot: true
    # ...
    ```
    *   You must set `spec.template.spec.domain.features.ssm.enabled` to have a value of `true`.
    *   If `spec.template.spec.domain.firmware.bootloader.efi.secureBoot` is set to `true`, then UEFI mode is required. However, you can enable UEFI mode without using Secure Boot.
1.  Apply the manifest to your cluster by running the following command:
    ```terminal
    $ oc create -f <file_name>.yaml
    ```