---
title: Manually scaling a compute machine set
---

# Manually scaling a compute machine set {#manually-scaling-machineset}

You can manually add or remove an instance of a machine in a compute machine set. Manually scaling a compute machine set gives you control over the resource utilization of that machine set.

> [!NOTE]
> If you need to modify aspects of a compute machine set outside of scaling, see "Modifying a compute machine set".

## Prerequisites {#_prerequisites}

- If you enabled the cluster-wide proxy and scale up compute machines not included in `networking.machineNetwork[].cidr` from the installation configuration, you must add the compute machines to the Proxy object’s `noProxy` field to prevent connection issues. See "Add the compute machines to the Proxy object’s `noProxy` field" for more information.

## Additional resources {#additional-resources_manually-scaling-machineset}

- [Modifying a compute machine set](/machine_management/modifying-machineset#modifying-machineset)
- [Add the compute machines to the Proxy object’s `noProxy` field](/networking/configuring_network_settings/enable-cluster-wide-proxy#nw-proxy-configure-object_config-cluster-wide-proxy)
- [Lifecycle hooks for the machine deletion phase](/machine_management/deleting-machine#machine-lifecycle-hook-deletion_deleting-machine)
