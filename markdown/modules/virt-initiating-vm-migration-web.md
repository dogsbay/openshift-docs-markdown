{%- set _mod_docs_content_type = "PROCEDURE" %}
# Initiating live migration by using the web console {id="virt-initiating-vm-migration-web_{{ context }}"}

You can live migrate a running virtual machine (VM) to a different node in the cluster by using the {{ product_title }} web console. {._abstract}


:::note

The **Migrate** action is visible to all users but only cluster administrators can initiate a live migration.

:::


**Prerequisites**

*   You have the `kubevirt.io:migrate` RBAC role or you are a cluster administrator.
*   The VM is able to be migrated.
*   If the VM is configured with a host model CPU, the cluster has an available node that supports the CPU model.

**Procedure**

1.  Navigate to **Virtualization** -> **VirtualMachines** in the web console.
1.  Take either of the following steps:
    *   Click the Options menu {{ kebab }} beside the VM you want to migrate, hover over the **Migrate** option, and select **Compute**.
    *   Open the **VM details** page of the VM you want to migrate, click the **Actions** menu, hover over the **Migrate** option, and select **Compute**.
1.  In the **Migrate Virtual Machine to a different Node** dialog box, select either **Automatically Selected Node** or **Specific Node**.
    1.  If you selected the **Specific Node** option, choose a node from the list.
1.  Click **Migrate Virtual Machine**.