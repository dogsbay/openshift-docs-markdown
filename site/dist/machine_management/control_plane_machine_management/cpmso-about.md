---
title: About control plane machine sets
---

# About control plane machine sets {#cpmso-about}

With control plane machine sets, you can automate management of the control plane machine resources within your OpenShift Container Platform cluster, simplifying upgrades and recovery from degraded control plane machines.

> [!IMPORTANT]
> Control plane machine sets cannot manage compute machines, and compute machine sets cannot manage control plane machines.

Control plane machine sets provide for control plane machines similar management capabilities as compute machine sets provide for compute machines. However, these two types of machine sets are separate custom resources defined within the Machine API and have several fundamental differences in their architecture and functionality.

## Additional resources {#additional-resources_cpmso-about}

- [Control Plane Machine Set Operator reference](/openshift-docs-markdown/operators/operator-reference#control-plane-machine-set-operator_operator-reference)
- [`ControlPlaneMachineSet` custom resource](/openshift-docs-markdown/rest_api/machine_apis/controlplanemachineset-machine-openshift-io-v1#controlplanemachineset-machine-openshift-io-v1)
