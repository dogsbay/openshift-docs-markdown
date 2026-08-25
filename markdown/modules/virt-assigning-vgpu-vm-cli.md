{%- set _mod_docs_content_type = "PROCEDURE" %}
# Assigning a vGPU to a VM by using the CLI {id="virt-assigning-mdev-vm-cli_{{ context }}"}

Assign mediated devices such as virtual GPUs (vGPUs) to virtual machines (VMs). {._abstract}

**Prerequisites**

*   The mediated device is configured in the `HyperConverged` custom resource.
*   The virtual machine (VM) is stopped.

**Procedure**

*   Assign the mediated device to a VM by editing the `spec.domain.devices.gpus` stanza of the `VirtualMachine` manifest.

    Example virtual machine manifest:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    spec:
      domain:
        devices:
          gpus:
          - deviceName: nvidia.com/TU104GL_Tesla_T4
            name: gpu1
          - deviceName: nvidia.com/GRID_T4-2Q
            name: gpu2
    ```
    *   `spec.template.spec.domain.devices.gpus.deviceName` specifies the resource name associated with the mediated device.
    *   `spec.template.spec.domain.devices.gpus.name` specifies a name to identify the device on the VM.

**Verification**

*   To verify that the device is available from the virtual machine, run the following command, substituting `<device_name>` with the `deviceName` value from the `VirtualMachine` manifest:
    ```terminal
    $ lspci -nnk | grep <device_name>
    ```