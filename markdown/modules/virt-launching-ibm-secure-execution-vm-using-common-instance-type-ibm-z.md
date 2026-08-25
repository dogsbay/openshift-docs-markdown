{%- set _mod_docs_content_type = "PROCEDURE" %}
# Launching an {{ ibm_title }} Secure Execution VM by using a common instance type  {id="virt-launching-ibm-secure-execution-vm-using-common-instance-type-ibm-z_{{ context }}"}

You can launch an {{ ibm_name }} Secure Execution VM on {{ ibm_z_name }} and {{ ibm_linuxone_name }} by using a common instance type. {._abstract}

**Prerequisites**

*   You have followed the procedure described in "Creating a VM from an instance type by using the web console" and performed the required steps.
*   You are using an {{ ibm_name }} Secure Execution enabled VM image.

**Procedure**

1.  Navigate to **Virtualization** -> **Catalog** in the web console.
1.  Click the **Customize VirtualMachine** button.
1.  Click the **YAML** tab, and include the `launchSecurity: {}` parameter in the YAML.
    ```yaml
    spec:
      template:
        spec:
           domain:
             launchSecurity: {}
    ```
1.  Click **Save**.
1.  Click **Create VirtualMachine**.