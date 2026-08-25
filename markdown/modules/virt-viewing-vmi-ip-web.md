{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the IP address of a virtual machine by using the web console {id="virt-viewing-vmi-ip-web_{{ context }}"}

You can view the IP address of a virtual machine (VM) by using the {{ product_title }} web console. {._abstract}


:::note

You must install the QEMU guest agent on a VM to view the IP address of a secondary network interface. A pod network interface does not require the QEMU guest agent.

:::


**Procedure**

1.  In the {{ product_title }} console, click **Virtualization** -> **VirtualMachines** from the side menu.
1.  Select a VM to open the **VirtualMachine details** page.
1.  Click the **Details** tab to view the IP address.