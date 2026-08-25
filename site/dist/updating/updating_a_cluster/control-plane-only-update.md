---
title: Performing a Control Plane Only update
---

# Performing a Control Plane Only update {#control-plane-only-update}

To reduce the rebooting of non-control plane hosts during cluster updates, you can perform a Control Plane Only update for your cluster.

Due to fundamental Kubernetes design, all OpenShift Container Platform updates between minor versions must be serialized. You must update from OpenShift Container Platform <4.y> to <4.y+1>, and then to <4.y+2>. You cannot update from OpenShift Container Platform <4.y> to <4.y+2> directly. However, administrators who want to update between two even-numbered minor versions can do so incurring only a single reboot of non-control plane hosts.

> [!IMPORTANT]
> This update was previously known as an **EUS-to-EUS** update and is now referred to as a **Control Plane Only** update. These updates are only viable between **even-numbered minor versions** of OpenShift Container Platform.

There are several caveats to consider when attempting a Control Plane Only update.

- Control Plane Only updates are only offered after updates between all versions involved have been made available in `stable` channels.
- If you encounter issues during or after updating to the odd-numbered minor version but before updating to the next even-numbered version, then remediation of those issues may require that non-control plane hosts complete the update to the odd-numbered version before moving forward.
- You can do a partial update by updating the worker or custom pool nodes to accommodate the time it takes for maintenance.
- Until the machine config pools are unpaused and the update is complete, some features and bugs fixes in <4.y+1> and <4.y+2> of OpenShift Container Platform are not available.
- All the clusters might update using EUS channels for a conventional update without pools paused, but only clusters with non control-plane `MachineConfigPools` objects can do Control Plane Only updates with pools paused.

<a name="additional-resources_updating-control-plane-only-update-console"></a>**Additional resources**

- [Updating installed Operators](/operators/admin/olm-upgrading-operators#olm-upgrading-operators)
- [Updating a cluster by using the web console](/updating/updating_a_cluster/updating-cluster-web-console#update-upgrading-web_updating-cluster-web-console)

<a name="additional-resources_updating-control-plane-only-update-cli"></a>**Additional resources**

- [Updating installed Operators](/operators/admin/olm-upgrading-operators#olm-upgrading-operators)

<a name="additional-resources_updating-control-plane-only-layered-products"></a>**Additional resources**

- [Updating installed Operators](/operators/admin/olm-upgrading-operators#olm-upgrading-operators)
- [Performing a Control Plane Only update using the web console](/updating/updating_a_cluster/control-plane-only-update#updating-control-plane-only-update-console_control-plane-only-update)
- [Performing a Control Plane Only update using the CLI](/updating/updating_a_cluster/control-plane-only-update#updating-control-plane-only-update-cli_control-plane-only-update)
- [Preventing workload updates during a Control Plane Only update](/virt/updating/upgrading-virt#virt-preventing-workload-updates-during-control-plane-only-update_upgrading-virt)
