{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the QEMU guest agent on a Windows VM {id="installing-qemu-guest-agent-on-windows-vm_{{ context }}"}

For Windows virtual machines (VMs), the QEMU guest agent is included in the VirtIO drivers. You can install the drivers during a Windows installation or on an existing Windows VM. {._abstract}

To create snapshots of a VM in the `Running` state with the highest integrity, install the QEMU guest agent.

The QEMU guest agent takes a consistent snapshot by attempting to quiesce the VM file system. This ensures that in-flight I/O is written to the disk before the snapshot is taken. If the guest agent is not present, quiescing is not possible and a best-effort snapshot is taken. 

Note that in a Windows guest operating system, quiescing also requires the Volume Shadow Copy Service (VSS). Therefore, before you create a snapshot, ensure that VSS is enabled on the VM as well.

The conditions under which a snapshot is taken are reflected in the snapshot indications that are displayed in the web console or CLI. If these conditions do not meet your requirements, try creating the snapshot again or use an offline snapshot.

**Procedure**

1.  In the Windows guest operating system, use the **File Explorer** to navigate to the `guest-agent` directory in the `virtio-win` CD drive.
1.  Run the `qemu-ga-x86_64.msi` installer.

**Verification**

1.  Obtain a list of network services by running the following command:
    ```terminal
    $ net start
    ```
1.  Verify that the output contains the `QEMU Guest Agent`.