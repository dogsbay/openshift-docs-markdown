---
title: Monitoring pending workloads
---

# Monitoring pending workloads {#monitoring-pending-workloads-install-kueue}

{{ kueue_name }} provides the `VisibilityOnDemand` feature to monitor pending workloads. A workload is an application that runs to completion. It can be composed by one or multiple pods that, loosely or tightly coupled, as a whole, complete a task. A workload is the unit of admission in {{ kueue_name }}.

The `VisibilityOnDemand` feature provides the ability for batch administrators to monitor the pipeline of pending jobs in the cluster queue and the local queue and batch users just for local queue, and help users to estimate when their jobs will start.

You can regulate inbound requests and high request volumes, and provide user permissions for viewing the pending workloads.

**Additional resources**

- [API Priority and Fairness](https://kubernetes.io/docs/concepts/cluster-administration/flow-control/)

**Additional resources**

- [Configuring role-based permissions](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/ai_workloads/red-hat-build-of-kueue#rbac-permissions)
