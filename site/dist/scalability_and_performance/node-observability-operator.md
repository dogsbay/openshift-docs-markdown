---
title: Using the Node Observability Operator
---

# Using the Node Observability Operator {#using-node-observability-operator}

The Node Observability Operator collects and stores CRI-O and Kubelet profiling or metrics from scripts of compute nodes.

With the Node Observability Operator, you can query the profiling data, enabling analysis of performance trends in CRI-O and Kubelet. It supports debugging performance-related issues and executing embedded scripts for network metrics by using the `run` field in the custom resource definition. To enable CRI-O and Kubelet profiling or scripting, you can configure the `type` field in the custom resource definition.

## Additional resources {#additional-resources_node-observability-operator}

- [Collecting worker metrics using the Node Observability Operator](https://access.redhat.com/solutions/5343671)
