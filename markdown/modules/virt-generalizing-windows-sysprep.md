{%- set _mod_docs_content_type = "PROCEDURE" %}
# Generalizing a Windows VM image {id="virt-generalizing-windows-sysprep_{{ context }}"}

You can generalize a Windows operating system image to remove all system-specific configuration data before you use the image to create a new virtual machine (VM). {._abstract}

Before generalizing the VM, you must ensure the `sysprep` tool cannot detect an answer file after the unattended Windows installation.

**Prerequisites**

*   A running Windows VM with the QEMU guest agent installed.

**Procedure**

1.  In the {{ product_title }} console, click **Virtualization** -> **VirtualMachines**.
1.  Select a Windows VM to open the **VirtualMachine details** page.
1.  Click **Configuration** -> **Disks**.
1.  Click the Options menu {{ kebab }} beside the `sysprep` disk and select **Detach**.
1.  Click **Detach**.
1.  Rename `C:\Windows\Panther\unattend.xml` to avoid detection by the `sysprep` tool.
1.  Start the `sysprep` program by running the following command:
    ```terminal
    %WINDIR%\System32\Sysprep\sysprep.exe /generalize /shutdown /oobe /mode:vm
    ```
1.  After the `sysprep` tool completes, the Windows VM shuts down. The disk image of the VM is now available to use as an installation image for Windows VMs.

**Result**

You can now specialize the VM.