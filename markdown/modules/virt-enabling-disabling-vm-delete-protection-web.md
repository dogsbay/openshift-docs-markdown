{%- set _mod_docs_content_type = "PROCEDURE" %}

# Enabling or disabling virtual machine delete protection by using the web console {id="virt-enabling-disabling-vm-delete-protection-web_{{ context }}"}

To prevent the inadvertent deletion of a virtual machine (VM), you can enable VM delete protection by using the {{ product_title }} web console. You can also disable delete protection for a VM. {._abstract}

By default, delete protection is not enabled for VMs. You must set the option for each individual VM.

**Procedure**

1.  From the {{ product_title }} web console, choose your view:
    *   For a virtualization-focused view, select **Administrator** → **Virtualization** → **VirtualMachines**.
    *   For a general view, navigate to **Virtualization** → **VirtualMachines**.
1.  From the **VirtualMachines** list, select the VM whose delete protection you want to enable or disable.
1.  Click the **Configuration** tab.
1.  In the **VirtualMachines details**, choose to enable or disable the protection as follows:
    *   To enable the protection:
        1.  Set the **Deletion protection** switch to **On**.
        1.  Click **Enable** to confirm the protection.
    *   To disable the protection:
        1.  Set the **Deletion protection** switch to **Off**.
        1.  Click **Disable** to disable the protection.