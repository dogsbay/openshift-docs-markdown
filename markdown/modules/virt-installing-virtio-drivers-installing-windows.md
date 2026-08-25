{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing VirtIO drivers during Windows installation {id="virt-installing-virtio-drivers-installing-windows_{{ context }}"}

You can install the VirtIO drivers while installing Windows on a virtual machine (VM). {._abstract}


:::note

This procedure uses a generic approach to the Windows installation and the installation method might differ between versions of Windows. See the documentation for the version of Windows that you are installing.

:::


**Prerequisites**

*   A storage device containing the `virtio` drivers must be attached to the VM.

**Procedure**

1.  In the Windows operating system, use the `File Explorer` to navigate to the `virtio-win` CD drive.
1.  Double-click the drive to run the appropriate installer for your VM.

    For a 64-bit vCPU, select the `virtio-win-gt-x64` installer. 32-bit vCPUs are no longer supported.
1.  Optional: During the **Custom Setup** step of the installer, select the device drivers you want to install. The recommended driver set is selected by default.
1.  After the installation is complete, select **Finish**.
1.  Reboot the VM.

**Verification**

1.  Open the system disk on the PC. This is typically `C:`.
1.  Navigate to **Program Files** → **Virtio-Win**.

If the **Virtio-Win** directory is present and contains a sub-directory for each driver, the installation was successful.