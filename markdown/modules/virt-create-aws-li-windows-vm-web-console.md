{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a license-compliant AWS EC2 Windows VM by using the web console {id="virt-create-aws-li-windows-vm-web-console_{{ context }}"}

Create license-compliant Windows virtual machines (VMs) by enabling the `dedicatedCpuPlacement` attribute. This is enabled by default on **Dedicated vCPU** instance types. {._abstract}

**Procedure**

1.  In the {{ product_title }} web console, go to **Virtualization** -> **Catalog**. The **InstanceTypes** tab opens by default.
1.  Click **Add volume** to create a Windows boot source. You can upload a new volume or use an existing persistent volume claim (PVC), a volume snapshot, or a `containerDisk` volume.
1.  In the **Volume metadata** section, select a preference with a name that begins with `windows` and is followed by the Windows version of your choice. For example, `windows.11.virtio`. Click **Save**.
1.  Select a bootable volume from the list. If the list is truncated, click **Show all** to display the entire list. The bootable volume table contains the previously uploaded boot source.
1.  In the **User provided** tab, select a **Dedicated vCPU** instance type.
1.  Optional: You can mount a Windows driver disk by completing the following steps:
    1.  Click **Customize VirtualMachine**.
    1.  On the **VirtualMachine details** page, click **Storage**.
    1.  Select the **Mount Windows drivers** disk checkbox.
1.  Click **Create VirtualMachine**.