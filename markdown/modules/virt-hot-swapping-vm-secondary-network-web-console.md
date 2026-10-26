{%- set _mod_docs_content_type = "PROCEDURE" %}
# Hot swap a VM secondary network by using the web console {id="virt-hot-swapping-vm-secondary-network-web-console_{{ context }}"}

You can hot swap the secondary network of a running virtual machine (VM) by using the {{ product_title }} web console. Hot swapping the secondary network preserves the workload and avoids the need for a VM reboot. {._abstract}

**Prerequisites**

*   The VM is running and is live migratable.
*   The target `NetworkAttachmentDefinition` object exists in the same namespace as the VM. If you created a `ClusterUserDefinedNetwork` object, verify that the cluster user-defined network controller has created the corresponding `NetworkAttachmentDefinition` object.

**Procedure**

1.  Navigate to **Virtualization** → **VirtualMachines** in the web console.
1.  Click a running VM to view the **VirtualMachine details** page.
1.  Click the **Configuration** tab and then click the **Network interfaces** tab.
1.  Click the Options menu {{ kebab }} beside the network interface that you want to modify and select **Edit**.
1.  Select the target network from the **Network** list.
1.  Click **Save**.

    The network interface row displays a **Pending** label. A warning banner indicates that the VM has pending network changes. The pending changes are applied during the next live migration or reboot.

**Verification**

1.  On the **VirtualMachine details** page, click the **Diagnostics** tab.
1.  Check the **Status conditions** table and verify that the `MigrationRequired` condition is listed with the reason `AutoMigrationDueToLiveUpdate`.

    After the live migration completes, the `MigrationRequired` condition disappears and the **Pending** label is removed from the network interface.