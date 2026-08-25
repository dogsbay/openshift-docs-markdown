{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a VM with custom configuration by using the web console {id="virt-creating-vm-custom-configuration-web_{{ context }}"}

You can use the **Custom configuration** workflow in the web console to create a virtual machine (VM) by selecting a guest operating system, boot source, compute resources, and advanced settings. {._abstract}

Use this workflow when:

*   No existing template matches your requirements.
*   You need a specific combination of compute, storage, and network settings.
*   You want to boot from a custom disk image.

**Prerequisites**

*   You have access to the {{ product_title }} web console.
*   You have `edit` or `admin` permissions in the target project.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Virtualization** → **VirtualMachines**.
1.  Click **Create**.
1.  On the **Deployment details** page, configure the following settings:
    1.  Select **Custom configuration**.
    1.  In the **Name** field, enter a name for the VM. You can also click the refresh icon to generate a name automatically.
    1.  Optional: Enter a **Description** for the VM.
    1.  Review the **Location** to verify the target cluster and project. If the folder preview feature is enabled, you can also verify the folder. To change the location, click the edit icon.
    1.  Click **Next**.
1.  On the **Guest operating system** page, specify the operating system:
    1.  Select the guest operating system, such as **RHEL**, **Microsoft Windows**, or **Other Linux**.
    1.  Select the operating system version from the **Guest operating system type** list.
    1.  Click **Next**.
1.  On the **Boot source** page, specify the boot volume:
    1.  Select **Boot volume** to use an existing boot volume or add a new one, or select **No boot source** to assign an empty disk that you can configure later.
    1.  If you selected **Boot volume**, select an existing volume from the list, or click **Add volume** to configure a new boot volume.
    1.  Click **Next**.
1.  On the **Compute resources** page, define the instance type:
    1.  Select an instance type series, such as **General purpose** or **Compute Exclusive**.
    1.  Select the vCPU and memory size from the drop-down list.
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