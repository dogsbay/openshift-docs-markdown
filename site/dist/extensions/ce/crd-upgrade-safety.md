---
title: Custom resource definition (CRD) upgrade safety
---

# Custom resource definition (CRD) upgrade safety {#crd-upgrade-safety}

When you update a custom resource definition (CRD) provided by a cluster extension, {{ olmv1_first }} runs a CRD upgrade safety preflight check to ensure compatibility with earlier versions.

The CRD update must pass the validation checks before the change is allowed to progress on a cluster.

**Additional resources**

- [Updating a cluster extension](/extensions/ce/managing-ce#olmv1-updating-an-operator_managing-ce)
