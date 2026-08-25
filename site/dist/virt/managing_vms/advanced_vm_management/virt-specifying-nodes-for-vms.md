---
title: Specifying nodes for virtual machines
---

# Specifying nodes for virtual machines {#virt-specifying-nodes-for-vms}

You can place virtual machines (VMs) on specific nodes by using node placement rules.

## Node placement examples {#node-placement-examples_virt-specifying-nodes-for-vms}

The following example YAML file snippets use `nodePlacement`, `affinity`, and `tolerations` fields to customize node placement for virtual machines.

{% include "./modules/virt-example-vm-node-placement-node-selector.md" %} {% include "./modules/virt-example-vm-node-placement-pod-affinity.md" %}

## Additional resources {#additional-resources_virt-specifying-nodes-for-vms}

- [Specifying nodes for virtualization components](/virt/post_installation_configuration/virt-node-placement-virt-components#virt-node-placement-virt-components)
- [Placing pods on specific nodes using node selectors](/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors)
- [Controlling pod placement on nodes using node affinity rules](/nodes/scheduling/nodes-scheduler-node-affinity#nodes-scheduler-node-affinity)
- [Controlling pod placement using node taints](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations)
