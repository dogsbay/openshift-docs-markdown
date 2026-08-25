{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a VM from a template by using the web console {id="virt-creating-vm-from-template-web_{{ context }}"}

You can use the **Create from Template** workflow in the web console to create a virtual machine (VM) by selecting a preconfigured template that provides standardized images and settings. {._abstract}

Use this workflow when:

*   A template matches your workload requirements and operating system.
*   You want to use a preconfigured VM with standardized settings.
*   You want to quickly deploy a VM with minimal customization.

**Prerequisites**

*   You have access to the {{ product_title }} web console.
*   You have `edit` or `admin` permissions in the target project.
*   A template with an available boot source exists in the cluster.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Virtualization** → **VirtualMachines**.
1.  Click **Create**.
1.  On the **Deployment details** page, configure the following settings:
    1.  Select **Create from Template**.
    1.  In the **Name** field, enter a name for the VM. You can also click the refresh icon to generate a name automatically.
    1.  Optional: Enter a **Description** for the VM.
    1.  Review the **Location** to verify the target cluster and project. If the folder preview feature is enabled, you can also verify the folder. To change the location, click the edit icon.
    1.  Click **Next**.
1.  On the **Template** page, select a template:
    1.  Optional: Filter the template list. You can select a project from the **All projects** menu, apply a **Filter** for categories such as operating system or workload type, or enter a keyword in the **Filter by keyword** field.
    1.  Click a template tile to select it and view its details.
    1.  Click **Next**.
1.  Optional: On the **Customization** page, configure advanced settings by navigating the following tabs:
    *   **Details**: Configure the **Hostname**, **Headless mode**, **Guest system log access**, and **Deletion protection**.
    *   **Storage**: Add or change storage disks.
    *   **Network**: Add network interfaces.
    *   **Scheduling**: Configure scheduling requirements and the run strategy.
    *   **SSH**: Configure SSH key settings.
    *   **Initial run**: Define **Cloud-init** or **Sysprep** initialization scripts.
    *   **Labels and annotations**: Add labels to help organize and categorize VMs, and use annotations to store extra metadata.
        1.  Click **Next**.
1.  On the **Review and create** page, review the VM configuration:
    1.  Optional: Select the **Start this VirtualMachine after creation** checkbox.
    1.  Click **Create VirtualMachine**.

**Verification**

*   Navigate to **Virtualization** → **VirtualMachines** and verify that the VM is displayed in the list.