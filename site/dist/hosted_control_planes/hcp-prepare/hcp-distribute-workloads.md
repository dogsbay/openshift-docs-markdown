---
title: Distributing hosted cluster workloads
---

# Distributing hosted cluster workloads {#hcp-distribute-workloads}

In {{ hcp }} for OpenShift Container Platform, cluster management is separate from cluster workload. As you prepare your deployment, ensure you know how you want to distribute your hosted cluster workloads.

> [!IMPORTANT]
> Do not use the management cluster for your workload. Workloads must not run on nodes where control planes run.

**Additional resources**

- [Labeling management cluster nodes](/openshift-docs-markdown/hosted_control_planes/hcp-prepare/hcp-distribute-workloads#hcp-labels-taints_hcp-distribute-workloads)
- [Network isolation for hosted clusters](/openshift-docs-markdown/hosted_control_planes/hcp-networking#hcp-isolation-overview_hcp-networking)
