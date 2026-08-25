{%- set _mod_docs_content_type = "PROCEDURE" %}
# Specializing a Windows VM image {id="virt-specializing-windows-sysprep_{{ context }}"}

Specializing a Windows virtual machine (VM) configures the computer-specific information from a generalized Windows image onto the VM. {._abstract}

**Prerequisites**

*   You must have a generalized Windows disk image.
*   You must create an `unattend.xml` answer file. See the [Microsoft documentation](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/update-windows-settings-and-scripts-create-your-own-answer-file-sxs?view=windows-11) for details.

**Procedure**

1.  In the {{ product_title }} console, click **Virtualization** -> **Catalog**.
1.  Select a Windows template and click **Customize VirtualMachine**.
1.  Select **PVC (clone PVC)** from the **Disk source** list.
1.  Select the PVC project and PVC name of the generalized Windows image.
1.  Click **Customize VirtualMachine parameters**.
1.  Click the **Scripts** tab.
1.  In the **Sysprep** section, click **Edit**, browse to the `unattend.xml` answer file, and click **Save**.
1.  Click **Create VirtualMachine**.

**Result**

During the initial boot, Windows uses the `unattend.xml` answer file to specialize the VM. The VM is now ready to use.