{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding kernel arguments to enable the IOMMU driver {id="virt-adding-kernel-arguments-enable-IOMMU_{{ context }}"}

You must enable the Input-Output Memory Management Unit (IOMMU) driver before you can configure mediated devices. To enable the IOMMU driver in the kernel, create the `MachineConfig` object and add the kernel arguments. {._abstract}

**Prerequisites**

*   You have cluster administrator permissions.
*   Your CPU hardware is Intel or AMD.

    :::note

    Enabling IOMMU is not required on `s390x` architecture.
    
    :::

*   You enabled Intel Virtualization Technology for Directed I/O extensions or AMD IOMMU in the BIOS.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a `MachineConfig` object that identifies the kernel argument. The following example shows a kernel argument for an Intel CPU.

    ```yaml
    apiVersion: machineconfiguration.openshift.io/v1
    kind: MachineConfig
    metadata:
      labels:
        machineconfiguration.openshift.io/role: worker
      name: 100-worker-iommu
    spec:
      config:
        ignition:
          version: 3.2.0
      kernelArguments:
          - intel_iommu=on
    # ...
    ```
    *   `metadata.labels.machineconfiguration.openshift.io/role` specifies that the new kernel argument is applied only to worker nodes.
    *   `metadata.name` specifies the ranking of this kernel argument (100) among the machine configs and its purpose. If you have an AMD CPU, specify the kernel argument as `amd_iommu=on`.
    *   `spec.kernelArguments` specifies the kernel argument as `intel_iommu` for an Intel CPU.
1.  Create the new `MachineConfig` object:
    ```terminal
    $ oc create -f 100-worker-kernel-arg-iommu.yaml
    ```

**Verification**

1.  Verify that the new `MachineConfig` object was added by entering the following command and observing the output:
    ```terminal
    $ oc get MachineConfig
    ```

    Example output:
    ```terminal
    NAME                                       IGNITIONVERSION                    AGE
    00-master                                   3.5.0                             164m
    00-worker                                   3.5.0                             164m
    01-master-container-runtime                 3.5.0                             164m
    01-master-kubelet                           3.5.0                             164m
    01-worker-container-runtime                 3.5.0                             164m
    01-worker-kubelet                           3.5.0                             164m
    100-master-chrony-configuration             3.5.0                             169m
    100-master-set-core-user-password           3.5.0                             169m
    100-worker-chrony-configuration             3.5.0                             169m
    100-worker-iommu                            3.5.0                             14s
    ```
1.  Verify that IOMMU is enabled at the operating system (OS) level by entering the following command:
    ```terminal
    $ dmesg | grep -i iommu
    ```
    *   If IOMMU is enabled, output is displayed as shown in the following example:

        Example output:
        ```terminal
        Intel: [ 0.000000] DMAR: Intel(R) IOMMU Driver
        AMD: [ 0.000000] AMD-Vi: IOMMU Initialized
        ```