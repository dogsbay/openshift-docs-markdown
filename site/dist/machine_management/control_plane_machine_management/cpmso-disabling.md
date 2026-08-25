---
title: Disabling the control plane machine set
---

# Disabling the control plane machine set {#cpmso-disabling}

Disable the control plane machine set if you need to manually manage control plane machines or troubleshoot Operator behavior.

The `.spec.state` field in an activated `ControlPlaneMachineSet` custom resource (CR) cannot be changed from `Active` to `Inactive`. To disable the control plane machine set, you must delete the CR so that it is removed from the cluster.

When you delete the CR, the Control Plane Machine Set Operator performs cleanup operations and disables the control plane machine set. The Operator then removes the CR from the cluster and creates an inactive control plane machine set with default settings.

**Additional resources**

- [Activating the control plane machine set custom resource](/openshift-docs-markdown/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-activating_cpmso-getting-started)
