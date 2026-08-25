---
title: Enabling the Security Profiles Operator
---

# Enabling the Security Profiles Operator {#spo-enabling}

Before you can use the Security Profiles Operator, you must ensure the Operator is deployed in the cluster.

> [!IMPORTANT]
> All cluster nodes must have the same release version in order for this Operator to function properly. As an example, for nodes running {{ op_system }}, all nodes must have the same {{ op_system }} version.

> [!IMPORTANT]
> The Security Profiles Operator supports only Red Hat Enterprise Linux CoreOS (RHCOS) worker nodes. Red Hat Enterprise Linux (RHEL) nodes are not supported.

> [!IMPORTANT]
> The Security Profiles Operator supports `x86_64` and `ppc64le` architecture.
