{%- set _mod_docs_content_type = "PROCEDURE" %}
# Binding PCI devices to the VFIO driver {id="virt-binding-devices-vfio-driver_{{ context }}"}

To bind PCI devices to the VFIO (Virtual Function I/O) driver, obtain the values for the vendor ID and the device ID from each device and create a list with the values. Add this list to the `MachineConfig` object. {._abstract}

The `MachineConfig` Operator generates the `/etc/modprobe.d/vfio.conf` on the nodes with the PCI devices, and binds the PCI devices to the VFIO driver.

**Prerequisites**

*   You added kernel arguments to enable IOMMU for the CPU.

    :::note

    Enabling IOMMU is not required on `s390x` architecture.
    
    :::

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Run the `lspci` command with the name of the GPU accelerator to obtain the vendor ID and the device ID for the PCI device.

    :::note

    NVIDIA GPU is supported on `x86` and `aarch64` architectures, Intel QAT is supported on `x86` architecture, and {{ ibm_name }} Spyre is supported on `s390x` architecture.
    
    :::

    ```terminal
    $ lspci -nnv | grep -i <gpu_accelerator>
    ```

    Valid values for `<gpu_accelerator>` are `nvidia`, `qat`, and `spyre`.

    Example output:
    ```terminal
    02:01.0 3D controller [0302]: NVIDIA Corporation GV100GL [Tesla V100 PCIe 32GB] [10de:1eb8] (rev a1)
    ```
1.  Create a Butane config file, `100-worker-vfiopci.bu`, binding the PCI device to the VFIO driver.

    :::note

    The [Butane version](https://coreos.github.io/butane/specs/) you specify in the config file should match the {{ product_title }} version and always ends in `0`. For example, `{{ product_version }}.0`{minja}. See "Creating machine configs with Butane" for information about Butane.
    
    :::


    Example:
    ```yaml {minja}
    variant: openshift
    version: {{ product_version }}.0
    metadata:
      name: 100-worker-vfiopci
      labels:
        machineconfiguration.openshift.io/role: worker
    storage:
      files:
      - path: /etc/modprobe.d/vfio.conf
        mode: 0644
        overwrite: true
        contents:
          inline: |
            options vfio-pci ids=<vendor_id>:<device_id>
      - path: /etc/modules-load.d/vfio-pci.conf
        mode: 0644
        overwrite: true
        contents:
          inline: vfio-pci
    ```
    *   `metadata.labels.machineconfiguration.openshift.io/role: worker` specifies that the new kernel argument is applied only to compute nodes.
    *   `storage.files.contents.inline`, where the path is `/etc/modprobe.d/vfio.conf`, specifies the previously determined hexadecimal vendor ID and device ID values to bind a device to the VFIO driver. You can add a list of multiple devices with their vendor and device information.
    *   `storage.files.path`, where the `contents.inline` is `vfio-pci`, specifies the file that loads the `vfio-pci` kernel module on the compute nodes.
1.  Use Butane to generate a `MachineConfig` object file, `100-worker-vfiopci.yaml`, containing the configuration to be delivered to the compute nodes:
    ```terminal
    $ butane 100-worker-vfiopci.bu -o 100-worker-vfiopci.yaml
    ```
1.  Apply the `MachineConfig` object to the compute nodes:
    ```terminal
    $ oc apply -f 100-worker-vfiopci.yaml
    ```
1.  Verify that the `MachineConfig` object was added.
    ```terminal
    $ oc get MachineConfig
    ```

    Example output:
    ```terminal
    NAME                             GENERATEDBYCONTROLLER                      IGNITIONVERSION  AGE
    00-master                        d3da910bfa9f4b599af4ed7f5ac270d55950a3a1   3.5.0            25h
    00-worker                        d3da910bfa9f4b599af4ed7f5ac270d55950a3a1   3.5.0            25h
    01-master-container-runtime      d3da910bfa9f4b599af4ed7f5ac270d55950a3a1   3.5.0            25h
    01-master-kubelet                d3da910bfa9f4b599af4ed7f5ac270d55950a3a1   3.5.0            25h
    01-worker-container-runtime      d3da910bfa9f4b599af4ed7f5ac270d55950a3a1   3.5.0            25h
    01-worker-kubelet                d3da910bfa9f4b599af4ed7f5ac270d55950a3a1   3.5.0            25h
    100-worker-iommu                                                            3.5.0            30s
    100-worker-vfiopci-configuration                                            3.5.0            30s
    ```

**Verification**

*   Verify that the VFIO driver is loaded.
    ```terminal
    $ lspci -nnk -d <vendor_id>:
    ```

    The output confirms that the VFIO driver is being used.

    Example output:
    ```
    04:00.0 3D controller [0302]: NVIDIA Corporation GP102GL [Tesla P40] [10de:1eb8] (rev a1)
            Subsystem: NVIDIA Corporation Device [10de:1eb8]
            Kernel driver in use: vfio-pci
            Kernel modules: nouveau
    ```