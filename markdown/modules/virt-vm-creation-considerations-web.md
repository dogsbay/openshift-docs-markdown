{%- set _mod_docs_content_type = "REFERENCE" %}
# Virtual machine creation wizard reference {id="virt-vm-creation-considerations-web_{{ context }}"}

The virtual machine (VM) creation wizard in the web console presents several options that affect how a VM runs. The following tables describe the options that have the greatest impact. {._abstract}

## Boot source options {id="virt-boot-source-options-reference_{{ context }}"}

On the **Boot source** page, you can select an existing boot volume or click **Add volume** to create one. When you add a volume, the **Source type** list determines where the boot disk image comes from.

**Boot source types**

| Source type | Description | When to use |
| --- | --- | --- |
| Volume (upload new) | Uploads a persistent volume claim (PVC) image or ISO file from your local machine. | You have a disk image or ISO on your workstation. Select **This is an ISO file** for installation media. |
| Volume (use existing) | Reuses a volume that is already available on the cluster. | A boot volume is already prepared in the cluster. |
| Volume snapshot | Creates a boot disk from an existing volume snapshot. | You want fast provisioning from a point-in-time image. |
| Registry | Imports a container disk from a container registry. | The image is published to a registry such as Quay. Requires a container image URL and, for private registries, credentials. |
| URL | Imports an image from an HTTP or HTTPS endpoint. | The image is hosted at a web address. Select **TLS certificate required** for endpoints that need a certificate. |

When you add a volume, the following settings affect how the disk is stored and identified:


**Preference**
:   The preferred VM attribute values required to run a given workload, such as the guest operating system. The preference influences default values elsewhere in the wizard.

**Default InstanceType**
:   The default instance type associated with the boot volume.

**StorageClass**
:   The storage class used to provision the volume. The default storage class is used unless you select another.

**Volume Mode**
:   Determines whether the volume is presented as a raw block device (**Block**) or a formatted file system (**Filesystem**).

**Access Mode**
:   Controls how many nodes can mount the volume: shared access (**RWX**), single-user (**RWO**), or read-only (**ROX**). Live migration requires shared access (**RWX**).

## Instance type series {id="virt-instance-type-series-reference_{{ context }}"}

On the **Compute resources** page, you select an instance type series and then a size. The series determines the CPU and memory characteristics of the VM. Some series require specially configured nodes.

**Instance type series**

| Series | Name | Characteristics | Node requirement |
| --- | --- | --- | --- |
| U | General Purpose | Neutral, general-purpose resources. VMs share physical CPU cores with other VMs on a time-slice basis. | None |
| O | Overcommitted | Based on the U series, but memory is overcommitted. | None |
| CX | Compute Exclusive | Exclusive compute resources for compute-intensive workloads, with dedicated CPUs, isolated emulator threads, and virtual non-uniform memory access (NUMA) topology. | CPU manager enabled and huge pages available on the nodes. |
| M | Memory Intensive | Resources for memory-intensive workloads, with burstable CPU performance. | None |
| D | Dedicated vCPU | Consistent, predictable performance. VMs are assigned exclusive physical CPU cores, which avoids CPU sharing and time-slice contention. | None |
| N | Network | Resources for network-intensive Data Plane Development Kit (DPDK) workloads, such as virtual network functions (VNFs). | Nodes capable of running DPDK workloads and labeled with `node-role.kubevirt.io/worker-dpdk`. |
| RT | Realtime | Resources for realtime workloads, such as `oslat`. | Nodes capable of running realtime workloads. |

Instance types are named in the format `series.size`, where the size ranges from `nano` to `8xlarge`. For example, `u1.medium` provides 1 vCPU and 4 GiB of memory. You can select a **Red&#160;Hat provided** instance type or a **User provided** instance type that an administrator has defined.

## Customization settings {id="virt-customization-key-terms-reference_{{ context }}"}

The optional **Customization** step groups advanced settings into tabs. The following settings are the ones that most commonly affect VM behavior.

**Key customization settings**

| Setting | Tab | Description |
| --- | --- | --- |
| Disk interface | Storage | Determines disk performance and compatibility. **VirtIO** offers the best performance but requires additional drivers on Windows. **SATA** has lower performance but is supported by most operating systems, including Windows. **SCSI** supports large numbers of devices. |
| Ephemeral disk | Storage | Adds a disk from a container image whose changes are lost when the VM reboots. |
| Use this disk as a boot source | Storage | Marks a disk as bootable. Only one disk can be bootable at a time. |
| Headless mode | Details | Removes the default graphics device. VNC console access is not available when this option is enabled. |
| Deletion protection | Details | Prevents the VM from being deleted through the web console. |
| Boot mode | Details | Sets the firmware interface, such as BIOS or UEFI, used to boot the VM. |
| Run strategy | Scheduling | Controls how the VM behaves after a failure, shutdown, or restart, such as **Rerun on failure**. |
| Eviction strategy | Scheduling | Determines what happens to the VM when its node is drained. **LiveMigrate** moves the VM to another node instead of stopping it. |
| Network binding | Network | Sets how the network interface connects. **Masquerade** is the default for pod networking; **Bridge** connects to an L2 network; **SR-IOV** attaches a virtual function for high performance. |
| Initialization method | Initial run | Configures first-boot settings by using **cloud-init** for Linux guests or **Sysprep** for Windows guests. |
| Dynamic SSH key injection | SSH | Injects a public SSH key that is applied without restarting the VM. When it is not enabled, keys are applied through `virtctl`. |
| Labels and annotations | Metadata | **Labels** are key-value pairs that you can query to organize and select VMs. **Annotations** store arbitrary metadata that cannot be queried. |