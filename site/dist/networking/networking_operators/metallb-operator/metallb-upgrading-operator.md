---
title: Upgrading the MetalLB Operator
---

# Upgrading the MetalLB Operator {#metallb-upgrading-operator}

The `Subscription` custom resource (CR) for the MetalLB Operator is used to manage whether the Operator is upgraded automatically or manually.

By default, the `Subscription` CR assigns the namespace to `metallb-system` and automatically sets the `installPlanApproval` parameter to `Automatic`. This means that when Red Hat-provided Operator catalogs include a newer version of the MetalLB Operator, the MetalLB Operator is automatically upgraded.

If you need to manually control upgrading the MetalLB Operator, set the `installPlanApproval` parameter to `Manual`.

## Additional resources {#additional-resources}

- [Introduction to OpenShift updates](/updating/understanding_updates/intro-to-updates#intro-to-updates_intro-to-updates)
- [Installing the MetalLB Operator](/networking/networking_operators/metallb-operator/metallb-operator-install#metallb-operator-install)
