{%- set _mod_docs_content_type = "CONCEPT" %}
# Performing bulk actions on virtual machines {id="virt-performing-actions-on-multiple-virtual-machines_{{ context }}"}

You can perform bulk actions on multiple virtual machines (VMs) simultaneously by using the **VirtualMachines** list view in the web console. This allows you to efficiently manage a group of VMs with minimal manual effort. {._abstract}

Available bulk actions:

*   **Label VMs** - Add, edit, or remove labels that are applied across selected VMs.
*   **Delete VMs** - Select multiple VMs to delete. The confirmation dialog displays the number of VMs selected for deletion.
*   **Move VMs to folder** - Move selected VMs to a folder. All VMs must belong to the same namespace.
*   **LiveMigration** - Perform live migration of multiple selected VMs. The confirmation dialog displays the number of VMs selected for migration. The target node is chosen automatically; there is no option of specifying it.
*   **Take snapshot** - Take snapshots of multiple VMs. The **Take snapshots** dialog allows you to enter a suffix for the names of the resulting snapshots.