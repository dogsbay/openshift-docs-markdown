{%- set _mod_docs_content_type = "PROCEDURE" %}
# Changing the instance type of a VM by using the web console {id="virt-change-vm-instance-type_{{ context }}"}

You can change the instance type associated with a running virtual machine (VM) by using the web console. The change takes effect immediately. {._abstract}

**Prerequisites**

*   You created the VM by using an instance type.

**Procedure**

1.  In the {{ product_title }} web console, click **Virtualization** → **VirtualMachines**.
1.  Select a VM to open the **VirtualMachine details** page.
1.  Click the **Configuration** tab.
1.  On the **Details** tab, click the instance type text to open the **Edit Instancetype** dialog. For example, click **1 CPU | 2 GiB Memory**.
1.  Edit the instance type by using the **Series** and **Size** lists.
    1.  Select an item from the **Series** list to show the relevant sizes for that series. For example, select **General Purpose**.
    1.  Select the new instance type for the VM from the **Size** list. For example, select **medium: 1 CPUs, 4Gi Memory**, which is available in the **General Purpose** series.
1.  Click **Save**.

**Verification**

1.  Click the **YAML** tab.
1.  Click **Reload**.
1.  Review the VM YAML to confirm that the instance type changed.