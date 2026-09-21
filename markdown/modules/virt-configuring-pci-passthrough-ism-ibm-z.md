{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure PCI passthrough for {{ ibm_title }} ISM virtual PCI devices on {{ ibm_z_title }} {id="virt-configuring-pci-passthrough-ism-ibm-z_{{ context }}"}

On {{ ibm_z_name }} and {{ ibm_linuxone_name }}, {{ ibm_name }} Internal Shared Memory (ISM) devices are exposed as virtual PCI devices. You can configure PCI passthrough for ISM devices by binding the device to the `vfio-pci` driver by using a single `MachineConfig`. {._abstract}

Unlike RoCE passthrough, which requires two separate `MachineConfig` objects to blocklist `mlx5_core` and bind `vfio-pci`, ISM passthrough requires only a single `MachineConfig`. The `ism` kernel module does not load during initramfs, so a `softdep` directive combined with kernel boot arguments is enough to ensure `vfio-pci` claims the device before `ism`.


:::note

The `softdep` directive ensures `vfio-pci` loads before the `ism` module without completely blocking `ism` from the host. The `ism` module remains available in the kernel but does not own the ISM device.

:::


**Prerequisites**

*   You have installed {{ product_title }} 4.21 or later.
*   You have installed the {{ VirtProductName }} Operator.
*   You have cluster administrator permissions.
*   You have installed the Butane tool for generating Ignition-compatible `MachineConfig` manifests.
*   The ISM virtual PCI device is present and visible on the PCI bus of the target nodes.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  On each node, confirm the ISM device is displayed as a PCI device by running the following command:
    ```terminal
    $ lspci | grep -i ism
    ```
    ```terminal title="Example output"
    0004:00:00.0 Non-VGA unclassified device: IBM Internal Shared Memory (ISM) virtual PCI device
    ```
1.  Retrieve the PCI vendor and device ID by running the following command:
    ```terminal
    $ lspci -n -s 0004:00:00.0
    ```
    ```terminal title="Example output"
    0004:00:00.0 0000: 1014:04ed
    ```

    Record the combined PCI vendor and device ID `1014:04ed`. This value is used in the `vfio-pci` and `HyperConverged` configuration.
1.  Create a Butane configuration file named `100-master-vfio-ism.bu` to bind the ISM device to `vfio-pci`:
    ```yaml {minja}
    variant: openshift
    version: {{ product_version }}.0
    metadata:
      name: 100-master-vfio-ism
      labels:
        machineconfiguration.openshift.io/role: master
    storage:
      files:
        - path: /etc/modprobe.d/vfio-ism.conf
          mode: 0644
          overwrite: true
          contents:
            inline: |
              softdep ism pre: vfio-pci
              options vfio-pci ids=1014:04ed
    openshift:
      kernel_arguments:
        - rd.driver.pre=vfio-pci
        - vfio-pci.ids=1014:04ed
    ```

    where:

    `storage.files[].contents.inline softdep ism pre: vfio-pci`
    :   Specifies that `vfio-pci` must load before the `ism` module. The `ism` module remains available on the host but does not own the device.

    `storage.files[].contents.inline options vfio-pci ids=1014:04ed`
    :   Specifies that `vfio-pci` claims devices with this PCI vendor and device ID.

    `openshift.kernel_arguments rd.driver.pre=vfio-pci`
    :   Specifies that `vfio-pci` loads during initramfs before any other driver.

    `openshift.kernel_arguments vfio-pci.ids=1014:04ed`
    :   Specifies the PCI device ID passed directly to `vfio-pci` at boot time.

1.  Convert the Butane file to a `MachineConfig` manifest by running the following command:
    ```terminal
    $ butane 100-master-vfio-ism.bu -o 100-master-vfio-ism.yaml
    ```
1.  Apply the `MachineConfig` to the cluster by running the following command:
    ```terminal
    $ oc apply -f 100-master-vfio-ism.yaml
    ```
1.  Watch the `MachineConfig` rollout and wait for completion before proceeding:
    ```terminal
    $ oc get mcp master -w
    ```
    ```terminal title="Example output when complete"
    NAME     CONFIG                                             UPDATED   UPDATING   DEGRADED   MACHINECOUNT   READYMACHINECOUNT   UPDATEDMACHINECOUNT   DEGRADEDMACHINECOUNT   AGE
    master   rendered-master-3fb080e65525e49079d4b34e122fb64c   True      False      False      3              3                   3                     0                      27d
    ```
1.  Confirm the ISM device resource is visible and allocatable on the nodes by running the following command:
    ```terminal
    $ oc describe nodes | grep ibm.com/ism
    ```
    ```terminal title="Example output"
      ibm.com/ism:    1
      ibm.com/ism:    1
    ```
1.  Edit the `HyperConverged` custom resource to expose the ISM device by running the following command:
    ```terminal
    $ oc edit hyperconverged kubevirt-hyperconverged -n openshift-cnv
    ```

    Add the ISM device under `spec.virtualization.permittedHostDevices`:
    ```yaml
    spec:
      virtualization:
        permittedHostDevices:
          pciHostDevices:
            - pciDeviceSelector: "1014:04ed"
              resourceName: ibm.com/ism
    ```
1.  Verify the HyperConverged Operator accepted the configuration by running the following command:
    ```terminal
    $ oc get hyperconverged kubevirt-hyperconverged \
      -n openshift-cnv -o json | jq '.spec.virtualization.permittedHostDevices'
    ```
    ```terminal title="Example output"
    {
      "pciHostDevices": [
        {
          "pciDeviceSelector": "1014:04ed",
          "resourceName": "ibm.com/ism"
        }
      ]
    }
    ```
1.  Add the ISM device to a `VirtualMachine` manifest:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: <vm_name>
      namespace: <namespace>
    spec:
      running: true
      template:
        spec:
          domain:
            devices:
              hostDevices:
                - deviceName: ibm.com/ism
                  name: ism-device
            resources:
              requests:
                memory: 1Gi
    ```
1.  Apply the `VirtualMachine` manifest by running the following command:
    ```terminal
    $ oc apply -f <vm_manifest>.yaml
    ```

**Verification**

1.  Verify `vfio-pci` binding on all control plane nodes by running the following command:
    ```terminal
    $ for node in $(oc get nodes -l node-role.kubernetes.io/master -o name); do
      echo "=== $node ==="
      oc debug $node -- chroot /host bash -c \
        "lspci -nnk | grep -A2 'ISM\|1014:04ed'" 2>/dev/null
    done
    ```
    ```terminal title="Example output"
    === node/master-0 ===
    0000:00:00.0 Non-VGA unclassified device [0000]: IBM Internal Shared Memory (ISM) virtual PCI device [1014:04ed]
            Kernel driver in use: vfio-pci
            Kernel modules: ism
    === node/master-1 ===
    0000:00:00.0 Non-VGA unclassified device [0000]: IBM Internal Shared Memory (ISM) virtual PCI device [1014:04ed]
            Kernel driver in use: vfio-pci
            Kernel modules: ism
    === node/master-2 ===
    0000:00:00.0 Non-VGA unclassified device [0000]: IBM Internal Shared Memory (ISM) virtual PCI device [1014:04ed]
            Kernel driver in use: vfio-pci
            Kernel modules: ism
    ```

    `Kernel modules: ism` indicates the `ism` module is available in the kernel but is not actively managing the device. `vfio-pci` owns the device.
1.  Verify the ISM device is present inside the VM by connecting to the VM console and running the following command:
    ```terminal
    $ lspci -nnk | grep -i ism
    ```
    ```terminal title="Example output"
    0001:00:00.0 Non-VGA unclassified device: IBM Internal Shared Memory (ISM) virtual PCI device
    ```

    The output confirms PCI passthrough. The guest binds the `ism` driver only if the guest image includes that module.