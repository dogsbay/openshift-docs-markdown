{%- set _mod_docs_content_type = "PROCEDURE" %}
# Attaching VirtIO container disk to an existing Windows VM {id="virt-attaching-virtio-disk-to-windows-existing_{{ context }}"}

You must attach the VirtIO container disk to the Windows VM to install the necessary Windows drivers. This can be done to an existing VM. {._abstract}

**Procedure**

1.  Navigate to the existing Windows VM, and click **Actions** → **Stop**.
1.  Go to **VM Details** → **Configuration** → **Storage**.
1.  Select the **Mount Windows drivers disk** checkbox.
1.  Click **Save**.
1.  Start the VM, and connect to a graphical console.