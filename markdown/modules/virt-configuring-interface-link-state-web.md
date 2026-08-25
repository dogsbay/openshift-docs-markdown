{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting the VM interface link state by using the web console {id="virt-configuring-interface-link-state-web_{{ context }}"}

You can set the link state of a primary or secondary virtual machine (VM) network interface by using the web console. {._abstract}

**Prerequisites**

*   You are logged into the {{ product_title }} web console.

**Procedure**

1.  Navigate to **Virtualization** -> **VirtualMachines**.
1.  Select a VM to view the **VirtualMachine details** page.
1.  On the **Configuration** tab, click **Network**. A list of network interfaces is displayed.
1.  Click the Options menu {{ kebab }} of the interface that you want to edit.
1.  Choose the appropriate option to set the interface link state:
    *   If the current interface link state is `up`, select **Set link down**.
    *   If the current interface link state is `down`, select **Set link up**.