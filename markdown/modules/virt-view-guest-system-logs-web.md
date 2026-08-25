{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing guest system logs with the web console {id="virt-view-guest-system-logs-web_{{ context }}"}

To diagnose and troubleshoot issues with a virtual machine (VM) guest operating system, you can view the guest system logs by using the web console. {._abstract}

{% include "./snippets/virt-guest-system-logs-about.md" %}

**Prerequisites**

*   Guest system log access is enabled.

**Procedure**

1.  Click **Virtualization** → **VirtualMachines** from the side menu.
1.  Select a virtual machine to open the **VirtualMachine details** page.
1.  Click the **Diagnostics** tab.
1.  Click **Guest system logs** to load the serial console.