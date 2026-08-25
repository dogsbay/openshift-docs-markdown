{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating virtual machine quotas using the web console {id="virt-creating-vm-quotas-web_{{ context }}"}

You can create Application Aware Quota (AAQ) quotas that limit virtual machine resource consumption by using the guided form in the {{ product_title }} web console. The form is the recommended approach for simple virtualization quota use cases. {._abstract}

**Prerequisites**

*   You have cluster administrator privileges.
*   The Application Aware Quota operator is enabled in your cluster. See [Enabling the Application Aware Quota operator](#virt-enabling-aaq-operator_{{ context }}).
*   The project where you want to create the quota exists.

**Procedure**

1.  In the {{ product_title }} web console, click **Virtualization** → **Quotas**.
1.  Click **Create quota**.
1.  In the dropdown menu, select **With form**.

    The create quota form is displayed.
1.  Enter a name for your quota in the **Name** field.

    The name must be unique within the project.
1.  Select the project where you want to apply this quota.

    By default, the current project is selected. You can click the dropdown to select a different project if needed.

    :::note

    If a Kubernetes `ResourceQuota` already exists in the selected project, an alert is displayed with a link to view the existing ResourceQuota. You can still create the AAQ quota, but both quotas will apply to the project.
    
    :::

1.  Configure CPU, memory, and VMI limits for the quota:

    The fields displayed vary based on the selected quota calculation method. For example:
    *   For the  `Virtual resources` or `Dedicated virtual resources` quota calculation method, the quotas exclude pod overhead:
        *   Use the **vCPU allocation** field to set the maximum number of virtual CPUs permitted for all VMs in the project, excluding infrastructure overhead.
        *   Use the **Virtual memory allocation** field to set the maximum memory capacity, in GiB, excluding infrastructure overhead. 
        *   Use the **VMI limits** field to set the maximum number of virtual machine instances.
    *   For the `Virtual Machine Instance (VMI) pod usage` quota calculation method, the quotas include pod overhead:
        *   Use the **CPU allocation** field to set the maximum number of CPU cores for pods that run VM workloads
        *   Use the **Memory allocation** field to set the maximum memory capacity, in GiB, for pods that run VM workloads.
        *   Use the **VMI limits** field to set the maximum number of virtual machine instances.

            :::note

            Live migration overhead is excluded from the `Virtual Machine Instance (VMI) pod usage`  quota calculation method.
            
            :::

1.  Review the configuration and click **Create**.

    The quota is created and you are redirected to the quota details page. The new quota is now active and enforcing resource limits on virtual machines in the selected project.

**Verification**

1.  In the {{ product_title }} web console, click **Virtualization** → **Quotas**.
1.  In the quotas list, locate your newly created quota.
1.  Verify that the quota name is displayed in the list with the correct project and resource limits configured.
1.  Click the quota name to open its details page and confirm all settings are correct.