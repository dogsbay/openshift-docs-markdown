{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a service with the web console {id="virt-creating-service-web_{{ context }}"}

You can create a node port or load balancer service for a virtual machine (VM) by using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You configured the cluster network to support either a load balancer or a node port.
*   To create a load balancer service, you enabled the creation of load balancer services.

**Procedure**

1.  Navigate to **VirtualMachines** and select a virtual machine to view the **VirtualMachine details** page.
1.  On the **Details** tab, select **SSH over LoadBalancer** from the **SSH service type** list.
1.  Optional: Click the copy icon to copy the `SSH` command to your clipboard.

**Verification**

*   Check the **Services** pane on the **Details** tab to view the new service.