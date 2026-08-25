{%- set _newdoc_version = "2.18.5" -%}
{%- set _template_generated = "2025-09-11" -%}
{%- set _mod_docs_content_type = "PROCEDURE" %}

# Inserting a CD-ROM in a live VM by using the web console {id="virt-inserting-a-cd-rom-in-a-vm-by-using-the-web-console_{{ context }}"}

To make data on a CD-ROM storage device available to a running virtual machine (VM), create a virtual CD-ROM drive in the VM and insert the CD-ROM into the drive as an ISO image. {._abstract}

Setting up a virtual CD-ROM drive requires rebooting the VM, but you can insert and eject ISO images in the drive while the VM is running.

**Prerequisites**

{% include "./snippets/virt-cdrom-feature-gate-requirements.md" %}

**Procedure**

1.  In the {{ product_title }} web console, go to **Virtualization** → **VirtualMachines**.
1.  Click the name of the VM in which you want to insert the CD-ROM.
1.  On the VM details page, click the **Configuration** tab.
1.  Open the **Storage** pane.
1.  Click **Add**.

    A drop-down menu opens.
1.  Click **CD-ROM**.
1.  In the **Name** field, add a name for the CD-ROM drive device.
1.  Select the ISO image to add to the drive as a CD-ROM volume. To do so, click the drop-down button, and select from the volumes available in the cluster.

    Alternatively, you can upload a new ISO file and insert it into the CD-ROM drive after it is created. To do so:
    1.  Ensure that the **Upload a new ISO file to the cluster** line is checked.
    1.  Drag and drop an ISO file in the **Upload ISO** field, or click **Upload** and select the ISO image that you want to upload.
    1.  In the **Upload mode** field, select **Mount uploaded ISO as DataVolume**.
1.  Click **Add**.

    The CD-ROM drive is added to the **Storage** list.
1.  If the VM is running, shut it down or restart it.
1.  To insert the ISO file attached to the CD-ROM drive as a CD-ROM volume into the VM, click the Options menu {{ kebab }} next to the CD-ROM drive, and click **Inject**. You can do this while the VM is running. 
1.  Optional: In the guest operating system, verify that the CD-ROM has been detected.
1.  Optional: To eject the CD-ROM from the VM, click the Options menu {{ kebab }} next to the CD-ROM device in the web console, and select **Eject**. You can do this while the VM is running.