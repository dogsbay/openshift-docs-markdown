---
title: Understanding the File Integrity Operator
---

# Understanding the File Integrity Operator {#understanding-file-integrity-operator}

The File Integrity Operator is an OpenShift Container Platform Operator that continually runs file integrity checks on the cluster nodes. It deploys a daemon set that initializes and runs privileged advanced intrusion detection environment (AIDE) containers on each node, providing a status object with a log of files that are modified during the initial run of the daemon set pods.

> [!IMPORTANT]
> Currently, only {{ op_system_first }} nodes are supported.
