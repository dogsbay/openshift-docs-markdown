---
title: Creating custom machine config pools
---

# Creating custom machine config pools {#machine-config-creating-custom-mcp}

You can create custom machine config pools (MCP) to manage compute nodes for custom use cases that extend outside of the default node types. By using a custom machine config pool, you can deploy changes targeted only at nodes in the custom pool.

Custom machine config pools inherit their configurations from the `worker` machine config pool. Changes made to the `worker` machine config pool apply to nodes in the custom pool. However, changes made to the custom machine config pool apply only to the nodes in the custom pool. For more information on custom machine config pools, see "Node configuration management with machine config pools".

> [!NOTE]
> Custom machine config pools for the control plane nodes are not supported.

For example, you could use a custom machine config pool to create an *infrastructure* node. Components that you move to an infrastructure node do not need to be accounted for during sizing. For more information on infrastructure nodes, see "Creating infrastructure machine sets".

After you create the custom machine config pool, you can boot new nodes directly to the pool by creating a new machine set. Or, you can add existing nodes to the custom pool by using labels.

## Additional resources {#additional-resources_machine-config-creating-custom-mcp}

- [Node configuration management with machine config pools](/machine_configuration/index#architecture-machine-config-pools_machine-config-overview)
- [Manually updating the boot image](/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)
- [Creating infrastructure machine sets](/machine_management/creating-infrastructure-machinesets#creating-infrastructure-machinesets)
