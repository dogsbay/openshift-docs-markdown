---
title: Configuring fair sharing
---

# Configuring fair sharing {#configuring-fairsharing}

You can configure fair sharing as a preemption strategy to distribute borrowable resources equally or by weight between tenants of a cohort.

Borrowable resources are the unused nominal quota of all the cluster queues in a cohort.

You can configure fair sharing by setting the `preemptionPolicy` value in the `Kueue` custom resource (CR) to `FairSharing`.

## Additional resources {#additional-resources_configuring-fairsharing}

- [Creating a `Kueue` custom resource](/openshift-docs-markdown/ai_workloads/kueue/install-kueue#create-kueue-cr_install-kueue)
