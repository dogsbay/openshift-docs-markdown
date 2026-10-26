{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable dedicated resources for a virtual machine {id="virt-enabling-dedicated-resources_{{ context }}"}

Enable dedicated resources for a virtual machine in the {{ product_title }} web console so that its workload gets exclusive use of its CPUs. {._abstract}

You can configure dedicated resources for virtual machines that were created from a Red Hat template.

**Prerequisites**

*   The CPU Manager must be configured on the node. Verify that the node has the `cpumanager = true` label before scheduling virtual machine workloads.
*   The virtual machine must be powered off.

**Procedure**

1.  In the {{ product_title }} console, click **Virtualization** → **VirtualMachines** from the side menu.
1.  Select a virtual machine to open the **VirtualMachine details** page.
1.  On the **Configuration → Scheduling** tab, click the edit icon beside **Dedicated Resources**.
1.  Select **Schedule this workload with dedicated resources (guaranteed policy)**.
1.  Click **Save**.