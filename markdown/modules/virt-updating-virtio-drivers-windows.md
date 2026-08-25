{%- set _mod_docs_content_type = "PROCEDURE" %}
# Update VirtIO drivers on a Windows VM {id="virt-updating-virtio-drivers-windows_{{ context }}"}

You can update the VirtIO drivers on a Windows virtual machine (VM) by using the Windows Update service (WUS). {._abstract}


:::important

If you restrict the WUS to only allow drivers explicitly signed and published by Microsoft, automatic Red&#160;Hat `virtio-win` driver updates are disabled. For information about enabling automatic Red&#160;Hat VirtIO driver updates, see "Enable automatic updates for Red&#160;Hat virtio-win drivers".

:::


**Prerequisites**

*   The cluster must have internet connectivity. Disconnected clusters cannot reach the WUS.

**Procedure**

1.  In the Windows Guest operating system, click the **Windows** key and select **Settings**.
1.  Navigate to **Windows Update** → **Advanced Options** → **Optional Updates**.
1.  Install all updates from **Red Hat, Inc.**.
1.  Reboot the VM.

**Verification**

1.  On the Windows VM, navigate to the **Device Manager**.
1.  Select a device.
1.  Select the **Driver** tab.
1.  Click **Driver Details** and confirm that the `virtio` driver details displays the correct version.


:::tip

To view the individual driver versions included in the `virtio-win` container disk, open the `release-drivers-versions.txt` file at the root of the `virtio-win` CD drive.

:::