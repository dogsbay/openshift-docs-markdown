{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable the Application Aware Quota Operator {id="virt-enabling-aaq-operator_{{ context }}"}

Enable the Application Aware Quota (AAQ) Operator and choose a quota calculation method in the web console. Using the web console avoids editing the `HyperConverged` custom resource (CR) by hand. {._abstract}

**Prerequisites**

*   You have cluster administrator privileges.
*   The OpenShift Virtualization operator is installed and running.

**Procedure**

1.  In the {{ product_title }} web console, click **Virtualization** → **Settings**.
1.  Under **Resource Management**, toggle the **Application Aware Quotas (AAQ)** to On.

    The operator deployment begins automatically. The status changes from **Disabled** to **Enabled** after the operator pods are running.
1.  Optional: Click the **Edit** icon next to the **Quota calculation method** field to change the calculation method.

    A modal dialog is displayed with the following options:
    *   **Virtual resources**: Measures only the virtual CPU and memory allocated to virtual machines (VMs), excluding the CPU and memory that the pod runtime consumes. This is the default option for virtualization workloads.
    *   **Virtual Machine Instance (VMI) pod usage**: Measures the total virtual CPU and memory consumption of the VM pod, including both the virtual machine and the pod runtime.
    *   **Dedicated virtual resources**: Measures the virtual CPU and memory resources assigned to virtual machines and their associated pods, tracking quota usage separately for each type.
1.  Select your preferred quota calculation method and click **Save**.

**Verification**

1.  Verify that a new **Quotas** option is displayed in the left navigation menu under **Virtualization**. This indicates that AAQ is ready for quota creation and management.