{%- set _mod_docs_content_type = "PROCEDURE" %}
# Clone an existing VM by using the web console {id="virt-cloning-vm-wizard-web_{{ context }}"}

You can use the **Clone existing VirtualMachine** workflow in the web console to create a new virtual machine (VM) by cloning an existing VM and its configuration. {._abstract}

Use this workflow when:

*   You want to duplicate an existing VM with the same configuration.
*   You need multiple VMs with a consistent setup.

**Prerequisites**

*   You have access to the {{ product_title }} web console.
*   You have `edit` or `admin` permissions in the target project.
*   The source VM that you want to clone exists in a project that you can access.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Virtualization** → **VirtualMachines**.
1.  Click **Create**.
1.  On the **Deployment details** page, configure the following settings:
    1.  Select **Clone existing VirtualMachine**.
    1.  Review the **Project** and **Group** under **Location**. To change the target project or group, click the edit icon.
    1.  Click **Next**.
1.  On the **Source** page, select the VM to clone:
    1.  Browse the list of available VMs, or use the search and filter options to locate a specific VM.

        You can filter by **Status**, **Operating system**, **Storage class**, **Hardware devices**, **Scheduling**, **Node**, **Guest agent**, and **Architecture type**.
    1.  Select the VM that you want to clone.
    1.  Click **Next**.
1.  On the **Review and create** page, review the VM configuration:
    1.  Optional: In the **Name** field, enter a name for the VM. You can also click the refresh icon to generate a name automatically.
    1.  Optional: Enter a **Description** for the VM.
    1.  Review the **Location** to verify the target cluster and project. If the folder preview feature is enabled, you can also verify the folder. To change the location, click the edit icon.
    1.  Optional: The **Start this VirtualMachine after creation** checkbox is selected by default. Clear the checkbox if you do not want the cloned VM to start immediately.
    1.  Click **Clone VirtualMachine**.

**Verification**

*   Navigate to **Virtualization** → **VirtualMachines** and verify that the VM is displayed in the list.