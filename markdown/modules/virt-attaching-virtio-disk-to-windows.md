{%- set _mod_docs_content_type = "PROCEDURE" %}
# Attaching VirtIO container disk to Windows VMs during installation {id="virt-attaching-virtio-disk-to-windows_{{ context }}"}

You must attach the VirtIO container disk to the Windows VM to install the necessary Windows drivers. This can be done during creation of the VM. {._abstract}

**Procedure**

1.  When creating a Windows VM from a template, click **Customize VirtualMachine**.
1.  Select **Mount Windows drivers disk**.
1.  Click the **Customize VirtualMachine parameters**.
1.  Click **Create VirtualMachine**.

**Result**

After the VM is created, the `virtio-win` SATA CD disk will be attached to the VM.