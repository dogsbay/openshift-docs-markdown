---
title: Troubleshooting clusters that use the Cluster API
---

# Troubleshooting clusters that use the Cluster API {#cluster-api-troubleshooting}

To help avoid or recover from issues in a cluster that supports migrating resources to use a different authoritative API, you can learn how to recognize these issues. Generally, troubleshooting steps for problems with the Cluster API are similar to those steps for problems with the Machine API.

The {{ cluster_capi_operator }} and its operands are provisioned in the `openshift-cluster-api` namespace, whereas the Machine API uses the `openshift-machine-api` namespace. When using `oc` commands that reference a namespace, be sure to reference the correct one.
