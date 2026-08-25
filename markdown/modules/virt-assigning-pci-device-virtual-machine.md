{%- set _mod_docs_content_type = "PROCEDURE" %}
# Assigning a PCI device to a virtual machine {id="virt-assigning-pci-device-virtual-machine_{{ context }}"}

When a PCI device is available in a cluster, you can assign it to a virtual machine and enable PCI passthrough. {._abstract}

**Procedure**

*   Assign the PCI device to a virtual machine as a host device.

    Example:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    spec:
      domain:
        devices:
          hostDevices:
          - deviceName: nvidia.com/TU104GL_Tesla_T4
            name: hostdevices1
    ```
    *   `spec.template.spec.domain.devices.hostDevices.deviceName` specifies the name of the PCI device that is permitted on the cluster as a host device. The virtual machine can access this host device. When using an {{ ibm_name }} Spyre device on `s390x` architecture, specify `ibm.com/spyre:`.

**Verification**

*   Use the following command to verify that the host device is available from the virtual machine.
    ```terminal
    $ lspci -nnk | grep <gpu_accelerator>
    ```

    Valid values for `<gpu_accelerator>` are `nvidia`, `qat`, and `spyre`.

    Example output:
    ```terminal
    $ 02:01.0 3D controller [0302]: NVIDIA Corporation GV100GL [Tesla V100 PCIe 32GB] [10de:1eb8] (rev a1)
    ```