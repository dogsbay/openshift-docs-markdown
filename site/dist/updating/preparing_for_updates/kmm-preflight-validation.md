---
title: Preflight validation for Kernel Module Management (KMM) Modules
---

# Preflight validation for Kernel Module Management (KMM) Modules {#kmm-preflight-validation}

Before you upgrade a cluster that uses Kernel Module Management (KMM) modules, verify that the kernel modules can be installed on the nodes after the upgrade. This preflight validation helps you avoid unexpected module failures caused by kernel changes.

Preflight attempts to validate every `Module` loaded in the cluster, in parallel. Preflight does not wait for validation of one `Module` to complete before starting validation of another `Module`.
