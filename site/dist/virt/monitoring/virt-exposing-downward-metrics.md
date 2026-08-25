---
title: Exposing downward metrics for virtual machines
---

# Exposing downward metrics for virtual machines {#virt-exposing-downward-metrics}

As an administrator, you can expose a set of host and virtual machine (VM) metrics to a guest VM by enabling the `downwardMetrics` feature gate and configuring a downward metrics device. You can view these metrics by using the command line or the `vm-dump-metrics` tool.

> [!NOTE]
> On Red Hat Enterprise Linux (RHEL) 9, use the command line to view downward metrics.
>
> The `vm-dump-metrics` tool is not supported on the Red Hat Enterprise Linux (RHEL) 9 platform.

## Additional resources {#additional-resources_virt-exposing-downward-metrics-for-vms}

- [Viewing downward metrics by using the command line](/virt/monitoring/virt-exposing-downward-metrics#virt-viewing-downward-metrics-cli_virt-exposing-downward-metrics)
