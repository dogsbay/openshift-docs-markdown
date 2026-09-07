{%- set _mod_docs_content_type = "PROCEDURE" %}
# Update VirtIO drivers and the guest agent on a Windows VM {id="virt-updating-virtio-drivers-guest-agent-windows_{{ context }}"}

You can update the VirtIO drivers and the QEMU guest agent on a Windows virtual machine (VM) by using the `virtio-win` guest tools installer. This method updates both the drivers and the guest agent in one step. {._abstract}

**Prerequisites**

*   The `container-native-virtualization/virtio-win` container disk must be attached to the VM as a SATA CD drive. You can mount the disk from the web console by selecting the **Mount Windows drivers disk** checkbox on the **Configuration** → **Storage** tab.

**Procedure**

1.  Start the VM and connect to a graphical console.
1.  Log in to the Windows guest operating system.
1.  Open **File Explorer** and navigate to the `virtio-win` CD drive.
1.  Double-click the `virtio-win-gt-x64` installer to launch the guest tools setup wizard.
1.  Follow the prompts in the setup wizard. The default options update the VirtIO drivers and the QEMU guest agent.
1.  After the update is complete, click **Finish**.
1.  Reboot the VM.

**Verification**

1.  On the Windows VM, navigate to **Device Manager**.
1.  Select a device.
1.  Select the **Driver** tab.
1.  Click **Driver Details** and confirm that the `virtio` driver details displays the correct version.