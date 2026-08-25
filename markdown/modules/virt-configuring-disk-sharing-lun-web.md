{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring disk sharing by using LUN and the web console {id="virt-configuring-disk-sharing-lun-web_{{ context }}"}

You can use the {{ product_title }} web console to configure disk sharing by using LUN. {._abstract}

**Prerequisites**

*   The cluster administrator must enable the `persistentreservation` feature gate setting.

**Procedure**

1.  Click **Virtualization** -> **VirtualMachines** in the web console.
1.  Select a VM to open the **VirtualMachine details** page.
1.  Expand **Storage**.
1.  On the **Disks** tab, click **Add disk**.
1.  Specify the **Name**, **Source**, **Size**, **Interface**, and **Storage Class**.
1.  Select **LUN** as the **Type**.
1.  Select **Shared access (RWX)** as the **Access Mode**.
1.  Select **Block** as the **Volume Mode**.
1.  Expand **Advanced Settings**, and select both checkboxes.
1.  Click **Save**.