---
title: Managing nodes
---

# Managing nodes {#nodes-nodes-managing}

OpenShift Container Platform uses a KubeletConfig custom resource (CR) to manage the configuration of nodes. By creating an instance of a `KubeletConfig` object, a managed machine config is created to override setting on the node.

> [!NOTE]
> Logging in to remote machines for the purpose of changing their configuration is not supported.

## Additional resources {#additional-resources_nodes-nodes-managing}

- [Managing control plane machines with control plane machine sets](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-managing-machines)
- [PSI - Pressure Stall Information (Linux Kernel documentation)](https://docs.kernel.org/accounting/psi.html)
