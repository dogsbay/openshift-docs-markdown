---
title: Placing pods on specific nodes using node selectors
---

# Placing pods on specific nodes using node selectors {#nodes-pods-node-selectors}

For a pod to be eligible to run on a specific node, you can include a *node selector* in the pod spec that has the indicated key-value pairs as the label on that node.

A *node selector* specifies a map of key-value pairs. The rules are defined using custom labels on nodes and selectors specified in pods.

If you are using node affinity and node selectors in the same pod configuration, see the important considerations below.
