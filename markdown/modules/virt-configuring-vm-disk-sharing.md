{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring disk sharing by using virtual machine disks {id="virt-configuring-vm-disk-sharing_{{ context }}"}

You can configure block volumes so that multiple virtual machines (VMs) can share storage. {._abstract}

The application running on the guest operating system determines the storage option you must configure for the VM. A disk of type `disk` exposes the volume as an ordinary disk to the VM.

You can set an error policy for each disk. The error policy controls how the hypervisor behaves when an input/output error occurs while a disk is being written to or read. The default behavior stops the VM and generates a Kubernetes event.

You can accept the default behavior, or you can set the error policy to one of the following options:

*   `report`, which reports the error in the guest.
*   `ignore`, which ignores the error. The Read or Write failure is undetected.
*   `enospace`, which produces an error indicating that there is not enough disk space.

**Prerequisites**

*   The volume access mode must be `ReadWriteMany` (RWX) if the VMs that are sharing disks are running on different nodes.

    If the VMs that are sharing disks are running on the same node, `ReadWriteOnce` (RWO) volume access mode is sufficient.

    :::note

    Not all filesystem and format combinations support RWX mode. For example, XFS format does not support RWX mode. When multiple VMs write to an XFS-formatted volume, data corruption occurs and only the writing VM can access the data.
    
    :::

*   The storage provider must support the required Container Storage Interface (CSI) driver.

**Procedure**

1.  Create the `VirtualMachine` manifest for your VM to set the required values, as shown in the following example:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: <vm_name>
    spec:
      template:
    # ...
        spec:
          domain:
            devices:
              disks:
              - disk:
                  bus: virtio
                name: rootdisk
                errorPolicy: report
              - disk:
                  bus: virtio
                name: cluster
                shareable: true
              interfaces:
              - masquerade: {}
                name: default
    ```
    *   `spec.template.spec.domain.devices.disks.errorPolicy` defines how the hypervisor should behave when an IO error occurs.
    *   `spec.template.spec.domain.devices.disks.shareable` defines whether multiple virtual machines (VMs) can use the same underlying disk.
1.  Save the `VirtualMachine` manifest file to apply your changes.