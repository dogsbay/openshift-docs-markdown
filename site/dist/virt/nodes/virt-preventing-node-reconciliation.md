---
title: Preventing node reconciliation
---

# Preventing node reconciliation {#virt-using-skip-node}

Use `skip-node` annotation to prevent the `node-labeller` from reconciling a node.

## Using skip-node annotation {#virt-using-skip-node_virt-preventing-node-reconciliation}

If you want the `node-labeller` to skip a node, annotate that node by using the OpenShift CLI (`oc`).

**Prerequisites**

- You have installed the OpenShift CLI (`oc`).

**Procedure**

- Annotate the node that you want to skip by running the following command:

  ```terminal
  $ oc annotate node <node_name> node-labeller.kubevirt.io/skip-node=true
  ```

  Replace `<node_name>` with the name of the relevant node to skip.

  Reconciliation resumes on the next cycle after the node annotation is removed or set to false.

## Additional resources {#additional-resources_virt-preventing-node-reconciliation}

- [Managing node labeling for obsolete CPU models](/openshift-docs-markdown/virt/nodes/virt-managing-node-labeling-obsolete-cpu-models#virt-managing-node-labeling-obsolete-cpu-models)
