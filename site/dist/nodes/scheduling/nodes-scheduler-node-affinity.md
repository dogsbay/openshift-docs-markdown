---
title: Controlling pod placement on nodes using node affinity rules
---

# Controlling pod placement on nodes using node affinity rules {#nodes-scheduler-node-affinity}

You can use a node affinity to control which nodes your pod can be scheduled on based on node labels. Node affinity helps you ensure your applications run on nodes with specific capabilities or configurations.

In OpenShift Container Platform node affinity is a set of rules used by the scheduler to determine where a pod can be placed. The rules are defined using custom labels on the nodes and label selectors specified in pods.

## Additional resources {#nodes-scheduler-node-affinity-addtl-resources_nodes-scheduler-node-affinity}

- [Understanding how to update labels on nodes](/openshift-docs-markdown/nodes/nodes/nodes-nodes-working#nodes-nodes-working-updating_nodes-nodes-working)
