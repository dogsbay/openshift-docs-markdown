{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling dedicated resources for a virtual machine template {id="virt-dedicated-resources-vm-template_{{ context }}"}

You can enable dedicated resources for a virtual machine (VM) template in the {{ product_title }} web console.
VMs that are created from this template will be scheduled with dedicated resources. {._abstract}

**Procedure**

1.  In the {{ product_title }} web console, click **Virtualization** -> **Templates** in the side menu.
1.  Select the template that you want to edit to open the **Template details** page.
1.  On the **Scheduling** tab, click the edit icon beside **Dedicated Resources**.
1.  Select **Schedule this workload with dedicated resources (guaranteed policy)**.
1.  Click **Save**.