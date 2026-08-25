{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a VM from an uploaded image by using the web console {id="virt-creating-vm-uploaded-image-web_{{ context }}"}

You can create a virtual machine (VM) from an uploaded operating system image by using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You must have an `IMG`, `ISO`, or `QCOW2` image file.

**Procedure**

1.  Navigate to **Virtualization** -> **Catalog** in the web console.
1.  Click a template tile without an available boot source.
1.  Click **Customize VirtualMachine**.
1.  On the **Customize template parameters** page, expand **Storage** and select **Upload (Upload a new file to a PVC)** from the **Disk source** list.
1.  Browse to the image on your local machine and set the disk size.
1.  Click **Customize VirtualMachine**.
1.  Click **Create VirtualMachine**.