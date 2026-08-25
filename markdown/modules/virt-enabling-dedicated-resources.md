{% if context == "virt-dedicated-resources-vm" %}
{%- set virt_vm = true -%}
{%- set object = "virtual machine" -%}
{%- set object_gui = "VirtualMachine" -%}
{%- set tab = "Configuration -> Scheduling" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling dedicated resources for a {{ object }} {id="virt-enabling-dedicated-resources_{{ context }}"}

You can enable dedicated resources for a {{ object }} in the **Details** tab. Virtual machines that were created from a Red Hat template can be configured with dedicated resources. {._abstract}

**Prerequisites**

*   The CPU Manager must be configured on the node. Verify that the node has the `cpumanager = true` label before scheduling virtual machine workloads.
*   The virtual machine must be powered off.

**Procedure**

1.  In the {{ product_title }} console, click **Virtualization** -> **{{ object_gui }}s** from the side menu.
1.  Select a {{ object }} to open the **{{ object_gui }} details** page.
1.  On the **{{ tab }}** tab, click the edit icon beside **Dedicated Resources**.
1.  Select **Schedule this workload with dedicated resources (guaranteed policy)**.
1.  Click **Save**.

{% if context == "virt-dedicated-resources-vm" %}
{% endif %}