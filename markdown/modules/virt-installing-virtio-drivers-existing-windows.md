{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing VirtIO drivers from a SATA CD drive on an existing Windows VM {id="virt-installing-virtio-drivers-existing-windows_{{ context }}"}

You can install the VirtIO drivers from a SATA CD drive on an existing Windows virtual machine (VM). {._abstract}


:::note

This procedure uses a generic approach to adding drivers to Windows. See the installation documentation for your version of Windows for specific installation steps.

:::


**Prerequisites**

*   A storage device containing the virtio drivers must be attached to the VM as a SATA CD drive.

**Procedure**

1.  Start the VM and connect to a graphical console.
1.  Log in to a Windows user session.
1.  Open **Device Manager** and expand **Other devices** to list any **Unknown device**.
    1.  Open the **Device Properties** to identify the unknown device.
    1.  Right-click the device and select **Properties**.
    1.  Click the **Details** tab and select **Hardware Ids** in the **Property** list.
    1.  Compare the **Value** for the **Hardware Ids** with the supported VirtIO drivers.
1.  Right-click the device and select **Update Driver Software**.
1.  Click **Browse my computer for driver software** and browse to the attached
SATA CD drive, where the VirtIO drivers are located. The drivers are arranged
hierarchically according to their driver type, operating system,
and CPU architecture.
1.  Click **Next** to install the driver.
1.  Repeat this process for all the necessary VirtIO drivers.
1.  After the driver installs, click **Close** to close the window.
1.  Reboot the VM to complete the driver installation.