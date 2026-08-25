---
title: Prometheus queries for virtual resources
---

# Prometheus queries for virtual resources {#virt-prometheus-queries}

Monitor the consumption of cluster infrastructure resources by using the metrics provided by {{ VirtProductName }}. These metrics are also used to query live migration status.

> [!NOTE]
> - To use the vCPU metric, apply the `schedstats=enable` kernel argument to the `MachineConfig` object. This kernel argument enables scheduler statistics used for debugging and performance tuning and adds a minor additional load to the scheduler.
> - For guest memory swapping queries to return data, enable memory swapping on the virtual guests.

## Additional resources {#additional-resources_virt-prometheus-queries}

- [KubeVirt components metrics](https://github.com/kubevirt/monitoring/blob/main/docs/metrics.md)
- [Adding kernel arguments to nodes](/openshift-docs-markdown/machine_configuration/machine-configs-configure#nodes-nodes-kernel-arguments_machine-configs-configure)
- [About OpenShift Container Platform monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/about-ocp-monitoring)
- [Querying Prometheus](https://prometheus.io/docs/prometheus/latest/querying/basics/)
- [Prometheus query examples](https://prometheus.io/docs/prometheus/latest/querying/examples/)
